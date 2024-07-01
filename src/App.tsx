import Background from './components/Background';

function App() {
  return (
    <div className="relative grid min-h-dvh place-items-center bg-gradient-to-r from-fuchsia-600 to-purple-600 p-4">
      <Background />
      <div className="relative h-96 w-full max-w-96 bg-slate-900/90 text-slate-50">
        Tic Tac Toe game
      </div>
    </div>
  );
}

export default App;
