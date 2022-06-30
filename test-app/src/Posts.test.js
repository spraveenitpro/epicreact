async function withFetch() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()

    return json
}
// This is the section where we mock `fetch`
const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([7]),
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

describe('Mocking fetch requests', () => {
    test('Is an array bring returned', async () => {
        const json = await withFetch()
        expect(Array.isArray(json)).toEqual(true)
    })

    test('Is the correct mocked value being returned', async () => {
        const json = await withFetch()
        expect(json[0]).toBe(7)
        console.log(json)
    })
})
