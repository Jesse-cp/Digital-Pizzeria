
menu_list_array = ["Pepperoni Pizza","Cheese Pizza","Sausuge pizza","Pineapple pizza"];

function getmenu(){
var htmldata;
var first_menu_list_array =menu_list_array[0]
var second_menu_list_array =menu_list_array[1]
var third_menu_list_array =menu_list_array[2]
var fourth_menu_list_array =menu_list_array[3]       
        document.getElementById("display_menu1").innerHTML= first_menu_list_array
        document.getElementById("display_menu2").innerHTML= second_menu_list_array
        document.getElementById("display_menu3").innerHTML= third_menu_list_array
        document.getElementById("display_menu4").innerHTML= fourth_menu_list_array
        
}

function add_the_item(){
var htmldata;
var add_an_item = document.getElementById("add_item").value;
add_an_item = add_an_item.concat(" Pizza"); 
menu_list_array.push(add_an_item);

document.getElementById("display_menu5").innerHTML= add_an_item;
console.log(add_an_item);
    
    

}

function add_top(){
//Complete the code
}