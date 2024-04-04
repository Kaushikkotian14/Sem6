var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creature = /** @class */ (function () {
    function Creature(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
    }
    Creature.prototype.display = function () {
        console.log("This creature is a ".concat(this.name, ". It's a ").concat(this.creatureType, "."));
    };
    Creature.prototype.getCreatureType = function () {
        return this.creatureType;
    };
    return Creature;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name, "Dog") || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    Dog.prototype.showCreatureType = function () {
        console.log("The creature type is ".concat(this.getCreatureType(), "."));
    };
    return Dog;
}(Creature));
var myDog = new Dog("Golden Retriever");
myDog.display(); // Display the type and name of creature
myDog.makeSound(); // Make a sound specific to the Dog class
myDog.showCreatureType(); // Show creature type using a protected method
