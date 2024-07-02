import OptionsForm from '../../components/OptionsForm';
import { useOptionsDispatchers } from '../../logic/options';

const Intro = () => {
  const { updateOptions } = useOptionsDispatchers();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/95 p-4">
      <div className="w-full max-w-lg rounded-lg border border-slate-800 bg-slate-700 p-6 text-slate-200 shadow-lg">
        <h1 className="text-xl font-semibold">Comienza una nueva partida</h1>
        <div className="mt-4">
          <OptionsForm onSubmit={updateOptions} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
