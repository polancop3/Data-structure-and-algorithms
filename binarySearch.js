var search = function(nums, target) {
    // first index
    let left = 0;
    // last index
    let right = nums.length-1;
    // middle index
    let mid = Math.floor((left + right) / 2)
    
    for(let i = 0; i < nums.length; i++) {
        // if the middle element matches target return index position
       if(nums[mid] === target) {
            return mid;
        } else if(target < nums[mid]) { // if target element is less than the middle element our right side becomes the middle index position - 1 since we know the mid is not a match
            right = mid - 1;
        } else if (target > nums[mid]) { // update left position if target is greater than mid
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2) // update our middle element each iteration
    }
    return -1 // return -1 if element is not found
};
