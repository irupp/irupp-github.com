// ✅ Fetch grade data from the server and populate the gradebook
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

// ✅ Populate the HTML table with fetched grade data
function populateGradebook(data) {
    const tableBody = document.getElementById('gradebookBody');
    tableBody.innerHTML = ''; // Clear existing rows

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

// 🧼 Optional placeholders for future use:
function fetchStudents() {
    // Placeholder: add functionality if needed
    console.log("Fetching students...");
}

function fetchAssignments() {
    // Placeholder: add functionality if needed
    console.log("Fetching assignments...");
}

function fetchGrades() {
    // Placeholder: add functionality if needed
    console.log("Fetching grades...");
}

// ✅ Load grade data once DOM is ready
document.addEventListener('DOMContentLoaded', fetchGradeData);
