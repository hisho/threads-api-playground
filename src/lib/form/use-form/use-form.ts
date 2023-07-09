import type { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormProps, useForm as useRHForm } from 'react-hook-form'

type Props<TSchema extends z.ZodType> = Omit<
  UseFormProps<TSchema['_input']>,
  'resolver'
> & {
  schema: TSchema
}

export const useForm = <TSchema extends z.ZodType>(props: Props<TSchema>) => {
  return useRHForm<TSchema['_input']>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  })
}
