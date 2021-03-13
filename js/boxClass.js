function Box(x, y, w, h, img,postTittle,postTime) {

    var options = {
        friction: 0.4,
        restitution: 0.6,
        frictionAir: random(0.02, 0.1),
        angle: random(-PI / 2, PI / 2)

    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.imgP = img;
    this.isPressed = false;
    this.postTittle = postTittle;
    this.postTime = postTime;
    


    this.update = function() {


        if (this.body == mConstraint.body) {
            this.isPressed = true;
        } else {
            this.isPressed = false;

        }

    }

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
        if (this.isPressed) {
            stroke(255, 200, 0);
            strokeWeight(5);
            noFill();
            rect(0, 0, this.w, this.h);
        }
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
            yTarget = windowHeight / 5;
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
        rectMode(CENTER);
        translate(pos.x, pos.y);
        // rotate(angle);
        noStroke();

        if (this.pType == "TOP") {
            noFill();
        } else { fill(0); }
        rect(0, 0, this.w, this.h);

        pop();

    }


}