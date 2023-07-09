import type { ReactNode } from 'react'

import '@/src/app/app.css'
import { FRONTEND_URL } from '@/src/constant/constant'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: ``,
  metadataBase: new URL(FRONTEND_URL),
  robots: {
    follow: false,
    index: false,
  },
  title: {
    default: 'Threads API Playground',
    template: '%s | Threads API Playground',
  },
}

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
