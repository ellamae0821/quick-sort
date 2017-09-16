// QUICK SORT!!!!!!!
var quickSortArray = [5, 7, 8, 1, 3, 2];
// sorted = 1,3,5,7,8

function quickSort (array) {
debugger;
  if (array.length === 0){
    return array;
  }
  var leftArray = [];
  var pivot = [array[0]];
  var rightArray = [];

  for(var i=1; i<array.length; i++){
    if (array[i] <= pivot) {
      leftArray.push(array[i]);
    }else{
      rightArray.push(array[i]);
    }
  }
  return quickSort(leftArray).concat(pivot.concat(quickSort(rightArray)));

}
quickSort(quickSortArray);
console.log(quickSort(quickSortArray));
//arr = greater.concat(lesser)
//quickSort (pivot, arr)