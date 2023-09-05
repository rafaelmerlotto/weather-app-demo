"use strict";
function timer() {
    function creareSecondi(secondi) {
        const data = new Date(secondi * 1000);
        return data.toLocaleTimeString('it-IT', {
            hour12: false,
            timeZone: 'UTC',
            formatMatcher: "best fit",
            minute: 'numeric',
            second: 'numeric'
        });
    }
    const inputElement = document.getElementById("myInput");
    const buttonElement = document.getElementById("myButton");
    if (inputElement && buttonElement) {
        buttonElement.addEventListener("click", () => {
            const inputValue = Number(inputElement.value);
            const orologioTimer = document.querySelector('.timer');
            let secondi = 60 * inputValue;
            let secondiTimer;
            function startTimer() {
                secondiTimer = setInterval(function () {
                    secondi--;
                    orologioTimer.innerHTML = creareSecondi(secondi);
                    if (secondi == 0) {
                        clearInterval(secondiTimer);
                        console.log('timer scaduto');
                    }
                }, 1000);
            }
            if (inputValue < 10) {
                orologioTimer.innerHTML = `0${inputValue}:00`;
            }
            else {
                orologioTimer.innerHTML = `${inputValue}:00`;
            }
            if (inputValue > 60) {
                orologioTimer.innerHTML = `impostazione max 60 min`;
            }
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('reset')) {
                    clearInterval(secondiTimer);
                    orologioTimer.innerHTML = '00:00';
                    orologioTimer.classList.remove('stop');
                    secondi = 60 * inputValue;
                }
                if (el.classList.contains('start')) {
                    orologioTimer.classList.remove('stopped');
                    clearInterval(secondiTimer);
                    startTimer();
                }
                if (el.classList.contains('stop')) {
                    clearInterval(secondiTimer);
                    orologioTimer.classList.add('stopped');
                }
                if (el.classList.contains('stop')) {
                    clearInterval(secondiTimer);
                    orologioTimer.classList.add('stopped');
                }
            });
        });
    }
}
timer();
