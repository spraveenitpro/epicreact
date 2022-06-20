/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals'
import { renderHook } from '@testing-library/react-hooks'
import useBreedList from '../useBreedList'

test('gives empty list with no animial', async () => {
    const { result } = renderHook(() => useBreedList(''))
    const [breedList, status] = result.current

    expect(breedList).toHaveLength(0)
    expect(status).toBe('unloaded')
})

test('gives back breed with an animal', async () => {
    const breeds = [
        'Havanese',
        'Bichon Frise',
        'Maltese',
        'Husky',
        'Golden Retriever',
    ]
    fetch.mockResponseOnce(
        JSON.stringify({
            animal: 'dog',
            breeds,
        })
    )

    const { result, waitForNextUpdate } = renderHook(() => useBreedList('dog'))
    await waitForNextUpdate()
    const [breedList, status] = result.current
    expect(status).toBe('loaded')
    expect(breedList).toEqual(breeds)
})
