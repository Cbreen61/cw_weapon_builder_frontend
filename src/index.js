const BASE_URL = "http://[::1]:3000/api/v1/weapons"

document.addEventListener('DOMContentLoaded', ()=>{
    getWeapons();
    createWeaponForm();

})


function getWeapons(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(weapons => {
        for (const weapon of weapons){
            let newWeapon = new Weapon(weapon.id, weapon.name, weapon.weapon_type, weapon.image, weapon.attachments.muzzle, weapon.attachments.barrel, weapon.attachments.laser, weapon.attachments.optic, weapon.attachments.stock, weapon.attachments.underbarrel, weapon.attachments.ammunition, weapon.attachments.rear_grip, weapon.attachments.perk, weapon.game)
            
            newWeapon.renderWeapon();
        }
    })
}
function createWeaponForm(){
    let weaponsForm = document.getElementById("weapons-form")

    weaponsForm.innerHTML += 
    `<form>
    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="input-name">Weapon Name</label>
        <input id="input-name" type="text" value="" placeholder="Enter weapon name" class="form-control">
      </div>
      <div class="form-group col-md-4">
        <label for="input-weapon_type">Weapon Type</label>
        <input id="input-weapon_type" type="text" value="" placeholder="Enter weapon type" class="form-control">
      </div>
      <div class="form-group col-md-4">
        <label for="input-image">Image</label>
        <input id="input-image" type="text" value="" placeholder="Enter weapon image"  class="form-control">
      </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-3">
            <label for="input-muzzle">Muzzle</label>
        <input id="input-muzzle" type="text" value="" placeholder="Enter muzzle"  class="form-control">
        </div>
      <div class="form-group col-md-3">
        <label for="input-barrel">Barrel</label>
        <input id="input-barrel" type="text" value="" placeholder="Enter barrel"  class="form-control">
      </div>
      <div class="form-group col-md-3">
        <label for="input-laser">Laser</label>
        <input id="input-laser" type="text" value="" placeholder="Enter laser" class="form-control">
      </div>
      <div class="form-group col-md-3">
        <label for="input-optic">Optic</label>
        <input id="input-optic" type="text" value="" placeholder="Enter optic" class="form-control">
      </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-3">
            <label for="input-stock">Stock</label>
            <input id="input-stock" type="text" value="" placeholder="Enter stock"  class="form-control">
        </div>
      <div class="form-group col-md-3">
        <label for="input-underbarrel">Underbarrel</label>
        <input id="input-underbarrel" type="text" value="" placeholder="Enter underbarrel"  class="form-control">
      </div>
      <div class="form-group col-md-3">
        <label for="input-ammunition">Ammunition</label>
        <input id="input-ammunition" type="text" value="" placeholder="Enter ammunition" class="form-control">
      </div>
      <div class="form-group col-md-3">
        <label for="input-rear_grip">Rear Grip</label>
        <input id="input-rear_grip" type="text" value="" placeholder="Enter rear grip" class="form-control">
      </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-3">   
            <label for="input-perk">Perk</label>
            <input id="input-perk" type="text" value="" placeholder="Enter perk" class="form-control">
        </div>
        <div class="form-group col-md-6">
            <label for="games">Game</label>
            <select id="games" class="form-control">
                <option value="1">WarZone</option>
                <option value="2">Black-Ops Cold War</option>
            </select>
        </div>
    </div>
        
    <input id= 'create-button' type="submit" name="submit" value="Create New Weapon" class="btn btn-dark">
  </form>`
  weaponsForm.addEventListener("submit", weaponsFormSubmission)
}

function weaponsFormSubmission(){
    event.preventDefault();
    let nameInput = document.getElementById('input-name').value
    let wtInput = document.getElementById('input-weapon_type').value
    let imageInput = document.getElementById('input-image').value
    let muzzleInput = document.getElementById('input-muzzle').value
    let barrelInput = document.getElementById('input-barrel').value
    let laserInput = document.getElementById('input-laser').value
    let opticInput = document.getElementById('input-optic').value
    let stockInput = document.getElementById('input-stock').value
    let underbarrelInput = document.getElementById('input-underbarrel').value
    let ammunitionInput = document.getElementById('input-ammunition').value
    let reargripInput = document.getElementById('input-rear_grip').value
    let perkInput = document.getElementById('input-perk').value
    let gameID = parseInt(document.getElementById('games').value)

    let weapon = {
        name: nameInput,
        weapon_type: wtInput,
        image: imageInput,
        muzzle: muzzleInput,
        barrel: barrelInput,
        laser: laserInput,
        optic: opticInput,
        stock: stockInput,
        underbarrel: underbarrelInput,
        ammunition: ammunitionInput,
        rear_grip: reargripInput,
        perk:perkInput,
        game_id: gameID
    }
    fetch(BASE_URL,{
            method: "POST",
            headers: {"Content-Type":"application/json"
            },
            body: JSON.stringify(weapon)
        })
    .then(resp => resp.json())
    .then(weapon =>{
        let newWeapon = new Weapon(weapon.id, weapon.name, weapon.weapon_type, weapon.image, weapon.attachments.muzzle, weapon.attachments.barrel, weapon.attachments.laser, weapon.attachments.optic, weapon.attachments.stock, weapon.attachments.underbarrel, weapon.attachments.ammunition, weapon.attachments.rear_grip, weapon.attachments.perk, weapon.game)
            
            newWeapon.renderWeapon();
    })
    this.innerHTML +=''
    
}

function deleteWeapon(){
    let weaponId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/${weaponId}`, {
        method:'DELETE'
    })
    this.location.reload()
}
