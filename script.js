// tela inicial
var tela = 0
var mudarTela = 0
function setup() {
    createCanvas(500, 600);
}

function mouseClicked(){
    if(tela == 1){
        if(mouseX>=60 && mouseX<=(60+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=160 && mouseX<=(160+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=260 && mouseX<=(260+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=360 && mouseX<=(360+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 4
        }

    }
    else if(tela == 4){
        if(mouseX>=60 && mouseX<=(60+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=160 && mouseX<=(160+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=260 && mouseX<=(260+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=360 && mouseX<=(360+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 5
        }

    }
    else if(tela == 5){
        if(mouseX>=60 && mouseX<=(60+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=160 && mouseX<=(160+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=260 && mouseX<=(260+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 0
        }
        if(mouseX>=360 && mouseX<=(360+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            tela = 99
        }
    }
}
  
function draw(){
    //tela de menu
    if(tela==0){
        background(230);   //cor de fundo
        textAlign(LEFT);  //Alinhamento do texto a esquerda 
        textSize(25)  //tamanho da tela
    
        fill('black'); 
        text("QUIZ MATEMÁTICO", 100, 70);
    
        //Botão 1
        fill('blue'); //cor do botão 
        rect(100, 150, 200, 50, 15); //retângulo  do botão 
        fill('black'); //cor do text
        text("Jogar", 160, 180); //texto do botão 
    
        //Botão 2
        fill('blue');
        rect(100, 250, 200, 50, 15); 
        fill('black'); 
        text("Créditos", 150, 280);

        //Botão 3
        fill('blue');
        rect(100, 350, 200, 50, 15); 
        fill('black'); 
        text("Categorias", 140, 380);
    
        
        //verificando se o mouse está na area do botão 1
    
        if(mouseX>=100 && mouseX<=(100+200)&& mouseY>=150 && mouseY<=(150+50)){ 
          
          //verificando se o mouse foi pressionado no botão 1
          
            if(mouseIsPressed){ 
                tela=1; //atribuição  do valor 1 mudando para a tela 1
            }
        }
    
        
        //verificando se o mouse está na area do botão 2
    
        if(mouseX>=100 && mouseX<=(100+200)&& mouseY>=250 && mouseY<=(250+50)){
          
          //verificando se o mouse foi pressionado no botão 2
          
            if(mouseIsPressed){ 
                tela=2;
            }
        }


        //verificando se o mouse está na area do botão 3
        
        if(mouseX>=100 && mouseX<=(100+200)&& mouseY>=350 && mouseY<=(350+50)){
          
            //verificando se o mouse foi pressionado no botão 3

            if(mouseIsPressed){ 
                  tela=3;
                }
        }
    }
    if(tela==1){
        background(230);   //cor de fundo
        textAlign(LEFT);  //Alinhamento do texto a esquerda 
        textSize(25)  //tamanho da tela
    
        fill('black'); 
        text("QUESTÃO 1", 100, 70);
        
        textAlign(RIGHT);
        textSize(17);
        fill('black'); //cor do texto
        text("Texto da questão 1", 160, 180);

        // Alternativa A
        fill('blue');
        rect(60, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa A", 70, 380)

        // Alternativa B
        fill('blue');
        rect(160, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa b", 170, 380)

        // Alternativa C
        fill('blue');
        rect(260, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa c", 270, 380)

        // Alternativa D
        fill('blue');
        rect(360, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("Alternativa D", 370, 380)

        
    }

    if(tela==2){
        background(230);   //cor de fundo
        textAlign(LEFT);  //Alinhamento do texto a esquerda 
        textSize(25)  //tamanho da tela
    
        fill('black'); 
        text("CRÉDITOS", 100, 70);
        
        textAlign(LEFT);
        textSize(17);
        fill('black'); //cor do texto
        text("texto dos creditos", 130 , 350);

        //Botão voltar
        fill('blue');
        rect(400, 500, 100, 50, 15); 
        fill('black'); 
        textSize(25);
        text("Voltar", 415, 530);

        if(mouseX>=400 && mouseX<=(400+100)&& mouseY>=500 && mouseY<=(500+50)){ 
          
            //verificando se o mouse foi pressionado no botão voltar
            
              if(mouseIsPressed){ 
                  tela=0; //atribuição  do valor 0 mudando para a tela 0
              }
        }
    }

    if(tela==3){
        background(230);   //cor de fundo
        textAlign(LEFT);  //Alinhamento do texto a esquerda 
        textSize(25)  //tamanho da tela
    
        fill('black'); 
        text("Categorias", 100, 70);
        
        //Botão 1
        fill('blue'); //cor do botão 
        rect(100, 150, 200, 50, 15); //retângulo  do botão 
        fill('black'); //cor do text
        text("Categoria 1", 130, 180); //texto do botão 
    
        //Botão 2
        fill('blue');
        rect(100, 250, 200, 50, 15); 
        fill('black'); 
        text("Categoria 2", 130, 280);

        //Botão voltar
        fill('blue');
        rect(400, 500, 100, 50, 15); 
        fill('black'); 
        text("Voltar", 415, 530);

        if(mouseX>=400 && mouseX<=(400+100)&& mouseY>=500 && mouseY<=(500+50)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            
              if(mouseIsPressed){ 
                  tela=0; //atribuição  do valor 0 mudando para a tela 0
              }
        }
    }

    if(tela==4){
        background(230);   //cor de fundo
        textAlign(LEFT);  //Alinhamento do texto a esquerda 
        textSize(25)  //tamanho da tela
    
        fill('black'); 
        text("QUESTÃO 2", 100, 70);
        
        textAlign(RIGHT);
        textSize(17);
        fill('black'); //cor do texto
        text("Texto da questão 2", 160, 180);

        // Alternativa A
        fill('blue');
        rect(60, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa A", 70, 380)

        // Alternativa B
        fill('blue');
        rect(160, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa b", 170, 380)

        // Alternativa C
        fill('blue');
        rect(260, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa c", 270, 380)

        // Alternativa D
        fill('blue');
        rect(360, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("Alternativa D", 370, 380)

        if(mouseX>=360 && mouseX<=(360+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            if(mudarTela == 1){
                tela = 5
            }
        }
    }

    if(tela==5){
        background(230);   //cor de fundo
        textAlign(LEFT);  //Alinhamento do texto a esquerda 
        textSize(25)  //tamanho da tela
    
        fill('black'); 
        text("QUESTÃO 3", 100, 70);
        
        textAlign(RIGHT);
        textSize(17);
        fill('black'); //cor do texto
        text("Texto da questão 3", 160, 180);

        // Alternativa A
        fill('blue');
        rect(60, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa A", 70, 380)

        // Alternativa B
        fill('blue');
        rect(160, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa b", 170, 380)

        // Alternativa C
        fill('blue');
        rect(260, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("alternativa c", 270, 380)

        // Alternativa D
        fill('blue');
        rect(360, 350, 15, 15, 15); 
        fill('black');
        textAlign(CENTER);
        textSize(15)
        text("Alternativa D", 370, 380)

        if(mouseX>=360 && mouseX<=(360+15)&& mouseY>=350 && mouseY<=(350+15)){ 
          
            //verificando se o mouse foi pressionado no botão de voltar
            
        }
    }

    if(tela==99){
        background(230)
        textAlign(CENTER)
        textSize(25)
        text("PARABÉNS VOCÊ PASSOU", 230, 100)
    }
}