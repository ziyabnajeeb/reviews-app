import tw from 'twin.macro';
import Review from './components/Review/Review';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col justify-center h-screen px-6 items-center`,
    hasBackground ? tw`from-electric to-purple-200` : tw`bg-purple-200 bg-gradient-to-br`,
  ],
};

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Review />
  </div>
);

export default App;
