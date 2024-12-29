// Utility function to format currency in INR
function formatCurrency(value) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(value);
}
let final = 0;
// Function to calculate and display the percentage amount
document.getElementById('viewPercentAmount').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('Amount').value); // Entered amount
    const percent = parseFloat(document.getElementById('Percent').value); // Entered percentage

    if (isNaN(amount) || isNaN(percent)) {
        document.getElementById('PercentResult').innerText = "Error: Enter valid numbers for Amount and Percentage.";
        return;
    }

    const percentageAmount = (amount * percent) / 100;
    document.getElementById('PercentResult').innerText = `Percentage Amount: ${formatCurrency(percentageAmount)}`;
});

// Function to add 6000 to the percentage and show total amount (including percentage and ₹6000)
document.getElementById('add6000').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('Amount').value); // Entered amount
    const percent = parseFloat(document.getElementById('Percent').value); // Entered percentage

    if (isNaN(amount) || isNaN(percent)) {
        document.getElementById('after6000').innerText = "Error: Enter valid numbers for Amount and Percentage.";
        return;
    }

    const percentageAmount = (amount * percent) / 100;
    const total = percentageAmount + 6000; // Adding percentage amount and ₹6000 to the original amount
    document.getElementById('after6000').innerText = `Total After Adding ₹6000: ${formatCurrency(total)}`;
    final = percentageAmount
});

// Function to add additional amount to the main amount and calculate total
document.getElementById('addAdditional').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('Amount').value); // Entered amount
    const additional = parseFloat(document.getElementById('Additional').value); // Additional amount

    if (isNaN(amount) || isNaN(additional)) {
        document.getElementById('result').innerText = "Error: Enter valid numbers for Amount and Additional.";
        return;
    }

    const total = final + additional + 6000; // Add the additional amount to the main amount
    document.getElementById('result').innerText = `Total After Adding Additional Amount: ${formatCurrency(total)}`;
});
