const array = [5,4,10,1,9];

function insertionSort(arr){
	var currentVal;

    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr;
}

// O(n^2)
insertionSort(array)