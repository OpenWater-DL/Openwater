var placeHeight;
var targetY;
var dragPlaceY;
var speed = 0.1;
var mouseReady = false;
var firstPressed_isDone = false;




function isPressed() {
    rectMode(CORNER);
    placeHeight = windowHeight / 4;
    targetY = windowHeight;

    if (mConstraint.body) {
        firstPressed_isDone = true;
    }


    if (firstPressed_isDone) {
        if (mConstraint.body) {
            placeShow();
            if (mouseY > dragPlaceY) {
                mouseReady = true;

            } else {
                mouseReady = false;
            }
        } else {
            placeOut();

        }
    } else {
        dragPlaceY = targetY;
    }

}





function placeShow() {
    //portfolio-info
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    var tittleSize = windowHeight * 0.08;
    var timeSize = tittleSize * 0.5;
    var tittlePos = createVector(width / 2, windowHeight / 6);
    for (var i = 0; i < boxes.length; i++) {
        let temp = boxes[i];
        if (temp.isPressed) {
            textSize(tittleSize);
            text(temp.postTittle, tittlePos.x, tittlePos.y);
            textSize(timeSize);
            fill(0, 50);
            text(temp.postTime, tittlePos.x, tittlePos.y + tittleSize * 1.2);
        }

    }

    //DragPlace
    targetY = (windowHeight / 4) * 3;
    dragPlaceY = lerp(dragPlaceY, targetY, speed);
    noStroke();
    fill(255, 255, 0);
    rect(0, dragPlaceY, width, placeHeight);
    textSize(width / 20);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("拖拽至此处打开详情", width / 2, dragPlaceY + placeHeight / 2);

}


function placeOut() {
    noStroke();
    fill(255, 255, 0);
    targetY = windowHeight;
    dragPlaceY = lerp(dragPlaceY, targetY, speed);
    rect(0, dragPlaceY, width, placeHeight);

}




function openUrl() {

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].body == mConstraint.body) {
            var link = boxes[i].postLink;
            window.open(link, '_blank');
        }


    }

}