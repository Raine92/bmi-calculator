function calculateBMI(weight, height) {
    if (height <= 0 || weight <= 0) {
        return "Please enter valid weight and height.";
    }
    const bmi = weight / (height * height);
    return `Your BMI is ${bmi.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bmi-form');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const resultEl = document.getElementById('result');
  const resetBtn = document.getElementById('reset-btn');

  function classify(bmi){
    if (bmi < 18.5) return { cls: 'under', text: 'Underweight' };
    if (bmi < 25)   return { cls: 'normal', text: 'Normal weight' };
    if (bmi < 30)   return { cls: 'over', text: 'Overweight' };
    return { cls: 'obese', text: 'Obesity' };
  }

  function showResult(text, cssClass = '') {
    resultEl.className = `result show ${cssClass}`.trim();
    resultEl.innerHTML = text;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const h = parseFloat(heightInput.value);
    const w = parseFloat(weightInput.value);

    if (!h || h <= 0 || !w || w <= 0) {
      showResult('<span class="value">Invalid input</span><div>Enter positive height and weight.</div>', 'error');
      return;
    }

    const bmi = w / (h * h);
    const bmiStr = bmi.toFixed(2);
    const cat = classify(bmi);

    showResult(`<span class="value">${bmiStr}</span><div>${cat.text}</div>`, cat.cls);
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    resultEl.className = 'result';
    resultEl.textContent = '';
  });
});