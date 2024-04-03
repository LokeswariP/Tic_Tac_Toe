let a = document.querySelectorAll(".single");
let b = document.getElementsByClassName("reset");
let x = true;
let count = 0;

a.forEach((single) => {
    single.addEventListener("click", () => {
        if (x == true) {
            single.innerText = "x";
            x = false;
        } else {
            single.innerText = "o";
            x = true;
        }
        single.disabled = true;
        winner();
        checkDraw();
    })
})

const win = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8],
];

const winner = () => {
    for (let arr of win) {
        let pos1 = a[arr[0]].innerText;
        let pos2 = a[arr[1]].innerText;
        let pos3 = a[arr[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("winner", pos1);
               let d = document.getElementById("over");
d.innerText = `Winner is ${pos1} 😎`;
                a.forEach((butt) => {
                    butt.disabled = "true";
                });
                break;
            }
        }
    }
}

    
