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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s: string): number {
    // Write your code here
    
    const sliceSize = 3
    let sliceFrom =0
    let sliceTo = 0
    const compareString:string = "SOS"
    let out = 0
    //take n=3 slices of the string and then iterate each letter and compare
    while(sliceTo < s.length){
        sliceTo+=sliceSize
        
        const sos = s.slice(sliceFrom,sliceTo)
        for(let i=0;i<sliceSize;i++){
            let expected = compareString.charAt(i);
            let found = sos.charAt(i);

            //comparator returns 0 if equivalent strings else 1 or -1
            if(0 != expected.localeCompare(found,undefined,{sensitivity:"base"})){
                // console.log("NOMATCH",found,expected)
                out++
            }
        }
        sliceFrom+=sliceSize
    }
    return out
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: number = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}

