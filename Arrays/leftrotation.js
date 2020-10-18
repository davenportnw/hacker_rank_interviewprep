// Return an updated array given 'a', the array, and 'd', the amount of time it will rotate left.




function rotLeft(a,d) {

    //Locate first element and give it a variable.
    let firstPos = a[0];
    
    //Locate the position in which the first element will go to.
    function findLocation(a) {
         
        //Use a for loop to keep track going through the array.
        for(let i=0; i<a.length; i++) {
            // console.log('currentPosition', i);
            //Subtract the current position given the number of times to rotate.
            let locate = 4
            let newPosition = i - locate;
            // console.log('newPosition', newPosition);

        
            //Find the last item of the element 
            function lastItem (age) {
                let lastItem = a.slice(-1);
                let lastItemString = lastItem.toString();
                let lastItemNumber = parseInt(lastItemString);
                console.log('lastitemNumber', lastItemNumber);
                return age === lastItemNumber
            }
            //Find the index of the last element
            let indexOf = a.findIndex(lastItem);
            console.log('indexOf', indexOf);

            //If the new position is less than zero, add the number to the end of the array.
            // if(newPosition < 0) {
            //     let newIndex = newPosition + indexOf;
            //     console.log('newIndex', newIndex);

            // }
        }
        
    }
    console.log('findLocation ', findLocation(array));
}





let array = [1, 2, 3, 4, 5];
//expected output, [5, 1, 2, 3, 4]

console.log(rotLeft(array,4));