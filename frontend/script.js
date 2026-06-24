const API_URL =
    "http://localhost:3000";

async function addEmployee(){

    const name =
        document.getElementById("name").value;

    const response =
        await fetch(
            `${API_URL}/employee`,
            {
                method:"POST",
                headers:{
                    "Content-Type":
                    "application/json"
                },
                body:JSON.stringify({
                    name:name
                })
            }
        );

    const result =
        await response.json();

    alert(result.message);

    loadEmployees();
}

async function loadEmployees(){

    const response =
        await fetch(
            `${API_URL}/employees`
        );

    const employees =
        await response.json();

    let html = "";

    employees.forEach(emp => {

        html += `<li>${emp.name}</li>`;

    });

    document.getElementById(
        "employeeList"
    ).innerHTML = html;
}

loadEmployees();