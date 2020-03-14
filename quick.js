function quickSort(list) {
	if(list.length == 0) {
		return [];
	}

	var pivot = list[0];
	var lesser = [];
	var greater = [];
	for (var i = 1; i < list.length; i++) {
		if(list[i] < pivot) {
			lesser.push(list[i]);
		} else {
			greater.push(list[i]);
		}
	}

	return quickSort(lesser).concat(pivot, quickSort(greater));
}

function quickSort1(arr, start, end) {
	if(start < end) {
		// 把数组中的第0个数字作为标准数
		var target = arr[start];
		// 记录需要排序的下标
		var low = start;
		var high = end;
		// 循环找比标准数大的数和比标准数小的数
		while(low < high) {
			// 右边的数字比标准数大
			if(low < high && target <= arr[high]) {
				high--;
			} 
			// 使用右边的数字替换左边的数字
			arr[low] = arr[high];
			
			// 如果左边的数字比标准数小
			if(low < high && arr[low] <= target) {
				low++;
			}
			// 使用左边的数字替换右边的数字
			arr[high] = arr[low];
		}
		// 当高和低相同的时候，把标准数赋值给低所在的标准数
		arr[low] = target;
		// 处理所有小的数字
		quickSort1(arr, start, low);
		// 处理所有大的数字
		quickSort1(arr, low+1, end);
	}
}

var arr = [23, 45, 19, 98, 32, 67, 12, 3, 9];
console.log('===1===' + quickSort(arr));


quickSort1(arr, 0, arr.length - 1);
console.log('===2===' + arr);