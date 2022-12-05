function Draw(n){
    var input = document.getElementById('Input');
    for (var i = 0; i < input.value; i++) {
        if (n ==  1) DrawSquare();
        else if (n ==  2) DrawTriangle();
        else DrawСircle()
    }
}

function DrawSquare(){
    var x = Math.round(Math.random()*1000);
    var y = Math.round(Math.random()*450);
    var z = Math.round(Math.random()*100)+50;
    var elem = document.createElement('div');
    elem.classList.add("Square");
    var area = document.getElementById('Area');
    area.append(elem);
    elem.style.left = `${x}px`;
    elem.style.top =`${y}px`;
    elem.style.height = `${z}px`;
    elem.style.width = `${z}px`;
    elem.ondblclick = function(){
        elem.remove();
    }
}

function DrawСircle(){
    var x = Math.round(Math.random()*1000);
    var y = Math.round(Math.random()*450);
    var z = Math.round(Math.random()*100)+50;
    const elem = document.createElement('div');
    elem.classList.add("Сircle");
    var area = document.getElementById('Area');
    area.append(elem);
    elem.style.left = `${x}px`;
    elem.style.top =`${y}px`;
    elem.style.height = `${z}px`;
    elem.style.width = `${z}px`;
    elem.style.borderRadius = `${z}px`;
    elem.ondblclick = function(){
        elem.remove();
    }
}

function DrawTriangle(){
    var x = Math.round(Math.random()*1000);
    var y = Math.round(Math.random()*450);
    var z = Math.round(Math.random()*100)+50;
    var elem = document.createElement('div');
    elem.classList.add("Triangle");
    var area = document.getElementById('Area');
    area.append(elem);
    elem.style.left = `${x}px`;
    elem.style.top =`${y}px`;
    elem.style.borderWidth = `${z/2}px`;
    elem.ondblclick = function(){
        elem.remove();
    }
}