class Carrot {
    constructor() {
        this.roseimg=loadImage("Images/carr.jpg")
        
      
    }
  
    display(){
    image(this.roseimg,1,1,displayWidth/1 , displayHeight/1);
    fill(255,165,0);
    textSize(33);
    text("Carrot",10,50);
    fill(0, 0, 153);
    textSize(20);
     text("The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. ",1.5,130)
    text("They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. ",1.5,150)
    text(" bed of dry pebbles, shells, barks etc.",1,170)
    text("The plant probably originated in Persia and was originally cultivated for its leaves and seeds. ",1.5,190)
    text("The most commonly eaten part of the plant is the taproot, although the stems and leaves are also eaten.",1.5,210)
  
   
}
}