let radius = 240;
let barLength = 25;
let barEnd = radius - barLength;
let clockFace = document.querySelector("#face");
console.log(clockFace)
for (let i = 90; i <= 360; i += 90) {
    for (let j = i; j > i - 90; j -= 30) {
        var radians = j * Math.PI/180;
        let path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        xOuter = Math.cos(radians) * radius + 300;
        yOuter = 300 - Math.sin(radians) * radius;
        xInner = (j % 90 != 0) ? Math.cos(radians) * barEnd + 300 : Math.cos(radians) * (barEnd-barLength) + 300;
        yInner = (j % 90 != 0) ?  300 - Math.sin(radians) * barEnd : 300 - Math.sin(radians) * (barEnd-barLength);
        xOuter = xOuter.toFixed(2);
        yOuter = yOuter.toFixed(2);
        xInner = xInner.toFixed(2);
        yInner = yInner.toFixed(2);
        pathText = "M " + xOuter + " " + yOuter + " L " + xInner + " " + yInner;
        path.setAttribute("d", pathText);
        path.style.stroke = "#000";
        path.style.strokeWidth = "9px";
        clockFace.appendChild(path);
        console.log(xOuter, yOuter, xInner, yInner);
        path.classList.toggle("hour-marks");
    }
}
