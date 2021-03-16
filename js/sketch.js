var canvas;
//--- matter.js
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;
var engine, world;
var canvasMouse, mConstraint;
var boundaries = [];
var boxes = [];



//获取封面图片
var imagesPath = []; //全局变量src；类型：路径
var postTittle = [];
var postTimes = [];
var postLinks = [];
var imgP = []; //类型：图片

var dragPlaceY;
// var mouseIsPressed = false;
var released = true;


$(function() {
    //遍历对象-获得作品名称，图片，链接
    $(".portfolio-img").each(function() {
        imagesPath.push(this.src);
        postTittle.push(this.alt);
    })

    $(".portfolio-link").each(function(key, object) {
        postLinks.push($(object).attr("href"));
    })

    $(".page-time").each(function() {
        postTimes.push(this.alt);
    })
});

function preload() {
    for (let i = 0; i < imagesPath.length; i++) {
        let t = loadImage(imagesPath[i]); //把封面图片加载到p5里
        imgP.push(t);
    }
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    hideImage();
    loadMatterJs();
    
    canvas.mouseReleased(
        function() {
            released = true;
            if (tittleChars != []) {
                for (var i = 0; i < targetTittle.length; i++) {
                    tittleChars[i].changeToOut();
                   
                }
            }
            if (timeChars != []) {
                for (var i = 0; i < targetTime.length; i++) {
                   timeChars[i].changeToOut();
                   
                }
            }

            if (mouseReady) {
                openUrl();
            }


        });

       


}


function draw() {
    background(240);
    isPressed();
    
    if(mouseIsPressed){
        if(mConstraint.body){
            released=false;
        }else{
            released=true;        }
    }


    for (let i = 0; i < boxes.length; i++) {
        boxes[i].update();
        boxes[i].show();
    }

    for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].update();
        boundaries[i].show();
    }

   

}




function windowResized() {
    canvas = createCanvas(windowWidth, windowHeight);
}



