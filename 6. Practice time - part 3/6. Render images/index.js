// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const containerEl = document.getElementById("container")

function renderTeam(imgs) {
    let html = ""
    for (let i = 0; i < imgs.length; i++){
        html += `
        <img class="team-img" src="${imgs[i]}"> 
        `
    }
    containerEl.innerHTML = html
}

renderTeam(imgs)