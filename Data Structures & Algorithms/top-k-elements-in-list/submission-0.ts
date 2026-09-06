class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map: { [key: number] : number }  = {};

        for(let i = 0; i < nums.length; i++) {
            if (map[nums[i]] === undefined) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
        }
        
        return Object.entries(map).sort(([,countA], [,countB]) => countB - countA).slice(0, k).map(([num, _]) => Number(num))
    }
}
