'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    
    function compare(a:number,b:number){return a-b}
    const sorted = arr.sort(compare)
    const min = arr.reduce((accumulator, currentValue, index)=>{
        if(index==4){
            return accumulator           
        }
        return accumulator+currentValue
    },0)
    
    const max = arr.reduce((accumulator, currentValue, index)=>{
        if(index==0){
            return accumulator           
        }
        return accumulator+currentValue
    },0)    
    
    console.log(min, max)
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

