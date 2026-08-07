import type { UiCopyRepository } from '@/domain/ui-copy/UiCopyRepository';

export class UiCopyService {
  constructor(private readonly repository: UiCopyRepository) {}

  getUiCopy() {
    return this.repository.getUiCopy();
  }
}
