const BASE_URL = "http://[::1]:3000/api/v1/weapons"

document.addEventListener('DOMContentLoaded', ()=>{
    getWeapons();
    createForm();

})

function getWeapons(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(weapons => {
        weapons.forEach(weapon => {
            const weaponMarkup = `
            <div data-id=${weapon.id}>
            <p>${weapon.name}</p>
            <p>${weapon.weapon_type}<p>
            <img src=${weapon.image}>
            <li>${weapon.attachments.laser}</li>
            <li>${weapon.game.name}</li>
            </div>`;

            document.querySelector('#weapons-container').innerHTML += weaponMarkup
            
        })
    })
}

function createForm(){
    let weaponsForm = document.getElementById("weapons-form")

    weaponsForm.innerHTML +=
    `
    <form>
        <label> Name:</label><input type="text" id= "name"><br>
        <label> Image:</label><input type="text" id= "image"><br>
        <input type="submit" value="Add Weapon">
    </form>
    `
    weaponsForm.addEventListener("submit", weaponsFormSubmission)
}
function weaponsFormSubmission(){
    event.preventDefault();
    let name = document.getElementById("name").value
    let image = document.getElementById("image").value
    
    let weapon = {
        name: name,
        image: image
    }

    fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(weapon)
    })
    .then(resp => resp.json())
    .then(weapon => {
        let w = new Weapon(weapon.id, weapon.name, weapon.image);
    })
}