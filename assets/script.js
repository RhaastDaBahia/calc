const btn = document.querySelectorAll ('.btn');
var screen = document.querySelector('.screen');

btn.forEach(btn => btn.addEventListener('click' , function() {
        const valor = btn.innerHTML;
        screen.innerHTML += valor

        if(valor == "$"){
            var a = screen.innerHTML
            var b = a.substring(0, a.length -1);
            var c = eval(b)
            screen.innerHTML = c
        }
        if(valor == "CE"){
            screen.innerHTML = "";
        }
        if(valor == "C"){
           var str_start = screen.innerHTML;
           var str_fim = str_start.substring(0, str_start.length -2);
           screen.innerHTML = str_fim
        } 
    }))