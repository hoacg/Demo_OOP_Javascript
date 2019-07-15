let canvas = document.getElementById("gameCanvas");
const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 100;
const faceA = "https://cdn.pixabay.com/photo/2016/07/22/01/22/sad-1533965_1280.jpg";
const faceB = "http://www.purplechameleon.com.au/wp-content/uploads/2014/09/sad-face-resized-image-for-emotion-driven-copy-blog-post-19-Sept-2014.jpg";
const centerCanvas = {
    x: canvas.width / 2,
    y: canvas.height/2
};

let studentA = new Student("A", 0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT, faceA);
let studentB = new Student("B", centerCanvas.x, centerCanvas.y, DEFAULT_WIDTH, DEFAULT_HEIGHT, faceB);

// let teacherC = new Teacher("C");
// let hitCount = 0;
//
// while (hitCount++ < 25) {
//     studentA.hit(studentB);
//     console.log(hitCount);
// }
// teacherC.gradeTrust(studentA);

function clearCanvas() {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}

function moveStudent() {
    clearCanvas();
    if (!studentA.isTouch(studentB)) {
        studentA.moveRight();
        studentA.moveDown();
    }

    studentA.draw(canvas);
    studentB.draw(canvas);
}

setInterval(moveStudent, 20);
