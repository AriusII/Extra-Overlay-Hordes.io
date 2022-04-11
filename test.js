console.log("test")

// @grant unsafeWindow
unsafeWindow.sayHelloTo = function sayHelloTo (name) {
    console.log(`Hello ${name}!`)
}

class Test {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }

    test() {
        alert(`a:${this.a} | b:${this.b}`)
    }
}