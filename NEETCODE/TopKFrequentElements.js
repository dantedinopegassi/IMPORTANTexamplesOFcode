class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        for (let i = 0 ; i < nums.length ; i++){
            freqMap[nums[i]] = (freqMap[nums[i]]) ? freqMap[nums[i]] + 1 : 1;
        }

        let array = [];
        for (let key in freqMap) {
            array[freqMap[key]] = key;
        }

        let counter = 0;
        let solution = [];
        for (let i = array.length - 1 ; i > -1  ; i--){
            if (k>counter){
                solution[counter] = array[i];
                counter++;
            } else break;
        }

        return solution;
    }
}