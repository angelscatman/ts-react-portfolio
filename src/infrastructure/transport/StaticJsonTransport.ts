import type { z } from 'zod';

export class StaticJsonTransport {
  read<TOutput>(payload: unknown, schema: z.ZodType<TOutput>) {
    return schema.parse(payload);
  }

  readCollection<TOutput>(modules: Record<string, unknown>, schema: z.ZodType<TOutput>) {
    return Object.values(modules).map((payload) => this.read(payload, schema));
  }
}
