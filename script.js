document.addEventListener('DOMContentLoaded', function() {
    // Fare Calculator Logic
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', calculateTotal);

    const fareInputs = document.querySelectorAll('.calculator-panel input[type="number"]');
    fareInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateTotal();
            }
        });
    });

    function calculateTotal() {
        const baseFare = parseFloat(document.getElementById('baseFare').value) || 0;
        const distanceFare = parseFloat(document.getElementById('distanceFare').value) || 0;
        const timeFare = parseFloat(document.getElementById('timeFare').value) || 0;
        const surgeFare = parseFloat(document.getElementById('surgeFare').value) || 0;
        const cancelPenalty = parseFloat(document.getElementById('cancelPenalty').value) || 0;
        const discountPercentage = parseFloat(document.getElementById('discount').value) || 0;

        const totalBeforeDiscount = baseFare + distanceFare + timeFare + surgeFare + cancelPenalty;
        const discountAmount = totalBeforeDiscount * (discountPercentage / 100);
        const totalFare = totalBeforeDiscount - discountAmount;

        document.getElementById('resultBase').textContent = '₱' + baseFare.toFixed(2);
        document.getElementById('resultDistance').textContent = '₱' + distanceFare.toFixed(2);
        document.getElementById('resultTime').textContent = '₱' + timeFare.toFixed(2);
        document.getElementById('resultSurge').textContent = '+₱' + surgeFare.toFixed(2);
        document.getElementById('resultCancel').textContent = '+₱' + cancelPenalty.toFixed(2);
        document.getElementById('resultDiscountValue').textContent = discountPercentage;
        document.getElementById('resultDiscount').textContent = '-₱' + discountAmount.toFixed(2);
        document.getElementById('resultTotal').textContent = '₱' + totalFare.toFixed(2);
    }

    // Distance Converter Logic
    const kilometersInput = document.getElementById('kilometers');

    // Add event listener for input changes on the kilometers field
    kilometersInput.addEventListener('input', convertDistance);

    // Initial calculation when the page loads if kilometers input has a value
    if (kilometersInput.value) {
        convertDistance();
    } else {
        // Optionally, set an initial example value if it's empty
        kilometersInput.value = '1.5';
        convertDistance();
    }

    function convertDistance() {
        const kilometers = parseFloat(kilometersInput.value);

        const meters = kilometers * 1000;
        const amount = kilometers * 15;

        document.getElementById('meters').value = isNaN(meters) ? '' : meters.toFixed(2);
        document.getElementById('amount').textContent = isNaN(amount) ? '0.00' : Math.round(amount).toFixed(2);
    }
});