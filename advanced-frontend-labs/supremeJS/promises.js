

//common start
console.log('start')

//1
function delay(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(n)
            resolve();
        }, n * 1000)
    })
}

// delay(10);

//2

function delayCounter(n) {
    delay(n).then(
        result => {
            if (n - 1 < 0) return;
            delayCounter(n - 1);
        }
    )
}

//delayCounter(5);

//3

let url = "https://api.github.com/users/goryachkinama/repos"

function fetchFunc(f_url) {
    let response = fetch(f_url).then(
        result => {
            console.log('yeah')
            return result.json()
        },
        error => {
            console.log('oh')
            console.log(error)
        }
    )
    response.then((_this) => console.log(_this[0]["full_name"]));
}

//fetchFunc(url)