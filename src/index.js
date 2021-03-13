const BASE_URL = "http://[::1]:3000/api/v1/weapons"

document.addEventListener('DOMContentLoaded', ()=>{
    getWeapons();

    const createWeaponForm = document.querySelector("#create-weapon-form")

    createWeaponForm.addEventListener("submit", (e) =>
    createFormHandler(e))

})


function getWeapons(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(weapons => {
        weapons.forEach(weapon => {
            console.log(weapon)
            let newWeapon = new Weapon(weapon.id, weapon.name, weapon.weapon_type, weapon.image, weapon.attachments.muzzle, weapon.attachments.barrel, weapon.attachments.laser, weapon.attachments.optic, weapon.attachments.stock, weapon.attachments.underbarrel, weapon.attachments.ammunition, weapon.attachments.rear_grip, weapon.attachments.perk, weapon.game)
            
            document.querySelector('#weapons-container').innerHTML +=
            newWeapon.renderWeapon()
        })
    })
}


function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const wtInput = document.querySelector('#input-weapon_type').value
    const imageInput = document.querySelector('#input-image').value
    const muzzleInput = document.querySelector('#input-muzzle').value
    const barrelInput = document.querySelector('#input-barrel').value
    const laserInput = document.querySelector('#input-laser').value
    const opticInput = document.querySelector('#input-optic').value
    const stockInput = document.querySelector('#input-stock').value
    const underbarrelInput = document.querySelector('#input-underbarrel').value
    const ammunitionInput = document.querySelector('#input-ammunition').value
    const reargripInput = document.querySelector('#input-rear_grip').value
    const perkInput = document.querySelector('#input-perk').value
    const gameID = parseInt(document.querySelector('#games').value)
    weaponFetch(nameInput, wtInput, imageInput, muzzleInput, barrelInput, laserInput, opticInput, stockInput, underbarrelInput, ammunitionInput, reargripInput, perkInput, gameID)
    
}
function weaponFetch(name,weapon_type, image, muzzle, barrel, laser, optic, stock, underbarrel, ammunition, rear_grip, perk, game_id){
    const data = {name,weapon_type, image, muzzle, barrel, laser, optic, stock, underbarrel, ammunition, rear_grip, perk, game_id}
    
    fetch(BASE_URL,{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(weapon =>{ 
        let newWeapon = new Weapon(weapon.id, weapon.name, weapon.weapon_type, weapon.image, weapon.muzzle, weapon.barrel, weapon.laser, weapon.optic, weapon.stock, weapon.underbarrel, weapon.ammunition, weapon.rear_grip, weapon.perk, weapon.game)

        document.querySelector('#weapons-container').innerHTML +=
            newWeapon.renderWeapon()
    })
    globalThis.location.reload();
}
