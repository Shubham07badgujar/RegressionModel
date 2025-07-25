import pickle 
import numpy as np
from flask import Flask, render_template, request, url_for
import traceback

application = Flask(__name__)
app = application

# ✅ Load the correct model and scaler
try:
    with open('models/scaler.pkl', 'rb') as f:
        standard_scaler = pickle.load(f)

    with open('models/ridge.pkl', 'rb') as f:
        ridge_model = pickle.load(f)
    print("✅ Models loaded successfully!")
except Exception as e:
    print(f"❌ Error loading models: {e}")
    standard_scaler = None
    ridge_model = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predictdata', methods=['GET', 'POST'])
def predict_datapoint():
    if request.method == "POST":
        try:
            # Check if models are loaded
            if standard_scaler is None or ridge_model is None:
                return render_template('error.html', error_details="Models not loaded properly")
            
            # 🧠 Collect inputs from the form with validation
            try:
                Temperature = float(request.form.get('Temperature'))
                RH = float(request.form.get('RH'))
                Ws = float(request.form.get('Ws'))
                rain = float(request.form.get('rain'))
                FFMC = float(request.form.get('FFMC'))
                DMC = float(request.form.get('DMC'))
                ISI = float(request.form.get('ISI'))
                Classes = float(request.form.get('Classes'))
                Region = float(request.form.get('Region'))
            except (ValueError, TypeError) as e:
                return render_template('error.html', error_details=f"Invalid input data: {str(e)}")

            # Basic input validation
            if not (-50 <= Temperature <= 60):
                return render_template('error.html', error_details="Temperature must be between -50°C and 60°C")
            if not (0 <= RH <= 100):
                return render_template('error.html', error_details="Relative Humidity must be between 0% and 100%")
            if not (0 <= Ws <= 200):
                return render_template('error.html', error_details="Wind Speed must be between 0 and 200 km/h")
            if not (0 <= rain <= 1000):
                return render_template('error.html', error_details="Rain must be between 0 and 1000 mm")
            if not (0 <= FFMC <= 101):
                return render_template('error.html', error_details="FFMC must be between 0 and 101")
            if not (0 <= DMC <= 1000):
                return render_template('error.html', error_details="DMC must be between 0 and 1000")
            if not (0 <= ISI <= 100):
                return render_template('error.html', error_details="ISI must be between 0 and 100")
            if Classes not in [0, 1]:
                return render_template('error.html', error_details="Classes must be 0 or 1")
            if not (0 <= Region <= 10):
                return render_template('error.html', error_details="Region must be between 0 and 10")

            # 🔄 Scale the input
            input_data = [[Temperature, RH, Ws, rain, FFMC, DMC, ISI, Classes, Region]]
            new_data_scaled = standard_scaler.transform(input_data)

            # 📈 Make prediction
            result = ridge_model.predict(new_data_scaled)

            # Ensure result is a valid number
            if np.isnan(result[0]) or np.isinf(result[0]):
                return render_template('error.html', error_details="Prediction resulted in invalid value")

            return render_template('home.html', results=result[0])

        except Exception as e:
            print("Error during prediction:", e)
            print("Traceback:", traceback.format_exc())
            return render_template('error.html', error_details=f"Prediction error: {str(e)}")

    return render_template('home.html', results=None)

# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    return render_template('error.html', error_details="Page not found"), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('error.html', error_details="Internal server error"), 500

# Add route for serving custom CSS and JS
@app.route('/static/<path:filename>')
def serve_static(filename):
    return app.send_static_file(filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
