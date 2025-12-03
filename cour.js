
const display= document.getElementById("display")
function addButton(input){
    display.value += input

} 
function delet(input){
    display.value = display.value.slice(0,-1)
    
    

}

function solve(input){
    display.value = eval(display.value)

}
function cleanall(input){
    display.value =" "
}

