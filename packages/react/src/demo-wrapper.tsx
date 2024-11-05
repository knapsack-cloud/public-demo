import { type PropsWithChildren } from 'react';

const DemoWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="demo-wrapper">
      {children}
    </div>
  );
};

export default DemoWrapper;
