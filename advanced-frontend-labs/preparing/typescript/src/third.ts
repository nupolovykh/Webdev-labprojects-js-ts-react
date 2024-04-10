function zip<T, U>(first: T[], second: U[]) : Array<[T, U]> {
    const minLength = Math.min(first.length, second.length);
    const result: Array<[T, U]> = [];
    for (let i = 0; i < minLength; i++) {
        result.push([first[i], second[i]])
    }
    return result
}

const q11: Array<[number, string]> = zip([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
const q12: Array<[boolean, boolean]> = zip([true], [false, false]);

function groupBy<T, U, V>(source : T[], keySelector: (item: T, index: number) => U, valueSelector: (item: T, index: number) => V) {
    const result = new Map();
    for (let i = 0; i < source.length; i++) {
        const item = source[i];
        const key = keySelector(item, i);
        const value = valueSelector(item, i);
        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key).push(value);
    }

    return result;
}

const q21: Map<number, number[]> = groupBy([1, 2, 3, 4], x => x % 2, x => x + 1);
const q22: Map<boolean, { x: string, i: number }[]> = groupBy(["aaa", "bbb", "cc", "q", "lalaka"], (_, i) => i % 2 === 0, (x, i) => ({ i, x }))


export function ThirdTask() {
    console.log(q11, q12);
    console.log(q21, q22);
}
