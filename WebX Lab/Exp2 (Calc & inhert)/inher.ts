interface Animal {
    makeSound(): void;
}

class Creature {
    protected name: string; // Protected: Accessible within this class and derived classes
    private creatureType: string; // Private: Accessible only within this class

    constructor(name: string, creatureType: string) {
        this.name = name;
        this.creatureType = creatureType;
    }

    public display(): void {
        console.log(`This creature is a ${this.name}. It's a ${this.creatureType}.`);
    }

    protected getCreatureType(): string {
        return this.creatureType;
    }
}

class Dog extends Creature implements Animal {
    constructor(name: string) {
        super(name, "Dog");
    }

    public makeSound(): void {
        console.log("Woof! Woof!");
    }

    public showCreatureType(): void {
        console.log(`The creature type is ${this.getCreatureType()}.`);
    }
}

let myDog: Dog = new Dog("Golden Retriever");
myDog.display(); // Display the type and name of creature
myDog.makeSound(); // Make a sound specific to the Dog class
myDog.showCreatureType(); // Show creature type using a protected method
