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
- **Deployment**: Vercel (Serverless)

## 📁 Project Structure

```
RegressionModel/
├── api/
│   └── index.py               # Vercel entry point
├── application.py             # Local development server
├── models/
│   ├── ridge.pkl             # Trained Ridge regression model
│   └── scaler.pkl            # Feature scaler
├── templates/
│   ├── index.html            # Landing page with modern design
│   ├── home.html             # Prediction interface
│   └── error.html            # Custom error page
├── static/
│   ├── css/
│   │   └── custom.css        # Additional styling and animations
│   └── js/
│       └── app.js            # Interactive JavaScript features
├── notebook/
│   ├── Algerian_forest_fires_dataset_UPDATE.csv
│   ├── DatasetCleaningand EDA.ipynb
│   └── Lasso,Ridge,ElasticNet_regressions.ipynb
├── vercel.json               # Vercel configuration
├── requirements.txt          # Python dependencies
├── runtime.txt              # Python version specification
└── package.json             # Project metadata
```

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Flask
- scikit-learn
- numpy

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd RegressionModel
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python application.py
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

## � Deployment to Vercel

### Prerequisites
- [Vercel CLI](https://vercel.com/cli) installed
- Git repository
- Vercel account

### Quick Deploy

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy from your project directory:**
```bash
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - What's your project's name? `fire-weather-predictor`
   - In which directory is your code located? `./`

### Deploy via GitHub

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

### Environment Variables (if needed)
If you need to set environment variables:
```bash
vercel env add VARIABLE_NAME
```

## �🎯 How to Use

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

## 🔧 Vercel Configuration

The project includes a `vercel.json` file with the following configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "./api/index.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index.py"
    }
  ],
  "functions": {
    "api/index.py": {
      "maxDuration": 30
    }
  },
  "env": {
    "PYTHON_VERSION": "3.9"
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check that all dependencies are in `requirements.txt`
2. **Import Errors**: Ensure all Python files are properly structured
3. **Static Files**: Make sure static files are in the correct directory
4. **Model Files**: Verify that `.pkl` files are included in deployment

### Deployment Logs
Check deployment logs in Vercel dashboard for detailed error information.

## 📈 Model Information

The Fire Weather Index prediction model uses:
- **Algorithm**: Ridge Regression
- **Features**: 9 weather and environmental parameters
- **Preprocessing**: StandardScaler for feature normalization
- **Validation**: Real-time input validation and error handling

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
- Deployment: Vercel

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ and lots of ☕

**Live Demo**: [Deploy on Vercel](https://vercel.com/new/clone?repository-url=<your-repo-url>)
