import tw from 'twin.macro';
import Review from './components/Review/Review';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen px-6`,
    hasBackground ? tw`bg-gradient-to-br from-electric to-purple-200` : tw`bg-purple-200`,
  ],
};

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <Review />
  </div>
);

export default App;
