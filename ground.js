class ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        var pos = this.body.position
    
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
       // imageMode(CENTER);
       fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        //image(this.image,pos.x,pos.y,this.width,this.height);
        //pop();
      }
}