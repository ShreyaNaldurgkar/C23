class Ground{
    constructor(){
        var options ={
        isStatic:true
        }
        this.body=Bodies.rectangle(400,390,800,10,options);
        World.add(world,this.body);
    }
    display(){
        fill (255);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,800,10);  
    }
}