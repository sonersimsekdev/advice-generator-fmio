let adviceText = document.querySelector("#advice");
let adviceId = document.querySelector("#advice-id");
let fetchData;
const widthOutput = document.querySelector("#width");

window.onload = function () {
  fetchData();
};
window.onresize = function () {
  //console.log(window.screen.width);
  if (window.screen.width < 376) {
    document.querySelector("#divider-svg").src =
      "/assets/images/pattern-divider-mobile.svg";
  } else if (window.screen.width >= 376) {
    document.querySelector("#divider-svg").src =
      "/assets/images/pattern-divider-desktop.svg";
  }
};

try {
  fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => changeAdvice(data))
      .catch((err) => console.error(err));
  };
  function changeAdvice(data) {
    //console.log(data);
    adviceText.textContent = "Loading..."; //loading helper text
     setTimeout(() => {
      adviceId.textContent = `ADVICE - #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
    }, 1000);
    
  }
} catch (err) {
  console.log(err);
}
