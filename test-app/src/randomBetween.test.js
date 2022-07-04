import { randomBetween } from './randomBetween'

const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5)

describe('called with min 3 and max 5', () => {
    beforeEach(() => {
        randomSpy.mockClear().mockReturnValue(0)
    })
    test('Ensure that the value is less than the maximum', () => {
        expect(randomBetween(3, 5)).toBe(3)
        expect(Math.random).toHaveBeenCalledTimes(1)
    })
})

describe('When math.random returns 0.5', () => {
    beforeEach(() => {
        randomSpy.mockReturnValue(0.5)
    })
    test('Ensure that the value is less than the maximum', () => {
        expect(randomBetween(3, 5)).toBe(4)
        expect(Math.random).toHaveBeenCalledTimes(1)
    })
})

describe('When math.random returns 0.999999', () => {
    beforeEach(() => {
        randomSpy.mockImplementation(() => 0.999999)
    })
    test('Ensure that the value is less than the maximum', () => {
        expect(randomBetween(3, 5)).toBe(5)
        expect(Math.random).toHaveBeenCalledTimes(1)
    })
})
