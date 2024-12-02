class SomeClass {
    constructor(channel) {
        this.channel = channel;
    }

    someMethod() {
        const domain = assembleDomain(this, this.channel);
        console.log(domain);
        // Additional logic using the domain variable
    }
}

function assembleDomain(context, channel) {
    // Logic to assemble the domain based on the context and channel
    return `Domain for ${channel}`;
}

const instance = new SomeClass('exampleChannel');
instance.someMethod(); // Logs: "Domain for exampleChannel"
