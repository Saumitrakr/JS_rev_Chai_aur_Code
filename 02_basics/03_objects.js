// Objects can be declared in two ways : Literals & Constructor

// singleton
// Object.create ( constructor method )

// object literals ; no singleton

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Can't access symbol or string if given as a key by . notation
// Objectname["String key"] ; Objectname[Symbol]

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  -> after freeze further changes to this object doesn't propagate
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


// function as a value of a key in an object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
