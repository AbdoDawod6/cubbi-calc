document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const inputValue = parseFloat(document.getElementById('inputNumber').value);
        const results = calculateResults(inputValue); // Your calculation function
        displayResults(results);
    });
});

function calculateResults(input) {
    // Your calculation logic here, returning an array of 3 numbers
    const cubbi = input * 2;
    const skip = input + 10;
    const uber = input / 2;
    const in_person = input / 3;
    return [cubbi, skip, uber, in_person];
}

function displayResults(results) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous results

    const resultBox1 = createResultBox(results[0], "cubbi.svg");
    const resultBox2 = createResultBox(results[1], "skip.png");
    const resultBox3 = createResultBox(results[2], "uber_eats.png");
    const resultBox4 = createResultBox(results[3], "in_person.png");

    resultContainer.appendChild(resultBox1);
    resultContainer.appendChild(resultBox2);
    resultContainer.appendChild(resultBox3);
    resultContainer.appendChild(resultBox4);
}

function createResultBox(result, path) {
    const resultBox = document.createElement('div');
    resultBox.classList.add('resultBox');

    const image = document.createElement('img');
    image.src = path;
    // image.alt = `Image ${path}`;
    resultBox.appendChild(image);

    const number = document.createElement('p');
    number.classList.add('bigNumber');
    number.textContent = "$" + result;
    resultBox.appendChild(number);

    const text = document.createElement('p');
    text.textContent = `Price breakdown:`;
    resultBox.appendChild(text);

    return resultBox;
}
