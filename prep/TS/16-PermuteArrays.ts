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
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k: number, A: number[], B: number[]): string {
    // Write your code here
    
    //if the smallest of A and largest of B can't make it...
    const a = A.sort((a,b)=>{return a-b})
    const b = B.sort((a,b)=>{return b-a})
    
    for(let i =0;i<a.length;i++){
        if(a[i]+b[i]<k){
            return "NO"
        }
    }
    return "YES"


    

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const k: number = parseInt(firstMultipleInput[1], 10);

        const A: number[] = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B: number[] = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result: string = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}

