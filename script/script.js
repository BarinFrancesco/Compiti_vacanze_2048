window.onload = function(){
    let x = Math.floor(Math.random()*15)+1;
    let y = Math.floor(Math.random()*15)+1;

    while ( y == x ){
        y = Math.floor(Math.random()*15)+1;
    }

    let selected_element = document.querySelector(`[data-number='${x}']`);
    let selected_element_2 = document.querySelector(`[data-number='${y}']`);

    selected_element.setAttribute("id","num_2");
    selected_element.innerHTML = "2";
    
    selected_element_2.setAttribute("id","num_2");
    selected_element_2.innerHTML = "2";

    
}

function new_number(){

    let x = Math.floor(Math.random()*15)+1;
    let selected_element = document.querySelector(`[data-number='${x}']`);

alert(x)

    while (selected_element.innerHTML != 0){
        x = Math.floor(Math.random()*15)+1;
        selected_element = document.querySelector(`[data-number='${x}']`);
    }

    selected_element.setAttribute("id","num_2");
    selected_element.innerHTML = "2";
}

function move(){


    for (let i = 4; i<17; i+=4){

        let row_content = [];
        let count = 0;


        for (let j = i; j > i-4; j--){
            let cell = parseInt(document.querySelector(`[data-number='${j}']`).innerHTML);
            row_content.push(cell);

            if(cell==0){
                row_content.pop();
            }
        }

        console.log("array riga "+i);
        console.log( row_content);

        //aggiungi for che raddoppia tutti i numero e non solo i primi 2 e mette 0 se necessario
        if(row_content[0]==row_content[1] && row_content!=0){
            row_content[0]= row_content[0]*2;
            row_content[1]=0;
        } 


        for (let y=i; y> i-4; y--){
            
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


        /*for (let j = i; j > i-3; j--){

            let host_cell = document.querySelector(`[data-number='${j}']`);
            let parasite_cell = document.querySelector(`[data-number='${j-1}']`)
            let val = parseInt(host_cell.innerHTML);
            let val_2 = parseInt(parasite_cell.innerHTML);

            
            while (val<1){

            }
            if (val_2>val){
                host_cell.innerHTML = val_2;
                host_cell.setAttribute("id","num_2")
                parasite_cell.innerHTML =``;
                parasite_cell.setAttribute("id","")
            }

            console.log("val i="+i);
            console.log("la cella !"+j+"! vale "+val);
            console.log("la cella "+(j-1)+" vale "+val_2);

        }*/