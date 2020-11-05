//There is a line of people, t (an integer)
//Each person is labeled with the original position they came.
//The last persons's label, n
//q = the given array 
//Everyone can switch with the person in FRONT of them but only TWO times.

const { Cipher } = require("crypto");

//If someone switches more than twice, it is too chaotic

//Return an interger with the minimum amount of bribes that got it to it's current state.  if it's more than too, return "Too Chaotic.".


//Find the max number of the array
// function max(q) {
//     let maxNumber = q[0];
//     // console.log('maxNumber', maxNumber);
    
//     for(let i=0; i<q.length; i++) {
//         if(q[i] > maxNumber) {
//             maxNumber = q[i]
//         }
//     }


//     for(let i0)
//     return maxNumber


// } 







// function minimumBribes(q) {
//     //Create a dictionary to keep track of how many times each person swapped.
//     let swaps = [];
//     //Find the max number of the array
//     let maxNum = max(q);
//     //Create an array that has the inital people in line given the number of people.
//     let array = [];
//     //Input the people using the maxNum to the new array
//     for(let i=1; i<=maxNum; i++){
//         array.push(i);
//     }
//     //Add elements from given array to dictionary.
//     for(let i=0; i<q.length; i++) {
//         let key = q[i];
//         swaps.push({
//             key: key,
//             value:0
//         });
//     }
//     let addValue = Object.fromEntries(
//         Object.entries(swaps).map(([key, value]) => [key, value+1])
//     );
    
//     //How many positions did 1 and 2 move?
//     for(let i=0; i<q.length; i++){
//         for(let j=0; j<=array.length; j++) {
//             if(q[i]===array[j]) {
//                 let num = array[j].toString();
//                 console.log('num',num);

//                 console.log("whats it adding?", addValue.num);
//                 // console.log('q[i]', q[i]);
                
//             }
//         }
//     }
//     console.log("swaps", swaps);

// }



function minimumBribes(q) {

   let bribes = 0;


    // Check to see if we have a invalid Array
    for (let i=0; i<=q.length; i++) {
        // A persons original index is their element value minus 1. 
        let originalPlacement = q[i] - 1;
        // console.log('originalPlacement', originalPlacement);
        // If a person's new index is eqal to their original placement minus 2, then it's too chaotic.
        // console.log('i',i);
        // console.log('orginialPlacement', originalPlacement);
        // console.log('minus2', originalPlacement-2)
        if(i <= originalPlacement-2) {
            return 'Too Chaotic'
        }
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
    }
}

// let q = [1,2,3];

// let q = [2,5,1,3,4];
// let q = [1,4,2,3,5];
//Answer should be too chaotic


console.log(minimumBribes(q));
// console.log(max(q));


//If they moved, how many spots 
//Can only move TWO times max
//Can move 1, 2 or 0

//Determine the switches for EACH positoin 


