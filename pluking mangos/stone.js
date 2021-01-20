class stone {


construster (x,y,r){
    var options={
        isStatic:false,
        restitution:0.7,
        density:0.3,
        friction:0.8
    }

this.x=x
this.y=y
this.r=r
this.body=Bodies.rectangle(x,y,r,options)

World.add(world,this.body)
}

display(){
    var stonePostion=this.body.postion
    push()
    translate(stonePostion.x,stonePostion.y)
    rectMode(CENTER)
    rect(0,0,this.r,this.r)
    pop()
}
};