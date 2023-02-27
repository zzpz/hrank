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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here
    
    //generate an array of length queries.length with value 0
    let out: number[] = Array(queries.length).fill(0)

    // for each string in strings, count its occurences
    // for each string in queries, assign the count to the out array


    //naive --> N*M nested loops
    // return strings.reduce<number[]>( (result,value)=>{
    //     let check = value
        
    //     queries.reduce<number>((result,value,index)=>{
    //         if(value === check){
    //             out[index]++
    //         }
    //         return result 
    //     },0)
    //     return out
        
        
    // },out)
    
    //faster --> N + M with map
    const counts = strings.reduce<Record<string,number>>((result,value)=>{
        //add if not exists else increment
        result[value] = (result[value] || 0) + 1;     
        return result   
    },{})
    
    const q = queries.reduce<number[]>((result,value,index)=>{
            if(value in counts){
                result[index] = counts[value]
            }
            return result
        },out)

    return out
    
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const stringsCount: number = parseInt(readLine().trim(), 10);

    let strings: string[] = [];

    for (let i: number = 0; i < stringsCount; i++) {
        const stringsItem: string = readLine();
        strings.push(stringsItem);
    }

    const queriesCount: number = parseInt(readLine().trim(), 10);

    let queries: string[] = [];

    for (let i: number = 0; i < queriesCount; i++) {
        const queriesItem: string = readLine();
        queries.push(queriesItem);
    }

    const res: number[] = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}

