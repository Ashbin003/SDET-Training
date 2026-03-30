class Car{
    name: string;
    make: string;
    model: number;

    constructor(name: string, make: string, model: number){
        this.name = name;
        this.make = make;
        this.model = model;
    }
}

    const c = new Car("Mercedes Benz", "C- Class", 2026);
    console.log(c.name, c.make, c.model);
