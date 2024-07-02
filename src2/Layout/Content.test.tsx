import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import Content from './Content';

describe('Layout.Content', () => {
  afterEach(cleanup);
  it('should render the content', () => {
    render(
      <Content>
        <p>Content</p>
      </Content>,
    );
    screen.getByText('Content');
  });
});
