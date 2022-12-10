


// ZAKRESY

const name = 'Lisa'

const test = () => {
    const name = 'Lily'
    console.log (`NAME W FUNKCJI - ${name}`);

    const age = 23
    console.log(age);

const test2 = () => {
    console.log('---');
    console.log(name);
    console.log(age);
    console.log('---');
const color = 'blue'
console.log(color);
 

 
}
test2()


}





test()

console.log(`NAME poza FUNKCJĄ - ${name}`);

console.log('------')


const numbers = [0.5, 4,'abc']
const names =  ['lisa', 'lily', 'Adam', 'przemek']

numbers.forEach(number => console.log(number *number))

const bigNames = names.map(name => name.toUpperCase())
console.log(bigNames);


const showBigNames = (name) => {
    console.log(name.toUpperCase());
}



names.forEach(showBigNames);      

console.log('------')

names.forEach(name => console.log(name.toUpperCase()));
