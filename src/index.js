setInterval(function () {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDate = londonElement.querySelector(".date");
    let londonTime = londonElement.querySelector(".time");
    let londonEurope = moment().tz("Europe/London");
    londonDate.innerHTML = londonEurope.format("Do MMMM YYYY");
    londonTime.innerHTML = londonEurope.format("h:mm:ss [<small>]a[</small>]");
  }

  //Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDate = melbourneElement.querySelector(".date");
    let melbourneTime = melbourneElement.querySelector(".time");
    let melbourneAustralia = moment().tz("Australia/Melbourne");
    melbourneDate.innerHTML = melbourneAustralia.format("Do MMMM YYYY");
    melbourneTime.innerHTML = melbourneAustralia.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]a[</small>]"
        )}</div>
            </div> 
            `;
}

let citySelectElement = document.querySelector("#selectCity");
citySelectElement.addEventListener("change", updateCity);
