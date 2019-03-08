var app = new Vue({
  el: '#app',
  data: {
    current: '',
    x: '',
    y: '',
    operator: null,
    changeMode: true

  },
  methods: {
    setNumber(digit) {
      if (this.operator === null) {
        this.x += digit;
        this.display = this.x;
      } else {
        this.y += digit;
        this.display = this.y;
      }
    },
    press: function(event) {
      let key = event.target.innerText;
      if (key != "=" &&
        key != "C" &&
        key != "*" &&
        key != "/" &&
        key != "sqrt" &&
        key != "x^2" &&
        key != "%" &&
        key != "back" &&
        key != "+/-" &&
        key != "sin" &&
        key != "cos" &&
        key != "tan" &&
        key != "log" &&
        key != "ln" &&
        key != "x^" &&
        key != "x !" &&
        key != "pi" &&
        key != "e" &&
        key != "rad" &&
        key != "deg") {
        app.current += key;
      } else if (key === "=") {
        equals();
      } else if (key === "C") {
        clear();
      } else if (key === "*") {
        multiply();
      } else if (key === "/") {
        divide();
      } else if (key === "+") {
        plus();
      } else if (key === "-") {
        minus();
      } else if (key === "+/-") {
        plusMinus();
      } else if (key === "back") {
        backspace();
      } else if (key === "%") {
        percent();
      } else if (key === "pi") {
        pi();
      } else if (key === "x^2") {
        square();
      } else if (key === "sqrt") {
        squareRoot();
      } else if (key === "sin") {
        sin();
      } else if (key === "cos") {
        cos();
      } else if (key === "tan") {
        tan();
      } else if (key === "log") {
        log();
      } else if (key === "ln") {
        ln();
      } else if (key === "x^") {
        exponent();
      } else if (key === "x !") {
        factorial();
      } else if (key === "e") {
        exp();
      } else if (key === "rad") {
        radians();
      } else if (key === "deg") {
        degrees();
      }
    },
  }
});

// '=' button
function equals() {
  if ((app.current).indexOf("^") > -1) {
    var base = (app.current).slice(0, (app.current).indexOf("^"));
    var exponent = (app.current).slice((app.current).indexOf("^") + 1);
    app.current = eval("Math.pow(" + base + "," + exponent + ")");

  } else {
   app.current = eval(app.current);
  }
}

  //  'C' button
  function clear() {
    app.current = "";
  }

  //  'back' button
  function backspace() {
    app.current = app.current.substring(0, app.current.length - 1);
  }

  //  '*' button
  function multiply() {
    app.current += "*";
  }

  //  '/' button
  function divide() {
    app.current += "/";
  }

  //  '+' button
  function plus() {
    app.current += "+";
  }

  //  '-' button
  function minus() {
    app.current += "-";
  }

  //  '+/-' button
  function plusMinus() {
    if (app.current.charAt(0) === "-") {
      app.current = app.current.slice(1);
    } else {
      app.current = "-" + app.current;
    }
  }

  //  'x!' button
  function factorial() {
    var number = 1;
    if (app.current === 0) {
      app.current = "1";
    } else if (app.current < 0) {
      app.current = NaN;
    } else {
      var number = 1;
      for (var i = app.current; i > 0; i--) {
        number *= i;
      }
      app.current = number;
    }
  }

  //  'pi' button
  function pi() {
    app.current = (app.current += Math.PI);
  }

  //  'x^2' button
  function square() {
    app.current = (app.current * app.current);
  }

  //  'sqrt' button
  function squareRoot() {
    app.current = Math.sqrt(app.current);
  }

  //  '%' button
  function percent() {
    app.current = app.current / 100;
  }

  //  'sin' button
  function sin() {
    app.current = Math.sin(app.current);
  }

  //  'cos' button
  function cos() {
    app.current = Math.cos(app.current);
  }

  //  'tan' button
  function tan() {
    app.current = Math.tan(app.current);
  }

  //  'log' button
  function log() {
    app.current = Math.log10(app.current);
  }

  //  'ln' button
  function ln() {
    app.current = Math.log(app.current);
  }

  //  'X^' button
  function exponent() {
    app.current += "^";
  }

  //  'exp' button
  function exp() {
    app.current = Math.exp(app.current);
  }

  //  'rad' button
  function radians() {
    app.current = app.current * (Math.PI / 180);
  }

  //  'deg' button
  function degrees() {
    app.current = app.current * (180 / Math.PI);
  }
