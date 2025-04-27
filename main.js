const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const timer = document.querySelector(".timer");
const text = document.querySelector(".result");

let timerId;
let second;

startButton.addEventListener("click", () => {
  stopButton.classList.remove("visible");
  startButton.classList.add("visible");

  if (timerId) {
    clearInterval(timerId);
  }

  text.innerHTML = "";

  second = 0;
  timer.textContent = second.toFixed(2);
  timer.style.opacity = "1";
  timerId = setInterval(() => {
    second += 0.01; // ★0.01秒ずつ増やす！
    timer.textContent = second.toFixed(2);
  }, 10);

  setTimeout(() => {
    timer.style.opacity = "0";
  }, 3000);
});

stopButton.addEventListener("click", () => {
  timer.style.opacity = "1";
  clearInterval(timerId);
  startButton.classList.remove("visible");
  startButton.textContent = "再挑戦する";
  stopButton.classList.add("visible");

  const result = document.createElement("p");
  result.textContent = `結果:${second.toFixed(2)}秒`;

  const difference = document.createElement("p");
  const differenceValue = Math.abs(10.0 - second);
  const differenceResult = differenceValue.toFixed(2);

  difference.textContent = `誤差は${differenceResult}秒です!`;

  const message = document.createElement("p");
  if (differenceValue > 2.0) {
    message.textContent = "もう一回挑戦する？🧐";
  } else if (differenceValue > 1.0) {
    message.textContent = "惜しい！👏";
  } else if (differenceValue > 0.5) {
    message.textContent = "いい感じ！🥰";
  } else if (differenceValue > 0.1) {
    message.textContent = "天才か？！🥺";
  } else {
    message.textContent = "あなたは神です🎉";
  }

  text.append(result);
  text.append(difference);
  text.append(message);
});
