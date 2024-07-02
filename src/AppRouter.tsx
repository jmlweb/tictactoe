import { useOptions } from './logic/options';
import Intro from './scenes/Intro';
import Play from './scenes/Play';

const AppRouter = () => {
  const options = useOptions();

  return !options ? <Intro /> : <Play />;
};

export default AppRouter;
