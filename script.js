const title = document.getElementById("title");
const counter = document.getElementById("counter");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");

let count = 0;

decrease.onclick = () =>
{
    count--;
    counter.innerText = count;
};

reset.onclick = () =>
{
    count = 0;
    counter.innerText = count;
};

increase.onclick = () =>
{
    count++;
    counter.innerText = count;
};