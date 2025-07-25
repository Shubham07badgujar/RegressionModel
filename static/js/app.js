// Advanced JavaScript Features for Fire Weather Index Predictor

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    createStarField();
    initializeInputValidation();
    addSmoothScrolling();
    initializeTooltips();
    addKeyboardShortcuts();
    createMatrixEffect();
}

// Create animated star field background
function createStarField() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        createStar(starsContainer);
    }
}

function createStar(container) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(star);
}

// Advanced input validation with real-time feedback
function initializeInputValidation() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        // Add validation ranges for each parameter
        const validationRules = {
            'Temperature': { min: -50, max: 60, unit: '°C' },
            'RH': { min: 0, max: 100, unit: '%' },
            'Ws': { min: 0, max: 200, unit: 'km/h' },
            'rain': { min: 0, max: 1000, unit: 'mm' },
            'FFMC': { min: 0, max: 101, unit: '' },
            'DMC': { min: 0, max: 1000, unit: '' },
            'ISI': { min: 0, max: 100, unit: '' },
            'Classes': { min: 0, max: 1, unit: '' },
            'Region': { min: 0, max: 10, unit: '' }
        };

        const inputName = input.name;
        const rules = validationRules[inputName];

        if (rules) {
            input.addEventListener('input', function() {
                validateInput(this, rules);
            });

            input.addEventListener('focus', function() {
                showTooltip(this, rules);
            });

            input.addEventListener('blur', function() {
                hideTooltip(this);
            });
        }
    });
}

function validateInput(input, rules) {
    const value = parseFloat(input.value);
    const inputGroup = input.parentNode;
    
    // Remove existing validation classes
    inputGroup.classList.remove('valid', 'invalid');
    
    if (input.value === '') return;
    
    if (isNaN(value) || value < rules.min || value > rules.max) {
        inputGroup.classList.add('invalid');
        input.style.borderColor = '#ff6b6b';
        addShakeEffect(inputGroup);
    } else {
        inputGroup.classList.add('valid');
        input.style.borderColor = '#4ecdc4';
        addSuccessEffect(inputGroup);
    }
}

function addShakeEffect(element) {
    element.classList.add('glitch');
    setTimeout(() => element.classList.remove('glitch'), 300);
}

function addSuccessEffect(element) {
    element.style.boxShadow = '0 0 10px rgba(78, 205, 196, 0.5)';
    setTimeout(() => element.style.boxShadow = '', 1000);
}

function showTooltip(input, rules) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
        <strong>Valid range:</strong> ${rules.min} - ${rules.max} ${rules.unit}
    `;
    tooltip.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    input.parentNode.style.position = 'relative';
    input.parentNode.appendChild(tooltip);
    
    setTimeout(() => tooltip.style.opacity = '1', 100);
}

function hideTooltip(input) {
    const tooltip = input.parentNode.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
    }
}

// Smooth scrolling for navigation
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize tooltips for better UX
function initializeTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            createTooltip(this, this.dataset.tooltip);
        });
        
        trigger.addEventListener('mouseleave', function() {
            removeTooltip();
        });
    });
}

function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.style.opacity = '1', 100);
}

function removeTooltip() {
    const tooltip = document.querySelector('.custom-tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
    }
}

// Keyboard shortcuts for better accessibility
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const form = document.querySelector('form');
            if (form) {
                e.preventDefault();
                form.submit();
            }
        }
        
        // Escape to clear form
        if (e.key === 'Escape') {
            clearForm();
        }
        
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            highlightFocusedElement();
        }
    });
}

function clearForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        input.style.borderColor = '';
        input.parentNode.classList.remove('valid', 'invalid');
    });
    
    // Show clear animation
    const form = document.querySelector('form');
    if (form) {
        form.style.transform = 'scale(0.95)';
        setTimeout(() => form.style.transform = 'scale(1)', 200);
    }
}

function highlightFocusedElement() {
    // Remove existing highlights
    document.querySelectorAll('.focus-highlight').forEach(el => {
        el.classList.remove('focus-highlight');
    });
    
    // Add highlight to focused element
    setTimeout(() => {
        const focused = document.activeElement;
        if (focused && focused.tagName === 'INPUT') {
            focused.classList.add('focus-highlight');
        }
    }, 100);
}

// Matrix rain effect for background
function createMatrixEffect() {
    if (Math.random() > 0.3) return; // 30% chance to show matrix effect
    
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-container';
    document.body.appendChild(matrixContainer);

    const chars = '01';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        setTimeout(() => createMatrixColumn(matrixContainer, chars, i), i * 100);
    }
}

function createMatrixColumn(container, chars, columnIndex) {
    const column = document.createElement('div');
    column.style.cssText = `
        position: absolute;
        left: ${columnIndex * 20}px;
        top: 0;
        width: 20px;
        height: 100vh;
        overflow: hidden;
        opacity: 0.1;
    `;
    
    container.appendChild(column);
    
    setInterval(() => {
        if (Math.random() > 0.98) { // 2% chance per interval
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = '0px';
            char.style.animationDuration = (Math.random() * 3 + 2) + 's';
            column.appendChild(char);
            
            setTimeout(() => char.remove(), 5000);
        }
    }, 100);
}

// Enhanced form submission with progress indication
function enhanceFormSubmission() {
    const form = document.querySelector('form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        showAdvancedLoading();
        simulateProgress();
    });
}

function showAdvancedLoading() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'advanced-loading';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="advanced-spinner"></div>
            <p>Processing your fire weather prediction...</p>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>
    `;
    
    loadingOverlay.style.display = 'flex';
    document.body.appendChild(loadingOverlay);
}

function simulateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (!progressFill) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200);
}

// Add floating action button for quick actions
function addFloatingActionButton() {
    const fab = document.createElement('div');
    fab.className = 'fab';
    fab.innerHTML = '<i class="fas fa-question"></i>';
    fab.title = 'Help & Tips';
    
    fab.addEventListener('click', function() {
        showHelpModal();
    });
    
    document.body.appendChild(fab);
}

function showHelpModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 20px;
            max-width: 500px;
            margin: 20px;
            position: relative;
        ">
            <button onclick="this.closest('div').remove()" style="
                position: absolute;
                top: 10px;
                right: 15px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
            ">&times;</button>
            <h3 style="margin-bottom: 1rem; color: #333;">Fire Weather Index Help</h3>
            <ul style="color: #666; line-height: 1.6;">
                <li><strong>Temperature:</strong> Air temperature in Celsius</li>
                <li><strong>RH:</strong> Relative humidity percentage</li>
                <li><strong>Ws:</strong> Wind speed in km/h</li>
                <li><strong>Rain:</strong> Rainfall in millimeters</li>
                <li><strong>FFMC:</strong> Fine Fuel Moisture Code</li>
                <li><strong>DMC:</strong> Duff Moisture Code</li>
                <li><strong>ISI:</strong> Initial Spread Index</li>
                <li><strong>Classes:</strong> Fire class (0 or 1)</li>
                <li><strong>Region:</strong> Geographic region code</li>
            </ul>
            <p style="margin-top: 1rem; color: #666; font-size: 14px;">
                <em>Use Ctrl+Enter to submit, Escape to clear form</em>
            </p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    enhanceFormSubmission();
    addFloatingActionButton();
    
    // Add custom CSS for progress bar
    const style = document.createElement('style');
    style.textContent = `
        .progress-bar {
            width: 300px;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            margin-top: 20px;
            overflow: hidden;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .focus-highlight {
            box-shadow: 0 0 0 3px rgba(254, 202, 87, 0.5) !important;
        }
    `;
    document.head.appendChild(style);
});
