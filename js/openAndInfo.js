var placeHeight;
var targetY; //动态上下区域的【目标Y】
var dragPlaceY; //动态上下区域的【实时Y】
var speed = 0.1;
var mouseReady = false;
var firstPressed_isDone = false;

var tittleSize;
var timeSize;
var prevId = -2; //用于储存最后一个被点击的box对象的ID
var nowId = -1;
var targetTittle = "";
var targetTime = "";
var tittleChars = [];
var timeChars = [];
var textX;

var isClean = true;
var fullTextWidth;

function isPressed() {

    //实时判断当次点击的对象Id，进而确定是否和上次是一样的对象。
    if (mConstraint.body) {


        for (var i = 0; i < boxes.length; i++) {
            if (boxes[i].body == mConstraint.body) {
                nowId = i;
            }
        }

        firstPressed_isDone = true; //这步是为了判断初次点击。防止一开始方块从上跑到下，所以之后以dragPlaceY = targetY为布尔写了个if。
    }



    rectMode(CORNER);
    placeHeight = windowHeight / 4;
    targetY = windowHeight;


    if (firstPressed_isDone) {


        if (mConstraint.body) {
            workTittleGrenerate(); //如果Id发生了更新，则从新生成。
            workInfoShow();
            placeShow();
            if (mouseY > dragPlaceY) {
                mouseReady = true;
            } else {
                mouseReady = false;
            }
        } else {
            workInfoOut();
            placeOut();
            // timeToChangeId();
        }
    } else {
        dragPlaceY = targetY;
    }

}


function workTittleGrenerate() {

    //如果Id发生了更新，则从新生成。
    if (prevId != nowId && !isClean) {
        tittleChars.splice(0, tittleChars.length);
        timeChars.splice(0, timeChars.length);
        isClean = true;
    }

    //NEW GROUP
    if (isClean) {
        tittleSize = windowHeight * 0.08; //目标值
        timeSize = tittleSize * 0.5;
       var tittlePosY =height/4;

        //=======创建 TITTLE 字符=========
        targetTittle = boxes[nowId].postTittle;
        if (tittleChars.length < targetTittle.length) { //限制只加一次
           
            textSize(tittleSize);
            textAlign(LEFT);
            fullTextWidth = textWidth(targetTittle);
            textX = windowWidth / 2 - fullTextWidth / 2; //第一个字的X
            for (var i = 0; i < targetTittle.length; i++) {
                if (i > 0) {
                    textX = textX + textWidth(targetTittle[i - 1]);
                }
                var f = new TittleChar(targetTittle[i], i, textX, tittlePosY,tittleSize);
                tittleChars.push(f);
            }
        }

        //=======创建 TIME 字符=========
        targetTime = boxes[nowId].postTime;
        if (timeChars.length < targetTime.length) {
           
            textSize(timeSize);
            textAlign(LEFT);
            fullTextWidth = textWidth(targetTime);
            textX = windowWidth / 2 - fullTextWidth / 2; //第一个字的X       
            if (timeChars.length < targetTime.length) {
                for (var i = 0; i < targetTime.length; i++) {
                    if (i > 0) {
                        textX = textX + textWidth(targetTime[i - 1]);
                    }
                    var t = new TittleChar(targetTime[i], i, textX, tittlePosY + tittleSize,timeSize);
                    timeChars.push(t);
                }

            }

        }

         //=======创建完毕=========
        if (tittleChars.length == targetTittle.length && timeChars.length == targetTime.length) {
            prevId = nowId;
            isClean = false;
        }


    }



}





function workInfoShow() {
    //portfolio-info
    if (tittleChars != []) {
        for (var i = 0; i < targetTittle.length; i++) {
            tittleChars[i].in();
            tittleChars[i].show();
        }

    }

    if (timeChars != []) {
        for (var i = 0; i < targetTime.length; i++) {
            timeChars[i].in();
            timeChars[i].show();
        }
    }

}


function workInfoOut() {
    if (tittleChars != []) {
        for (var i = 0; i < targetTittle.length; i++) {
            tittleChars[i].out();
            tittleChars[i].show();
        }
    }

    if (timeChars != []) {
        for (var i = 0; i < targetTime.length; i++) {
            timeChars[i].out();
            timeChars[i].show();
        }
    }



}



function timeToChangeId() {
    if (mouseIsPressed && mConstraint.body) {
        console.log("work!");
    }
    if (released) {
        prevId = nowId;

    }




}




function placeShow() {
    //DragPlace
    targetY = (windowHeight / 4) * 3;
    dragPlaceY = lerp(dragPlaceY, targetY, speed);
    noStroke();
    var colA = color(255, 255, 0);
    var colB = color(255, 200, 0);
    var activeColor = color(0);
    var prompt = "";

    if (mouseReady) {
        var amt = sin(frameCount * 0.08);
        var changeC = map(amt, -1, 1, 0, 1);
        console.log('amt' + amt);
        activeColor = lerpColor(colA, colB, changeC);

        fill(activeColor);
        console.log('activeColor: ' + activeColor);
        prompt = "松手打开";
    } else {
        fill(colA);
        prompt = "拖拽至此查看详情";
    }
    rect(0, dragPlaceY, width, placeHeight);

    var infoSize = width / 20;
    textSize(infoSize);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER);
    text(prompt, width / 2, dragPlaceY + placeHeight / 2);
  





}



function placeOut() {
    noStroke();
    fill(255, 255, 0);
    targetY = windowHeight;
    dragPlaceY = lerp(dragPlaceY, targetY, speed);
    rect(0, dragPlaceY, width, placeHeight);

}