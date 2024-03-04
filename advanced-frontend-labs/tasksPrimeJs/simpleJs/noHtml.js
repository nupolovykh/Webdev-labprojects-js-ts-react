//  1-task

function first(){
    const arr = [1, 6, -1, 22, 13];
    let max = 0, min = 0;
    arr.forEach(element => {
        max = Math.max(element, max)
        min = Math.min(element, min)
    });
    console.log(max, min);
}
//first()

//  2-task

function second(){
    const str = "!olleH"
    //str = prompt('Enter your string')
    console.log(str.split('').reverse().join(''));
}
//second()

//  3-task

function third(){
    let sum = 0;
    const arr = [3, 5, 8, 13, 21, 42];
    arr.forEach(element => {
        if(element % 2 == 0) sum += Math.sqrt(element);
    });
    console.log(sum)
}
//third()

//  4-task

function fourth_anagram(str1, str2){
    let arr1 = String(str1).toLocaleLowerCase().split('');
    let arr2 = String(str2).toLocaleLowerCase().split('');
    arr1.forEach(element => {
        let index = arr2.indexOf(element)
        index != -1 ? arr2.splice(index, 1) : true
    });
    if(arr2.length == 0) return true
    return false
}
//console.log(fourth_anagram("Лунь", "нуль"))
//console.log(fourth_anagram("Лунь", "ноль"))

//  5-task

function fifth_palindrome(str){
    if(String(str).toLocaleLowerCase().replaceAll(' ', '') === String(str).toLocaleLowerCase().replaceAll(' ', '').split('').reverse().join('')) return true;
    return false;
}
//console.log(fifth_palindrome("Не гни папин ген"))
//console.log(fifth_palindrome("123"))

//  6-task

function sixth(first, second){
    if(first == null && second == null) setTimeout(() => {
        console.log(0);
        return sixth(0, 0)
    }, 1000);
    else if (first == 0 && second == 0) setTimeout(() => {
        console.log(1);
        return sixth(0, 1)
    }, 1000);
    else {
        let next = first + second
        return setTimeout(() => {
            console.log(next);
            sixth(second, next)
        }, 1000);
    }
}
//sixth()

//  7-task

function seventh_intersect(arrA, arrB) {
    let arrC = Array.from(arrA).filter(value => Array.from(arrB).includes(value));
    console.log(arrC);
}
//seventh_intersect([1, 2, 3, 4], [3, 4, 5, 6])

//  9-task

function ninth() {
    //let i;
    for(let i = 1; i <= 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }

    // let i;
    // for(i = 1; i <= 3; i++) {
    //     ((i) => {setTimeout(() => console.log(i), 1000)})(i);
    // }
}
//ninth()




