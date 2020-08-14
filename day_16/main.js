var person = {
    name : 'name',
    age : '18',
    job : 'develooper',
    country : 'NL',
    vehicles : {
        cars : {
            car_1 : 'Ford',
            car_2 : 'Bugatti',
            car_3 : 'Fiat',
            car_4 : 'Dodge',
        },
        bicycles : {
            bike_1 : 'bike1',
            bike_2 : 'bike2',
        }
    }
}
console.log(person.vehicles.bicycles)


for(let i = 0; i < 100 ; i++) {
    if (i % 5 == 0) {
        console.log('hello i = ' + i);
    }
}

var files = [
    { title : 'if statement', content : 'if statement content'},
    { title : '*array', content : 'array content'},
    { title : 'forEach', content : 'forEach content'},
]

files.forEach((file, i) => {
    console.log(file)
});


var keys = [];

for (keys in person) {
    console.log(Object.values(person))
}
console.log(keys)

console.log(Object.keys(person))



