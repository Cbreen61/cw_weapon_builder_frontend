const BASE_URL = "http://[::1]:3000/api/v1/weapons"

document.addEventListener('DOMContentLoaded', ()=>{
    getWeapons()

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