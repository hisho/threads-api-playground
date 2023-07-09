import { env } from '@/src/constant/env'
import { match } from 'ts-pattern'

export const FRONTEND_URL = match(env)
  .with(
    { LOCAL_ENV: 'production', NODE_ENV: 'production' },
    () => `https://${env.VERCEL_URL}` as const
  )
  .otherwise(() => `http://localhost:3000` as const)
