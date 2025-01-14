import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
import type { NextPage } from 'next';

const VCard: NextPage<{ seo: ICommon['seo'] }> = () => {
  return (
    <main>
      <Title title={'VCard'} typeOfInput={'vCard'} />
    </main>
  );
};

export default VCard;
