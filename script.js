var app = new Vue({
  // element property which points to the DOM
  el: '#app',
  data: {
    //the data we'll use in
    //building our app goes in here
    current: '',
    x: '',
    y: '',
    operator: null,
    changeMode: true

  },
  methods: {
    // the functions we'll use in
    // controlling our app go in here
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
      //we make a reference to the inner text
      // of each button to dispatch our functions
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

// our '=' button
function equals() {
  if ((app.current).indexOf("^") > -1) {
    var base = (app.current).slice(0, (app.current).indexOf("^"));
    var exponent = (app.current).slice((app.current).indexOf("^") + 1);
    app.current = eval("Math.pow(" + base + "," + exponent + ")");

  } else {
   app.current = eval(app.current);
  }
}

  // our 'C' button
  function clear() {
    app.current = "";
  }

  // our '<=' button
  function backspace() {
    app.current = app.current.substring(0, app.current.length - 1);
  }

  // our '*' button
  function multiply() {
    app.current += "*";
  }

  // our '/' button
  function divide() {
    app.current += "/";
  }

  // our '+' button
  function plus() {
    app.current += "+";
  }

  // our '-' button
  function minus() {
    app.current += "-";
  }

  // our '±' button
  function plusMinus() {
    if (app.current.charAt(0) === "-") {
      app.current = app.current.slice(1);
    } else {
      app.current = "-" + app.current;
    }
  }

  // our 'x!' button
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

  // our 'π' button
  function pi() {
    app.current = (app.current += Math.PI);
  }

  // our 'x ²' button
  function square() {
    app.current = (app.current * app.current);
  }

  // our '√' button
  function squareRoot() {
    app.current = Math.sqrt(app.current);
  }

  // our '%' button
  function percent() {
    app.current = app.current / 100;
  }

  // our 'sin' button
  function sin() {
    app.current = Math.sin(app.current);
  }

  // our 'cos' button
  function cos() {
    app.current = Math.cos(app.current);
  }

  // our 'tan' button
  function tan() {
    app.current = Math.tan(app.current);
  }

  // our 'log' button
  function log() {
    app.current = Math.log10(app.current);
  }

  // our 'ln' button
  function ln() {
    app.current = Math.log(app.current);
  }

  // our 'X^' button
  function exponent() {
    app.current += "^";
  }

  // our 'exp' button
  function exp() {
    app.current = Math.exp(app.current);
  }

  // our 'rad' button
  function radians() {
    app.current = app.current * (Math.PI / 180);
  }

  // our '∘' button
  function degrees() {
    app.current = app.current * (180 / Math.PI);
  }
