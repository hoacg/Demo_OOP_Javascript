const MOVE_DISTANCE = 1;
const MAX_HP = 100;
const MAX_TRUST_POINT = 100;

function Student( name, xPosition, yPosition, width, height, faceImg ) {
    this.name = name;
    this.faceImg = faceImg;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
    this.hp = MAX_HP;
    this.trust = MAX_TRUST_POINT;

    this.getName = function() {
        return this.name;
    };
    this.setName = function(name) {
        this.name = name;
    };
    this.getTrust = function () {
        return this.trust;
    };
    this.decreaseHP = function() {
        this.hp--;
    };
    this.decreaseTrust = function () {
        this.trust--;
    }
    this.moveRight = function () {
        this.xPosition += MOVE_DISTANCE;
    };
    this.moveLeft = function () {
        this.xPosition -= MOVE_DISTANCE;
    };
    this.moveUp = function () {
        this.yPosition -= MOVE_DISTANCE;
    };
    this.moveDown = function () {
        this.yPosition += MOVE_DISTANCE;
    };
    this.isTouch = function (student) {
        const currentXPosition = this.xPosition + this.width;
        return currentXPosition >= student.xPosition;
    };
    this.hit = function (student) {
        student.decreaseHP();
        this.decreaseTrust();
    };

    this.draw = function (canvas) {
        let img = new Image();
        img.src = this.faceImg;

        let context = canvas.getContext("2d");
        context.drawImage(img, this.xPosition, this.yPosition, this.width, this.height);
    }
}
