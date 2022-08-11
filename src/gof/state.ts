enum WeaponName {
    GUN = 'gun',
    SCROD = 'scrod',
    CANNON = 'cannon',
    DEFAULT = 'default',
}
enum WeaponState {
    BRAND_NEW = 'brand new',
    new = 'new',
    good = 'good',
    old = 'old',
    damaged = 'damaged',
}

const WeaponInfo: Record<WeaponName, { damage: number; durability: number }> = {
    [WeaponName.CANNON]: {
        damage: 100,
        durability: 50,
    },
    [WeaponName.GUN]: {
        damage: 20,
        durability: 50,
    },
    [WeaponName.SCROD]: {
        damage: 10,
        durability: 15,
    },
    [WeaponName.DEFAULT]: {
        damage: 5,
        durability: 5,
    },
};

abstract class Weapon {
    protected name: WeaponName;
    protected damage: number;
    protected durability: number;
    constructor(name?: WeaponName) {
        this.name = name ?? WeaponName.DEFAULT;
        this.damage = WeaponInfo[this.name].damage;
        this.durability = WeaponInfo[this.name].durability;
    }
    private calcDurabilityState(): WeaponState {
        if (this.durability === WeaponInfo[this.name].durability) return WeaponState.BRAND_NEW;
        if (this.durability >= WeaponInfo[this.name].durability * 0.85) return WeaponState.new;
        if (this.durability >= WeaponInfo[this.name].durability * 0.5) return WeaponState.good;
        if (this.durability >= WeaponInfo[this.name].durability * 0.1) return WeaponState.old;
        return WeaponState.damaged;
    }
    public showState() {
        const state: WeaponState = this.calcDurabilityState();
        const damage: number = [WeaponState.BRAND_NEW, WeaponState.good, WeaponState.new].includes(state)
            ? WeaponInfo[this.name].damage
            : [WeaponState.old].includes(state)
            ? 0.7 * WeaponInfo[this.name].damage
            : 0;
        console.log({ name: this.name, state, damage });
    }
    public abstract useWeapon(): void;
}

class Gun extends Weapon {
    public useWeapon(): void {
        this.durability -= 1;
        console.log(`Gun causes ${this.damage} points damage`);
    }
    constructor() {
        super(WeaponName.GUN);
    }
}
class Scrod extends Weapon {
    public useWeapon(): void {
        this.durability -= 1;
        console.log(`Scrod causes ${this.damage} points damage`);
    }
    constructor() {
        super(WeaponName.SCROD);
    }
}
class Cannon extends Weapon {
    public useWeapon(): void {
        this.durability -= 1;
        this.durability = Math.max(0, this.durability);
        console.log(`Cannon causes ${this.damage} points damage`);
    }
    constructor() {
        super(WeaponName.CANNON);
    }
}

class Soldier {
    private currentWeapon: Weapon | undefined;
    public chooseWeapon(weapon: Weapon) {
        this.currentWeapon = weapon;
    }
    public useWeapon() {
        if (!this.currentWeapon) return console.log('This soldier has no weapon');
        this.currentWeapon?.showState();
        this.currentWeapon?.useWeapon();
    }
}
const main = () => {
    const gun = new Gun();
    const cannon = new Cannon();
    const scrod = new Scrod();
    const soldier = new Soldier();
    soldier.useWeapon();
    soldier.chooseWeapon(scrod);
    soldier.useWeapon();
    soldier.chooseWeapon(cannon);
    soldier.useWeapon();
    soldier.chooseWeapon(gun);
    soldier.useWeapon();
};

main();
