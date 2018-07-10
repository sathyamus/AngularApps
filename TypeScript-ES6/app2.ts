class Foo {}
class Bar{}
class Toto{
    constructor(private foo: Foo, bar : Bar) {
        let foo1 = new Foo();
    }

    test () {
        this.foo; // able to access foo which is created in constructor
        // not able to access bar, because bar variable is a type of Bar
        // if we are not specifying access specifier it changes the behaviour
        // taking as type of Object

    }
}

new Toto(new Foo(), new Bar());

