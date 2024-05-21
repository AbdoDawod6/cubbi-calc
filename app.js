document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calcForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const inputValue = parseFloat(document.getElementById('inputNumber').value);
        const jdhd = calculateResults(inputValue); // Your calculation function
        displayResults(jdhd);
    });
});

function calculateResults(input) {
    // Your calculation logic here, returning an array of 3 numbers
    const cubbi_meals =  Math.round(input * 11.95);
    const cubbi_delivery = 20;
    const cubbi = [cubbi_meals, cubbi_delivery, 0, 0]

    const skip_meals = Math.round(input * 15.49);
    const skip_delivery = 3;
    const skip_fees = 2.5;
    const skip_tip = Math.round(0.15 * (skip_meals + skip_delivery + skip_fees));
    const skip = [skip_meals, skip_delivery, skip_fees, skip_tip]

    const uber_meals = Math.round(input * 15.49);
    const uber_delivery = 1.99;
    const uber_fees = 3;
    const uber_tip = Math.round(0.15 * (uber_meals + uber_delivery + uber_fees));
    const uber = [uber_meals, uber_delivery, uber_fees, uber_tip]
    console.log(uber)


    const in_person_meals = Math.round(input * 14);
    const in_person = [in_person_meals, 0, 0, 0]

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
    number.textContent = "$" + (result[0] + result[1] + result[2] + result[3]);
    resultBox.appendChild(number);

    const text = document.createElement('p');
    text.textContent = '\r\nPrice breakdown:\r\n- Meal: $' + result[0] + '\r\n- Delivery: $' + result[1] + '\r\n- Other Fees: $' + result[2] + '\r\n- Suggested Tip: $' + result[3];
    resultBox.appendChild(text);

    return resultBox;
}
