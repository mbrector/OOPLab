class Cat{
constructor(name, color){
    this.name = name
    this.color = color
}
meow(){
    this.meowing= true
    return 'meowing'
}
fetch(){
    this.fetching = true
    return 'fetching'
}
}

abby = new Cat('abby', 'tabby')
ellie = new Cat('ellie', 'grey')

console.log(abby, ellie)
console.log(ellie.fetch())
console.log(abby.meow())

let cats = [{'sally': 'orange'}, {'bob': 'yellow'}, {'fluffy': 'white'}, {'frank': 'orange'}, {'jack': 'black'}, {'screech': 'hairless'}]

console.log(cats[3])