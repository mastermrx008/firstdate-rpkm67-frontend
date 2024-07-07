'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

interface QueryClientWrapperProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

const QueryClientWrapper: React.FC<QueryClientWrapperProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default QueryClientWrapper;
