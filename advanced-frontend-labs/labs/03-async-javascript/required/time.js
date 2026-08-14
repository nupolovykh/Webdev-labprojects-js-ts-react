
//1
//counter(3);
function counter(n){
    for(let b = n; b >= 0; b--){
        setTimeout(() => console.log(b), b * 1000);
    }
}

//counter2(3);
function counter2(n){
    let newN = n;
    const inrval = setInterval(() => {
        console.log(newN);
        newN--;
        if(newN < 0) clearInterval(inrval);
    }, 1000);
}


//2
class Timer {
    constructor(n) {
        this.start_value = n;
        this.timer = undefined;
        this.value = n; 
    }

    start(){
        this.timer = setInterval(() => {
            console.log(this.value);
            this.value--;
            if (this.value < 0) {
                this.stop();
            }
        }, 1000);
    }

    pause(){
        clearInterval(this.timer);
        this.timer = undefined;
    }

    stop(){
        this.pause()
        this.value = this.start_value;
    }
}

function createCounter(){
    return new Timer(50);
}

//test of the timer

let timer = createCounter();
timer.start();

setTimeout(() => {
    console.log('pause')
    timer.pause()

}, 10000);

setTimeout(() => {
    console.log('start')
    timer.start();

}, 20000);

setTimeout(() => {
    console.log('stop')
    timer.stop()
}, 30000);