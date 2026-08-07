import { z } from 'zod';

export function nullishToUndefined(value: unknown) {
  return value === null ? undefined : value;
}

export const optionalTextSchema = z.preprocess(nullishToUndefined, z.string().min(1).optional());

export function optionalArraySchema<T extends z.ZodType>(schema: T) {
  return z.preprocess(nullishToUndefined, z.array(schema).optional());
}
