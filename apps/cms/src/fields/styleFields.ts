import type { Field } from 'payload';

export const stylePresetOptions = ['default', 'lead', 'compact', 'highlight', 'muted', 'wide', 'custom'] as const;
export const layoutPresetOptions = ['inline', 'split', 'wide', 'fullBleed'] as const;

export function stylePresetField(): Field {
  return {
    name: 'stylePreset',
    type: 'select',
    admin: {
      description: 'Editorial preset used by the renderer. Use Custom only for one-off layouts.',
    },
    defaultValue: 'default',
    options: [...stylePresetOptions],
    required: true,
  };
}

export function layoutPresetField(): Field {
  return {
    name: 'layoutPreset',
    type: 'select',
    defaultValue: 'inline',
    options: [...layoutPresetOptions],
    required: true,
  };
}

export function advancedStyleField(): Field {
  return {
    name: 'advancedStyle',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.stylePreset === 'custom',
      description: 'Optional low-level controls for custom rendering cases.',
    },
    fields: [
      {
        name: 'weight',
        type: 'select',
        options: ['soft', 'default', 'strong'],
      },
      {
        name: 'tone',
        type: 'select',
        options: ['default', 'muted', 'strong'],
      },
      {
        name: 'size',
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      {
        name: 'align',
        type: 'select',
        options: ['left', 'center'],
      },
      {
        name: 'spacing',
        type: 'select',
        options: ['tight', 'default', 'relaxed'],
      },
      {
        name: 'layout',
        type: 'select',
        options: ['inline', 'contained', 'wide', 'full'],
      },
    ],
  };
}

export function editorialStyleFields(): Field[] {
  return [stylePresetField(), advancedStyleField()];
}
