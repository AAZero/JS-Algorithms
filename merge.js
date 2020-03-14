function mergeSort(arr) {
	if(arr.length < 2) {
		return;
	}

	var step = 1;
	var left, right;
	while(step < arr.length) {
		left = 0;
		right = step;

		while(right + step <= arr.length) {
			mergeArrays(arr, left, left+step, right, right+step);
			left = right + step;
			right = left + step;
		}

		if(right < arr.length) {
			mergeArrays(arr, left, left+step, right, arr.length);
		}
		step*=2;
	}
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
	var rightArr = new Array(stopRight - startRight + 1);
	var leftArr = new Array(stopLeft - startLeft + 1);

	k = startRight;
	for(var i = 0; i < rightArr.length - 1; i++) {
		rightArr[i] = arr[k];
		++k;
	}

	k = startLeft;
	for (var i = 0; i < leftArr.length - 1; i++) {
		leftArr[i] = arr[k];
		++k;
	}

	rightArr[rightArr.length - 1] = Infinity;
	leftArr[leftArr.length - 1] = Infinity;

	var m = 0;
	var n = 0;
	for(var k = startLeft; k < stopRight; k++) {
		if(leftArr[m] <= rightArr[n]) {
			arr[k] = leftArr[m];
			m++;
		} else {
			arr[k] = rightArr[n];
			n++;
		}
	}
}

function mergeSort1(arr, low, high) {
	var middle = (low+high)/2;
	
	if(low<high) {
		// 处理左边
		mergeSort1(arr, low, middle);
		// 处理右边
		mergeSort1(arr, middle+1, high);
		// 归并
		mergeArrays1(arr, low, middle, high);
	}
}

function mergeArrays1(arr, low, middle, high) {
	// 用于存储归并后的临时数组
	var temp = new Array(high-low+1);
	// 记录第一个数组中需要遍历的下标
	var i = low;
	// 记录第二个数组中需要遍历的下标
	var j = middle+1;
	// 用于记录在临时数组中存放的下标
	var index = 0;
	// 遍历两个数组，取出小的数字放入临时的数组中
	while(i<=middle&&j<=high) {
		// 第一个数组的数据更小
		if(arr[i]<=arr[j]) {
			// 把小的数据放在临时数组中
			temp[index] = arr[i];
			// 让下标向后移一位 
			i++; 
		} else {
			temp[index] = arr[j];
			j++;
		}
		index++;
	}
	// 处理后半段多余的数据
	while(j<=high) {
		temp[index] = arr[j];
		j++;
		index++;
	}
	//  处理前半段多余的数据
	while(i<=middle) {
		temp[index] = arr[i];
		i++;
		index++;
	}
	// 把临时数组中的数据重新存入原数组
	for(var k=0; k<temp.length; k++) {
		arr[k+low] = temp[k];
	}
}

var arr = [23, 45, 19, 98, 32, 67, 12, 3, 9];
mergeSort(arr);
console.log('===1===' + arr);

mergeSort(arr, 0, arr.length - 1);
console.log('===2===' + arr);
