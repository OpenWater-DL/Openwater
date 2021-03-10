function Box(x, y, w, h,img) {

    var options= {
        friction: 0.4,
        restitution:0.3
        
    }
    this.body = Bodies.rectangle(x, y, w, h,options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.imgP = img;
    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        // rect(0, 0, this.w, this.h);
        imageMode(CENTER);
        image(this.imgP,0,0,this.w,this.h);
        pop();

    }

}

function Boundary(x, y, w, h,a) {

    var options = {
        friction: 0.1, //f
        restitution: 1, //弹性
        angle: a,
        isStatic: true
    }


    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(0);
        rect(0, 0, this.w, this.h);

        pop();

    }

}