import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'Hisho.dev'
export const size = {
  height: 630,
  width: 1200,
}

export const contentType = 'image/png'

// Image generation
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#4ECCA3',
          color: '#232931',
          display: 'flex',
          fontSize: 128,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        Threads API Playground
      </div>
    ),
    {
      ...size,
    }
  )
}
