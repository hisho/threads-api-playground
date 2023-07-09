import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  height: 32,
  width: 32,
}
export const contentType = 'image/png'

export default function () {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          alignItems: 'center',
          background: 'black',
          display: 'flex',
          fontSize: 24,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        📸
      </div>
    ),
    {
      ...size,
    }
  )
}
