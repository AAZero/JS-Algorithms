function binarySearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;

	while(lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		console.log('====mid====' + mid);

		if(arr[mid] < data) {
			lowerBound = mid + 1;
		} else if(arr[mid] > data){
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}


var arr = [23, 32, 56, 78, 100];
console.log('====data: =====' + binarySearch(arr, 56));
