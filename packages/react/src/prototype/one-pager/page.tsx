import { type PropsWithChildren } from 'react';

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="page-layout">
      {children}
    </div>
  );
};

