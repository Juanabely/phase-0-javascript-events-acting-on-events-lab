// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        //console.log(e.key)
    moveDodgerLeft();
    }
});
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown',e => {
    console.log(e.key)
    if (e.key === 'ArrowRight'){
        moveDodgerRight();
    }
})
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left + 1}px`;
    }
}
