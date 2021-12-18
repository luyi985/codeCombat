import { lengthOfLongestSubstring } from './index';

describe('lengthOfLongestSubstring', () => {
    test('', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
        expect(lengthOfLongestSubstring('')).toBe(0);
        expect(lengthOfLongestSubstring(' ')).toBe(1);
        expect(lengthOfLongestSubstring('a')).toBe(1);
        expect(lengthOfLongestSubstring('aab')).toBe(2);
        expect(lengthOfLongestSubstring('dvdf')).toBe(3);
        expect(lengthOfLongestSubstring('baa')).toBe(2);
    });
});
