class Ball {
    constructor(x,y){
       var this_options = {
        restitution : 0.3,
        density : 1,
        friction : 0.5
        }
        this.body = Bodies.circle(x,y,20,this_options);
        this.radius = 20;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        translate(pos.x,pos.y);
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        fill("cyan");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}