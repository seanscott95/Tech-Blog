module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    created_at: (date) => {
        // Format time as HH/MM/SS
        return date.toLocaleTimeString();
    }
};