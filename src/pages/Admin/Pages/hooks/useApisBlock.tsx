import { useEffect, useState } from 'react';
import { IBlockInfoPage, IBlockService } from '../Components/types';
import { PageEnum } from '../pages-enum';

export function useApisBlock<T>({
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
    try {
      const response = await service.getBlock(page);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function createSection(params: T) {
    if (!service.create) return;
    try {
      const data = {
        ...params,
        ...blockInfoPage,
      };

      await service.create(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateSection(params: T) {
    if (!service.update) return;

    try {
      const data = {
        ...params,
        ...blockInfoPage,
      };
      await service.update(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function publishToggleSection(value: boolean) {
    try {
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
    }
  }
  return { data, createSection, updateSection, publishToggleSection };
}
