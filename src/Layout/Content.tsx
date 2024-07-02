import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const Content = ({ children }: Props) => (
  <div className="relative aspect-square w-full max-w-screen-sm shadow-[1px_5px_15px_rgba(0,0,0,0.45)]">
    {children}
  </div>
);

export default Content;
