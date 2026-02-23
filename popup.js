// Example assignments: name, grade received, weight
const assignments = [
    { name: "Homework 1", grade: 90, weight: 0.1 },
    { name: "Homework 2", grade: 80, weight: 0.1 },
    { name: "Midterm", grade: 85, weight: 0.3 },
    { name: "Final", grade: 95, weight: 0.5 }
];

// Calculate weighted grade
function calculateWeightedGrade(assignments) {
    let total = 0;
    let totalWeight = 0;
    for (const a of assignments) {
        total += a.grade * a.weight;
        totalWeight += a.weight;
    }
    return (total / totalWeight).toFixed(2);
}

// Display in popup
const outputDiv = document.getElementById("output");
const weightedGrade = calculateWeightedGrade(assignments);
outputDiv.innerText = `Current Weighted Grade: ${weightedGrade}%`;
