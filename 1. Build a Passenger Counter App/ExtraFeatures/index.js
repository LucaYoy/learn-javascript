let count = 0;
let totalPeople = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el"); 

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    totalPeople += count
    countEl.textContent = 0;
    count = 0;
}

function end() {
    saveEl.textContent = "Previous entries: ";
    totalEl.textContent += totalPeople + ' - ';
    totalPeople = 0;
}

console.log("Let's count people on the subway!");
