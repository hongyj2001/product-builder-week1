document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.querySelector('.numbers-container');

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numbersContainer.innerHTML = '';
        numbers.forEach(number => {
            const numberBall = document.createElement('div');
            numberBall.className = 'number-ball';
            numberBall.textContent = number;
            numbersContainer.appendChild(numberBall);
        });
    }

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    // Initial generation
    const initialNumbers = generateLottoNumbers();
    displayNumbers(initialNumbers);
});