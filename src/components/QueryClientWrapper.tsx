'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

interface QueryClientWrapperProps {
  children: ReactNode;
}

const QueryClientWrapper: React.FC<QueryClientWrapperProps> = (props) => {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default QueryClientWrapper;
