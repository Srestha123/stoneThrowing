class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            density:0.05,
            friction:12222
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("wood1.png");
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }

}