class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    display() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
    }
}

let car1 = new Car("Toyota", "Innova");
car1.display();