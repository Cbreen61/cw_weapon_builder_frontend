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
        return `
             <div data-id=${this.id}>
                <h2>${this.name}</h2>
                <img src=${this.image}>
                <li>Weapon Type:${this.weapon_type}</li>
                <li>Muzzle:${this.muzzle || ""}</li>
                <li>Barrel:${this.barrel || ""}</li>
                <li>Laser:${this.laser || ""}</li>
                <li>Optic:${this.optic || ""}</li>
                <li>Stock:${this.stock || ""}</li>
                <li>Underbarrel:${this.underbarrel || ""}</li>
                <li>Ammunition:${this.ammunition || ""}</li>
                <li>Rear Grip:${this.rear_grip || ""}</li>
                <li>Perk:${this.perk || ""}</li>
                <li>Game:${this.game.name || ""}</li>
            </div>`;
    
    }

    


}
Weapon.all = [];