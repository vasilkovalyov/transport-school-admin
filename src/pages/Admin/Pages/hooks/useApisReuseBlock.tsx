import { useEffect, useState } from 'react';
import { IBlockInfoPage, IBlockService } from '../Components/types';
import { PageEnum } from '../pages-enum';

export function useApisReuseBlock<T>({
  service,
  page,
  blockInfoPage,
}: {
  service: IBlockService<T>;
  page: PageEnum;
  blockInfoPage: IBlockInfoPage;
}) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await service.getBlock(page);
    setData(response.data);
  }

  async function onCreate(params: T) {
    if (service.create) {
      await service.create({
        ...params,
        ...blockInfoPage,
      });

      setData({
        ...params,
        ...blockInfoPage,
      });
    }
  }

  async function onPublish(value: boolean) {
    if (value) {
      await service.publish(page);
    } else {
      await service.unpublish(page);
    }

    const params = {
      ...data,
      publish: value,
    };

    setData(params as T);
  }

  return { data, onCreate, onPublish };
}
