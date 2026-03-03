// content.js

window.addEventListener("load", () => {
    const load_check = setInterval(() => {

        const assignments = document.querySelectorAll("tr.student_assignment");

        if(assignments.length > 0){
            clearInterval(load_check);
            extractAssignments();
            extractWeight();
        }
    }, 500);
});

function extractAssignments() {
    // extract assignments data in HTML
    const assignments = document.querySelectorAll("tr.student_assignment");

    let results = [];

    //extract specific assignment info
    assignments.forEach(row => {
        const title = row.querySelector(".title")?.innerText;
        const score = row.querySelector(".score")?.innerText;
        const category = row.querySelector(".context")?.innerText;

        let grade, total;
        if(score) {
            const parts = score.split("/");
            grade = parseFloat(parts[0].trim());
            total = parseFloat(grade[1].trim())
        }

        if (title && score && category) {
            results.push({
                title: title.trim(),
                grade: score,
                total: total,
                category: category.trim()
            });
        }
    });

    console.log("Assignments found:", results);


    //extract weight data data in HTML
    const weights = document.querySelectorAll("table.summary tr");

    let total_weight = [];

    weights.forEach(row => {
        const category = row.querySelector("td")?.innerText.trim();
        const weight = row.querySelector("th")?.innerText.trim();

        if (title && score && category) {
            const weight_num = parseFloat(weight.replace("%", "")) / 100
            total_weight.push({category, weight_num});
        }
    });

    console.log(total_weight);
}