`use strict`;

const main = document.querySelector(`#main`)

const reportEx = document.querySelector(`.report`);

reportEx.classList.add(`display-none`);



fetch(`./data.json`).then(res => res.json()).then(data => {

    displayReports(data)

});



const displayReports =function (data) {
    data.forEach(el => {
        
        const report = `
        <div class="report">

            <div class="report-background">
                <div class="background">

                </div>
                <img src="../images/icon-work.svg" alt="">
            </div>

            <div class="report-details">

                <div>
                    <span>${el.title}</span>
                    <img src="../images/icon-ellipsis.svg" alt="#">
                </div>

                <div class="hours">
                    <strong>${el.timeframes.weekly.current}hrs</strong>
                    <span>Last Week - ${el.timeframes.weekly.previous}hrs</span>
                </div>

            </div>

        </div>
        
        `

        main.insertAdjacentHTML(`beforeend`, report)

    })
}