


//==================================
//          定义一个字的类
//==================================

const letters = `冫冖讠厂匚刂冂亻勹厶廴卩阝氵丬忄宀abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ●▶︎`;
var overTime = 10;
var rand = [];
var oneSize ;
var showTheTittle = false;


function TittleChar(targetChar, offset, x, y ,finalSize) {
    this.showChar;
    this.targetChar = targetChar;
    this.randChar;
    this.randId;
    this.myCount = 0;
    this.fontSize = 0;
    this.finalSize = finalSize ;
    this.alpha = 0;


    this.x = x;
    this.y = y;


    this.offset = random(0, 10);
    this.begin = false;
    this.state = "IN";
}

TittleChar.prototype.in = function() {
    // oneSize = tittleSize;

    if (!this.begin) { //in的倒计时，产生一定的开始时差
        this.offset -= 1;
        if (this.offset < 0) {
            this.begin = true;
            this.state = "OUT";
        }
    } else {
        if (this.myCount <= overTime) {
            if (this.myCount % 5 == 0) { //控制变化的速度
                this.randId = int(random(0, letters.length - 1));
            }
            this.randChar = letters[this.randId];
            this.showChar = this.randChar;

            //myCount→fontSizeNow
            var fontSizeNow = sin(this.myCount * (PI / overTime) - PI / 2);
            this.fontSize = map(fontSizeNow, -1, 1, this.finalSize * 0.3, this.finalSize);
            this.alpha = map(fontSizeNow, -1, 1, 0, 255);

            this.myCount += 1;
        } else {
            this.showChar = this.targetChar;

        }
    }


}


TittleChar.prototype.changeToOut = function() {
    if (this.begin) { //in的倒计时，产生一定的开始时差
        this.offset = random(0, 10);
        this.begin = false;
        this.myCount = 0;
    }
}




TittleChar.prototype.out = function() {
    if (this.state == "OUT") {

        if (!this.begin) {
            this.offset -= 1;
            if (this.offset < 0) {
                this.begin = true;
            }
        } else if (this.begin) {
            if (this.myCount <= overTime) {

                if (this.myCount % 5 == 0) { //控制变化的速度
                    this.randId = int(random(0, letters.length - 1));
                }

                this.randChar = letters[this.randId];
                this.showChar = this.randChar;

                //myCount→fontSizeNow
                var fontSizeNow = sin(this.myCount * (PI / overTime) + PI / 2);

                this.fontSize = map(fontSizeNow, -1, 1, this.finalSize * 0.8, this.finalSize);
                this.alpha = map(fontSizeNow, -1, 1, 255, 0);
                this.myCount += 1;
            } else {
                //结束，重置
                this.myCount = 0;
                this.fontSize = 0;
                this.alpha = 0;
                this.begin = false;
                this.state = "IN"; //退出out
            }
        }


    }

}


TittleChar.prototype.show = function() {
    fill(0, this.alpha);
    textSize(this.fontSize);
    textAlign(LEFT, CENTER);
    text(this.showChar, this.x, this.y);
}