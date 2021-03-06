const array = [-1,3,4,1,5,10];

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        // if (lowest) no need to swap
        if(i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
}


selectionSort(array)

/**Time complexity of Big O(n^2) */
