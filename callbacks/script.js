function loadEvent() {

    function multiply(callback, a, b) {
        return callback(a, b) * 10
    }
    function add(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }

    console.log(multiply(add, 2, 3))
    console.log(multiply(sub, 2, 3))
}

window.addEventListener("load", loadEvent)

//callback arra szolgál, h egy fü nevét paraméternek használjuk