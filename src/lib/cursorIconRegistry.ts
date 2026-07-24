import { ArrowUpRight, Camera, DiscAlbum, Eye, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import type React from 'react';

/**
 * Central registry of all cursor icons.
 * - Add an icon here → type + Zod schema update automatically.
 * - `CustomCursor` consumes this map directly.
 * - `CursorIcon` type is derived from the keys of this object.
 */
export const cursorIconRegistry = {
  arrow: ArrowUpRight,
  camera: Camera,
  eye: Eye,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  message: MessageCircle,
  music: DiscAlbum,
} as const satisfies Record<string, React.ComponentType<{ className?: string }>>;

export type CursorIconKey = keyof typeof cursorIconRegistry;

/**
 * All valid cursor icon values, including the sentinel 'none'.
 * Typed as a const tuple so Zod's z.enum can infer literal types correctly.
 */
export const cursorIconValues = [
  'none',
  ...Object.keys(cursorIconRegistry),
] as ['none', ...CursorIconKey[]];
