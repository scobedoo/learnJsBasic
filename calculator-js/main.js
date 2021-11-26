function plus(){
    var num = document.getElementById('number');
    var value1 = document.getElementById('val1').value;
    var value2 = document.getElementById('val2').value;
    var total = Number(value1) + Number(value2)
    num.innerHTML=total
}
function minus(){
    var num = document.getElementById('number');
    var value1 = document.getElementById('val1').value;
    var value2 = document.getElementById('val2').value;
    var total = Number(value1) - Number(value2)
    num.innerHTML=total
}
function divide(){
    var num = document.getElementById('number');
    var value1 = document.getElementById('val1').value;
    var value2 = document.getElementById('val2').value;
    var total = Number(value1) / Number(value2)
    num.innerHTML=total
}
function multiply(){
    var num = document.getElementById('number');
    var value1 = document.getElementById('val1').value;
    var value2 = document.getElementById('val2').value;
    var total = Number(value1) * Number(value2)
    num.innerHTML=total
}
function guess(){
    var value3 = document.getElementById('val3')
    var text = document.getElementById('text-content')
    if(value3.value % 2 == 0){
    text.innerHTML='even'
    }
    else{
        text.innerHTML='Odd'
    }
}