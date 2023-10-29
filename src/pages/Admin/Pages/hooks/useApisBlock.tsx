import { useEffect, useState } from 'react';
import {
  BaseBlockFormLoadingType,
  BlockInfoPageType,
  IBlockService,
} from '../Components/types';
import { PageEnum } from '../pages-enum';

export function useApisBlock<T>({
  service,
  page,
  blockInfoPage,
}: {
  service: IBlockService<T>;
  page: PageEnum;
  loadingForPublishLabel?: boolean;
  loadingType?: BaseBlockFormLoadingType;
  blockInfoPage: BlockInfoPageType;
}) {
  const [data, setData] = useState<T | null>(null);
  const [loadingType, setLoadingType] =
    useState<BaseBlockFormLoadingType | null>('loading');

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

  async function createSection(params: T) {
    if (!service.create) return;
    try {
      setLoadingType('update');
      const data = {
        ...params,
        ...blockInfoPage,
      };

      await service.create(data);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingType(null);
    }
  }

  async function updateSection(params: T) {
    if (!service.update) return;

    try {
      setLoadingType('update');
      const data = {
        ...params,
        ...blockInfoPage,
      };
      await service.update(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingType(null);
    }
  }

  async function publishToggleSection(value: boolean) {
    try {
      setLoadingType('publish');
      if (value) {
        await service.publish(page);
      } else {
        await service.unpublish(page);
      }
      if (data) {
        const state: T = {
          ...data,
          ...blockInfoPage,
          publish: value,
        };
        setData(state);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingType(null);
    }
  }
  return {
    data,
    loadingType,
    loadingForPublishLabel,
    createSection,
    updateSection,
    publishToggleSection,
  };
}
