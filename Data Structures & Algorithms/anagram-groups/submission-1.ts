class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let answer: { [key: string] : string[] } = {};
        let anagram;
        strs.forEach((str) => {
            anagram = str.split('').sort().join();
            if(!answer[anagram]) {
                answer[anagram] = [];
            }
            answer[anagram].push(str);
        })

        return Object.values(answer);
    }
}
