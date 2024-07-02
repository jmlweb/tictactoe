import Game from './Game';
import * as Layout from './Layout';

function App() {
  return (
    <Layout.Root>
      <Layout.Background
        images={['bluey', 'little-einsteins', 'marcus-level']}
      />
      <Layout.Content>
        <Game />
      </Layout.Content>
    </Layout.Root>
  );
}

export default App;
