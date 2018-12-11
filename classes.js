// Create custom data structures
// 1. Code-along here
class Spell {
    constructor(name, forgive, type, diff) {
        this.name = name
        this.forgive = forgive
        this.type = type
        this.difficulty = diff
    }
    setDiffuculty(value){
        this.difficulty = value
    }
}
// an instance of the class
let patronus = new Spell({name: 'Partonus', forgive: true, type: 'defense', diff: 7})
// console.log(patronus)
patronus.setDiffuculty(10)
// console.log('new',patronus)

class AttackSpell extends Spell {
    constructor(dam, ...args) {
        super(...args)
        this.type = 'Attack'
        this.dammage = dam
    }
}
let expelliamus = new AttackSpell(7.9, 'Expelliamus', false, 'k', 4)
expelliamus.setDiffuculty(10)
console.log(expelliamus)
// 2. Create your own class



// 3. Refactor to use constructor function for initial values



// 4. 