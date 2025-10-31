function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
        return "Please enter valid weight and height.";
    }
    const bmi = weight / (height * height);
    return `Your BMI is ${bmi.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bmi-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const bmiResult = calculateBMI(weight, height);
        result.textContent = bmiResult;
    });
});