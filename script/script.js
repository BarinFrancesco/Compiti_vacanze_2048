window.onload = function(){
    let x = Math.floor(Math.random()*15)+1;
    let selected_element = document.querySelector(`[data-number='${x}']`);

    
    selected_element.setAttribute("id","num_2");
    selected_element.innerHTML = "2";
    

    
}