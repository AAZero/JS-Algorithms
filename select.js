function CArray() {
	this.dataStore = [1, 8 , 3, 2, 9, 4, 5, 7];
	this.swap = swap;
	this.selectSort = selectSort;
	this.selectSort1 = selectSort1;
}


function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function selectSort() {
	var min;
	for(var outer = 0; outer < this.dataStore.length - 1; ++outer) {
		min = outer;
		for(var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
			if(this.dataStore[inner] < this.dataStore[min]) {
				min = inner;
			}
		}
		this.swap(this.dataStore, outer, min);
	}
}

function selectSort1() {
	// 遍历所有的数
	for(var i=0; i<this.dataStore.length; i++) {
		var minIndex = i;
		// 把当前遍历的数和后面所有的数一次做比较，并记录下最小数的小标
		for(var j=i+1; j<this.dataStore.length; j++) {
			// 如果后面比较的数比记录的最小的数小
			if(this.dataStore[minIndex] > this.dataStore[j]) {
				// 记录下最小的数的那个下标
				minIndex = j;
			}
		}
		// 如果最小的数和当前遍历的数的下标不一致
		// 说明下标为minIndex的数比当前 遍历的数更小
		if(i != minIndex) {
			var temp = this.dataStore[i];
			this.dataStore[i] = this.dataStore[minIndex];
			this.dataStore[minIndex] = temp;
		}
	}
}

var carr = new CArray();
carr.selectSort();
console.log('===1===' + carr.dataStore);


carr.selectSort1();
console.log('===2===' + carr.dataStore);