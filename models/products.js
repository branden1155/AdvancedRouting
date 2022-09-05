//Creates or holds items in an Array for the product List, (has a let declaration, because array changes.)
let products = [
    {id: "1", "slug": "nike-shoe", "name": "Nike Shoe"},
    {id: "2", "slug": "nike-Test-Shoe", "name": "Nike Shoe Testing"}
]

//Returns all Products
const all = () => {
    return products
};
//Finds the product by ID
const find = (id) => {
    return products.find(p => p.id === id)
};
//Creates a Product through forms, this will be done later in the month.
const create = (product) => {
    products.push(product)
    return products
};
//Updates the products information
const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
};
//Removes the product from the list/array
const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
};

//exporting modules
module.exports = { all, find, update, remove, create }