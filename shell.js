function CArray() {
	this.dataStore = [10, 8, 3, 2, 5, 9, 4, 7, 35, 47, 20];
	this.shellSort = shellSort;
	this.gaps = [5, 3, 1];
	this.swap = swap;
	this.dynamiSort = dynamiSort;
	this.shellSort1 = shellSort1; 
}

function shellSort() {
	for(var g = 0; g < this.gaps.length; g++) {
		for(var i = this.gaps[g]; i < this.dataStore.length; i++) {
			var temp = this.dataStore[i];

			for(var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
				this.dataStore[j] = this.dataStore[j - this.gaps[g]];
			}
			this.dataStore[j] = temp;
		}

		console.log(this.gaps[g] + ' after change: ' + this.dataStore);
	}
}

function dynamiSort() {
	var N = this.dataStore.length;
	var h = 1;

	while(h < N / 3) {
		h = h * 3 + 1;
	}

	while(h >= 1) {
		for(var i = h; i < N; i++) {
			for(j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j = j -h) {
				this.swap(this.dataStore, j, j - h);
			}
		}
		h = (h - 1) / 3;
	}
}

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function shellSort1() {
	var k = 1;
	// 遍历所有的步长
	for(var d = this.dataStore.length/2; d > 0; d/=2) {
		// 遍历所有的元素
		for(var i = d; i<this.dataStore.length-1; i++) {
			// 遍历本组中所有的元素
			for(var j=i-d; j>=0; j-=d) {
				// 如果当前元素大于加上步长后的元素
				if(this.dataStore[j] > this.dataStore[j+d]) {	
					var temp = this.dataStore[j];
					this.dataStore[j] = this.dataStore[j+d];
					this.dataStore[j+d] = temp; 
				}
			}
		}
		// console.log("第" + k + "次排序的结果: " + this.dataStore);
		k++;
	}
}

var carr = new CArray();
carr.shellSort();
console.log('===1===' + carr.dataStore);

carr.dynamiSort();
console.log('===2===' + carr.dataStore);

// carr.shellSort1(); // check
// console.log('===3===' + carr.dataStore);





