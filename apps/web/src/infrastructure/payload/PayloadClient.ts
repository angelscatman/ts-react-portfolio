import type { Locale } from '@/types/ui/locale.types';

type PayloadFindResponse<T> = {
  docs: T[];
  totalDocs: number;
};

type PayloadFindOptions = {
  depth?: number;
  limit?: number;
  locale: Locale;
  where?: Record<string, unknown>;
};

type PayloadGlobalOptions = {
  depth?: number;
  locale: Locale | 'all';
};

function getPayloadApiUrl() {
  const apiUrl = import.meta.env.PAYLOAD_PUBLIC_SERVER_URL;

  if (!apiUrl) {
    throw new Error('PAYLOAD_PUBLIC_SERVER_URL is required to load CMS content');
  }

  return apiUrl;
}

function appendWhereParam(params: URLSearchParams, key: string, value: unknown) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return;
  }

  for (const [operator, operatorValue] of Object.entries(value)) {
    params.set(`where[${key}][${operator}]`, String(operatorValue));
  }
}

export class PayloadClient {
  constructor(private readonly apiUrl = getPayloadApiUrl()) {}

  async find<T>(collection: string, options: PayloadFindOptions): Promise<PayloadFindResponse<T>> {
    const url = new URL(`/api/${collection}`, this.apiUrl);
    url.searchParams.set('locale', options.locale);
    url.searchParams.set('depth', String(options.depth ?? 2));
    url.searchParams.set('limit', String(options.limit ?? 100));

    if (options.where) {
      for (const [key, value] of Object.entries(options.where)) {
        appendWhereParam(url.searchParams, key, value);
      }
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Payload request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<PayloadFindResponse<T>>;
  }

  async findGlobal<T>(slug: string, options: PayloadGlobalOptions): Promise<T> {
    const url = new URL(`/api/globals/${slug}`, this.apiUrl);
    url.searchParams.set('locale', options.locale);
    url.searchParams.set('depth', String(options.depth ?? 2));

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Payload global request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}
