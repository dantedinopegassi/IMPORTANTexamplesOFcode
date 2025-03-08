class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // a frequency map
        let freqMap = {};
        for (let i = 0 ; i < nums.length ; i++){
            freqMap[nums[i]] = (freqMap[nums[i]]) ? freqMap[nums[i]] + 1 : 1;
        }

        // this is bucket sort
        let array = [];
        for (let key in freqMap) {
            (!array[freqMap[key]]) ? array[freqMap[key]] = [] : null;
            array[freqMap[key]].push(key);
        }

        /**
         * it might seem like we need to sort each bucket, but
         * the problem explicitly states that we can return the
         * output in any order, so no sorting...
         */ 

        let counter = 0;
        let solution = [];
        for (let i = array.length - 1 ; i > -1 && solution.length < k ; i--){
            if (array[i]){
                for(let value of array[i]){
                    solution[counter] = value;
                    counter++;
                }
            }
        }
        

        return solution;
    }
}