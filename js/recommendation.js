/**
 * CareerPath AI - Recommendation Engine
 * Transparent, weighted matching algorithm calculating genuine match percentages (0-100%)
 * based strictly on student assessment responses.
 * 
 * Weights:
 * - Interest Compatibility: 35%
 * - Existing Skill Compatibility: 30%
 * - Academic Subject Compatibility: 15%
 * - Work Preference Compatibility: 10%
 * - Career Preference Compatibility: 10%
 */

const RecommendationEngine = {
    WEIGHTS: {
        INTEREST: 0.35,
        SKILL: 0.30,
        SUBJECT: 0.15,
        WORK_PREFERENCE: 0.10,
        CAREER_PREFERENCE: 0.10
    },

    /**
     * Run recommendation matching on assessment data
     * @param {Object} assessmentData 
     * @returns {Array<Object>} Ranked career recommendations with full explainability breakdown
     */
    evaluate(assessmentData) {
        if (!assessmentData || !window.CAREERS_DATA) {
            console.warn('RecommendationEngine: Missing assessment data or careers dataset.');
            return [];
        }

        const userInterests = Array.isArray(assessmentData.interests) ? assessmentData.interests : [];
        const userSkills = assessmentData.skills || {};
        const userSubjects = (assessmentData.personal && Array.isArray(assessmentData.personal.favouriteSubjects)) 
            ? assessmentData.personal.favouriteSubjects 
            : [];
        const userWorkPrefs = Array.isArray(assessmentData.workPreferences) ? assessmentData.workPreferences : [];
        const userCareerPref = assessmentData.careerPreference || 'Flexible / Undecided';

        const evaluatedCareers = window.CAREERS_DATA.map(career => {
            // 1. Interest Compatibility (35%)
            const careerInterests = career.relevantInterests || [];
            const matchedInterests = userInterests.filter(i => careerInterests.includes(i));
            const interestScore = careerInterests.length > 0
                ? Math.min(100, (matchedInterests.length / careerInterests.length) * 100)
                : 0;

            // 2. Existing Skill Compatibility (30%)
            const requiredSkills = career.requiredSkills || {};
            let totalSkillWeight = 0;
            let weightedSkillEarned = 0;
            const matchedSkills = [];
            const skillGaps = [];

            Object.entries(requiredSkills).forEach(([skillName, targetLevel]) => {
                if (targetLevel > 1) {
                    const userRating = Number(userSkills[skillName]) || 1;
                    const importanceWeight = targetLevel >= 4 ? 2 : 1;
                    totalSkillWeight += importanceWeight;

                    const ratio = Math.min(1.0, userRating / targetLevel);
                    weightedSkillEarned += ratio * importanceWeight;

                    if (userRating >= 3) {
                        matchedSkills.push({
                            name: skillName,
                            userRating,
                            targetLevel
                        });
                    } else if (targetLevel >= 3 && userRating < 3) {
                        skillGaps.push({
                            name: skillName,
                            userRating,
                            targetLevel,
                            gap: targetLevel - userRating
                        });
                    }
                }
            });

            const skillScore = totalSkillWeight > 0
                ? (weightedSkillEarned / totalSkillWeight) * 100
                : 50;

            // 3. Academic Subject Compatibility (15%)
            const careerSubjects = career.relevantSubjects || [];
            const matchedSubjects = userSubjects.filter(sub => 
                careerSubjects.some(cs => cs.toLowerCase() === sub.toLowerCase())
            );
            // Matching 2 core relevant subjects indicates high alignment
            const targetSubjectCount = Math.min(2, Math.max(1, careerSubjects.length));
            const subjectScore = careerSubjects.length > 0
                ? Math.min(100, (matchedSubjects.length / targetSubjectCount) * 100)
                : 50;

            // 4. Work Preference Compatibility (10%)
            const careerWorkPrefs = career.workPreferences || [];
            const matchedWorkPrefs = userWorkPrefs.filter(wp => 
                careerWorkPrefs.some(cwp => cwp.toLowerCase() === wp.toLowerCase())
            );
            const targetWorkPrefCount = Math.min(2, Math.max(1, careerWorkPrefs.length));
            const workPrefScore = careerWorkPrefs.length > 0
                ? Math.min(100, (matchedWorkPrefs.length / targetWorkPrefCount) * 100)
                : 50;

            // 5. Career Preference Compatibility (10%)
            let careerPrefScore = 50;
            const prefClean = userCareerPref.toLowerCase();
            const careerTypeClean = (career.careerPreference || '').toLowerCase();

            if (prefClean.includes('flexible') || prefClean.includes('undecided')) {
                careerPrefScore = 100;
            } else if (prefClean.includes(careerTypeClean) || careerTypeClean.includes(prefClean)) {
                careerPrefScore = 100;
            } else if (
                (prefClean.includes('technical') && careerTypeClean.includes('research')) ||
                (prefClean.includes('research') && careerTypeClean.includes('technical')) ||
                (prefClean.includes('business') && careerTypeClean.includes('creative'))
            ) {
                // Secondary related synergy
                careerPrefScore = 75;
            } else {
                careerPrefScore = 30;
            }

            // Calculate Final Weighted Score
            const rawScore = 
                (this.WEIGHTS.INTEREST * interestScore) +
                (this.WEIGHTS.SKILL * skillScore) +
                (this.WEIGHTS.SUBJECT * subjectScore) +
                (this.WEIGHTS.WORK_PREFERENCE * workPrefScore) +
                (this.WEIGHTS.CAREER_PREFERENCE * careerPrefScore);

            const matchScore = Math.min(99, Math.max(12, Math.round(rawScore)));

            return {
                ...career,
                matchScore,
                breakdown: {
                    interest: Math.round(interestScore),
                    skills: Math.round(skillScore),
                    subjects: Math.round(subjectScore),
                    workPreference: Math.round(workPrefScore),
                    careerPreference: Math.round(careerPrefScore)
                },
                matchedInterests,
                matchedSkills,
                skillGaps,
                matchedSubjects,
                matchedWorkPrefs
            };
        });

        // Sort descending by matchScore
        evaluatedCareers.sort((a, b) => b.matchScore - a.matchScore);

        return evaluatedCareers;
    },

    /**
     * Get top N careers
     * @param {Object} assessmentData 
     * @param {number} count 
     */
    getTopCareers(assessmentData, count = 5) {
        const evaluated = this.evaluate(assessmentData);
        return evaluated.slice(0, count);
    },

    /**
     * Extract overall user skill strengths (rating 4-5) and general growth areas
     * @param {Object} userSkills 
     */
    analyzeUserSkillProfile(userSkills) {
        if (!userSkills) return { strengths: [], growthAreas: [] };

        const strengths = [];
        const growthAreas = [];

        Object.entries(userSkills).forEach(([skill, rating]) => {
            const num = Number(rating);
            if (num >= 4) {
                strengths.push({ skill, rating: num });
            } else if (num <= 2) {
                growthAreas.push({ skill, rating: num });
            }
        });

        strengths.sort((a, b) => b.rating - a.rating);
        growthAreas.sort((a, b) => a.rating - b.rating);

        return { strengths, growthAreas };
    }
};

// Export to window
window.RecommendationEngine = RecommendationEngine;
