const arr = [1,3,4,6,7,2,3,2]

function selectionSort(arr){
	for(var i =0;i<arr.length;i++){
		var minIndex = i;
		for(var j=i+1;j<arr.length;j++){
			if(arr[j]<arr[minIndex]){
				minIndex = j;
			}
		}
		swap(i,minIndex)
	}
	return arr;
}

function swap(index1,index2){
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp ;
}

console.log(selectionSort(arr))