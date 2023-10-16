import { useEffect, useState } from 'react';
import { ISeoFormData, ISeoFullData, SeoFormService } from '../Components';

const service = new SeoFormService();

export default function useApiSeo(page: string) {
  const [data, setData] = useState<ISeoFullData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await service.getInfo(page);
      setData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
    loading,
    getAdapterSectionParams,
    onHandleUpdate,
  };
}
