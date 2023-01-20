(function () {
  const inputval = document.querySelector("#cityinputW");
  const btn = document.querySelector("#addW");
  const city = document.querySelector("#cityoutputW");
  const temp = document.querySelector("#tempW");
  const wind = document.querySelector("#windW");

  apik = "3045dd712ffe6e702e3245525ac7fa38";

  function convertion(val) {
    return (val - 273).toFixed(2);
  }

  btn.addEventListener("click", async function () {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputval.value +
        "&appid=" +
        apik
    );

    const data = await res.json();

    function final(data) {
      const nameval = data["name"];
      const tempature = data["main"]["temp"];
      const wndspd = data["wind"]["speed"];
      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
    }

    final(data);
  });
})();
