function sequenceSearch(arr, data) { // 顺序查找
	for (i = 0; i < arr.length; i++) {
		if(data == arr[i]) {
			return i;
		}
	}
	return -1;
}

function findMax(arr) {
	var max = arr[0];
	for (i = 0; i < arr.length; i++) {
		if(max < arr[i]) {
			max = arr[i]; 
		}
	}

	return max;
}

function findMin(arr) {
	var min = arr[0];
	for (i = 0; i < arr.length; i++) {
		if(min > arr[i]) {
			min = arr[i]; 
		}
	}

	return min;
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function autoManageSearch(arr, data) { // 自组织数据
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == data && i > arr.length * 0.2) {
			swap(arr, i, i - 1);
			return true;
		}
	}

	return -1;
}


var arr = [23, 45, 19, 98, 32, 67, 12, 3, 9];
console.log('====data: =====' + sequenceSearch(arr, 9));
console.log('====max: =====' + findMax(arr));
console.log('====min: =====' + findMin(arr));


autoManageSearch(arr, 98);
autoManageSearch(arr, 3);
console.log('====auto: =====' + arr);
