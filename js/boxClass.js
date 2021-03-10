function Box(x, y, w, h, img) {

    var options = {
        friction: 0.4,
        restitution: 0.6,
        frictionAir: 0.08

    }
    this.body = Bodies.rectangle(x, y, w, h, options);
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
        image(this.imgP, 0, 0, this.w, this.h);
        pop();

    }

}

function Boundary(x, y, w, h, pType) {

    var options = {
        friction: 0.3, //f
        restitution: 0.5, //弹性
        // angle: a,
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.pType = pType;
    this.update = function() {
        var xTarget;
        var yTarget;
        if (this.pType == "BOTTOM") {
            xTarget = windowWidth / 2;
            yTarget = windowHeight;
        } else if (this.pType == "TOP") {
            xTarget = windowWidth / 2;
            yTarget = 0;
        } else if (this.pType == "LEFT") {
            xTarget = 0;
            yTarget = windowHeight / 2;
        } else if (this.pType == "RIGHT") {
            xTarget = windowWidth;
            yTarget = windowHeight / 2;
        }

        Body.setVelocity(this.body, { x: xTarget - this.body.position.x, y: yTarget - this.body.position.y });
        Body.setPosition(this.body, { x: xTarget, y: yTarget });   
        

    }


    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        // rotate(angle);
        noStroke();
        fill(0);
        rect(0, 0, this.w, this.h);

        pop();

    }


}