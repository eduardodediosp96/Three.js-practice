import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <canvas class="webgl"></canvas>
    <script type="module" src="./counter.js"></script>
  </div>
  `;

setupCounter(document.querySelector("#counter"));
// <script type="module" src="/main.js"></script>
