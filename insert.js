function CArray() {
	this.dataStore = [1, 8, 3, 2, 9, 5, 4, 7];
	this.insertSort = insertSort;
	this.insertSort1 = insertSort1;
}

function insertSort() {
	var temp, inner;
	for(var outer = 1; outer < this.dataStore.length; ++outer) {
		temp = this.dataStore[outer];
		inner = outer;
		while(inner > 0 && this.dataStore[inner - 1] >= temp) {
			this.dataStore[inner] = this.dataStore[inner - 1];
			console.log('inner data: ' + this.dataStore);
			inner--;
		}

		this.dataStore[inner] = temp;
		console.log('data: ' + this.dataStore);

	}
}

function insertSort1() {
	// 遍历所有的数字
	for(var i = 1; i <= this.dataStore.length - 1; i++) {
		// 如果当前数字比前一个数字小
		if(this.dataStore[i] < this.dataStore[i-1]) {
			var temp = this.dataStore[i];
			var j;
			// 遍历当前数字前面所有的数字
			for(j = i - 1; j >= 0 && temp < this.dataStore[j]; j--) {
				// 把前一个数字赋值给后一个数字
				this.dataStore[j+1] = this.dataStore[j];
			}
			// 把临时变量（外层for循环的当前元素）赋值给不满足条件的后一个元素
			this.dataStore[j+1] = temp;
		}
	}
}

var carr = new CArray();
carr.insertSort();
console.log("===1===" + carr.dataStore);

carr.insertSort1();
console.log("===2===" + carr.dataStore);