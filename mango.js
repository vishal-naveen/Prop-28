class mango{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            friciton: 1
        }
        this.x = x
        this.y = y
        this.r = r
        this.image=loadImage("images/mango.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.width, this.height);
    }
}