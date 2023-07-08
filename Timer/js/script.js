const timerForm = document.getElementById('timerForm');
const timerRestS = document.getElementById('timerRestS');
const timerRestM = document.getElementById('timerRestM');
const timerRestH = document.getElementById('timerRestH');
const stopButton = document.getElementById("stopButton")

timerForm.addEventListener('submit', formHandler);

function formHandler(){
    event.preventDefault();
    const intervalValue = +document.getElementById('interval').value;
    let interValid;
    let newInterval = intervalValue;
    if (typeof intervalValue === 'number' && intervalValue > 0){
        interValid = setInterval(() => {
            if (newInterval >= 3600){
                timerRestH.style.display = "block";
                timerRestM.style.display = "block";
                stopButton.style.display = "block";
                newInterval--;
                let rest1 = newInterval%3600;
                timerRestH.innerText = `${(newInterval - rest1)/3600} h.`;
                timerRestM.innerText = `${(rest1-rest1%60)/60} m.`;
                timerRestS.innerText = `${rest1%60} s.`;
                if (newInterval <= 0) {
                    alert("Час вийшов!");
                    clearInterval(interValid); 
                    stopButton.style.display = "none";  
                }
            } else if (60 < newInterval < 3600){
                timerRestM.style.display = "block";
                stopButton.style.display = "block";
                newInterval--;
                let rest2 = newInterval%60;
                timerRestM.innerText = `${(newInterval - rest2)/60} m.`;
                timerRestS.innerText = `${rest2} s.`;
                if (newInterval <= 0) {
                    alert("Час вийшов!");
                    clearInterval(interValid);
                    stopButton.style.display = "none"; 
                }
            } else if (0 < newInterval <= 60){
                stopButton.style.display = "block";
                newInterval--;
                timerRestS.innerText = `${newInterval} s.`;
                if (newInterval <= 0) {
                    alert("Час вийшов!");
                    clearInterval(interValid);
                    stopButton.style.display = "none";           
                }
            } else {
                clearInterval(interValid);
            }       
        }, 1000);
    }
}


