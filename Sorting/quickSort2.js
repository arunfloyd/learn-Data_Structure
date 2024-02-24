
var sortArray = function (arr) {
    return quickSort(arr);
};

function pivot(arr, start =  0, end = arr.length -  1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIndex = start +  1; 
    for (let i = start +  1; i <= end; i++) { 
        if (arr[i] < pivot) {
            swap(arr, swapIndex, i);
            swapIndex++;
        }
    }
    swap(arr, start, swapIndex -  1); 
    return swapIndex -  1;

function quickSort(arr, start =  0, end = arr.length -  1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex);
        quickSort(arr, pivotIndex +  1, end);
    }
    return arr;
}
}