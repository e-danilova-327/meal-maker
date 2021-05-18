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
        this._courses.appetizers = appetizer;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessert) {
        this._courses.desserts = dessert;
    },
    get courses() {
        return Object.keys(this._courses);
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice,
        };
        if (courseName === 'appetizers') {
            this.appetizers.push(dish);
        } else if (courseName === 'mains') {
            this.mains.push(dish);
        } else if (courseName === 'desserts') {
            this.desserts.push(dish);
        }
    },
    getRandomDishFromCourse(courseName) {
        let dishes = Object.values(menu._courses);

        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse(this.appetizers);
        let main = this.getRandomDishFromCourse(this.mains);
        let dessert = this.getRandomDishFromCourse(this.desserts);
        const totalPrice = () => {
            let appetizerCost = appetizer * price;
            let mainCost = main * price;
            let dessertCost = dessert * price;
            let totalCost = appetizerCost + mainCost + dessertCost;
            return totalCost;
        };
        const total = totalPrice();
        return `You ordered ${appetizer}, ${main} and ${dessert}. The total cost of all this is ${total} USD.`;
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
