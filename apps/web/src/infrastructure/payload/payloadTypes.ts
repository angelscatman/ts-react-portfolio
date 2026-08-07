export type PayloadNullable<T> = T | null | undefined;

export type PayloadRelation<T> = T | number | null | undefined;

export type PayloadArrayItem<T> = {
  [K in keyof T]?: PayloadNullable<T[K]>;
};

export function optionalPayloadText(value: PayloadNullable<string>) {
  return value ?? undefined;
}
