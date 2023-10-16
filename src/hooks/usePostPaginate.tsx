import { useState, useEffect } from 'react';
import api from '../api/axios';

type UsePostPaginateType = {
  postSizePage: number;
  apiUrl: string;
};

type UsePostPaginateReturnType<T> = {
  posts: T[];
  page: number;
  totalPageCount: number | null;
  loading: boolean;
  handleChangePage: (e: React.ChangeEvent<unknown>, numberPage: number) => void;
};

export function usePostPaginate<T>({
  postSizePage,
  apiUrl,
}: UsePostPaginateType): UsePostPaginateReturnType<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<T[]>([]);
  const [totalPageCount, setTotalPageCount] = useState<number | null>(null);

  async function loadData(currentPage: number = 1) {
    try {
      setLoading(true);
      const response = await api.get(apiUrl, {
        params: {
          size: postSizePage,
          page: currentPage,
        },
      });
      const { posts, total_pages } = response.data;
      setPosts(posts);
      setTotalPageCount(total_pages || null);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleChangePage(
    _e: React.ChangeEvent<unknown>,
    numberPage: number
  ) {
    loadData(numberPage);
    setPage(numberPage);
  }

  return { loading, page, posts, totalPageCount, handleChangePage };
}
