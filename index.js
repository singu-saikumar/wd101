

let userForm=document.getElementById("userForm");

let retrieve = () => {
    let enter = localStorage.getItem("userEntries");
    if (enter) {
        enter = JSON.parse(enter);
    }
    else{
        enter = [];
    }
    return enter;
}

let entries= retrieve();
let display = () => {
    let enter=retrieve();
    let tableEntries = enter.map((entry) => {
        let nameCell=`<td class="border px-4 py-2">${entry.name}</td>`;
        let emailCell=`<td class="border px-4 py-2">${entry.email}</td>`;
        let passwordCell=`<td class="border px-4 py-2">${entry.password}</td>`;
        let dobCell=`<td class="border px-4 py-2">${entry.dob}</td>`;
        let termsCell=`<td class="border px-4 py-2">${entry.terms}</td>`;

        let row=`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${termsCell}</tr>`;
        return row;

    }).join("\n");

    let table = `<table class="table-auto w-full"><tr>

    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted terms</th>
</tr>${tableEntries} </table>`;

let detail= document.getElementById("userEntries");
detail.innerHTML = table;
}

let savedForm = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let terms = document.getElementById("terms").checked;
    let entry = {
        name,
        password,
        email,
        dob,
        terms
    };

    entries.push(entry);
    localStorage.setItem("userEntries",JSON.stringify(entries) )
    display();
}

userForm.addEventListener("submit",savedForm);
display();
