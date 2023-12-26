import sum from '..'

describe('sum', () => {
    test('sum 1 + 2 should be 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
})
