import type { z } from 'zod';

import type {
  aboutSchema,
  blogSchema,
  errorPageKindSchema,
  errorPageSchema,
  errorsSchema,
  footerSchema,
  localizedRecordSchema,
  navigationSchema,
  notificationSchema,
  notificationsSchema,
  resumeSchema,
  seoPageSchema,
  seoSchema,
  workSchema,
} from '@/domain/copy/copySchemas';
import type { SocialLinkId } from '@/types/core/content.types';
import type { CursorIcon } from '@/types/ui/cursor.types';

// ─── Navigation & layout ──────────────────────────────────────────────────────

export type NavigationCopy = z.infer<typeof navigationSchema>;
export type FooterCopy = z.infer<typeof footerSchema>;

// ─── Localization utilities ───────────────────────────────────────────────────

export type CursorCopy = z.infer<typeof localizedRecordSchema>;

// ─── SEO ─────────────────────────────────────────────────────────────────────

export type SeoPageCopy = z.infer<typeof seoPageSchema>;
export type SeoCopy = z.infer<typeof seoSchema>;

// ─── Notifications ────────────────────────────────────────────────────────────

export type NotificationCopy = z.infer<typeof notificationSchema>;
export type NotificationsCopy = z.infer<typeof notificationsSchema>;

// ─── Error pages ─────────────────────────────────────────────────────────────

export type ErrorPageKind = z.infer<typeof errorPageKindSchema>;
export type ErrorPageCopy = z.infer<typeof errorPageSchema>;
/** Non-partial record — all error kinds must be present in the data. */
export type ErrorsCopy = Record<ErrorPageKind, ErrorPageCopy>;

// ─── Page copy ────────────────────────────────────────────────────────────────

export type WorkCopy = z.infer<typeof workSchema>;

export type AboutCopy = z.infer<typeof aboutSchema>;

export type BlogCopy = z.infer<typeof blogSchema>;

export type ResumeCopy = z.infer<typeof resumeSchema>;

// ─── Re-exports for convenience ───────────────────────────────────────────────

// These are re-exported so call-sites don't need to import from two modules.
export type { SocialLinkId, CursorIcon };
