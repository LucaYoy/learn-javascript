// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    count = count + 1
    countEl.innerText = count
}


