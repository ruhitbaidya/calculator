// calculator function

function deleteme(){
    document.getElementById('showhe').value = '';
}

function calculator(newvalue){
    document.getElementById('showhe').value += newvalue;
}

function answar(){
    let a = document.getElementById('showhe').value;
    let b = eval(a);
    document.getElementById('showhe').value = b;
}