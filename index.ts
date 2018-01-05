import { createElement, SFC, ReactHTML, ReactSVG } from 'react'

export default function withProps<Props>(tag: keyof ReactHTML | keyof ReactSVG): SFC<Props> {
  return props => createElement(tag, props)
}