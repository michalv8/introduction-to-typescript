// string as type
type Identity = string

const entityId: Identity = "qwertyu"

// union type as type
type HTTP_CODE = 400 | 404 | 500

// tuple as type
type MotorbikeWheels = [Wheel, Wheel]

interface Motorbike {
    wheels: MotorbikeWheels
}

const frontWheel: Wheel = { make: "Dunlop", type: "summer" }
const backWheel: Wheel = { make: "Dunlop", type: "summer" }

const myMotorbike: Motorbike = {
    wheels: [
        frontWheel,
        backWheel
    ]
}