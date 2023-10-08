import { useEffect, useState } from 'react';
import { IBlockReusableService, IBlockReusableInfo } from '../types';

export function useApiPageBlocks<T>({
  service,
  blockInfoPage,
}: {
  service: IBlockReusableService<T>;
  blockInfoPage: IBlockReusableInfo;
}) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const response = await service.getBlock();
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function createSection(params: T) {
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

  return { data, createSection, updateSection };
}
