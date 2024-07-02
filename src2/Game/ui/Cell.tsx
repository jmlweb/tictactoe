import { twMerge } from 'tailwind-merge';

interface Props extends Pick<React.ComponentPropsWithoutRef<'div'>, 'onClick'> {
  value?: string | null;
  nextValue?: NonNullable<Props['value']>;
  isWinning?: boolean;
  isDisabled?: boolean;
}

const Cell = ({ value, nextValue, onClick, isWinning, isDisabled }: Props) => (
  <div
    className={twMerge(
      'flex items-center justify-center border-b border-r text-4xl text-slate-50 transition-colors',
      isWinning && 'bg-green-600',
      !isWinning &&
        isDisabled &&
        value == null &&
        'cursor-default text-transparent',
      !isWinning &&
        !isDisabled &&
        (value == null
          ? 'text-transparent hover:bg-slate-600 hover:text-slate-50'
          : 'cursor-default bg-slate-900'),
    )}
    onClick={onClick}
    role="button"
    aria-label="Mark cell"
  >
    {value != null ? value.toUpperCase() : nextValue?.toUpperCase()}
  </div>
);

export default Cell;
