import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const Root = ({ children }: Props) => (
  <div className="relative grid min-h-dvh place-items-center bg-gradient-to-r from-fuchsia-400 to-purple-400 p-4">
    {children}
  </div>
);

export default Root;
