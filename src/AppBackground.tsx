import { useBackground } from './logic/background';

const AppBackground = () => {
  const background = useBackground();
  return (
    <img
      src={background}
      className="fixed inset-0 h-full w-full object-cover object-center"
      alt=""
    />
  );
};

export default AppBackground;
