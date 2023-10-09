import { useEffect, useState } from 'react';
import { ISeoFormData, ISeoFullData, SeoFormService } from '../Components';

const service = new SeoFormService();

export default function useApiSeo(page: string) {
  const [data, setData] = useState<ISeoFullData | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await service.getInfo(page);
    setData(response.data);
  }

  async function onHandleUpdate(params: ISeoFormData) {
    await service.update({
      ...params,
      page: page,
    });
  }

  const getAdapterSectionParams = (
    params: ISeoFullData | null
  ): ISeoFormData | null => {
    if (!params) return null;
    const { page, ...props } = params;
    return {
      ...props,
    };
  };

  return {
    data,
    getAdapterSectionParams,
    onHandleUpdate,
  };
}
