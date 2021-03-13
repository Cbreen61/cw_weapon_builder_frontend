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
        return`
        <div class="col-md-4">
         <div class="card mb-4 shadow-sm">
         <img src="${this.image}" class="card-img-top" alt="...">

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
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">${this.game.name}</small>
            </div>
          </div>
        </div>
      </div>
        `


        // return `
        //      <div data-id=${this.id}>
        //         <h2>${this.name}</h2>
        //         <img src=${this.image}>
        //         <li>Weapon Type:${this.weapon_type}</li>
        //         <li>Muzzle:${this.muzzle || ""}</li>
        //         <li>Barrel:${this.barrel || ""}</li>
        //         <li>Laser:${this.laser || ""}</li>
        //         <li>Optic:${this.optic || ""}</li>
        //         <li>Stock:${this.stock || ""}</li>
        //         <li>Underbarrel:${this.underbarrel || ""}</li>
        //         <li>Ammunition:${this.ammunition || ""}</li>
        //         <li>Rear Grip:${this.rear_grip || ""}</li>
        //         <li>Perk:${this.perk || ""}</li>
        //         <li>Game:${this.game.name || ""}</li>
        //     </div>`;
    
    }

    


}
Weapon.all = [];