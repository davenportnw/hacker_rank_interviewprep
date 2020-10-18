// Return an updated array given 'a', the array, and 'd', the amount of time it will rotate left.




function rotLeft(a,d) {

    //Locate first element and give it a variable.
    let firstPos = a[0];
    
    //Locate the position in which the first element will go to.
    function findLocation(a) {
         //Use a for loop to keep track going through the array.
        for(let i=0; i<a.length; i++) {
        //Subtract the current position given the number of times to rotate.
        let locate = 3
        let newPosition = i - locate;
        console.log('newPosition', newPosition);
        
        //If the new position is less than zero, add the number to the end of the array.
        // if(newPosition < 0) {
            
            
        // }
            
        function lastItem () {
            let lastItem = a.slice(-1);
            console.log('lastitem', lastItem);
            
            return lastItem
        }

        
            let indexOf = a.findIndex(lastItem);
            console.log('indexOf', indexOf);
        
        }
        
    }
    console.log('findLocation ', findLocation(array));
}





let array = [1, 2, 3, 4, 5];
//expected output, [5, 1, 2, 3, 4]

console.log(rotLeft(array,4));