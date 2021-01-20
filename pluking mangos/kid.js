class kid{


construter(x,y,w,h){
    var options={
        isStatic:true
    }

this.x
this.y
this.w
this.h
this.body=Bodies.rectangle(x,y,w,h,options)

World.add(world,this.body)


}
display(){
    var kidPostion=this.body.postion
    push()
    translate(kidPostion.x,kidPostion.y)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
}
};