function CArray() {
	this.dataStore = [10, 8 , 3, 2, 9, 4, 5, 7];
	this.swap = swap;
	this.bubbleSort = bubbleSort;
	this.bubbleSort1 = bubbleSort1;
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function bubbleSort() {
	for(var outer = this.dataStore.length; outer >= 2; --outer) {
		for(var inner = 0; inner <= outer - 1; inner++) {
			if(this.dataStore[inner] > this.dataStore[inner + 1]) {
				this.swap(this.dataStore, inner, inner+1);
			}
		}
	}
}

function bubbleSort1() {
	// 控制共比较多少轮
	for(var i = 0; i < this.dataStore.length; i++) {
		// 控制比较的次数
		for(var j = 0; j < this.dataStore.length - 1 - i; j++) {
			if(this.dataStore[j] > this.dataStore[j+1]) {
				var temp = this.dataStore[j];
				this.dataStore[j] = this.dataStore[j+1];
				this.dataStore[j+1] = temp;
			}
		}
	}
}

var carr = new CArray();

carr.bubbleSort();
console.log('===1===' + carr.dataStore);
carr.bubbleSort1();
console.log('===2===' + carr.dataStore);