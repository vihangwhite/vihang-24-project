class Paper{
    constructor(x,y,r) {
         var options = {
            isStatic :false,
            'restitutioN':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, this.radius, options);
        this.radius = radius

        World.add(world, this.body)
    }
    display(){
        ellipseMode(RADIUS);

        fill("yellow");

        circle(this.body.position.x, this.body.position.y, this.radius);
    }
};