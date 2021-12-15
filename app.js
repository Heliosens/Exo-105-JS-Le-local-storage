const stock = window.localStorage;

stock.setItem('size', '18');
stock.setItem('type', 'Material');
stock.setItem('color', 'Black');

let target = document.getElementById("result");

let write = function (elem){
    target.innerHTML += "Thème " + elem.getItem('color') + ", type " + elem.getItem('type') + " et police de caractères "
        + elem.getItem('size') + " px<br>";
}

write(stock);

stock.setItem('size', '10');
stock.setItem('type', 'Logiciel');
stock.setItem('color', 'Blue');

write(stock);
