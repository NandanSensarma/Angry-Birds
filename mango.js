  class Mango {
    constructor(x,y) {
      var options = {
        isStatic:true,  
        restitution:0,
        friction:1
      }
      this.body = Bodies.circle(x,y,15,options);
      this.r=15;
      this.image = loadImage("sprites/mango.png");
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("red");
      imageMode(RADIUS);
      image(this.image, 0,0,this.r, this.r);
      pop();
    }
  }
  