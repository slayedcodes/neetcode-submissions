class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if(nums.length === 2) {
            return [0,1];
        }

        let answer;
        nums.forEach((num, index) => {
            for(let i = index + 1; i <= nums.length; i++) {
                if(num + nums[i] == target) {
                    answer = [index, i];
                    break;
                }
            }
        })

        return answer;
    }
}
