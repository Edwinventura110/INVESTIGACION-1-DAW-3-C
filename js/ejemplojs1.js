const obj = {
    name: 'pepe',
    age: 27,
    country: 'spain'
};

const result = {
    ...obj,
    country: 'france'
}

// result: {
//      name: pepe,
//      age: 27,
//      country: 'france' 
// }