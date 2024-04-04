window.onload = () => {
    const num1 = document.getElementById("num1") as HTMLInputElement;
    const num2 = document.getElementById("num2") as HTMLInputElement;
    const addButton = document.getElementById("add") as HTMLButtonElement;
    const subtractButton = document.getElementById("subtract") as HTMLButtonElement;
    const multiplyButton = document.getElementById("multiply") as HTMLButtonElement;
    const divideButton = document.getElementById("divide") as HTMLButtonElement;
    const resultDiv = document.getElementById("result");

    // Define separate functions for each arithmetic operation
    function add(a: number, b: number): number {
        return a + b;
    }

    function subtract(a: number, b: number): number {
        return a - b;
    }

    function multiply(a: number, b: number): number {
        return a * b;
    }

    function divide(a: number, b: number): string | number {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }

    // Function to handle operation
    function performOperation(operation: (a: number, b: number) => string | number) {
        const a = parseFloat(num1.value);
        const b = parseFloat(num2.value);
        const result = operation(a, b);
        resultDiv!.innerText = `Result: ${result}`;
    }

    // Add event listeners for each button, passing the appropriate operation function
    addButton.addEventListener("click", () => performOperation(add));
    subtractButton.addEventListener("click", () => performOperation(subtract));
    multiplyButton.addEventListener("click", () => performOperation(multiply));
    divideButton.addEventListener("click", () => performOperation(divide));
};
