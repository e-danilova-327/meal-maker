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
        if (courseName === 'appetizers') {
            this._courses.appetizers.push(dish);
        } else if (courseName === 'mains') {
            this._courses.mains.push(dish);
        } else if (courseName === 'desserts') {
            this._courses.desserts.push(dish);
        }
    },
    getRandomDishFromCourse(courseName) {
        let dishes = [];
        if (courseName === 'appetizers') {
            this._courses.appetizers.push(dishes);
        } else if (courseName === 'mains') {
            this._courses.mains.push(dishes);
        } else if (courseName === 'desserts') {
            this._courses.desserts.push(dishes);
        }

        let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        let appetizers = this.getRandomDishFromCourse('appetizers');
        let mains = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');
        let totalCost =
            this.appetizers.price + this.mains.price + this.desserts.price;
        return `You ordered ${appetizers}, ${mains} and ${desserts}. The total cost of all this is ${totalCost} USD.`;
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
