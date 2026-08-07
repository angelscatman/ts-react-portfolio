import type { Locale } from '@/types/ui/locale.types';

export const supportedLocales = ['es', 'en'] as const satisfies readonly Locale[];

const legacyAppPaths = ['about', 'articles', 'blog', 'error', 'projects', 'resume'];

export function isLocale(value: string | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const [, segment] = pathname.split('/');

  return isLocale(segment) ? segment : null;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);

  if (isLocale(segments[0])) {
    const stripped = `/${segments.slice(1).join('/')}`;

    return stripped === '/' ? '/' : stripped.replace(/\/$/, '') || '/';
  }

  return pathname === '/' ? '/' : pathname.replace(/\/$/, '');
}

export function withLocalePath(pathname: string, locale: Locale) {
  const normalizedPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const strippedPathname = stripLocaleFromPathname(normalizedPathname);

  return strippedPathname === '/' ? `/${locale}` : `/${locale}${strippedPathname}`;
}

export function getAlternateLocalePath(pathname: string, locale: Locale) {
  return withLocalePath(pathname, locale);
}

export function getLocalizedCanonicalPath(pathname: string, locale: Locale) {
  return withLocalePath(stripLocaleFromPathname(pathname), locale);
}

export function getLocalizedAlternatePaths(pathname: string) {
  const strippedPathname = stripLocaleFromPathname(pathname);

  return supportedLocales.map((locale) => ({
    locale,
    path: withLocalePath(strippedPathname, locale),
  }));
}

export function getLocaleRedirectPath(pathname: string, fallbackLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && legacyAppPaths.includes(firstSegment)) {
    return withLocalePath(pathname, fallbackLocale);
  }

  return withLocalePath('/', fallbackLocale);
}
