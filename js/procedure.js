function hideImage() {
    //隐藏原生html展示的图片
    var allImg = selectAll(".portfolio-img");
    for (let i = 0; i < allImg.length; i++) {
        allImg[i].style("display", "none");
    }
}


function loadMatterJs() {


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


}



function openUrl() {

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].body == mConstraint.body) {
            var link = boxes[i].postLink;
            window.open(link, '_blank');
        }
    }

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