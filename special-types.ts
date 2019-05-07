// void
function foo(): void {
    console.log("bar")
}

// null
function bar(): null {
    return null
}

// union
let test: number | boolean = false

test = 999      // correct

// never
function throwError(): never {
    throw new Error()
    // this block cannot be executed
}

// any
let code: any = "404"

code = false    // correct
code = 666      // correct