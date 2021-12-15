import { calculate } from './index';

describe('calculate', () => {
    test('', () => {
        expect(calculate([5, 10])).toBe(5);
        expect(calculate([5, 2, 10])).toBe(8);
        expect(calculate([70, 60, 70, 65, 80, 70, 60])).toBe(20);
    });
});
