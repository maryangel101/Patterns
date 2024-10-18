// Subject class
class Subject {
    constructor() {
        this.observers = [];  // List of observers
    }

    // Method to add an observer
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify all observers with some data
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer class
class Observer {
    update(data) {
        console.log(`Observer received data: ${data}`);
    }
}

// Creating a subject instance
const subject = new Subject();

// Creating two observer instances
const observer1 = new Observer();
const observer2 = new Observer();

// Subscribing observers to the subject
subject.subscribe(observer1);
subject.subscribe(observer2);

// Notify all observers with some data
subject.notify('Hello Observers!');

// Output:
// Observer received data: Hello Observers!
// Observer received data: Hello Observers!
