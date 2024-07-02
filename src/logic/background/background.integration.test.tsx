import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import BackgroundProvider from './BackgroundProvider';
import useBackground from './useBackground';
import useBackgroundDispatchers from './useBackgroundDispatchers';

vi.mock('../utils.ts', () => ({
  getRandomItem: (arr: unknown[]) => arr[0],
}));

describe('BackgroundProvider', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render children', () => {
    render(
      <BackgroundProvider>
        <div>test</div>
      </BackgroundProvider>,
    );

    expect(screen.getByText('test')).toBeDefined();
  });

  it('should provide background state', () => {
    const TestComponent = () => {
      const background = useBackground();
      return <img src={background} alt={background} />;
    };

    render(
      <BackgroundProvider>
        <TestComponent />
      </BackgroundProvider>,
    );

    expect(screen.getByAltText('/backgrounds/bluey.avif')).toBeDefined();
  });

  it('should be able to change background', () => {
    const TestComponent = () => {
      const background = useBackground();
      const { setBackground, reloadBackground } = useBackgroundDispatchers();
      return (
        <div>
          <img src={background} alt={background} />
          <button
            onClick={() => {
              setBackground('marcus-level');
            }}
          >
            Set Background
          </button>
          <button onClick={reloadBackground}>Reload Background</button>
        </div>
      );
    };

    render(
      <BackgroundProvider>
        <TestComponent />
      </BackgroundProvider>,
    );

    expect(screen.getByAltText('/backgrounds/bluey.avif')).toBeDefined();

    fireEvent.click(screen.getByText('Set Background'));

    expect(screen.queryByAltText('/backgrounds/bluey.avif')).toBeNull();
    expect(screen.getByAltText('/backgrounds/marcus-level.avif')).toBeDefined();

    fireEvent.click(screen.getByText('Reload Background'));

    expect(screen.getByAltText('/backgrounds/bluey.avif')).toBeDefined();
    expect(screen.queryByAltText('/backgrounds/marcus-level.avif')).toBeNull();
  });
});
