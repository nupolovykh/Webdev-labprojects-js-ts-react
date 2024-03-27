const users = [
    { user: 'fred',   age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred',   age: 40 },
    { user: 'barney', age: 34 }
];

console.log(users.sort((a, b) => a.age - b.age));