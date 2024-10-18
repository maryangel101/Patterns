class Singleton {
    constructor() {
        // Check if an instance of Singleton already exists
        if (!Singleton.instance) {
            // If not, assign this instance
            Singleton.instance = this;
        }
        // Return the single instance (either the existing one or the new one)
        return Singleton.instance;
    }

    // A sample method
    someMethod() {
        console.log('Singleton method called!');
    }
}

// Testing the Singleton
const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.someMethod(); // Output: Singleton method called!

console.log(instance1 === instance2); // Output: true