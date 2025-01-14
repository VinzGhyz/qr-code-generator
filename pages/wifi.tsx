import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
import type { NextPage } from 'next';

const Wifi: NextPage<{ seo: ICommon['seo'] }> = () => {
  return (
    <main>
      <Title title="Wifi" typeOfInput={'wifi'} />
    </main>
  );
};

export default Wifi;
