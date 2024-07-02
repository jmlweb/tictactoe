import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import OptionsProvider from './OptionsProvider';
import useOptions from './useOptions';
import useOptionsDispatchers from './useOptionsDispatchers';

describe('OptionsProvider', () => {
  afterEach(() => {
    cleanup();
  });

  it('options should be empty at first', () => {
    const TestComponent = () => {
      const options = useOptions();
      return (
        <div>
          <div>{options === null ? 'null options' : 'non null options'}</div>
        </div>
      );
    };

    render(
      <OptionsProvider>
        <TestComponent />
      </OptionsProvider>,
    );

    expect(screen.getByText('null options')).toBeDefined();
  });

  it('should update options', () => {
    const TestComponent = () => {
      const options = useOptions();
      const { updateOptions, updateOption } = useOptionsDispatchers();
      return (
        <div>
          <div>{options === null ? 'null options' : options.difficulty}</div>
          <button
            onClick={() => {
              updateOptions({
                difficulty: 'easy',
                isVsCPU: false,
                playerNames: ['x', '0'],
              });
            }}
          >
            Update options
          </button>
          <button
            onClick={() => {
              updateOption('difficulty', 'medium');
            }}
          >
            Update option
          </button>
        </div>
      );
    };
    render(
      <OptionsProvider>
        <TestComponent />
      </OptionsProvider>,
    );

    expect(screen.getByText('null options')).toBeDefined();
    expect(screen.queryByText('easy')).toBeNull();
    fireEvent.click(screen.getByText('Update options'));
    expect(screen.getByText('easy')).toBeDefined();
    expect(screen.queryByText('null options')).toBeNull();
    fireEvent.click(screen.getByText('Update option'));
    expect(screen.getByText('medium')).toBeDefined();
    expect(screen.queryByText('easy')).toBeNull();
  });
});
