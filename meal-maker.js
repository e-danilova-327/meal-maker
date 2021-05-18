const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizer) {
        this._courses.appetizers.push(appetizer);
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(main) {
        this._courses.mains.push(main);
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessert) {
        this._courses.desserts.push(dessert);
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        console.log(dishes, courseName);
        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        let appetizer = getRandomDishFromCourse('appetizers');
        let main = getRandomDishFromCourse('mains');
        let dessert = getRandomDishFromCourse('desserts');
        let totalCost = appetizer.price + main.price + dessert.price;
        return `You ordered ${appetizer.name}, ${main.name} and ${dessert.name}. The total cost of all this is ${totalCost} USD.`;
    },
};

menu.addDishToCourse('appetizer', 'bruschette', 15);
menu.addDishToCourse('appetizer', 'cheese plate', 20);
menu.addDishToCourse('appetizer', 'veggie bowl', 23);
menu.addDishToCourse('main', 'cream soup', 40);
menu.addDishToCourse('main', 'pork chop', 55);
menu.addDishToCourse('main', 'vegetable soup', 38);
menu.addDishToCourse('dessert', 'cherry pie', 20);
menu.addDishToCourse('dessert', 'cinnabons', 35);
menu.addDishToCourse('dessert', 'banana bread', 15);

let meal = menu.generateRandomMeal();
console.log(meal);
