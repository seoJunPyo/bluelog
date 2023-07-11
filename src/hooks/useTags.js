import { useQuery } from '@tanstack/react-query';
import { getTags } from '../../service/tags';

const useTags = options => {
  const { data } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
    ...options,
  });

  return data;
};

export default useTags;
