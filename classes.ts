namespace Classes {

    type ENGINE_TYPE = "R4" | "B6" | "V8"
    
    class Engine {
        constructor(public readonly type: ENGINE_TYPE) { }
    }
    
    
    class Car {
        private engine: Engine
        constructor(engine: Engine) {
            this.engine = engine
        }

        get carEngine() {
            return this.engine
        }

        set carEngine(engine: Engine) {
            this.engine = engine
        }
    }

    const porsche = new Car(new Engine("B6"))
    
    console.log(porsche.carEngine.type)
    
    porsche.carEngine = new Engine('V8')
    
    console.log(porsche.carEngine.type)
}
