import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
import type { NextPage } from 'next';

const Email: NextPage<{ seo: ICommon['seo'] }> = () => {
  return (
    <main>
      <Title title={'Email'} typeOfInput={'email'} />
    </main>
  );
};

export default Email;
