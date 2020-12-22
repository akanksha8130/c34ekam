class Sling{


    constructor(bodyA,pointB){

var o={
bodyA:bodyA,
pointB:pointB,
stiffness:1.5,
length:500,

}
this.pointB=pointB
this.attach=Constraint.create(o)
World.add(world,this.attach)
    }


    join (body){

this.attach.bodyA=body

    }


    fly(){

this.attach.bodyA=null

    }

display(){
if(this.attach.bodyA){
var posA=this.attach.bodyA.position
var posB=this.pointB


line (posA.x,posA.y,posB.x,posB.y)

}
}
}