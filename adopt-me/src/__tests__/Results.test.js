/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals'
import { create } from 'react-test-renderer'
import Results from '../Results'

test('Renders correctly with no pets', () => {
    const tree = create(<Results pets={[]} />).toJSON()
    expect(tree).toMatchSnapshot()
})
