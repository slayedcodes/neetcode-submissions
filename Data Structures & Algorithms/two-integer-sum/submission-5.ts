class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = Object.fromEntries( nums.map((num, index) => [num , index]));
        
        for (const [index , num] of nums.entries()) {
            if(hash[target - num] !== undefined && hash[target - num] !== index) {
                return [index, hash[target - num]];
            }
        }
    }
}
