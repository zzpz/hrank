'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    // Write your code here
    // possible values in [1,...,5]
    
    const num = 5
    
    const seen:number[] = new Array(num).fill(0)
    let counts = arr.reduce((accumulator,value) =>{
        --value
        accumulator[value]++
        seen[value]++
        return accumulator
    },Array.from(seen)) //needed to make a deep copy
    
    //got to be a better way than this
    counts.sort(sortFn)
    return(1+(seen.indexOf(counts.sort(sortFn)[num-1])))   
}

const sortFn = (a:number,b:number) =>{
    return a-b
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arrCount: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

