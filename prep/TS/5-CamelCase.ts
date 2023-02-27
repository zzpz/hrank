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

const isUpper = (str:string) =>{

    if(str.charCodeAt(0)<91 && str.charCodeAt(0)>64){
        return true
    }    
    return false
}

const capitalise = (str:string) =>{
    return str.charAt(0).toUpperCase()+str.slice(1)
}

const splitOp = (t:string, str:string) =>{
    
    //tortoise and hare problem
    // when tortoise catches hare end substring-ing
    //start at 0, hare goes to "next" or "end"
    
    //we are assuming a minimum of 2 characters
    let tort = 0
    let hare = 0
    let substrs = []
    
    while(hare<str.length){
        hare++
        if(isUpper(str.charAt(hare))){
            substrs.push(str.slice(tort,hare))
            tort=hare
        }
    }
    substrs.push(str.slice(tort,hare)) //and one since we're not working on a stream till end of file
    
    return(substrs.join(" ").toLocaleLowerCase())
}


const combineOp = (t:string,str:string) => {
    
    //split on spacing, capitalise as necessary
    
    let splitWords = str.split(" ")
    let start:number = t==="M"?1:0
    let suffix:string = t==="M"?"()":""
    
    for(let i = start;i<splitWords.length;i++){
        const word = splitWords[i]
        splitWords[i] = capitalise(word)
    }
    
    return [...splitWords,suffix].join("")    
}



function main() {
    // Enter your code here
    
    // readline
    // split input
    // perform relevant operation
    
    //seems like a switch statement
    let out:string[] = [];
    let line:string
    
    while(line=readLine()){
        let vars = line.split(";")
        
        // Combine
        // Split
        let METHOD = vars[0]
        let TYPE = vars[1]
        let STR = vars[2] 
        
        // from here we can proceed to switch
                
        switch(METHOD){
            case "S":
                out.push(splitOp(TYPE,STR))
                break
            case "C":
                out.push(combineOp(TYPE,STR))
                break
        }
    }        
    out.forEach((value) => {console.log(value)})
}

