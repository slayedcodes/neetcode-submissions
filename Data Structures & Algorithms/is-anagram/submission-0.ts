class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length)
            return false;

        for(const char of s) {
            if (t.includes(char)) {
                t = t.slice(0, t.indexOf(char)) + t.slice(t.indexOf(char) + 1);
            } 
        }

        if(t.length === 0) return true
        else return false
    }
}
