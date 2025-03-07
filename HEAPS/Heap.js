class Heap {
    /**
     * @param {number[]} array
     */
    constructor(array) {
        this.array = array;

        let startingIndexToHeapify = Math.floor(array.length/2);

        for(let i = startingIndexToHeapify; i>-1 ; i--){
            this.maxHeapify(array , array.length , i);
        }
    }

    maxHeapify(array, heapSize, idx){
        let l = idx*2 + 1;
        let r = idx*2 + 2;

        let largest = idx;

        if(l < heapSize && array[idx] <= array[l]) {
            largest = l;
        }

        if(r < heapSize && array[largest] <= array[r]) {
            largest = r;
        }

        if (largest != idx){
            let temp = array[idx];
            array[idx] = array[largest];
            array[largest] = temp;
            this.maxHeapify(array, heapSize, largest);
        }
    }

    

    heapsort(){
        for(let i = this.array.length - 1 ; i > 0 ; i-- ){
            let temp = this.array[0];
            this.array[0] = this.array[i];
            this.array[i] = temp;
            this.maxHeapify(this.array, i ,0)
        }
    }
}