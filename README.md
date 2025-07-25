# 🔥 Fire Weather Index Predictor

An advanced ML-powered web application for predicting Fire Weather Index (FWI) using Ridge Regression with a modern, interactive user interface.

## ✨ Features

### 🎨 Modern UI/UX
- **Gradient Animations**: Dynamic background with smooth color transitions
- **Glass Morphism**: Beautiful frosted glass effects with backdrop blur
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Interactive Animations**: Hover effects, button ripples, and smooth transitions
- **Particle Effects**: Floating particles and matrix rain background effects

### 🚀 Enhanced Functionality
- **Real-time Input Validation**: Live feedback with visual indicators
- **Advanced Error Handling**: Custom error pages with helpful messages
- **Keyboard Shortcuts**: Ctrl+Enter to submit, Escape to clear
- **Loading Animations**: Beautiful progress indicators during prediction
- **Tooltips & Help**: Contextual help for all input parameters

### 🧠 Machine Learning
- **Ridge Regression Model**: Advanced ML algorithm for accurate predictions
- **Data Preprocessing**: Automatic scaling and normalization
- **Input Validation**: Range checking for all weather parameters
- **Error Recovery**: Graceful handling of invalid inputs

## 🛠️ Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **ML Libraries**: scikit-learn, numpy, pickle
- **Styling**: Custom CSS with animations, Font Awesome icons
- **Fonts**: Google Fonts (Poppins)

## 📁 Project Structure

```
RegressionModel/
├── application.py              # Main Flask application
├── models/
│   ├── ridge.pkl              # Trained Ridge regression model
│   └── scaler.pkl             # Feature scaler
├── templates/
│   ├── index.html             # Landing page with modern design
│   ├── home.html              # Prediction interface
│   └── error.html             # Custom error page
├── static/
│   ├── css/
│   │   └── custom.css         # Additional styling and animations
│   └── js/
│       └── app.js             # Interactive JavaScript features
└── notebook/
    ├── Algerian_forest_fires_dataset_UPDATE.csv
    ├── DatasetCleaningand EDA.ipynb
    └── Lasso,Ridge,ElasticNet_regressions.ipynb
```

## 🚀 Getting Started

### Prerequisites
- Python 3.7+
- Flask
- scikit-learn
- numpy

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd RegressionModel
```

2. Install dependencies:
```bash
pip install flask scikit-learn numpy
```

3. Run the application:
```bash
python application.py
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

## 🎯 How to Use

### Input Parameters

1. **Temperature (°C)**: Air temperature (-50 to 60°C)
2. **RH (%)**: Relative humidity (0 to 100%)
3. **Ws (km/h)**: Wind speed (0 to 200 km/h)
4. **Rain (mm)**: Rainfall amount (0 to 1000mm)
5. **FFMC**: Fine Fuel Moisture Code (0 to 101)
6. **DMC**: Duff Moisture Code (0 to 1000)
7. **ISI**: Initial Spread Index (0 to 100)
8. **Classes**: Fire class (0 or 1)
9. **Region**: Geographic region code (0 to 10)

### Keyboard Shortcuts
- **Ctrl + Enter**: Submit the form
- **Escape**: Clear all inputs
- **Tab**: Enhanced navigation with focus highlights

### Risk Levels
- **Low Risk**: FWI < 10
- **Moderate Risk**: FWI 10-20
- **High Risk**: FWI 20-30
- **Extreme Risk**: FWI > 30

## 🎨 UI Features

### Animations & Effects
- **Gradient Background**: Animated color transitions
- **Floating Shapes**: Background geometric animations
- **Particle System**: Interactive floating particles
- **Matrix Effect**: Optional digital rain background
- **Hover Effects**: Interactive button and card animations
- **Loading States**: Beautiful progress indicators

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Grid Layout**: Flexible responsive grid system
- **Touch-Friendly**: Large buttons and touch targets
- **Modern Typography**: Beautiful font hierarchy

## 🔧 Customization

### Themes
The application uses CSS custom properties for easy theming:
- Primary colors: Gradient from #667eea to #764ba2
- Accent colors: #ff6b6b, #4ecdc4, #feca57
- Typography: Poppins font family

### Adding New Features
1. **JavaScript**: Add new interactive features in `static/js/app.js`
2. **Styling**: Extend styles in `static/css/custom.css`
3. **Templates**: Modify HTML templates in `templates/`

## 📈 Model Information

The Fire Weather Index prediction model uses:
- **Algorithm**: Ridge Regression
- **Features**: 9 weather and environmental parameters
- **Preprocessing**: StandardScaler for feature normalization
- **Validation**: Real-time input validation and error handling

## 🐛 Error Handling

The application includes comprehensive error handling:
- **Input Validation**: Range checking for all parameters
- **Model Errors**: Graceful handling of prediction failures
- **HTTP Errors**: Custom 404 and 500 error pages
- **User Feedback**: Clear error messages and recovery options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Dataset: Algerian Forest Fires Dataset
- UI Inspiration: Modern glass morphism design trends
- Icons: Font Awesome
- Fonts: Google Fonts

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ and lots of ☕
