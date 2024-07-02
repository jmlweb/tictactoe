import BackgroundSelector from './BackgroundSelector';
import Game from './Game';
import OptionsSelector from './OptionsSelector';

const Play = () => (
  <div className="absolute inset-0 grid grid-rows-[auto,1fr]">
    <div className="flex justify-end gap-4 bg-slate-950/20 px-4 py-2">
      <OptionsSelector />
      <BackgroundSelector />
    </div>
    <div className="grid place-items-center overflow-y-auto p-4">
      <Game />
    </div>
  </div>
);

export default Play;
