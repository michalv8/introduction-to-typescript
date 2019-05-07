namespace Generics {
    type TyreType = "summer" | "winter" | "all-season"

    interface Tyre {
        type: TyreType
    }

    interface Wheel<T extends TyreType> {
        tyre: {
            type: T
        }
    }

    const wheel: Wheel<"summer"> = {
        tyre: {
            type: "summer"
        }
    }
    
    console.log(wheel)
}