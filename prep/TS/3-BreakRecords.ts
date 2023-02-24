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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    // Write your code here
    
    //we have to iterate left to right since the breaking of record is sequential?
    // OR we divide and conquer for any given pair? I don't think so.
    // 1 ... 2 3 4 5 6 5 4 3 2 2 would never break minimum
    
    // NAIVE APPROACH:
    // iterate the array tracking min/max 
    let out = [0,0]
    const MAX = 0
    const MIN = 1
    let max_seen = scores[0] 
    let min_seen = scores[0]
    
    for(let i:number=1;i<scores.length;i++){
        if(scores[i]<=max_seen){
            if(scores[i]<min_seen){
                out[MIN]++
                min_seen = scores[i]
            }
        } else{
            out[MAX]++
            max_seen = scores[i]
        }
    }
    
    
    return out

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const scores: number[] = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result: number[] = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

