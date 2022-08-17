function insert(digit) {
    var num = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = num + digit;
}

function allClear() {
    document.querySelector('.result').innerHTML = " ";
}

function del() {
    let result = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = result.substring(0, result.length - 1);
}

function calcular() {

    let result = document.querySelector('.result').innerHTML;
    result = result.replace(',', '.')
    if (result) {
        document.querySelector('.result').innerHTML = eval(result);
        

    }
}

