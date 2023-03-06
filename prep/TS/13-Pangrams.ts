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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s: string): string {
    // Write your code here
    
    //fixed size array of length alphabet
    const sizeOfAlphabet:number = 26
    
    const seen: number[] = new Array(sizeOfAlphabet).fill(0)
    //cannot re-assign variable, can re-assign contents
    //could just as easily be a set of size 26 matched on regex --> probably better
    
    //iterate or map reduce contents of string into the seen array
    for (let i = 0;i<s.length;i++){
        //get char -> map to position in alphabet
        
        //if isChar() => alphabet(position)= , could also do null coalescing
        
        const char = s.charAt(i)
        if(isChar(char)){
            //get position in alphabet and flag it as seen           
            //happy path
            seen[s.toLocaleLowerCase().charCodeAt(i)%97] = 1
        }
    }
    
    let out = "pangram"
    seen.forEach( (value)=>{ //.every() with truthy values for short-circuit
        console.log(value,value==1)
        if(value !==1){
            out = "not pangram"
        }
    })
    
    return out

    
    
}

const isChar = (char:string) =>{
    //assumed c is single character
    // String.prototype.localeCompare()
    // we could just check the charCode but i'm being lazy with this
    
    //"variant": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal.
    // Other differences may also be taken into consideration. Examples: a =/= b, a =/=a', a =/= A. (can't submit with NON-ASCII)

    //(/[a-zA-Z]/).test(char) //or just regex
    
    return (char.toLocaleLowerCase().localeCompare(char.toUpperCase(),undefined, {sensitivity:"variant"}))


}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}

