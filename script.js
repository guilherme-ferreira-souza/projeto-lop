var tela = 0
function setup() {
    createCanvas(500, 600);
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

        //Botão return
        fill('blue');
        rect(100, 350, 200, 50, 15);
        fill('black');
        text("Voltar", 165, 380);
    }
}