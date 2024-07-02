import * as React from 'react';
import { createPortal } from 'react-dom';

import OptionsForm from '../../components/OptionsForm';
import { useOptionsDispatchers } from '../../logic/options';

const OptionsModal = ({ closeModal }: { closeModal: () => void }) => {
  const { updateOptions } = useOptionsDispatchers();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/95 p-4">
      <button
        className="absolute right-4 top-4 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-blue-50 shadow-md transition-colors hover:bg-blue-500 hover:text-white"
        onClick={closeModal}
      >
        Cerrar
      </button>
      <div className="w-full max-w-lg rounded-lg border border-slate-800 bg-slate-700 p-6 text-slate-200 shadow-lg">
        <OptionsForm
          label="Guardar opciones"
          onSubmit={(options) => {
            updateOptions(options);
            closeModal();
          }}
        />
      </div>
    </div>
  );
};

const OptionsSelector = () => {
  const [isShowingModal, setIsShowingModal] = React.useState(false);
  const portalRoot =
    document.querySelector<HTMLElement>('#portal') ?? document.body;

  return (
    <>
      <button
        className="inline-flex items-center gap-1 rounded-md border bg-blue-950/80 px-4 py-2 text-blue-50 shadow-md transition-colors hover:bg-blue-950/90"
        onClick={() => {
          setIsShowingModal(true);
        }}
      >
        <span aria-hidden>⚙</span> Opciones
      </button>
      {isShowingModal &&
        createPortal(
          <OptionsModal
            closeModal={() => {
              setIsShowingModal(false);
            }}
          />,
          portalRoot,
        )}
    </>
  );
};

export default OptionsSelector;
