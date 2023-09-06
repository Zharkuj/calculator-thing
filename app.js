var inputr = document.getElementsByTagName("input")[0];
console.log(inputr)
function cleart(){
    inputr.value = "";
}

function solve(){
    inputr.value = eval(inputr.value);
}


function deletert(){
    inputr.value = inputr.value.slice(0, -1)
}