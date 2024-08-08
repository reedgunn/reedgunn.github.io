document.addEventListener("DOMContentLoaded", (event) => {
    let increment = 255/6;
    for (let i = 0; i <= 255; i += increment) {
        for (let j = 0; j <= 255; j += increment) {
            for (let k = 0; k <= 255; k += increment) {
                const newDiv = document.createElement("div");
                newDiv.classList.add("color-square");
                newDiv.style.backgroundColor = `rgb(${i}, ${j}, ${k})`;
                if (i+j+k >= 382.5) {
                    newDiv.style.color = `Black`;
                } else {
                    newDiv.style.color = `White`;
                }
                newDiv.innerHTML = `${(i/255 * 100).toFixed(0)}% Red, ${(j/255 * 100).toFixed(0)}% Green, ${(k/255 * 100).toFixed(0)}% Blue`;
                document.querySelector("body").appendChild(newDiv);
            }
        }
    }
});