const unsortedArray = [8,1,2,3,4,5,6];

function bubbleSort(arr) {
    let noSwap;

    for(let i = arr.length; i > 0; i--) {
        noSwap = true;

        for(let j = 0; j < i - 1; j++) {
            let temp = arr[j];
            
            if(arr[j] > arr[j + 1]){
            arr[j] = arr[j+1]
            arr[j + 1] = temp
            noSwap = false;
            }
        } 
        if(noSwap) break;
    }
    console.log(arr)
}


bubbleSort(unsortedArray)

// Big 0(n^2)
// Best case is 0(n) if data is nearly sorted