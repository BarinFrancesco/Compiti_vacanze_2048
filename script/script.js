let i=0;

window.onload = function(){
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

}


function new_number(){

    let x = Math.floor(Math.random()*16)+1;
    let selected_element = document.querySelector(`[data-number='${x}']`);

    while (selected_element.innerHTML != 0){
        x = Math.floor(Math.random()*16)+1;
        selected_element = document.querySelector(`[data-number='${x}']`);
    }

    selected_element.setAttribute("id","num_2");
    selected_element.innerHTML = "2";
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
                if(row_content[i]==row_content[i+1]){
                    row_content[i]= row_content[i]*2;
                    row_content[i+1]=0;
                } 
            }
        }

        row_content = row_content.filter(item => item !== 0);

        return row_content;
}
