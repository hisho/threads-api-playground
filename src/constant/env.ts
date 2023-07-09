import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_LOCAL_ENV: z.enum(['development', 'production'] as const),
    NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production'] as const),
    NEXT_PUBLIC_PORT: z.coerce.number().int().catch(3000),
    NEXT_PUBLIC_VERCEL_URL: z.string().min(1).catch(''),
  },
  runtimeEnv: {
    LOCAL_ENV: process.env['LOCAL_ENV'],
    NEXT_PUBLIC_LOCAL_ENV: process.env['NEXT_PUBLIC_LOCAL_ENV'],
    NEXT_PUBLIC_NODE_ENV: process.env['NODE_ENV'],
    NEXT_PUBLIC_PORT: process.env['NEXT_PUBLIC_PORT'],
    NEXT_PUBLIC_VERCEL_URL: process.env['NEXT_PUBLIC_VERCEL_URL'],
    NODE_ENV: process.env['NODE_ENV'],
    VERCEL_URL: process.env['VERCEL_URL'],
  },
  server: {
    LOCAL_ENV: z.enum(['development', 'production'] as const),
    NODE_ENV: z.enum(['development', 'production'] as const),
    VERCEL_URL: z.string().min(1).catch(''),
  },
})
