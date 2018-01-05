# styled-with-props

A temporary solution to prop passing with [TypeScript](http://www.typescriptlang.org/) and [styled-components](https://www.styled-components.com/).

---

### :weary:&nbsp;&nbsp;Current Solution

```tsx
import * as React from 'react'
import styled from 'styled-components'

interface Props {
  background: 'white' | 'black'
  className?: string
}

const Card: React.SFC<Props> = props => (
  <div className={props.className}>
    {props.children}
  </div>
)

const StyledCard = styled(Card)`
  background-color: ${props => props.background};
`
```

### :cry:&nbsp;&nbsp;Desired Solution

```ts
import styled from 'styled-components'

interface Props {
  background: 'white' | 'black'
}

const Card = styled.div<Props>`
  background-color: ${props => props.background};
`
```

Unfortunately, this is not currently possible due to the fact that TypeScript does not support passing generics to tagged template literals. [TypeScript#11947](https://github.com/Microsoft/TypeScript/issues/11947)

### :sunglasses:&nbsp;&nbsp;Temporary Solution

```ts
import styled from 'styled-components'
import withProps from 'styled-with-props'

interface Props {
  background: 'white' | 'black'
}

const div = withProps<Props>('div')

const Card = styled(div)`
  background-color: ${props => props.background};
`
```

### Why?

This takes advantage of the existing syntax used with styled-components. This is very important for things like the [Babel plugin](https://github.com/styled-components/babel-plugin-styled-components), [VSCode plugin](https://github.com/styled-components/vscode-styled-components), etc..