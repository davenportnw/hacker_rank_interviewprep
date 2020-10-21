// Return an updated array given 'a', the array, and 'd', the amount of time it will rotate left.




//Locate the position in which the first element will go to.
// function findLocation(a,cp,d) {
    
//         //Subtract the current index given the number of times to rotate.
//         let locate = d
//         let initialIndex = cp - locate;
//         // console.log('initialIndex', initialIndex);

    
//         //Find the last item of the element 
//         function lastItem (index) {
//             let lastItem = a.slice(-1);
//             let lastItemString = lastItem.toString();
//             let lastItemNumber = parseInt(lastItemString);
//             return index === lastItemNumber
//         }
//         //Find the index of the last element
//         let lastIndex = a.findIndex(lastItem);

//         //Find the index of the first item of the element
//         function firstItem (index) {
//             let firstItem = a[0];
//             let firstItemString = firstItem.toString();
//             let firstItemNumber = parseInt(firstItemString);
//             return index === firstItemNumber
//         }
//          //Find the index of the first element
//          let firstIndex = a.findIndex(firstItem);

//         //If the new position is less than zero, add the number to the end of the array.
//         if(initialIndex < 0) {
//             let newIndex = initialIndex + lastIndex + 1;
//             // console.log('newIndex', newIndex);
//             return newIndex
//         } else {
//             //If the new position is more than the last index, add it to the beginning of the index.
//             let newIndex = initialIndex + firstIndex;
//             // console.log('newIndex',newIndex);
//             return newIndex
//         }
      
    
// }


// function rearrange(a,ci,ni) {
//     console.log('ci', ci);
//     console.log('ni', ni);
//     let temp = a[ci];
//     a[ci] = a[ni];
//     a[ni] = temp;
//     console.log('newarray',a);

// }

// function rotLeft(a,d) {

//         // console.log('currentIndex', currentIndex);
//         //Locate where it's new index is going to be
//         let newIndex =  findLocation(a,k,d);
//         console.log('newIndex', newIndex);


//         //Swap the current index's element with the new index's element
//         rearrange(a,currentIndex,newIndex);

//     return a;
    
   
// }

function rotLeft(a,d) {
    

    for(let i=0; i<d; i++) {
        //Add the first element to the end
        let rotations = a.push(a[0]);
        //Remove the first element
        a.shift();
    }
    console.log('a',a);
    return a;


}

//When one rotation is called, I want to 
//Repeat that the amount of times I want to rotate.
 





let array = [1, 2, 3, 4, 5];
//expected output, [5, 1, 2, 3, 4]

console.log(rotLeft(array,4));

// console.log(findLocation(array,0,5));
