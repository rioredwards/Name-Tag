'use strict';

// Get HTML Elements
const textBox = document.getElementById('textbox');
const submitBtn = document.getElementById('submit-btn');
const nameDisplay = document.getElementById('name-section');
console.log(textBox);
console.log(submitBtn);
console.log(nameDisplay);

// Display name in Name Tag
submitBtn.addEventListener('click', () => {
    let nameEntry = textBox.value;
    console.log(nameEntry);
    nameDisplay.textContent = nameEntry;
    textBox.value = '';
    console.log(nameEntry);
});
