class Planter  {
    constructor() {
      this.bg=loadImage("Images/Bg.jpg.jpg");
      this.BGimg=loadImage("Images/Background.jpg")
     this.menu=null;
  
      
    }
  
    display(){
        if (gameState===1){
          image(this.BGimg,0,0,displayWidth/1 , displayHeight/1);
this. menu = createSprite(80,100,100,100);
this.menu.addImage("menu",menu_img);
this.menu.scale=0.2;
     
      image(this.bg,0,0,displayWidth/1 , displayHeight/1 );
      
      drawSprites();
      fill(160,32,240)
      textSize(15);
      text("Explore more",50,80)
      
     {
       {if(mousePressedOver(this.menu)){
            textAlign(CENTER);
            background(200);

            
            sel = createSelect();
            sel.position(75,125);
            sel.option('Plant');
            sel.option('Rose');
            sel.option('Pineapple');
            sel.option('AirPlant');
            sel.option('Carrot');
          
            sel.changed( ()=>{var choice=sel.value()  
            if(choice==="Rose"){
              gameState=2
            }
            else if(choice==="Pineapple"){
              gameState=3
            }
            else if(choice==="AirPlant"){
              gameState=4
            }
            else if (choice==="Carrot"){
              gameState=5
            }

          })
          
         
       }
        }

        
          }

}
     

    
    }
   

  }