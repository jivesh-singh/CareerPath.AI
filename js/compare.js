/**
 * CareerPath AI - Career Comparison Controller
 * Renders side-by-side comparative metrics for any two career paths.
 */

document.addEventListener('DOMContentLoaded', () => {
    initComparison();
});

let careerA = null;
let careerB = null;
let userMatchScores = {};

function initComparison() {
    if (!window.CAREERS_DATA) return;
    const allCareers = window.CAREERS_DATA;

    // Check if user assessment exists
    const assessment = window.StorageService ? window.StorageService.getAssessment() : null;
    if (assessment && window.RecommendationEngine) {
        const results = window.RecommendationEngine.evaluate(assessment);
        results.forEach(r => {
            userMatchScores[r.id] = r.matchScore;
        });
    }

    // Determine initial careers from URL or defaults
    const params = new URLSearchParams(window.location.search);
    let id1 = params.get('career1');
    let id2 = params.get('career2');

    if (!id1 && !id2) {
        const results = window.StorageService ? window.StorageService.getResults() : null;
        if (results && results.results && results.results.length >= 2) {
            id1 = results.results[0].id;
            id2 = results.results[1].id;
        } else {
            id1 = 'data-analyst';
            id2 = 'data-scientist';
        }
    } else if (id1 && !id2) {
        id2 = (id1 === 'data-analyst') ? 'business-analyst' : 'data-analyst';
    }

    careerA = allCareers.find(c => c.id === id1) || allCareers[0];
    careerB = allCareers.find(c => c.id === id2) || allCareers[1];

    populateDropdowns(allCareers);
    renderComparisonTable();
}

/**
 * Populate Career A and Career B dropdowns
 */
function populateDropdowns(allCareers) {
    const sel1 = document.getElementById('select-career-1');
    const sel2 = document.getElementById('select-career-2');

    if (!sel1 || !sel2) return;

    sel1.innerHTML = '';
    sel2.innerHTML = '';

    allCareers.forEach(c => {
        const opt1 = document.createElement('option');
        opt1.value = c.id;
        opt1.textContent = `${c.name} (${c.category})`;
        if (c.id === careerA.id) opt1.selected = true;
        sel1.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = c.id;
        opt2.textContent = `${c.name} (${c.category})`;
        if (c.id === careerB.id) opt2.selected = true;
        sel2.appendChild(opt2);
    });

    sel1.addEventListener('change', (e) => {
        careerA = allCareers.find(c => c.id === e.target.value);
        updateQueryString();
        renderComparisonTable();
    });

    sel2.addEventListener('change', (e) => {
        careerB = allCareers.find(c => c.id === e.target.value);
        updateQueryString();
        renderComparisonTable();
    });
}

function updateQueryString() {
    const newUrl = `${window.location.pathname}?career1=${careerA.id}&career2=${careerB.id}`;
    window.history.replaceState(null, '', newUrl);
}

/**
 * Render comparison table rows
 */
function renderComparisonTable() {
    if (!careerA || !careerB) return;

    // Headers
    const h1 = document.getElementById('comp-header-1');
    const h2 = document.getElementById('comp-header-2');

    if (h1) {
        h1.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="${careerA.icon || 'briefcase'}"></i>
                <span>${careerA.name}</span>
            </div>
        `;
    }

    if (h2) {
        h2.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="${careerB.icon || 'briefcase'}"></i>
                <span>${careerB.name}</span>
            </div>
        `;
    }

    const tbody = document.getElementById('comparison-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const scoreA = userMatchScores[careerA.id];
    const scoreB = userMatchScores[careerB.id];

    // Rows Data Definition
    const rows = [
        {
            label: "Your Compatibility Match",
            valA: scoreA ? `<strong style="font-size: 1.25rem; color: var(--primary);">${scoreA}% Match</strong>` : '<span style="color: var(--text-muted);">Take assessment to calculate</span>',
            valB: scoreB ? `<strong style="font-size: 1.25rem; color: var(--accent);">${scoreB}% Match</strong>` : '<span style="color: var(--text-muted);">Take assessment to calculate</span>'
        },
        {
            label: "Discipline Category",
            valA: `<span class="badge badge-primary">${careerA.category}</span>`,
            valB: `<span class="badge badge-accent">${careerB.category}</span>`
        },
        {
            label: "Core Value Proposition",
            valA: careerA.tagline,
            valB: careerB.tagline
        },
        {
            label: "Day-to-Day Responsibilities",
            valA: careerA.dayToDay,
            valB: careerB.dayToDay
        },
        {
            label: "Statutory / Mandatory Degree",
            valA: careerA.academicProfile.mandatory,
            valB: careerB.academicProfile.mandatory
        },
        {
            label: "Commonly Preferred Qualifications",
            valA: careerA.academicProfile.preferred,
            valB: careerB.academicProfile.preferred
        },
        {
            label: "Relevant School Subjects",
            valA: careerA.academicProfile.schoolSubjects,
            valB: careerB.academicProfile.schoolSubjects
        },
        {
            label: "Undergraduate Degrees",
            valA: `<ul style="margin-left: 1rem;">${careerA.academicProfile.undergraduateDegrees.map(d => `<li>${d}</li>`).join('')}</ul>`,
            valB: `<ul style="margin-left: 1rem;">${careerB.academicProfile.undergraduateDegrees.map(d => `<li>${d}</li>`).join('')}</ul>`
        },
        {
            label: "Key Technical Skills",
            valA: `<div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">${careerA.technicalSkills.map(s => `<span class="badge badge-slate">${s}</span>`).join('')}</div>`,
            valB: `<div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">${careerB.technicalSkills.map(s => `<span class="badge badge-slate">${s}</span>`).join('')}</div>`
        },
        {
            label: "Key Soft Skills",
            valA: `<div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">${careerA.softSkills.map(s => `<span class="badge badge-slate">${s}</span>`).join('')}</div>`,
            valB: `<div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">${careerB.softSkills.map(s => `<span class="badge badge-slate">${s}</span>`).join('')}</div>`
        },
        {
            label: "Top Recognized Certifications",
            valA: `<ul style="margin-left: 1rem;">${careerA.certifications.map(c => `<li><strong>${c.name}</strong> (${c.provider})</li>`).join('')}</ul>`,
            valB: `<ul style="margin-left: 1rem;">${careerB.certifications.map(c => `<li><strong>${c.name}</strong> (${c.provider})</li>`).join('')}</ul>`
        },
        {
            label: "Career Progression Ladder",
            valA: `<div style="background: var(--bg-alt); padding: 0.5rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 500;">${careerA.careerProgression}</div>`,
            valB: `<div style="background: var(--bg-alt); padding: 0.5rem; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 500;">${careerB.careerProgression}</div>`
        },
        {
            label: "Future Opportunities & Outlook",
            valA: careerA.futureOpportunities,
            valB: careerB.futureOpportunities
        },
        {
            label: "Action",
            valA: `<a href="career.html?id=${careerA.id}" class="btn btn-primary btn-sm">View Full Profile</a> <a href="roadmap.html?career=${careerA.id}" class="btn btn-secondary btn-sm" style="margin-left: 0.35rem;">Roadmap</a>`,
            valB: `<a href="career.html?id=${careerB.id}" class="btn btn-primary btn-sm">View Full Profile</a> <a href="roadmap.html?career=${careerB.id}" class="btn btn-secondary btn-sm" style="margin-left: 0.35rem;">Roadmap</a>`
        }
    ];

    rows.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${r.label}</th>
            <td>${r.valA}</td>
            <td>${r.valB}</td>
        `;
        tbody.appendChild(tr);
    });

    if (window.initLucideIcons) window.initLucideIcons();
}
