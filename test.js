console.log("test")

// @grant unsafeWindow
unsafeWindow.sayHelloTo = function sayHelloTo (name) {
    console.log(`Hello ${name}!`)
}

export class Test {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }

    test() {
        alert(`a:${a} | b:${b}`)
    }
  }