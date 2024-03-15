import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first name", type: "number", name: "firstNumber" },
    { message: "Enter second name", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perfrom operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//conditional test
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select Valid Calculator");
}
