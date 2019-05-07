namespace Generics {
    class Collection<T> {
        private items: T[]

        public constructor() {
            this.items = []
        }

        public add(item: T): this {
            this.items.push(item)

            return this
        }

        public all(): T[] {
            return this.items
        }
    }

    const numbers: Collection<number> = new Collection<number>()

    numbers.add(1)
    numbers.add(2)

    console.log(numbers.all())

    const numbersOrStrings: Collection<number | string> = new Collection<number | string>()

    numbersOrStrings.add(1)
    numbersOrStrings.add("two")

    console.log(numbersOrStrings.all())
}

