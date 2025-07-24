// Function to fetch student data from the database
function fetchStudents() {
    // TODO: Implement database call to get student names
    console.log("Fetching students...");
}

// Function to fetch assignment data from the database
function fetchAssignments() {
    // TODO: Implement database call to get assignment names
    console.log("Fetching assignments...");
}

// Function to fetch grades for all students and assignments
function fetchGrades() {
    // TODO: Implement database call to get student grades
    console.log("Fetching grades...");
}

// Function to populate the gradebook table in HTML
function populateGradebook() {
    // TODO: Call fetch functions and update the DOM with data
    console.log("Populating gradebook...");
}

// Call this function when the page loads
window.onload = function () {
    populateGradebook();
};
document.addEventListener('DOMContentLoaded', fetchGradeData);

async function fetchGradeData() {
    try {
        const response = await fetch('/grades');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        populateGradebook(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function populateGradebook(data) {
    const tableBody = document.getElementById('gradebookBody');
    tableBody.innerHTML = ''; // Clear previous rows

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.assignment}</td>
            <td>${item.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}
