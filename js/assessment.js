/**
 * CareerPath AI - Assessment Controller
 * Multi-step wizard with validation, state retention, LocalStorage persistence,
 * interactive 1-5 skill sliders, and recommendation handoff.
 */

const ASSESSMENT_SKILLS = [
    { id: "Python", name: "Python Programming", category: "Coding" },
    { id: "C/C++", name: "C / C++ Programming", category: "Coding" },
    { id: "Java", name: "Java Programming", category: "Coding" },
    { id: "HTML/CSS", name: "HTML5 & CSS3", category: "Web" },
    { id: "JavaScript", name: "JavaScript (JS)", category: "Web" },
    { id: "SQL", name: "SQL & Databases", category: "Data" },
    { id: "Mathematics", name: "Mathematics & Algebra", category: "Quantitative" },
    { id: "Statistics", name: "Statistics & Probability", category: "Quantitative" },
    { id: "Analytical Thinking", name: "Analytical Thinking", category: "Cognitive" },
    { id: "Problem Solving", name: "Problem Solving & Logic", category: "Cognitive" },
    { id: "Creativity", name: "Creativity & Visual Sense", category: "Cognitive" },
    { id: "Communication", name: "Communication & Articulation", category: "Soft Skills" }
];

const SKILL_LEVEL_DESCRIPTIONS = {
    1: "Novice (Minimal / No experience)",
    2: "Beginner (Basic familiarity)",
    3: "Intermediate (Can build small tasks)",
    4: "Proficient (Independent & confident)",
    5: "Expert (Advanced mastery)"
};

let currentStep = 1;
const totalSteps = 5;

let assessmentState = {
    personal: {
        name: "",
        educationLevel: "",
        stream: "",
        qualification: "",
        favouriteSubjects: []
    },
    interests: [],
    skills: {
        "Python": 2,
        "C/C++": 1,
        "Java": 1,
        "HTML/CSS": 2,
        "JavaScript": 2,
        "Mathematics": 3,
        "Statistics": 2,
        "SQL": 2,
        "Communication": 3,
        "Creativity": 3,
        "Analytical Thinking": 3,
        "Problem Solving": 3
    },
    workPreferences: [],
    careerPreference: "Technical career"
};

document.addEventListener('DOMContentLoaded', () => {
    initSkillsRatingUI();
    loadExistingAssessment();
    bindEvents();
    updateStepView();
});

/**
 * Render 12 skill rating sliders dynamically with interactive updates
 */
function initSkillsRatingUI() {
    const container = document.getElementById('skills-rating-container');
    if (!container) return;

    container.innerHTML = '';
    ASSESSMENT_SKILLS.forEach(skill => {
        const currentVal = assessmentState.skills[skill.id] || 2;
        const item = document.createElement('div');
        item.className = 'skill-rating-item';
        item.innerHTML = `
            <div class="skill-rating-header">
                <div>
                    <span class="skill-name">${skill.name}</span>
                    <span class="badge badge-slate" style="margin-left: 0.5rem; font-size: 0.7rem;">${skill.category}</span>
                </div>
                <span class="skill-level-badge" id="skill-badge-${escapeSkillId(skill.id)}">
                    ${currentVal}/5 • ${SKILL_LEVEL_DESCRIPTIONS[currentVal].split(' ')[0]}
                </span>
            </div>
            <div class="skill-range-container">
                <input type="range" 
                       class="skill-slider" 
                       id="skill-slider-${escapeSkillId(skill.id)}" 
                       min="1" 
                       max="5" 
                       step="1" 
                       value="${currentVal}"
                       data-skill="${skill.id}">
            </div>
            <div class="slider-labels">
                <span>1 - Novice</span>
                <span>2 - Beginner</span>
                <span>3 - Intermediate</span>
                <span>4 - Proficient</span>
                <span>5 - Expert</span>
            </div>
        `;
        container.appendChild(item);

        const slider = item.querySelector('.skill-slider');
        updateSliderBackground(slider, currentVal);

        slider.addEventListener('input', (e) => {
            const val = Number(e.target.value);
            assessmentState.skills[skill.id] = val;
            updateSliderBackground(slider, val);
            const badge = document.getElementById(`skill-badge-${escapeSkillId(skill.id)}`);
            if (badge) {
                badge.textContent = `${val}/5 • ${SKILL_LEVEL_DESCRIPTIONS[val].split(' ')[0]}`;
                badge.className = `skill-level-badge ${val >= 4 ? 'badge-primary' : (val === 3 ? 'badge-accent' : 'badge-slate')}`;
            }
            saveCurrentState();
        });
    });
}

function updateSliderBackground(slider, val) {
    if (!slider) return;
    const percent = ((val - 1) / (5 - 1)) * 100;
    slider.style.background = `linear-gradient(90deg, #2563eb 0%, #7c3aed ${percent}%, #e2e8f0 ${percent}%, #e2e8f0 100%)`;
}

function escapeSkillId(id) {
    return id.replace(/[^a-zA-Z0-9]/g, '_');
}

/**
 * Load existing assessment from LocalStorage if present
 */
function loadExistingAssessment() {
    if (!window.StorageService) return;
    const saved = window.StorageService.getAssessment();
    if (saved) {
        if (saved.personal) assessmentState.personal = { ...assessmentState.personal, ...saved.personal };
        if (Array.isArray(saved.interests)) assessmentState.interests = saved.interests;
        if (saved.skills) assessmentState.skills = { ...assessmentState.skills, ...saved.skills };
        if (Array.isArray(saved.workPreferences)) assessmentState.workPreferences = saved.workPreferences;
        if (saved.careerPreference) assessmentState.careerPreference = saved.careerPreference;

        populateFormFromState();
    }
}

/**
 * Populate UI inputs from assessmentState
 */
function populateFormFromState() {
    // Step 1
    const nameEl = document.getElementById('student-name');
    if (nameEl) nameEl.value = assessmentState.personal.name || '';

    const eduEl = document.getElementById('education-level');
    if (eduEl) eduEl.value = assessmentState.personal.educationLevel || '';

    const streamEl = document.getElementById('academic-stream');
    if (streamEl) streamEl.value = assessmentState.personal.stream || '';

    const qualEl = document.getElementById('current-qualification');
    if (qualEl) qualEl.value = assessmentState.personal.qualification || '';

    // Favourite Subjects
    const favSubjectBoxes = document.querySelectorAll('input[name="fav-subject"]');
    favSubjectBoxes.forEach(box => {
        box.checked = assessmentState.personal.favouriteSubjects.includes(box.value);
    });

    // Step 2: Interests
    const interestBoxes = document.querySelectorAll('input[name="interest"]');
    interestBoxes.forEach(box => {
        box.checked = assessmentState.interests.includes(box.value);
    });

    // Step 3: Skills
    Object.entries(assessmentState.skills).forEach(([skillId, val]) => {
        const slider = document.getElementById(`skill-slider-${escapeSkillId(skillId)}`);
        const badge = document.getElementById(`skill-badge-${escapeSkillId(skillId)}`);
        if (slider) {
            slider.value = val;
            updateSliderBackground(slider, val);
        }
        if (badge) {
            badge.textContent = `${val}/5 • ${SKILL_LEVEL_DESCRIPTIONS[val].split(' ')[0]}`;
        }
    });

    // Step 4: Work Preferences
    const workBoxes = document.querySelectorAll('input[name="work-pref"]');
    workBoxes.forEach(box => {
        box.checked = assessmentState.workPreferences.includes(box.value);
    });

    // Step 5: Career Preferences
    const careerRadios = document.querySelectorAll('input[name="career-pref"]');
    careerRadios.forEach(radio => {
        if (radio.value === assessmentState.careerPreference) {
            radio.checked = true;
        }
    });
}

/**
 * Save current state silently to LocalStorage
 */
function saveCurrentState() {
    harvestFormValues();
    if (window.StorageService) {
        window.StorageService.saveAssessment(assessmentState);
    }
}

/**
 * Harvest latest input values from current active step
 */
function harvestFormValues() {
    // Step 1
    const nameEl = document.getElementById('student-name');
    if (nameEl) assessmentState.personal.name = nameEl.value.trim();

    const eduEl = document.getElementById('education-level');
    if (eduEl) assessmentState.personal.educationLevel = eduEl.value;

    const streamEl = document.getElementById('academic-stream');
    if (streamEl) assessmentState.personal.stream = streamEl.value;

    const qualEl = document.getElementById('current-qualification');
    if (qualEl) assessmentState.personal.qualification = qualEl.value.trim();

    const checkedSubjects = Array.from(document.querySelectorAll('input[name="fav-subject"]:checked')).map(c => c.value);
    assessmentState.personal.favouriteSubjects = checkedSubjects;

    // Step 2
    const checkedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(c => c.value);
    assessmentState.interests = checkedInterests;

    // Step 4
    const checkedWork = Array.from(document.querySelectorAll('input[name="work-pref"]:checked')).map(c => c.value);
    assessmentState.workPreferences = checkedWork;

    // Step 5
    const selectedCareerPref = document.querySelector('input[name="career-pref"]:checked');
    if (selectedCareerPref) {
        assessmentState.careerPreference = selectedCareerPref.value;
    }
}

/**
 * Bind form interactions, next/prev clicks, demo quick-fill
 */
function bindEvents() {
    const nextBtn = document.getElementById('btn-next-step');
    const prevBtn = document.getElementById('btn-prev-step');
    const resetBtn = document.getElementById('btn-reset-form');
    const quickFillBtn = document.getElementById('btn-quick-fill');

    if (nextBtn) {
        nextBtn.addEventListener('click', handleNextStep);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', handlePrevStep);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all assessment answers?')) {
                if (window.StorageService) {
                    window.StorageService.resetAssessment();
                }
                window.location.reload();
            }
        });
    }

    if (quickFillBtn) {
        quickFillBtn.addEventListener('click', handleQuickFillDemoData);
    }

    // Step indicators clickable for completed steps
    const stepDots = document.querySelectorAll('.step-dot');
    stepDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = Number(dot.dataset.step);
            if (target < currentStep) {
                harvestFormValues();
                currentStep = target;
                updateStepView();
            }
        });
    });

    // Auto-save on change
    document.getElementById('assessment-form').addEventListener('change', () => {
        saveCurrentState();
    });
}

/**
 * Step validation logic
 */
function validateStep(step) {
    harvestFormValues();

    if (step === 1) {
        if (!assessmentState.personal.name) {
            alert('Please enter your full name.');
            document.getElementById('student-name').focus();
            return false;
        }
        if (!assessmentState.personal.educationLevel) {
            alert('Please select your current education level.');
            document.getElementById('education-level').focus();
            return false;
        }
        if (!assessmentState.personal.stream) {
            alert('Please select your academic stream or field.');
            document.getElementById('academic-stream').focus();
            return false;
        }
        if (assessmentState.personal.favouriteSubjects.length === 0) {
            alert('Please choose at least 1 favourite or strong subject.');
            return false;
        }
    } else if (step === 2) {
        if (assessmentState.interests.length < 2) {
            alert('Please select at least 2 interests to help us calculate accurate career matches.');
            return false;
        }
    } else if (step === 4) {
        if (assessmentState.workPreferences.length === 0) {
            alert('Please select at least 1 work style preference.');
            return false;
        }
    }

    return true;
}

/**
 * Advance to next step or submit
 */
function handleNextStep() {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps) {
        currentStep++;
        updateStepView();
        window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
        // Final submission
        submitAssessment();
    }
}

/**
 * Go back to previous step
 */
function handlePrevStep() {
    if (currentStep > 1) {
        harvestFormValues();
        currentStep--;
        updateStepView();
        window.scrollTo({ top: 120, behavior: 'smooth' });
    }
}

/**
 * Update UI view based on currentStep
 */
function updateStepView() {
    // Hide all steps, animate current into view
    for (let i = 1; i <= totalSteps; i++) {
        const stepEl = document.getElementById(`step-${i}`);
        if (stepEl) {
            if (i === currentStep) {
                stepEl.style.display = 'block';
                stepEl.style.opacity = '0';
                stepEl.style.transform = 'translateY(16px)';
                setTimeout(() => {
                    stepEl.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
                    stepEl.style.opacity = '1';
                    stepEl.style.transform = 'translateY(0)';
                }, 20);
            } else {
                stepEl.style.display = 'none';
            }
        }
    }

    // Update Progress header
    const stepLabel = document.getElementById('current-step-label');
    const percentLabel = document.getElementById('progress-percent-label');
    const fillEl = document.getElementById('progress-bar-fill');

    const stepTitles = [
        "Step 1 of 5: Personal & Academic Background",
        "Step 2 of 5: Interest Assessment",
        "Step 3 of 5: Existing Knowledge & Skills",
        "Step 4 of 5: Work Style Preferences",
        "Step 5 of 5: Career Orientation"
    ];

    const percent = Math.round((currentStep / totalSteps) * 100);

    if (stepLabel) stepLabel.textContent = stepTitles[currentStep - 1];
    if (percentLabel) percentLabel.textContent = `${percent}% Completed`;
    if (fillEl) fillEl.style.width = `${percent}%`;

    // Update Step Dots
    const stepDots = document.querySelectorAll('.step-dot');
    stepDots.forEach(dot => {
        const s = Number(dot.dataset.step);
        dot.classList.remove('active', 'completed');
        if (s === currentStep) {
            dot.classList.add('active');
        } else if (s < currentStep) {
            dot.classList.add('completed');
        }
    });

    // Update Prev / Next buttons
    const prevBtn = document.getElementById('btn-prev-step');
    const nextBtn = document.getElementById('btn-next-step');

    if (prevBtn) {
        prevBtn.style.visibility = (currentStep === 1) ? 'hidden' : 'visible';
    }

    if (nextBtn) {
        if (currentStep === totalSteps) {
            nextBtn.innerHTML = `<span>Generate Recommendations</span> <i data-lucide="sparkles"></i>`;
            nextBtn.className = 'btn btn-primary btn-lg';
        } else {
            nextBtn.innerHTML = `<span>Next Step</span> <i data-lucide="arrow-right"></i>`;
            nextBtn.className = 'btn btn-primary';
        }
        if (window.initLucideIcons) window.initLucideIcons();
    }
}

/**
 * Submit assessment to recommendation engine and redirect
 */
function submitAssessment() {
    harvestFormValues();

    if (!window.RecommendationEngine || !window.StorageService) {
        alert('Recommendation engine services could not be loaded. Please refresh the page.');
        return;
    }

    // Save final answers
    window.StorageService.saveAssessment(assessmentState);

    // Compute recommendations
    const recommendations = window.RecommendationEngine.evaluate(assessmentState);
    window.StorageService.saveResults(recommendations);

    // Redirect to results dashboard
    window.location.href = 'results.html';
}

/**
 * Auto-fill demo profile for quick evaluation
 */
function handleQuickFillDemoData() {
    assessmentState = {
        personal: {
            name: "Aarav Sharma",
            educationLevel: "Undergraduate Degree (Pursuing / Completed)",
            stream: "Computer Science / Engineering",
            qualification: "B.Tech CSE - 3rd Year",
            favouriteSubjects: ["Mathematics", "Computer Science", "Statistics"]
        },
        interests: [
            "Artificial Intelligence",
            "Data Analysis",
            "Programming",
            "Problem Solving",
            "Mathematics",
            "Research"
        ],
        skills: {
            "Python": 4,
            "C/C++": 3,
            "Java": 2,
            "HTML/CSS": 3,
            "JavaScript": 3,
            "Mathematics": 4,
            "Statistics": 4,
            "SQL": 4,
            "Communication": 3,
            "Creativity": 3,
            "Analytical Thinking": 5,
            "Problem Solving": 5
        },
        workPreferences: [
            "Working with data",
            "Solving technical problems",
            "Working with computers",
            "Research and innovation"
        ],
        careerPreference: "Technical career"
    };

    populateFormFromState();
    saveCurrentState();

    if (window.showToast) {
        window.showToast("Demo profile loaded! You can step through or click Next to generate results.", "info");
    }
}

// Global exports
window.assessmentState = assessmentState;
