/**
 * CareerPath AI - Storage Service
 * Handles persistence of assessment responses, student profiles, and bookmarks via LocalStorage.
 */

const STORAGE_KEYS = {
    ASSESSMENT_RESPONSES: 'careerpath_ai_assessment',
    STUDENT_PROFILE: 'careerpath_ai_profile',
    RECOMMENDATION_RESULTS: 'careerpath_ai_results',
    SAVED_CAREERS: 'careerpath_ai_saved_careers',
    ROADMAP_PROGRESS: 'careerpath_ai_roadmap_progress'
};

const StorageService = {
    /**
     * Save student assessment answers
     * @param {Object} data 
     */
    saveAssessment(data) {
        try {
            const payload = {
                ...data,
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEYS.ASSESSMENT_RESPONSES, JSON.stringify(payload));
            return true;
        } catch (e) {
            console.error('Error saving assessment to LocalStorage', e);
            return false;
        }
    },

    /**
     * Retrieve student assessment answers
     * @returns {Object|null}
     */
    getAssessment() {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.ASSESSMENT_RESPONSES);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            console.error('Error reading assessment from LocalStorage', e);
            return null;
        }
    },

    /**
     * Check if an assessment exists
     * @returns {boolean}
     */
    hasAssessment() {
        const assessment = this.getAssessment();
        return !!(assessment && assessment.personal && assessment.personal.name);
    },

    /**
     * Save recommendation engine calculation results
     * @param {Array} results 
     */
    saveResults(results) {
        try {
            localStorage.setItem(STORAGE_KEYS.RECOMMENDATION_RESULTS, JSON.stringify({
                results,
                calculatedAt: new Date().toISOString()
            }));
            return true;
        } catch (e) {
            console.error('Error saving results to LocalStorage', e);
            return false;
        }
    },

    /**
     * Retrieve recommendation results
     * @returns {Object|null}
     */
    getResults() {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.RECOMMENDATION_RESULTS);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            console.error('Error reading results from LocalStorage', e);
            return null;
        }
    },

    /**
     * Update student personal profile details directly
     * @param {Object} profile 
     */
    updateProfile(profile) {
        try {
            const assessment = this.getAssessment() || {};
            assessment.personal = {
                ...(assessment.personal || {}),
                ...profile
            };
            this.saveAssessment(assessment);
            return true;
        } catch (e) {
            console.error('Error updating profile in LocalStorage', e);
            return false;
        }
    },

    /**
     * Bookmark / Save a career
     * @param {string} careerId 
     */
    toggleBookmark(careerId) {
        try {
            const saved = this.getBookmarkedCareers();
            const index = saved.indexOf(careerId);
            if (index > -1) {
                saved.splice(index, 1);
            } else {
                saved.push(careerId);
            }
            localStorage.setItem(STORAGE_KEYS.SAVED_CAREERS, JSON.stringify(saved));
            return saved.includes(careerId);
        } catch (e) {
            console.error('Error toggling bookmark', e);
            return false;
        }
    },

    /**
     * Check if career is bookmarked
     * @param {string} careerId 
     * @returns {boolean}
     */
    isBookmarked(careerId) {
        const saved = this.getBookmarkedCareers();
        return saved.includes(careerId);
    },

    /**
     * Get list of bookmarked career IDs
     * @returns {Array<string>}
     */
    getBookmarkedCareers() {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.SAVED_CAREERS);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Save roadmap checkbox completion state
     * @param {string} careerId 
     * @param {string} taskId 
     * @param {boolean} completed 
     */
    setRoadmapTaskStatus(careerId, taskId, completed) {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.ROADMAP_PROGRESS);
            const progress = raw ? JSON.parse(raw) : {};
            if (!progress[careerId]) {
                progress[careerId] = {};
            }
            progress[careerId][taskId] = completed;
            localStorage.setItem(STORAGE_KEYS.ROADMAP_PROGRESS, JSON.stringify(progress));
            return true;
        } catch (e) {
            console.error('Error updating roadmap progress', e);
            return false;
        }
    },

    /**
     * Get roadmap completed tasks for a career
     * @param {string} careerId 
     * @returns {Object}
     */
    getRoadmapProgress(careerId) {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.ROADMAP_PROGRESS);
            const progress = raw ? JSON.parse(raw) : {};
            return progress[careerId] || {};
        } catch (e) {
            return {};
        }
    },

    /**
     * Reset / Clear all assessment and results data
     */
    resetAssessment() {
        try {
            localStorage.removeItem(STORAGE_KEYS.ASSESSMENT_RESPONSES);
            localStorage.removeItem(STORAGE_KEYS.RECOMMENDATION_RESULTS);
            localStorage.removeItem(STORAGE_KEYS.ROADMAP_PROGRESS);
            return true;
        } catch (e) {
            console.error('Error clearing assessment data', e);
            return false;
        }
    }
};

// Export to window
window.StorageService = StorageService;
