const arrowFunction = () => {

}


function test(name){
    console.log(`mam na imię ${name}`)
}
test(`Klaudia`)



const test2 = (name,age) => console.log(name,age)

test2('Klaudia',23)


const days = ['poniedziałek', 'wtorek', 'sroda']

const days2 = days.forEach(day => console.log(day))