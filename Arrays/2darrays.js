/// Add the array

const { number } = require("yargs");




function add(n) {
    
    let count = 0;

    for(let i=0; i<3; i++) {
        // console.log('n[i]', n[i]);
        count = n[i] + count;
    }
    //don't use below
    //it mashes forloop and forech loop
    // logically
    // it's NOT a foreach loop in JS
    // you NEVER
    // index "a[i]" in a foreach loop
    // for(let i in n) {
    //     console.log(i)
    //     console.log(n);
    //     count = n[i] + count;
    // }
    return count;
}


//Find max number in a 1D array

function max(n) {
    let maxNumber = n[0];
    console.log('maxNumber', maxNumber);
    
    for(let i=0; i<n.length; i++) {
        if(n[i] > maxNumber) {
            maxNumber = n[i]
        }
    }

    return maxNumber


} 


let n = [1, 2, 3];

let m = [
    1, 
    2,
    3
]
let p = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let x = [
    [1, 2, 3, 0, 0],
    [4, 5, 6, 0, 0],
    [7, 8, 9, 0 , 0]
]


function print2D(m) {
    for(let i=0; i < m.length; i++) {
        // console.log("i:", i);
        for(let j=0; j < m[i].length; j++){
            // console.log("j:", j);
            console.log(m[i][j]);
        }
    }
}


// var matrix = [
//  1st i 0 [1, 2, 3],
//  2nd i 1 [4, 5, 6],
//  3rd i 2 [7, 8, 9]
// ];


function getGlassSum(m) {
    let glassSum = 0;

    for(let i=0; i < m.length; i++) {
        if(i===0) { // if we're on the first row
            for(let j=0; j < m[i].length; j++) { // move along each column in that row
                // console.log('m[i][j]', m[i][j]);  \
                glassSum += m[i][j]; // add up what you see
            }  
        } else if(i===1) {
            
            glassSum += m[1][1];

        } else if(i===2) { // if we're on the third row
            for(let j=0; j < m[i].length ; j++) { // move along each column in that row
                console.log('m[i][j]', m[i][j]);
                glassSum += m[i][j]; // add up what you see
            }   
        } 
    
    }

    console.log('glassSum: ', glassSum);
    return glassSum;
}

// console.log(getGlassSum(matrix));


// var matrix = [
//     [1, 2, 3, 1],
//     [4, 5, 6, 1],
//     [7, 8, 9, 1],
//     [1, 1, 1, 1]
// ];

function getGlassSumAnySizeMatrix(m) {
    let glassSum = 0;

    for(let i=0; i < m.length; i++) {
        if(i===0) { // if we're on the first row
            for(let j=0; j < 3; j++) { // move along each column in that row
                console.log('m[i][j]', m[i][j]); 
                glassSum += m[i][j]; // add up what you see
            }  
        } else if(i===1) {
            
            glassSum += m[1][1];

        } else if(i===2) { // if we're on the third row
            for(let j=0; j < 3 ; j++) { // move along each column in that row
                glassSum += m[i][j]; // add up what you see
            }   
        } 
    
    }

    console.log('glassSum: ', glassSum);
    return glassSum;
}

// console.log(getGlassSumAnySizeMatrix(matrix));


let matrix = [
    [1, 2, 3, 1, 1],
    [4, 5, 6, 1, 1],
    [7, 8, 9, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
];

function getGlassSumAnySizeMatrixAnyWhere(m, row, col) {
    let glassSum = 0;
    //How to get the loop (boat trajectory) to start on the given position
    for(let i=row; i===row; i++) {
        for(let j=col; j<=col+2; j++) {
            //            col       +    2
            // Add the current and next two positions fishes weight to the total sum
            glassSum += m[i][j];
            
        }
    }
    // Grab the fourth fish by reaching from the starting position (row, col) to one row down and to the right one.
   let fishFour = m[row+1][col+1];
   glassSum += fishFour;

    // Grab the last three fish by moving from the starting position (row, col) to two rows down, grab that fish and weigh it. Move two more positions and grab each fish and weigh it.
    for(let i=row+2; i===row+2; i++) {
        for(let j=col; j<=col+2; j++) {
            glassSum += m[i][j]; 
        }
    }

    return glassSum;
}

// console.log('getGlassSumAnySizeMatrixAnyWhere(matrix, 2, 1) --> 22',
//     getGlassSumAnySizeMatrixAnyWhere(matrix, 2, 1)
//     ); // --> should equal: 22
//Go through each array in the matrix and find the highest number
//Create a variable holding the highest number
//Go through the first array, see if the first number is higher than the next, if it is then replace it with the current number.
//Go through each array and see if the current position's number is higher than the highNumber. If it is, replace it with the current number.
function maxIn2dArray(m) {
    //Create a variable holding the highest number
    let highNumber = m[0][0];  
    //If the number in the arrays are negative numbers, then you cannot find the highest number if you set your highNumber to 0.
    //So you must make the first high number the first number of your matrix's first array's positions number.

    for(let i=0; i<m.length; i++) {
       for(let j=0; j<m.length; j++) {
            if(m[i][j] > highNumber) {
                highNumber = m[i][j];
            }
        }
    }
    return highNumber
} 
// console.log(maxIn2dArray(matrix));

// Find the highest glass sum of all the glass sum
// The array will always be 6 x 6.
// Watch out for the edges
function hourglassSum(arr) {
    // Initilize the value of the maxSum to the glass sum of the first position.
    let maxSum = getGlassSumAnySizeMatrixAnyWhere(arr, 0, 0); //to the glass sum of the first position.
  
    // Loop through the matrix and find the next glass sum. If it is higher than the maxSum, replace it. 
    for(let i=0; i<=3; i++) {
        // console.log('arr[i]', arr[i]);
        for(let j=0; j<=3; j++) {  // Watch out for the edges
            console.log('a[i][j]', arr[i][j]);
            let currentGlassSum = getGlassSumAnySizeMatrixAnyWhere(arr, i, j);
            console.log('currentGlassSum', currentGlassSum);
            if(currentGlassSum > maxSum) {
                maxSum = currentGlassSum;
            }
        }
    }

    // Return the maxSum
    console.log('maxSum', maxSum);
    return maxSum;

}   


let array = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];


 //19

 console.log(hourglassSum(array));