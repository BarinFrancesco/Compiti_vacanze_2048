let i=0;
let punteggio = 0;
let secondi = 0;
let win = false;
let lose = false;
let last_table = [];
let current_table = [];
let intervall = setInterval( time , 1000);

window.onload = function inizio(){
    let x = Math.floor(Math.random()*16)+1;
    let y = Math.floor(Math.random()*16)+1;

    while ( y == x ){
        y = Math.floor(Math.random()*16)+1;
    }

    let selected_element = document.querySelector(`[data-number='${x}']`);
    let selected_element_2 = document.querySelector(`[data-number='${y}']`);

    selected_element.setAttribute("id","num_2");
    selected_element.innerHTML = "2";
    
    selected_element_2.setAttribute("id","num_2");
    selected_element_2.innerHTML = "2";

    document.getElementById("user_messages").style.display = "flex";
    document.getElementById("main_container").style.display = "none";
    document.getElementById("keys").style.display = "none";

}

function new_number(){

    let x = Math.floor(Math.random()*16)+1;
    let selected_element = document.querySelector(`[data-number='${x}']`);
    let val = Math.random();
    let possibile = true;

    if (document.querySelector(`[data-number='${1}']`).innerHTML == 0 || document.querySelector(`[data-number='${2}']`).innerHTML == 0 || document.querySelector(`[data-number='${3}']`).innerHTML == 0 || document.querySelector(`[data-number='${4}']`).innerHTML == 0 || document.querySelector(`[data-number='${5}']`).innerHTML == 0 || document.querySelector(`[data-number='${6}']`).innerHTML == 0 || document.querySelector(`[data-number='${7}']`).innerHTML == 0 || document.querySelector(`[data-number='${8}']`).innerHTML == 0 || document.querySelector(`[data-number='${9}']`).innerHTML == 0 || document.querySelector(`[data-number='${10}']`).innerHTML == 0 || document.querySelector(`[data-number='${11}']`).innerHTML == 0 || document.querySelector(`[data-number='${12}']`).innerHTML == 0 || document.querySelector(`[data-number='${13}']`).innerHTML == 0 || document.querySelector(`[data-number='${14}']`).innerHTML == 0 || document.querySelector(`[data-number='${15}']`).innerHTML == 0 || document.querySelector(`[data-number='${16}']`).innerHTML == 0 ){
        possibile = true
    } else {
        possibile = false;
    }


    while (selected_element.innerHTML != 0 && possibile == true){
        x = Math.floor(Math.random()*16)+1;
        selected_element = document.querySelector(`[data-number='${x}']`);
    }

    if ( possibile == true) {

        if ( val < 0.80){
            selected_element.setAttribute("id","num_2");
            selected_element.innerHTML = "2";
        } else {
            selected_element.setAttribute("id","num_4");
            selected_element.innerHTML = "4";
        }

    } else {
        return;
    }

}

//funzione per muovere a destra
function move_r(){


    for ( i = 4; i<17; i+=4){

        let row_content = transformation("right");
        let count = 0;

        for (let y=i; y> i-4; y--){
            
            if(row_content[count]!=0 && !isNaN(row_content[count])){
                document.querySelector(`[data-number='${y}']`).innerHTML = row_content[count];
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,`num_${row_content[count]}`);
            } else {
                document.querySelector(`[data-number='${y}']`).innerHTML = 0;
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,``);
            }

            count++;
        }

    }
    document.getElementById("points").innerHTML = `${punteggio}`;
    
    verifica();

    new_number();
}

//funzione per muovere a sinistra
function move_l(){

    for ( i = 1; i<17; i+=4){

        let row_content = transformation("left");
        let count = 0;

        for (let y = i; y < i+4; y++){
            
            if(row_content[count]!=0 && !isNaN(row_content[count])){
                document.querySelector(`[data-number='${y}']`).innerHTML = row_content[count];
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,`num_${row_content[count]}`);
            } else {
                document.querySelector(`[data-number='${y}']`).innerHTML = 0;
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,``);
            }

            count++
        }

    }
    document.getElementById("points").innerHTML = `${punteggio}`;
    
    verifica();
    
    new_number();
}

//funzione per muovere in alto
function move_t(){
    

    for ( i=1; i<5; i++){

        let row_content = transformation("top");
        let count = 0;


        for (let y = i; y<17; y+=4){

            if(row_content[count]!=0 && !isNaN(row_content[count])){
                document.querySelector(`[data-number='${y}']`).innerHTML = row_content[count];
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,`num_${row_content[count]}`);
            } else {
                document.querySelector(`[data-number='${y}']`).innerHTML = 0;
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,``);
            }

            count++
        }

    }
    document.getElementById("points").innerHTML = `${punteggio}`;

    verifica();

    new_number();
}

//funzione per muovere in basso
function move_b(){

    for ( i=13; i<17; i++){

        let row_content = transformation("bottom");
        let count = 0;


        for (let y = i; y > i-13; y-=4){

            if(row_content[count]!=0 && !isNaN(row_content[count])){
                document.querySelector(`[data-number='${y}']`).innerHTML = row_content[count];
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,`num_${row_content[count]}`);
            } else {
                document.querySelector(`[data-number='${y}']`).innerHTML = 0;
                document.querySelector(`[data-number='${y}']`).setAttribute(`id`,``);
            }

            count++
        }
  
    }

    document.getElementById("points").innerHTML = `${punteggio}`;

    verifica();

    new_number();
}

//funzione per riempire e manipolare i numeri nell'array;
function transformation(x){
    let row_content = [];


    switch (x){

        case "right":

            for (let j = i; j > i-4; j--){
                let cell = parseInt(document.querySelector(`[data-number='${j}']`).innerHTML);
                row_content.push(cell);
            }

            break;
        
        case "left":
            for (let j = i; j < i+4; j++){
                let cell = parseInt(document.querySelector(`[data-number='${j}']`).innerHTML);
                row_content.push(cell);
            }
            break;

        case "top":
            for (let j = i; j < 17; j+=4){
                let cell = parseInt(document.querySelector(`[data-number='${j}']`).innerHTML);
                row_content.push(cell);
            }
            break;
        
        default:
            for (let j = i; j > i-13; j-=4){
                let cell = parseInt(document.querySelector(`[data-number='${j}']`).innerHTML);
                row_content.push(cell);
            }
            break;
    }

    row_content = row_content.filter(item => item !== 0);

        if( row_content[0] == row_content[1] || row_content[1] == row_content[2] || row_content[2] == row_content[3] ){
            for (let i=0; i<3; i++){
                if(row_content[i] == row_content[i+1] &&  !isNaN(row_content[i])){
                    row_content[i] = row_content[i]*2;
                    row_content[i+1] = 0;
                    punteggio += row_content[i];
                } 
                if(row_content[i] == 2048 ){
                    win == true;
                    return;
                }
                
            }
        }

        row_content = row_content.filter(item => item !== 0);

        return row_content;
}

function verifica(){

    
    if( win ){
        document.getElementById("user_messages").style.display = "flex";
        document.getElementById("win/lose_message").innerHTML = "Hai vinto";
    } else if( lose ) {
        document.getElementById("user_messages").style.display = "flex";
        document.getElementById("win/lose_message").innerHTML = "Hai perso";
        reset();
        return;
    }

    for (let y=1; y<17; y++){
        let number = parseInt(document.querySelector(`[data-number='${y}']`).innerHTML);
        current_table.push(number);
    }

    for (let y=0; y<16; y++){

        if (current_table[y] == last_table[y]){
            lose = true;
        } else {
            lose = false;
            break;
        }

    }


    last_table = current_table;
    current_table = [];


}

//cambia lo stile per giocare con i numeri
function numeri(){
    document.getElementById("user_messages").style.display = "none";
    document.getElementById("stylesheet").setAttribute("href","style/style_classico.css");
    document.getElementById("main_container").style.display = "flex";
    document.getElementById("keys").style.display = "flex";
}

//cambia lo stile per giocare con le immagini
function immagini(){
    document.getElementById("user_messages").style.display = "none"
    document.getElementById("stylesheet").setAttribute("href","style/style_con_immagini.css");
    document.getElementById("main_container").style.display = "flex";
    document.getElementById("keys").style.display = "flex";
}

//resetta il gioco per giocare più volte
function reset(){
    for (let y=1; y<17; y++){
        let selected_element = document.querySelector(`[data-number='${y}']`);
        selected_element.innerHTML = 0;
        selected_element.setAttribute(`id`,``);

    }
    secondi = 0;
    clearInterval(intervall);

    new_number();
    new_number();
    document.getElementById("user_messages").style.display = "flex";
    document.getElementById("main_container").style.display = "none";
    document.getElementById("keys").style.display = "none";
    document.getElementById("cancel").style.backgroundColor = "rgb(125,125,125)";
    document.getElementById("cancel").setAttribute("onclick","cancella_numeri()");
    intervall = setInterval( time , 1000);
}

//pulante speciale utilizzabile una sola volta che cancalla i numeri piccoli 2 o 4
function cancella_numeri(){

    for (let y=1; y<17; y++){
        let selected_element = document.querySelector(`[data-number='${y}']`);

        if ( selected_element.innerHTML == 2 || selected_element.innerHTML == 4 ){
            selected_element.innerHTML = 0;
            selected_element.setAttribute(`id`,``);
        }
    }

    document.getElementById("cancel").style.backgroundColor = "rgb(45,45,45)";
    document.getElementById("cancel").setAttribute("onclick","");
}

function time(){
secondi++;
 
if (secondi >= 900){
    lose = true;
}

let min = Math.floor(secondi/60);
let sec = (secondi-min*60)
document.getElementById("minutes").innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}