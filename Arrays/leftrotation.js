// Return an updated array given 'a', the array, and 'd', the amount of time it will rotate left.




//Locate the position in which the first element will go to.
function findLocation(a,cp,d) {
    
    //Use a for loop to keep track going through the array.
    for(let i=0; i===cp; i++) {
        console.log('currentPosition', i);
        //Subtract the current index given the number of times to rotate.
        let locate = d
        let initialIndex = i - locate;
        console.log('initialIndex', initialIndex);

    
        //Find the last item of the element 
        function lastItem (index) {
            let lastItem = a.slice(-1);
            let lastItemString = lastItem.toString();
            let lastItemNumber = parseInt(lastItemString);
            return index === lastItemNumber
        }
        //Find the index of the last element
        let lastIndex = a.findIndex(lastItem);

        //Find the index of the first item of the element
        function firstItem (index) {
            let firstItem = a[0];
            let firstItemString = firstItem.toString();
            let firstItemNumber = parseInt(firstItemString);
            return index === firstItemNumber
        }
         //Find the index of the first element
         let firstIndex = a.findIndex(firstItem);

        //If the new position is less than zero, add the number to the end of the array.
        if(initialIndex < 0) {
            let newIndex = initialIndex + lastIndex + 1;
            console.log('newIndex', newIndex);
        } else {
            //If the new position is more than the last index, add it to the beginning of the index.
            let newIndex = initialIndex + firstIndex;
            console.log('newIndex',newIndex);
            return newIndex
        }
        
    }
      
    
}

function rotLeft(a,d) {

    //Grab the element for the first position and give it a variable.
    let firstPosition = a[0];
    console.log('firstPosition', firstPosition);

    // findLocation(1)

    //Locate where it's new index is going to be
    
}





let array = [1, 2, 3, 4, 5];
//expected output, [5, 1, 2, 3, 4]

// console.log(rotLeft(array,4));
console.log(findLocation(array,0,4));