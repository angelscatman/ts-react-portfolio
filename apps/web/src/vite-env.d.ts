/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PAYLOAD_PUBLIC_SERVER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
