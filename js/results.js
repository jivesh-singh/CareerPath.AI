/**
 * CareerPath AI - Results Dashboard Controller
 * Renders personalized top 5 career recommendations, transparent dimension breakdowns,
 * skill gap diagnostics, career explorer handoff, and print-to-PDF reports.
 */

document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
    bindDashboardEvents();
});

let currentAssessment = null;
let currentRecommendations = [];

function loadDashboard() {
    if (!window.StorageService || !window.RecommendationEngine) return;

    currentAssessment = window.StorageService.getAssessment();
    const warningEl = document.getElementById('no-assessment-warning');
    const contentEl = document.getElementById('dashboard-content');

    if (!currentAssessment || !currentAssessment.personal || !currentAssessment.personal.name) {
        if (warningEl) warningEl.style.display = 'block';
        if (contentEl) contentEl.style.display = 'none';
        return;
    }

    if (warningEl) warningEl.style.display = 'none';
    if (contentEl) contentEl.style.display = 'block';

    // Compute or retrieve existing results
    currentRecommendations = window.RecommendationEngine.evaluate(currentAssessment);
    window.StorageService.saveResults(currentRecommendations);

    // Populate Student Greeting
    renderStudentHeader();

    // Render Top 5 Matches
    renderTopMatches();

    // Render Skill Strengths & Gaps Analysis
    renderSkillDiagnostics();

    // Render Remaining Careers (#6 to #15)
    renderOtherRankedCareers();

    // Print Header Information
    updatePrintHeader();

    if (window.initLucideIcons) window.initLucideIcons();
}

/**
 * Render personalized welcome greeting
 */
function renderStudentHeader() {
    const p = currentAssessment.personal || {};
    const nameEl = document.getElementById('user-display-name');
    const metaEl = document.getElementById('user-display-profile-meta');

    if (nameEl) nameEl.textContent = p.name || 'Student';
    if (metaEl) {
        metaEl.textContent = `${p.educationLevel || 'Student'} • ${p.stream || 'General Academic'} ${p.qualification ? `(${p.qualification})` : ''}`;
    }
}

/**
 * Update print-only header
 */
function updatePrintHeader() {
    const p = currentAssessment.personal || {};
    const infoEl = document.getElementById('print-student-info');
    const dateEl = document.getElementById('print-date');

    if (infoEl) {
        infoEl.textContent = `Candidate: ${p.name || 'Student'} | Level: ${p.educationLevel || 'N/A'} | Stream: ${p.stream || 'N/A'}`;
    }
    if (dateEl) {
        dateEl.textContent = `Generated on: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`;
    }
}

/**
 * Render Top 5 Recommended Careers
 */
function renderTopMatches() {
    const container = document.getElementById('top-matches-container');
    if (!container) return;

    container.innerHTML = '';
    const top5 = currentRecommendations.slice(0, 5);

    top5.forEach((career, index) => {
        const rank = index + 1;
        const card = document.createElement('div');
        card.className = 'career-card-match';
        card.setAttribute('data-tilt', '');

        // Dimension Breakdown
        const b = career.breakdown || {};
        const strokeOffset = Math.round(226.2 - (226.2 * career.matchScore / 100));

        card.innerHTML = `
            <div class="career-card-top-row">
                <div class="career-title-group">
                    <div class="career-icon-lg">
                        <i data-lucide="${career.icon || 'briefcase'}"></i>
                    </div>
                    <div>
                        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
                            <span class="badge ${rank === 1 ? 'badge-primary' : (rank === 2 ? 'badge-accent' : 'badge-slate')}">
                                #${rank} Match
                            </span>
                            <span class="badge badge-slate">${career.category}</span>
                            <span class="badge badge-success"><i data-lucide="check"></i> Verified Model</span>
                        </div>
                        <h3 style="font-size: 1.45rem; margin-bottom: 0.25rem;">${career.name}</h3>
                        <p style="font-size: 0.95rem; color: var(--text-secondary);">${career.tagline}</p>
                    </div>
                </div>

                <div class="match-score-badge" style="align-items: center;">
                    <div class="circle-gauge-wrap">
                        <svg class="circle-gauge-svg" viewBox="0 0 84 84">
                            <defs>
                                <linearGradient id="scoreGaugeGrad_${rank}" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#2563eb" />
                                    <stop offset="60%" stop-color="#7c3aed" />
                                    <stop offset="100%" stop-color="#06b6d4" />
                                </linearGradient>
                            </defs>
                            <circle class="circle-gauge-bg" cx="42" cy="42" r="36" />
                            <circle class="circle-gauge-progress" cx="42" cy="42" r="36" 
                                stroke-dasharray="226.2" 
                                stroke-dashoffset="${strokeOffset}" 
                                stroke="url(#scoreGaugeGrad_${rank})" />
                        </svg>
                        <div class="circle-gauge-text">${career.matchScore}%</div>
                    </div>
                    <div class="match-score-label" style="margin-top: 0.35rem;">Compatibility Match</div>
                </div>
            </div>

            <!-- Description & Summary -->
            <p style="font-size: 0.925rem; color: var(--text-secondary); margin: 0.75rem 0;">
                ${career.description}
            </p>

            <!-- Transparent Heuristic Breakdown -->
            <div class="match-explanation-box">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <strong style="font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.35rem;">
                        <i data-lucide="cpu" style="width: 16px; height: 16px; color: var(--primary);"></i>
                        Explainable Algorithm Breakdown (Why this is recommended)
                    </strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">Weighted Heuristics</span>
                </div>

                <div class="match-dimensions-grid">
                    <div class="dimension-pill">
                        <span class="dimension-pill-label">Interests (35%)</span>
                        <span class="dimension-pill-val">${b.interest || 0}%</span>
                    </div>
                    <div class="dimension-pill">
                        <span class="dimension-pill-label">Skills (30%)</span>
                        <span class="dimension-pill-val">${b.skills || 0}%</span>
                    </div>
                    <div class="dimension-pill">
                        <span class="dimension-pill-label">Subjects (15%)</span>
                        <span class="dimension-pill-val">${b.subjects || 0}%</span>
                    </div>
                    <div class="dimension-pill">
                        <span class="dimension-pill-label">Work Style (10%)</span>
                        <span class="dimension-pill-val">${b.workPreference || 0}%</span>
                    </div>
                    <div class="dimension-pill">
                        <span class="dimension-pill-label">Career Pref (10%)</span>
                        <span class="dimension-pill-val">${b.careerPreference || 0}%</span>
                    </div>
                </div>

                <!-- Overlap Highlights -->
                <div style="margin-top: 0.85rem; font-size: 0.825rem; color: var(--text-secondary); display: flex; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <strong style="color: var(--text-primary);">Matching Interests:</strong>
                        ${career.matchedInterests && career.matchedInterests.length > 0 
                            ? career.matchedInterests.join(', ') 
                            : 'Broad technical exploration'}
                    </div>
                    <div>
                        <strong style="color: var(--text-primary);">Strong Skills:</strong>
                        ${career.matchedSkills && career.matchedSkills.length > 0 
                            ? career.matchedSkills.map(s => s.name).join(', ') 
                            : 'Foundational stage'}
                    </div>
                    <div>
                        <strong style="color: var(--text-primary);">Aligned Subjects:</strong>
                        ${career.matchedSubjects && career.matchedSubjects.length > 0 
                            ? career.matchedSubjects.join(', ') 
                            : 'General core syllabus'}
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.25rem;">
                <a href="career.html?id=${career.id}" class="btn btn-primary btn-sm">
                    <i data-lucide="external-link"></i> <span>Explore Career Profile</span>
                </a>
                <a href="roadmap.html?career=${career.id}" class="btn btn-secondary btn-sm">
                    <i data-lucide="map"></i> <span>View 5-Stage Roadmap</span>
                </a>
                <a href="compare.html?career1=${career.id}&career2=${top5[index === 0 ? 1 : 0].id}" class="btn btn-outline btn-sm">
                    <i data-lucide="columns-2"></i> <span>Compare with #${index === 0 ? 2 : 1}</span>
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

/**
 * Render Skill Diagnostics: Strengths and Growth Areas
 */
function renderSkillDiagnostics() {
    const strengthsContainer = document.getElementById('skill-strengths-container');
    const gapsContainer = document.getElementById('skill-gaps-container');

    if (!strengthsContainer || !gapsContainer) return;

    // 1. User Strengths
    const profileAnalysis = window.RecommendationEngine.analyzeUserSkillProfile(currentAssessment.skills);
    strengthsContainer.innerHTML = '';

    if (profileAnalysis.strengths.length === 0) {
        strengthsContainer.innerHTML = `
            <p style="font-size: 0.9rem; color: var(--text-muted); padding: 0.5rem 0;">
                No skills rated 4 or 5 yet. You have a broad foundational base ready to specialize!
            </p>
        `;
    } else {
        profileAnalysis.strengths.forEach(s => {
            const row = document.createElement('div');
            row.className = 'analysis-item-row';
            row.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <i data-lucide="check-circle" style="color: var(--success); width: 16px; height: 16px;"></i>
                    <strong style="font-size: 0.9rem;">${s.skill}</strong>
                </div>
                <span class="badge badge-success">${s.rating}/5 Rating</span>
            `;
            strengthsContainer.appendChild(row);
        });
    }

    // 2. Gaps for #1 Career Match
    gapsContainer.innerHTML = '';
    const topCareer = currentRecommendations[0];

    if (!topCareer || !topCareer.skillGaps || topCareer.skillGaps.length === 0) {
        gapsContainer.innerHTML = `
            <div style="padding: 0.5rem 0;">
                <p style="font-size: 0.9rem; color: var(--success); font-weight: 600;">
                    <i data-lucide="sparkles"></i> Exceptional Baseline!
                </p>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                    You already meet or exceed the typical entry-level ratings for <strong>${topCareer ? topCareer.name : 'your top match'}</strong>. Focus on building real-world projects!
                </p>
            </div>
        `;
    } else {
        topCareer.skillGaps.slice(0, 4).forEach(gap => {
            const row = document.createElement('div');
            row.className = 'analysis-item-row';
            row.innerHTML = `
                <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <i data-lucide="arrow-up-right" style="color: var(--primary); width: 16px; height: 16px;"></i>
                        <strong style="font-size: 0.9rem;">${gap.name}</strong>
                    </div>
                    <span style="font-size: 0.775rem; color: var(--text-muted); margin-left: 1.5rem;">
                        Target: Level ${gap.targetLevel}/5 (Current: ${gap.userRating}/5)
                    </span>
                </div>
                <a href="roadmap.html?career=${topCareer.id}" class="badge badge-primary" style="text-decoration: none;">
                    Learn in Roadmap
                </a>
            `;
            gapsContainer.appendChild(row);
        });
    }
}

/**
 * Render other ranked careers (#6 to #15)
 */
function renderOtherRankedCareers() {
    const container = document.getElementById('other-careers-container');
    if (!container) return;

    container.innerHTML = '';
    const remaining = currentRecommendations.slice(5);

    remaining.forEach((career, index) => {
        const rank = index + 6;
        const item = document.createElement('div');
        item.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.9rem 0;
            border-bottom: 1px solid var(--border-color);
            gap: 1rem;
            flex-wrap: wrap;
        `;

        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span style="font-weight: 700; color: var(--text-muted); width: 28px;">#${rank}</span>
                <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--bg-alt); color: var(--primary); display: flex; align-items: center; justify-content: center;">
                    <i data-lucide="${career.icon || 'briefcase'}"></i>
                </div>
                <div>
                    <h4 style="font-size: 1rem; margin-bottom: 2px;">
                        <a href="career.html?id=${career.id}" style="color: var(--text-primary);">${career.name}</a>
                    </h4>
                    <span style="font-size: 0.775rem; color: var(--text-muted);">${career.category}</span>
                </div>
            </div>

            <div style="display: flex; align-items: center; gap: 1.25rem;">
                <div style="text-align: right;">
                    <strong style="font-size: 1.15rem; color: var(--primary);">${career.matchScore}%</strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Match</span>
                </div>
                <a href="career.html?id=${career.id}" class="btn btn-secondary btn-sm">Explore</a>
            </div>
        `;

        container.appendChild(item);
    });
}

/**
 * Bind dashboard button handlers
 */
function bindDashboardEvents() {
    // Print PDF
    const printBtns = [
        document.getElementById('btn-print-report'),
        document.getElementById('btn-print-action')
    ];
    printBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                window.print();
            });
        }
    });

    // Retake assessment
    const retakeBtn = document.getElementById('btn-retake-assessment');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', () => {
            window.location.href = 'assessment.html';
        });
    }

    // Toggle other ranked careers
    const toggleHeader = document.getElementById('toggle-other-careers-header');
    const otherContainer = document.getElementById('other-careers-container');
    const toggleBtn = document.getElementById('btn-toggle-other-careers');

    if (toggleHeader && otherContainer && toggleBtn) {
        toggleHeader.addEventListener('click', () => {
            const isHidden = otherContainer.style.display === 'none';
            otherContainer.style.display = isHidden ? 'block' : 'none';
            toggleBtn.innerHTML = isHidden 
                ? `<span>Hide</span> <i data-lucide="chevron-up"></i>` 
                : `<span>Show All</span> <i data-lucide="chevron-down"></i>`;
            if (window.initLucideIcons) window.initLucideIcons();
        });
    }

    // Edit Profile Modal
    const editModal = document.getElementById('edit-profile-modal');
    const editTrigger = document.getElementById('btn-edit-profile-trigger');
    const closeModal = document.getElementById('btn-close-modal');
    const cancelModal = document.getElementById('btn-cancel-modal');
    const editForm = document.getElementById('edit-profile-form');

    if (editTrigger && editModal) {
        editTrigger.addEventListener('click', () => {
            const p = (currentAssessment && currentAssessment.personal) || {};
            document.getElementById('edit-name').value = p.name || '';
            document.getElementById('edit-education').value = p.educationLevel || '';
            document.getElementById('edit-stream').value = p.stream || '';
            document.getElementById('edit-qualification').value = p.qualification || '';
            editModal.style.display = 'flex';
        });
    }

    const closeHandler = () => {
        if (editModal) editModal.style.display = 'none';
    };

    if (closeModal) closeModal.addEventListener('click', closeHandler);
    if (cancelModal) cancelModal.addEventListener('click', closeHandler);

    if (editForm) {
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const updated = {
                name: document.getElementById('edit-name').value.trim(),
                educationLevel: document.getElementById('edit-education').value,
                stream: document.getElementById('edit-stream').value,
                qualification: document.getElementById('edit-qualification').value.trim()
            };

            if (window.StorageService) {
                window.StorageService.updateProfile(updated);
            }

            closeHandler();
            loadDashboard();

            if (window.showToast) {
                window.showToast("Profile updated! Recommendations recalculated.", "success");
            }
        });
    }
}
