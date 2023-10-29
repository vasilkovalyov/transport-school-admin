import { useEffect, useState } from 'react';
import {
  BaseBlockFormLoadingType,
  BlockInfoPageType,
  IBlockService,
} from '../Components/types';
import { PageEnum } from '../pages-enum';

export function useApisReuseBlock<T>({
  service,
  page,
  blockInfoPage,
}: {
  service: IBlockService<T>;
  page: PageEnum;
  loading?: boolean;
  loadingForPublishLabel?: boolean;
  blockInfoPage: BlockInfoPageType;
}) {
  const [loadingType, setLoadingType] =
    useState<BaseBlockFormLoadingType | null>('loading');
  const [data, setData] = useState<T | null>(null);

  const loadingForPublishLabel =
    loadingType !== null && loadingType === 'loading' ? true : false;

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoadingType('loading');
      const response = await service.getBlock(page);
      setData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingType(null);
    }
  }

  async function onCreate(params: T) {
    try {
      setLoadingType('update');
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
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingType(null);
    }
  }

  async function onPublish(value: boolean) {
    try {
      setLoadingType('publish');
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
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingType(null);
    }
  }

  return { data, loadingType, loadingForPublishLabel, onCreate, onPublish };
}
