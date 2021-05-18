const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
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
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalCost = main.price + dessert.price + appetizer.price;
        return `You ordered ${appetizer.name}, ${main.name} and ${dessert.name}. The total cost of all this is ${totalCost}$.`;
    },
};

menu.addDishToCourse('appetizers', 'bruschette', 15);
menu.addDishToCourse('appetizers', 'cheese plate', 20);
menu.addDishToCourse('appetizers', 'veggie bowl', 23);
menu.addDishToCourse('mains', 'cream soup', 40);
menu.addDishToCourse('mains', 'pork chop', 55);
menu.addDishToCourse('mains', 'vegetable soup', 38);
menu.addDishToCourse('desserts', 'cherry pie', 20);
menu.addDishToCourse('desserts', 'cinnabons', 35);
menu.addDishToCourse('desserts', 'banana bread', 15);

let meal = menu.generateRandomMeal();
console.log(meal);
