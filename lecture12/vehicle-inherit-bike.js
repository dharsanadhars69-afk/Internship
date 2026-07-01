class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log("Brand:", this.brand);
    }
}

class Bike extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    display() {
        this.showBrand();
        console.log("Model:", this.model);
    }
}

let bike1 = new Bike("Yamaha", "R15");
bike1.display();