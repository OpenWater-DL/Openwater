function isPressed() {
    rectMode(CORNER);
    var placeHeight = (height / 4);
    var speed = 0.1;


    if (mConstraint.body) {
        var targetY = (height / 4) * 3;
        dragPlaceY = lerp(dragPlaceY, targetY, speed);
        noStroke();
        fill(255, 255, 0);
        rect(0, dragPlaceY, width, placeHeight);
        textSize(width / 20);
        fill(0);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("拖拽至此处打开详情", width / 2, dragPlaceY+placeHeight/2);



        
        fill(0);
        textStyle(BOLD);
        textAlign(CENTER, TOP);
        
        var tittleSize = height*0.08;
        var timeSize = tittleSize*0.5;
        var tittlePos = createVector(width/2,height/6);
        for(var i=0;i<boxes.length;i++){
            let temp = boxes[i];
            if(temp.isPressed){         
                textSize(tittleSize);       
                text(temp.postTittle, tittlePos.x, tittlePos.y);
                textSize(timeSize);
                fill(255,90);
                text(temp.postTime,tittlePos.x, tittlePos.y+tittleSize*1.2);
            }

        }

    } else {
        noStroke();
        var targetY = height;
        dragPlaceY = lerp(dragPlaceY, targetY, speed);
        rect(0, dragPlaceY, width, placeHeight);
    }







}