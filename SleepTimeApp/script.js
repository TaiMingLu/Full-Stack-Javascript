// console.log("Hello world ")

// for (let i = 1; i <= 6; i++) {
//     console.log(`Sleep cycle ${i}`);
// }

// let now = new Date();
// console.log(now);
// console.log(now.toLocaleTimeString());
// console.log(now.toLocaleTimeString(
//     "en-us",
//     {
//         timeStyle: "short"
//     }
// ));

// // 14 minutes to fall asleep
// now.setMinutes(now.getMinutes() + 14);

// for (let i = 1; i <= 6; i++) {
//     now.setMinutes(now.getMinutes() + 90);
//     console.log(now.toLocaleTimeString(
//         "en-us",
//         {
//             timeStyle: "short"
//         }
//     ))
// }


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
        hours.innerHTML += (now.toLocaleTimeString(
            "en-us",
            {
                timeStyle: "short"
            }
        )) + "<br />";
    }

}