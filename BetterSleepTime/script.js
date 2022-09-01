const color = [
    "white",
    "red",
    "white",
    "red",
    "white",
    "red"
]

function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";

    let hours = document.getElementById('hours')
    hours.innerHTML = ""


    let now = new Date();

    // 14 minutes to fall asleep
    now.setMinutes(now.getMinutes() + 14);

    for (let i = 1; i <= 6; i++) {
        now.setMinutes(now.getMinutes() + 90);
        let elm = document.createElement("div")
        elm.innerText = now.toLocaleTimeString("en-us", { timeStyle: "short" });
        elm.style.color = color[i];
        hours.appendChild(elm);
    }

}