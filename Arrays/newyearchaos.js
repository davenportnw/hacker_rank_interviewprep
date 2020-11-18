const { count } = require("console");




function minimumBribes(q) {
    // Check Validation
    // if input is valid
    if (isValid(q)) {
        // then do the work
        countBribes(q);
    } else {
        console.log('Too chaotic');
    }
}


function isValid(q) {  // --> return booleans
    
     // Check to see if we have a invalid Array
     for (let i=0; i<=q.length; i++) {
        //  console.log('q[i]', q[i]);
        //  console.log('i', i);
        // A persons original index is their element value minus 1. 
        let originalPlacement = q[i] - 1;
        // console.log('originalPlacement', originalPlacement);
        //Find the difference of the origniial position compared to their current position
        let difference = originalPlacement - i;
        //      

        // I have to go through the length of the array
        // If the first difference is less than 2, then go to the next element.
        if(difference < 2) {
            continue;
        }// If a person's difference of their current and original index is more than 2 than it's too chaotic.
         else if (difference > 2) {
            return false;
        } else {
            return true;
        }
        // If a person's difference of their current and original index is more than 2 than it's too chaotic.
        // if(difference > 2) {
        //    return false;
        // } else {
        //     return true;
        // }
    }
}


function countBribes(q) {
    let bribes = 0;

    // We are going from the end of the line to the front of the line
    // To find the originalPlacement we are looking for, we will add 1 to our current index
    // if our originalPlacement is equal to q[i-1], swap the placement and add 1 to bribes.
    // if our originalPlacement is equal to q[i-2], swap the placement and add 2 to bribes.

    for(let i=q.length-1; i >=0; i--) {
        let originalPlacement = i + 1;
        if(q[i-1]===originalPlacement){
            let temp = q[i-1];
            q[i-1]=q[i];
            q[i]=temp; 
            bribes++;
        }
        if(q[i-2]===originalPlacement) {
            let temp = q[i-2];
            q[i-2]=q[i-1];
            q[i-1]=q[i];
            q[i]=temp;
            bribes+=2;
        }
    }
    console.log(bribes);
    
}

// let q = [1,2,5,3,4,7,8,6];
// expected output is 4

// let q = [4,1,2,3,4];
// let q = [2,1,5,3,4];
// let q = [1,4,2,3,5];

// let q = [2,5,1,3,4];
// print too chaotic

let q = [1,2,5,3,7,8,6,4];
//print 7



// console.log(countBribes(q));
console.log(minimumBribes(q));
// console.log(max(q));


//If they moved, how many spots 
//Can only move TWO times max
//Can move 1, 2 or 0

//Determine the switches for EACH positoin 

 // If a person's new index is equal to their element minus 2, then they moved one position.
        // else if(q[i]-1-i === i) {
        //     bribes++
        //     // console.log('bribes', bribes);
        // } 
        // If a person's new index is equal to their element minus 1, then they moved 2 positions.
        // else if(q[i]-1===i) {
        //     bribes =+2;
        //     // console.log('bribes', bribes);
        // }

