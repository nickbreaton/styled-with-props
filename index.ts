import { SFC, createElement } from 'react'

export default function withProps<Props>(tag: keyof JSX.IntrinsicElements): SFC<Props> {
  return props => createElement(tag, props)
}