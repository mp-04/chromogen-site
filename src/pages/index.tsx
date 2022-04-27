import { GetStaticProps } from 'next';
import { HomePage } from '../components/HomePage/HomePage';

export default HomePage;

export const getStaticProps: GetStaticProps = () => ({
  props: { },
});
