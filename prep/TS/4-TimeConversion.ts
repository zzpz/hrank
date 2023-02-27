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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


function timeConversion(s: string): string {
    // Write your code here  
    // sidenote not fan of being unable to parse to a DateObject directly and use locale time
    
    //split/substring it
    let [h,m,spm] = s.split(":")
    if(spm.substr(2,2) =="PM"){
        h= (parseInt(h)+12).toString()
    }
    spm=spm.substr(0,2)
    
    return [h,m,spm].join(":")
}
    
    
function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

