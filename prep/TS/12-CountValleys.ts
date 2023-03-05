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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string): number {
    // Write your code here
    
    
    //A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
    
    let h =0;
    let v= 0;
    let m= 0;
    let b4_state = Math.sign(h)
    for(let i =0; i < path.length;i++){
        const c = path.charAt(i)   
        //track before step, after step and increment accordingly?
        //no, read the question we can reframe it as 
        //"when do i step up to level or step down to level"
        
        
        //states:
        
        //0 -> 1 : start mountain
        //0 -> -1: start valley
        //1->0: end mount
        //
        // 0 + 1, 0 - 1, 1+0, 1+1, -1+0, -1-1
        if(c==="U"){h++}else{h--}
        const current_state = Math.sign(h)
        if(b4_state===current_state){
            //pass
        }else{
            switch(b4_state){
                case 0:
                    break
                case -1:
                    v++
                    break
                case 1:
                    m++
                    break   
            }
        }
        b4_state = Math.sign(h)
    }
    return v
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const steps: number = parseInt(readLine().trim(), 10);

    const path: string = readLine();

    const result: number = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}

