import {
  useBackground,
  useBackgroundDispatchers,
} from '../../logic/background';
import { BACKGROUNDS } from '../../logic/backgrounds';

const BackgroundSelector = () => {
  const background = useBackground();
  const { setBackground } = useBackgroundDispatchers();
  return (
    <select
      className="rounded-md border bg-blue-950/80 p-2 text-blue-50 shadow-md transition-colors hover:bg-blue-950/90"
      onChange={(e) => {
        setBackground(e.target.value);
      }}
      value={Object.keys(BACKGROUNDS).find((key) =>
        background.endsWith(`${key}.avif`),
      )}
    >
      {Object.entries(BACKGROUNDS).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default BackgroundSelector;
