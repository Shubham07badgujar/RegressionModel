#!/usr/bin/env python3
"""
Test script to verify the application works before deployment
"""

import sys
import os
import importlib.util

def test_imports():
    """Test if all required modules can be imported"""
    try:
        import flask
        import numpy
        import sklearn
        import pickle
        print("✅ All required modules imported successfully")
        return True
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return False

def test_models():
    """Test if model files exist and can be loaded"""
    try:
        models_dir = os.path.join(os.path.dirname(__file__), 'models')
        
        scaler_path = os.path.join(models_dir, 'scaler.pkl')
        ridge_path = os.path.join(models_dir, 'ridge.pkl')
        
        if not os.path.exists(scaler_path):
            print(f"❌ Scaler model not found at {scaler_path}")
            return False
            
        if not os.path.exists(ridge_path):
            print(f"❌ Ridge model not found at {ridge_path}")
            return False
        
        import pickle
        with open(scaler_path, 'rb') as f:
            scaler = pickle.load(f)
        
        with open(ridge_path, 'rb') as f:
            model = pickle.load(f)
            
        print("✅ Model files loaded successfully")
        return True
    except Exception as e:
        print(f"❌ Model loading error: {e}")
        return False

def test_templates():
    """Test if template files exist"""
    templates_dir = os.path.join(os.path.dirname(__file__), 'templates')
    required_templates = ['index.html', 'home.html', 'error.html']
    
    for template in required_templates:
        template_path = os.path.join(templates_dir, template)
        if not os.path.exists(template_path):
            print(f"❌ Template not found: {template}")
            return False
    
    print("✅ All template files found")
    return True

def test_static_files():
    """Test if static files exist"""
    static_dir = os.path.join(os.path.dirname(__file__), 'static')
    
    css_path = os.path.join(static_dir, 'css', 'custom.css')
    js_path = os.path.join(static_dir, 'js', 'app.js')
    
    if not os.path.exists(css_path):
        print(f"❌ CSS file not found at {css_path}")
        return False
        
    if not os.path.exists(js_path):
        print(f"❌ JS file not found at {js_path}")
        return False
    
    print("✅ Static files found")
    return True

def test_api_structure():
    """Test if API structure is correct for Vercel"""
    api_dir = os.path.join(os.path.dirname(__file__), 'api')
    index_path = os.path.join(api_dir, 'index.py')
    
    if not os.path.exists(api_dir):
        print("❌ API directory not found")
        return False
        
    if not os.path.exists(index_path):
        print("❌ API index.py not found")
        return False
    
    print("✅ API structure is correct")
    return True

def test_config_files():
    """Test if deployment config files exist"""
    config_files = ['vercel.json', 'requirements.txt', 'runtime.txt']
    
    for config_file in config_files:
        file_path = os.path.join(os.path.dirname(__file__), config_file)
        if not os.path.exists(file_path):
            print(f"❌ Config file not found: {config_file}")
            return False
    
    print("✅ All config files found")
    return True

def main():
    """Run all tests"""
    print("🧪 Running pre-deployment tests...\n")
    
    tests = [
        ("Module Imports", test_imports),
        ("Model Files", test_models),
        ("Template Files", test_templates),
        ("Static Files", test_static_files),
        ("API Structure", test_api_structure),
        ("Config Files", test_config_files)
    ]
    
    passed = 0
    total = len(tests)
    
    for test_name, test_func in tests:
        print(f"Testing {test_name}...")
        if test_func():
            passed += 1
        print()
    
    print(f"📊 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Ready for deployment.")
        print("\n🚀 Deploy to Vercel with: vercel")
        return True
    else:
        print("❌ Some tests failed. Please fix the issues before deployment.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
