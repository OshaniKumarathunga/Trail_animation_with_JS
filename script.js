const bodyEL = document.querySelector("body");
bodyEL.addEventListener("mousemove", (event) => {
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    //create a element 
    const spanEL = document.createElement("span");
    spanEL.style.left = xPosition + "px";
    spanEL.style.top = yPosition + "px";
    bodyEL.appendChild(spanEL);
    //creating elements in diffrent sizes
    const size = Math.random() * 100;
    spanEL.style.width = size + "px";
    spanEL.style.height = size + "px";
    //remove the span after 3s time
    setTimeout(() => {
        spanEL.remove();
    }, 5000)
});