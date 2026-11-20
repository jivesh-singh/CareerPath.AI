/**
 * CareerPath AI - Adaptive Learning Roadmap Controller
 * Adapts to student's self-assessed skill levels, persists milestone checkmarks,
 * and calculates dynamic completion percentages across 5 stages.
 */

document.addEventListener('DOMContentLoaded', () => {
    initRoadmap();
});

let currentCareer = null;
let userAssessment = null;
let currentProgress = {};

function initRoadmap() {
    if (!window.CAREERS_DATA || !window.StorageService) return;

    userAssessment = window.StorageService.getAssessment();
    const allCareers = window.CAREERS_DATA;

    // Determine initial career: from URL param ?career=... or top recommendation or default
    const params = new URLSearchParams(window.location.search);
    let selectedId = params.get('career');

    if (!selectedId) {
        const results = window.StorageService.getResults();
        if (results && results.results && results.results.length > 0) {
            selectedId = results.results[0].id;
        } else {
            selectedId = 'data-analyst';
        }
    }

    currentCareer = allCareers.find(c => c.id === selectedId) || allCareers[0];

    // Populate dropdown
    const dropdown = document.getElementById('career-select-dropdown');
    if (dropdown) {
        dropdown.innerHTML = '';
        allCareers.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = `${c.name} (${c.category})`;
            if (c.id === currentCareer.id) opt.selected = true;
            dropdown.appendChild(opt);
        });

        dropdown.addEventListener('change', (e) => {
            const targetId = e.target.value;
            window.location.search = `?career=${targetId}`;
        });
    }

    renderRoadmapForCareer();
}

/**
 * Render complete 5-stage interactive roadmap for currentCareer
 */
function renderRoadmapForCareer() {
    if (!currentCareer) return;

    document.getElementById('roadmap-heading-title').innerHTML = `
        5-Stage Roadmap: <span class="text-gradient">${currentCareer.name}</span>
    `;

    currentProgress = window.StorageService.getRoadmapProgress(currentCareer.id);

    const wrapper = document.getElementById('roadmap-stages-wrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';

    const stages = currentCareer.learningRoadmap || [];
    const userSkills = (userAssessment && userAssessment.skills) || {};

    let totalTasksCount = 0;
    let completedTasksCount = 0;

    stages.forEach((stage, sIndex) => {
        const stageCard = document.createElement('div');
        stageCard.className = 'analysis-card';
        stageCard.style.marginBottom = '2rem';

        // Stage Title & Meta
        stageCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--gradient-primary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.95rem;">
                        ${stage.stage}
                    </div>
                    <div>
                        <h3 style="font-size: 1.25rem;">${stage.title}</h3>
                        <p style="font-size: 0.85rem; color: var(--text-muted);">${stage.description}</p>
                    </div>
                </div>
                <span class="badge badge-slate">${stage.duration}</span>
            </div>

            <!-- Task Items List -->
            <div class="stage-tasks-list" id="stage-tasks-${stage.stage}" style="display: flex; flex-direction: column; gap: 0.85rem;">
            </div>
        `;

        wrapper.appendChild(stageCard);

        const tasksList = stageCard.querySelector(`#stage-tasks-${stage.stage}`);

        (stage.skills || []).forEach((skillName, tIndex) => {
            totalTasksCount++;
            const taskId = `stage_${stage.stage}_task_${tIndex}`;
            
            // Check if user has high rating in this skill
            const userRating = getSkillRating(skillName, userSkills);
            let adaptiveBadge = '';
            let isDefaultChecked = false;

            if (userRating >= 4) {
                adaptiveBadge = `<span class="badge badge-success" style="font-size: 0.725rem;"><i data-lucide="check"></i> Proficient in Assessment (${userRating}/5)</span>`;
                isDefaultChecked = true;
            } else if (userRating === 3) {
                adaptiveBadge = `<span class="badge badge-accent" style="font-size: 0.725rem;">Intermediate (${userRating}/5)</span>`;
            } else if (userRating > 0 && userRating <= 2) {
                adaptiveBadge = `<span class="badge badge-warning" style="font-size: 0.725rem;">Priority Focus Area</span>`;
            }

            // Determine checked state (persisted or default)
            const isCompleted = currentProgress[taskId] !== undefined 
                ? currentProgress[taskId] 
                : isDefaultChecked;

            if (isCompleted) completedTasksCount++;

            const taskItem = document.createElement('label');
            taskItem.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.85rem 1.25rem;
                background: ${isCompleted ? 'var(--bg-alt)' : '#ffffff'};
                border: 1px solid ${isCompleted ? '#bfdbfe' : 'var(--border-color)'};
                border-radius: var(--radius-md);
                cursor: pointer;
                transition: var(--transition);
                user-select: none;
            `;

            taskItem.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.85rem;">
                    <input type="checkbox" 
                           class="roadmap-checkbox" 
                           data-task-id="${taskId}" 
                           ${isCompleted ? 'checked' : ''}
                           style="width: 18px; height: 18px; accent-color: var(--primary); cursor: pointer;">
                    <span style="font-weight: 500; font-size: 0.95rem; ${isCompleted ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">
                        ${skillName}
                    </span>
                </div>
                <div>${adaptiveBadge}</div>
            `;

            const chk = taskItem.querySelector('input[type="checkbox"]');
            chk.addEventListener('change', (e) => {
                const checked = e.target.checked;
                window.StorageService.setRoadmapTaskStatus(currentCareer.id, taskId, checked);
                renderRoadmapForCareer();
                if (window.showToast) {
                    window.showToast(checked ? "Milestone completed!" : "Milestone updated.", "info");
                }
            });

            tasksList.appendChild(taskItem);
        });
    });

    // Update Progress Indicator
    const percent = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;
    const barEl = document.getElementById('roadmap-progress-bar');
    const percentEl = document.getElementById('roadmap-percent-display');
    const countEl = document.getElementById('roadmap-count-display');

    if (barEl) barEl.style.width = `${percent}%`;
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (countEl) countEl.textContent = `${completedTasksCount} of ${totalTasksCount} Milestones Completed`;

    if (window.initLucideIcons) window.initLucideIcons();
}

/**
 * Fuzzy check matching skill rating from userAssessment
 */
function getSkillRating(skillTitle, userSkills) {
    if (!userSkills) return 0;
    const clean = skillTitle.toLowerCase();
    
    for (let [k, val] of Object.entries(userSkills)) {
        if (clean.includes(k.toLowerCase()) || k.toLowerCase().includes(clean)) {
            return Number(val) || 0;
        }
    }
    return 0;
}
