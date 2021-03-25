class Weapon {
    constructor(id, name, weapon_type, image, muzzle, barrel, laser, optic, stock, underbarrel, ammunition, rear_grip, perk, game){
        this.id = id
        this.name = name
        this.weapon_type = weapon_type
        this.image = image
        this.muzzle = muzzle
        this.barrel = barrel
        this.laser = laser
        this.optic = optic
        this.stock = stock
        this.underbarrel = underbarrel
        this.ammunition = ammunition
        this.rear_grip = rear_grip
        this.perk = perk
        this.game = game
        Weapon.all.push(this)

    }

    renderWeapon(){
        let weaponDiv = document.getElementById("weapons-container")   
        weaponDiv.innerHTML +=`     
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="${this.image || "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/warzone/strategy-guide/03c-weapons/03C-WEAPONS-005.jpg"}" class="card-img-top" height="150" width="150" alt="...">

                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${this.weapon_type}</h6>
                    <p>Attachments:</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Muzzle: ${this.muzzle || ""} | Barrel: ${this.barrel || ""}</li>
                        <li class="list-group-item">Laser: ${this.laser || ""} | Optic: ${this.optic || ""}</li>
                        <li class="list-group-item">Ammunition: ${this.ammunition || ""} | Rear Grip: ${this.rear_grip || ""}</li>
                        <li class="list-group-item">Perk: ${this.perk || ""}</li>
                    
                    </ul>
       
            
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${this.game.name}</small>
                </div>
                </div class="d-flex justify-content-between align-items-center">
                    <button class="btn btn-dark btn-sm" data-id=${this.id} onclick="deleteWeapon()">Delete Weapon</button>
                </div>
            </div>`
    
    }

    


}
Weapon.all = [];