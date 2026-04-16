'use client';

import { Spinner } from '@heroui/react';

export default function loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <Spinner size="lg" color="primary" variant="spinner" />
    </div>
  );
}
