function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timeout resolved');
        }, 2000);
    });
}

function* main() {
    console.log('Entry');

    const result = yield wait();
    console.log(result);

    const result2 = yield wait();
    console.log(result2);

    // ...

    console.log('Exit');
    return 'Return';
}

function run(fn, ...args) {
    const it = fn(...args);

    return new Promise((resolve, reject) => {
        function step(resolvedValue) {
            const result = it.next(resolvedValue);

            if (result.done) {
                resolve(result.value);
                return;
            }

            result.value.then(resolvedValue_ => {
                step(resolvedValue_);
            });
        };
        step();
    });
}

run(main).then(result => {
    console.log(result);
});


// function* main() {
//     console.log('Entry');

//     const result = yield wait();
//     console.log(result);

//     console.log('Exit');
//     return 'Return';
// }

// const it = main();
// it.next().value.then(resolvedData => {
//     it.next(resolvedData);
// });


// var p2 = new Promise(function (resolve, reject) {
//   resolve(1);
// });
// //var p2 = new Promise((resolve, reject) => resolve(1));

// p2.then(function (value) {
//   console.log(value); // 1
//   return value + 1;
// }).then(function (value) {
//   console.log(value); // 2
// });

// p2.then(function (value) {
//   console.log(value); // 1
// });