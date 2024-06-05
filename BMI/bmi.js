function calculateBMI() {

    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;


    const bmi = (weight / (height * height)).toFixed(2);

    let resultMessage = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resultMessage += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultMessage += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultMessage += "You are overweight.";
    } else {
        resultMessage += "You are obese.";
    }

    document.getElementById('result').innerText = resultMessage;
}