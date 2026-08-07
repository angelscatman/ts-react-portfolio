import type { Field } from 'payload';

export function localizedTextField(name: string, required = true): Field {
  return {
    name,
    type: 'text',
    localized: true,
    required,
  };
}

export function localizedTextareaField(name: string, required = true): Field {
  return {
    name,
    type: 'textarea',
    localized: true,
    required,
  };
}
