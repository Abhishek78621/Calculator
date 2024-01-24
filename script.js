   let input = document.getElementById('input');
    let button = document.querySelectorAll('button');

    let string = '';
    let ary = Array.from(button);
    ary.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
          equal();
        } else if (e.target.innerHTML == 'AC') {
  ac()
        } else if (e.target.innerHTML == 'DEL') {
          del()
        } else if (e.target.innerHTML == 'π') {
          pi()

        }
        else if (e.target.innerHTML == '%') {
          percent()
        }

        else if (e.target.innerHTML == 'cos') {
          cos()

        }
        else if (e.target.innerHTML == 'sin') {
          sin()


        }
        else if (e.target.innerHTML == 'tan') {
          tan()
        }
        else if (e.target.innerHTML == 'cot') {
          cot()
        }
        else if (e.target.innerHTML == 'sec') {
          sec()
        }
        else if (e.target.innerHTML == 'Exp') {
          exp()
        }

        else if (e.target.innerHTML == 'x^2') {
          x2()
        }

        else if (e.target.innerHTML == 'x^3') {
          x3()
        }

        else if (e.target.innerHTML == 'log') {
          log()
        }

        else if (e.target.innerHTML == 'ln') {
          ln()
        }

        else if (e.target.innerHTML == 'sqrt') {
          sqrt()
        }

        else if (e.target.innerHTML == 'sq') {
          sq()
        }

        else if (e.target.innerHTML == 'Rad') {
          rad()
        }

        else if (e.target.innerHTML == 'Deg') {
          deg()

        }
        
        else {
          string += e.target.innerHTML;
          input.value = string;
        }
      });
    });
    
  
    function pi() {
      string = Math.PI(string);
      input.value = string;
    }
    function del(){
      string = string.slice(0,-1);
      input.value = string;
    }
    function ac(){
      string = '';
      input.value = string;
    }
    function equal (){
      string = eval(string);
      input.value ="Ans. = "+ string;
    }
    function percent(){
      string = (string/100);
      input.value = string;
    }

    function sqrt() {
      string = Math.sqrt(string);
      input.value = string;

    }

    function exp() {
      string = Math.exp(string);
      input.value = string;

    }

    function tan() {
      string = Math.tan(string);
      input.value = string;

    }

    function cot() {
      string = 1 / Math.tan(string);
      input.value = string;
    }

    function sec() {
      string = 1 / Math.cos(string);
      input.value = string;

    }

    function log() {
      string = Math.log10(string);
      input.value = string;

    }

    function ln() {
      string = Math.log(string);
      input.value = string;
    }

    function rad() {
      string = string * (Math.PI / 180);
      input.value = string;

    }

    function deg() {
      string = string * (180 / Math.PI);
      input.value = string;

    }

    function sq() {
      string = Math.pow(string, 2);
      input.value = string;

    }

    function sin() {
      string = Math.sin(string);
      input.value = string;

    }

    function cos() {
      string = Math.cos(string);
      input.value = string;

    }

    function x2() {
      string = Math.pow(parseFloat(string), 2);
      input.value = string;
    }

    function x3() {
      string = Math.pow(parseFloat(string), 3);
      input.value = string;
    }
    
 
let fixvalue = document.getElementById('fix').onclick = clickfunction;

    let numvalue = document.getElementById('numb').onclick = clickfunction2;

    let numberVal = document.getElementById('frst-123');
    let fxvalue = document.getElementById('sec-fx');



    function clickfunction() {
      numberVal.style.display = 'none';
      fxvalue.style.position = 'overlap';
      fxvalue.style.display = 'block';
      fxvalue.style.backfacevisibility = 'visible';

    }

    function clickfunction2() {
      numberVal.style.display = 'block';
      fxvalue.style.display = 'none';

    }