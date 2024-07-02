import AppBackground from './AppBackground';
import AppRouter from './AppRouter';
import { BackgroundProvider } from './logic/background';
import { OptionsProvider } from './logic/options';

const App = () => (
  <BackgroundProvider>
    <>
      <AppBackground />
      <OptionsProvider>
        <AppRouter />
      </OptionsProvider>
    </>
  </BackgroundProvider>
);

export default App;
