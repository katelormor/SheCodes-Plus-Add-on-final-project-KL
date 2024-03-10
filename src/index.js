setInterval(function () {
  //London
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let londonEurope = moment().tz("Europe/London");
  londonDate.innerHTML = londonEurope.format("Do MMMM YYYY");
  londonTime.innerHTML = londonEurope.format("h:mm:ss [<small>]a[</small>]");

  //Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDate = melbourneElement.querySelector(".date");
  let melbourneTime = melbourneElement.querySelector(".time");
  let melbourneAustralia = moment().tz("Melbourne/Australia");
  melbourneDate.innerHTML = melbourneAustralia.format("Do MMMM YYYY");
  melbourneTime.innerHTML = melbourneAustralia.format(
    "h:mm:ss [<small>]a[</small>]"
  );
}, 1000);
