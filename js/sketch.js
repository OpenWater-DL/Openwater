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

var siteTittle;


var dragPlaceY;


//遍历对象-获得作品名称，图片，链接
$(function() {

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

//把封面图片加载到p5里
function preload() {
    for (let i = 0; i < imagesPath.length; i++) {
        let t = loadImage(imagesPath[i]);
        imgP.push(t);
    }
}






function setup() {
    console.log(postLinks);
    canvas = createCanvas(windowWidth, windowHeight);
  canvas.mouseReleased(function(){
        if(mouseReady){
        openUrl();
    }

  });



    //隐藏原生html展示的图片
    var allImg = selectAll(".portfolio-img");
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].style("display", "none");
    }

    siteTittle = document.getElementById("siteTittle").innerHTML;


    //加载matter.js
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    World.add(world, canvasMouse);
    engine.world.gravity.y = -0.1;


    var options = {
        mouse: canvasMouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    rectMode(CENTER);
    var h = 50;
    var heightMax = height * 10;
    var widthMax = width * 10;
    var ground1 = new Boundary(width / 2, height, widthMax, h, "BOTTOM");
    var ground2 = new Boundary(width / 2, height / 3, widthMax, h, "TOP");
    var ground3 = new Boundary(0, height / 2, h, heightMax, "LEFT");
    var ground4 = new Boundary(width, height / 2, h, heightMax, "RIGHT");
    boundaries.push(ground1);
    boundaries.push(ground2);
    boundaries.push(ground3);
    boundaries.push(ground4);



    //创建带有图像的box
    for (let i = 0; i < imgP.length; i++) {
        var imgScale = imgScaleNum(imgP[i].width);
        boxes.push(
            new Box(random(50, width - 50), random(height, height / 2), 
            imgP[i].width * imgScale, imgP[i].height * imgScale, 
            imgP[i], 
            postTittle[i],
             postTimes[i],
             postLinks[i]             
             ));
    }


    dragPlaceY = 0;

}

function imgScaleNum(w) {
    this.w = w;
    var scaleTarget;
    if (windowWidth < 900) {
        scaleTarget = (width / 4) / this.w;

    } else {
        scaleTarget = (width / 6) / this.w;
    }
    return scaleTarget;
}


function draw() {
    background(240);


    isPressed();


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

    // randomPosition();

}