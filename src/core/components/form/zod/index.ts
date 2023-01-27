import { zodResolver } from '@hookform/resolvers/zod'
import { ZodRawShape } from 'zod'
import * as z from 'zod'

export function validateZod(scheme: ZodRawShape) {
  return { resolver: zodResolver(z.object(scheme)) }
}

export default z
