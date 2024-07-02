import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const Board = ({ children }: Props) => (
  <div className="grid h-full w-full grid-cols-3 border-l border-t border-slate-50 bg-slate-900/95">
    {children}
  </div>
);

export default Board;
