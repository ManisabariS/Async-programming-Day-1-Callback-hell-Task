const countdown = (num, callback) => {
    setTimeout(() => {
        if (num > 0) {
            document.getElementById('countdown').innerText = num;
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);
};

// Display message function
const displayMessage = () => {
    document.getElementById('countdown').innerText = 'Happy Independence Day!';
};

// Start countdown
countdown(10, displayMessage);
