`use strict`;

const main = document.querySelector(`#main`);
const reportEx = document.querySelector(`.report`);

const daily = document.querySelector(`#daily`);
const weekly = document.querySelector(`#weekly`);
const monthly = document.querySelector(`#monthly`);
const inpArray = Array.from(document.querySelectorAll(`.inp`));
const lbArray = Array.from(document.querySelectorAll(`.lb`));

lbArray[1].classList.add(`color-white`)


// inpArray.forEach((el,i) => {
//     if(el.checked) {
//         lbArray[i].classList.add(`white-color`);
//     }
// })

reportEx.classList.add(`display-none`);

fetch(`./data.json`).then(res => res.json()).then(data => {

    displayReports(data);

    const currentHrs = Array.from(document.querySelectorAll(`.current-hours`));
    const previousHrs = Array.from(document.querySelectorAll(`.previous-hours`));


    inpArray.forEach(el => {
        el.addEventListener(`click`, () => {      
            
            inpArray.forEach((el,i) => {
                if(el.checked) {
                    lbArray[i].classList.add(`color-white`);
                } else {
                    lbArray[i].classList.remove(`color-white`);
                }
            })
            
    
            if(daily.checked) {
                data.forEach((el, i) => {
                    currentHrs[i].textContent = `${data[i].timeframes.daily.current}hrs`
                    previousHrs[i].textContent = `Last Week - ${data[i].timeframes.daily.previous}hrs`
                
                })                
            } else if (monthly.checked) {
                data.forEach((el, i) => {
                    currentHrs[i].textContent = `${data[i].timeframes.monthly.current}hrs`
                     previousHrs[i].textContent = `Last Week - ${data[i].timeframes.monthly.previous}hrs`
                })
            } else {
                data.forEach((el, i) => {
                    currentHrs[i].textContent = `${data[i].timeframes.weekly.current}hrs`
                     previousHrs[i].textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
                })
            }
        })
    })



});




const displayReports =function (data) {
    data.forEach(el => {
        
        const report = `
        <div class="report">

            <div class="report-background">
                <div class="background ${el.background}-background">

                </div>
                <img src="../images/icon-${el.class}.svg" alt="">
            </div>

            <div class="report-details">

                <div>
                    <span>${el.title}</span>
                    <img src="../images/icon-ellipsis.svg" alt="#">
                </div>

                <div class="hours">
                    <strong class="current-hours">${el.timeframes.weekly.current}hrs</strong>
                    <span class="previous-hours" >Last Week - ${el.timeframes.weekly.previous}hrs</span>
                </div>

            </div>

        </div>
        
        `

        main.insertAdjacentHTML(`beforeend`, report)

    })
}