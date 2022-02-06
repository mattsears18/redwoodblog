import { render } from '@redwoodjs/testing/web'

import Article from './Article'

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article />)
    }).not.toThrow()
  })
})
