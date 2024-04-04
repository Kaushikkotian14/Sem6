window.onload = function () {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var addButton = document.getElementById("add");
    var subtractButton = document.getElementById("subtract");
    var multiplyButton = document.getElementById("multiply");
    var divideButton = document.getElementById("divide");
    var resultDiv = document.getElementById("result");
    addButton.addEventListener("click", function () { return performOperation('add'); });
    subtractButton.addEventListener("click", function () { return performOperation('subtract'); });
    multiplyButton.addEventListener("click", function () { return performOperation('multiply'); });
    divideButton.addEventListener("click", function () { return performOperation('divide'); });
    function performOperation(operation) {
        var a = parseFloat(num1.value);
        var b = parseFloat(num2.value);
        var result;
        switch (operation) {
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                if (b === 0) {
                    resultDiv.innerText = "Cannot divide by zero";
                    return;
                }
                result = a / b;
                break;
            default:
                resultDiv.innerText = "Invalid operation";
                return;
        }
        resultDiv.innerText = "Result: ".concat(result);
    }
};
