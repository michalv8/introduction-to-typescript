// interface
interface CarPart {
    make: string
}

interface Engine extends CarPart {
    capacity: string
}

interface Transmission extends CarPart {
    amountOfGears: number
}

interface Wheel extends CarPart {
    type: "winter" | "summer"
}

interface Car {
    engine: Engine
    transmission: Transmission
    wheels: Wheel[]
}

const winterWheel: Wheel = { 
    make: "Dębica",
    type: "winter",
}
const summerWheel: Wheel = { 
    make: "Pirelli",
    type: "summer",
}

const myCar: Car = {
    engine: {
        make: "BMW AG",
        capacity: "5.0"
    },
    transmission: {
        make: "ZF",
        amountOfGears: 8
    },
    wheels: [
        summerWheel,
        summerWheel,
        winterWheel,
        winterWheel,
    ],
}