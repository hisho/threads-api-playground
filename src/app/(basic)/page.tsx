'use client'

import { Button } from '@/src/component/button/button'
import { useForm } from '@/src/lib/form/use-form/use-form'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { z } from 'zod'

const schema = z.object({
  userName: z.string().min(1, { message: '1文字以上入力してください' }),
})

export default function () {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const form = useForm({
    schema,
  })
  const handleSubmit = (input: z.output<typeof schema>) => {
    router.push(`/${input.userName}`)
  }

  return (
    <div className={'flex h-full items-center justify-center'}>
      <form
        onSubmit={(e) =>
          startTransition(() => form.handleSubmit((i) => handleSubmit(i))(e))
        }
        className={'flex w-full max-w-100 flex-col items-center'}
      >
        <label className={'flex w-full'} htmlFor={'userName'}>
          user name
        </label>
        <input
          className={'w-full border px-2 py-1'}
          {...form.register('userName')}
        />
        {form.formState.errors.userName?.message && (
          <p className={'text-red-600'}>
            {form.formState.errors.userName.message}
          </p>
        )}
        <Button
          className={'mt-2 rounded border px-2 py-1'}
          isLoading={isPending}
          type={'submit'}
        >
          検索
        </Button>
      </form>
    </div>
  )
}
