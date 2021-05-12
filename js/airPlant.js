class AirPlant {
    constructor() {
        this.roseimg=loadImage("Images/air-plant.jpg")
        
      
    }
  
    display(){
    image(this.roseimg,1,1,displayWidth/1 , displayHeight/1);
    fill(0, 0, 153);
    textSize(33);
    textFont('GUNPLAY');
    text("Air Plant",10,50);
    fill(255,255,255);
    textSize(20);
    text(1.5,110)
    text("There are many varieties of air plants. They usually have grey or green blades and grow only a few inches. ",1.5,130)
    text("As the name suggests, these ornamental garden plants do not anchor themselves to the soil, you can suspend them in glass globes, ",1.5,150)
    text(" bed of dry pebbles, shells, barks etc.",1.5,170)
    text("",1.5,190)
    text("",1.5,210)
    text(" ",1.5,230)
   
}
}