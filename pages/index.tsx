import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
import type { NextPage } from 'next';

const Home: NextPage<{ seo: ICommon['seo'] }> = () => {
  return (
    <main>
      <Title title={'Enter your text'} typeOfInput={'text'} />
    </main>
  );
};

export default Home;
