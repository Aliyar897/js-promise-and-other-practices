// let key = prompt('Enter you key')
// let value = prompt('Enter you value')

// localStorage.setItem(key, value);

// console.log(`the key ${key} and value ${localStorage.getItem(key)} have been added...`)



let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username iamirfamamir...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]


const sleep = async (seconds) => {
    return new Promise((resolve) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}

const showHack = async (message) => {
    await sleep(2)
    console.log(message)
    document.getElementById('text').innerHTML += message +'<br />' 
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()