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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n: number, p: number): number {
    // Write your code here
    
    //page p is always at most _dist_ away from cover?
    let dist = Math.min(Math.abs(p-n),p)
    
    //base case
    if(p === 1){
      return 0
    }
    
    //even pages finish on final page formula doesn't work for them
    if(dist ==1 && n%2 === 0){
        return 1
    }
        
    return Math.floor(dist/2)
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const p: number = parseInt(readLine().trim(), 10);

    const result: number = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}

