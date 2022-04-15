let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count+' - ';
    saveEl.innerText+=countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


