import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return <main>{children}</main>
}
