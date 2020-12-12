class Stone{
    constructor(x,y,width,height){
        var option = {
            isStatic:false,
            restitution: 0,
            friction:1,
            density:1.2
        }
      this.body = Bodies.rectangle(x,y,width,height,option);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/stone.png")
      World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.width, this.height);

    }
}