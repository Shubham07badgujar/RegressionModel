import pickle 
import numpy as np
from flask import Flask, render_template, request

application = Flask(__name__)
app = application

# ✅ Load the correct model and scaler
with open('models/scaler.pkl', 'rb') as f:
    standard_scaler = pickle.load(f)

with open('models/ridge.pkl', 'rb') as f:
    ridge_model = pickle.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predictdata', methods=['GET', 'POST'])
def predict_datapoint():
    if request.method == "POST":
        try:
            # 🧠 Collect inputs from the form
            Temperature = float(request.form.get('Temperature'))
            RH = float(request.form.get('RH'))
            Ws = float(request.form.get('Ws'))
            rain = float(request.form.get('rain'))
            FFMC = float(request.form.get('FFMC'))
            DMC = float(request.form.get('DMC'))
            ISI = float(request.form.get('ISI'))
            Classes = float(request.form.get('Classes'))
            Region = float(request.form.get('Region'))

            # 🔄 Scale the input
            input_data = [[Temperature, RH, Ws, rain, FFMC, DMC, ISI, Classes, Region]]
            new_data_scaled = standard_scaler.transform(input_data)

            # 📈 Make prediction
            result = ridge_model.predict(new_data_scaled)

            return render_template('home.html', results=result[0])

        except Exception as e:
            print("Error during prediction:", e)
            return render_template('home.html', results="Error during prediction.")

    return render_template('home.html', results=None)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
