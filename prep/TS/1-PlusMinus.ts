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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    
    
    // NAIVE approach:
    // iterate the elements, count, print
    let neg:number =0, zer:number =0, pos:number =0
    
    // arr.forEach((value)=>{
    //     if(value>0) {pos++}
    //     if(value<0) {neg++}
    //     if(value===0){zer++}       
    // })
    // console.log((pos/arr.length))
    // console.log((neg/arr.length))
    // console.log((zer/arr.length))
    
    // we could do MUCH better in parallel by map reduce to a 3 tuple
    var init = {pos:0,neg:0,zer:0}

    
    const x = arr.reduce<Record<string,number>>((result,value) => {
        if(value>0){result["pos"]++}
        if(value<0){result["neg"]++}
        if(value===0){result["zer"]++}
        return result          
    },init)
    
    
    console.log((x["pos"]/arr.length).toLocaleString(undefined, { maximumFractionDigits: 6, minimumFractionDigits: 6 }));
    console.log((x["neg"]/arr.length).toLocaleString(undefined, { maximumFractionDigits: 6, minimumFractionDigits: 6 }));
    console.log((x["zer"]/arr.length).toLocaleString(undefined, { maximumFractionDigits: 6, minimumFractionDigits: 6 }));
    
    

    

}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

