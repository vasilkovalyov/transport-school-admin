import { useState, useEffect } from 'react';
import api from '../api/axios';

type UsePostPaginateType = {
  postSizePage: number;
  apiUrl: string;
};

type UsePostPaginateReturnType<T> = {
  posts: T[];
  totalPageCount: number | null;
  handleChangePage: (e: React.ChangeEvent<unknown>, numberPage: number) => void;
};

export function usePostPaginate<T>({
  postSizePage,
  apiUrl,
}: UsePostPaginateType): UsePostPaginateReturnType<T> {
  const [posts, setPosts] = useState<T[]>([]);
  const [totalPageCount, setTotalPageCount] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  async function loadData() {
    try {
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
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleChangePage(e: React.ChangeEvent<unknown>, numberPage: number) {
    setCurrentPage(numberPage);
    loadData();
  }

  return { posts, totalPageCount, handleChangePage };
}
