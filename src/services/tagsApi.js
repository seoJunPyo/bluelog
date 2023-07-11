import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { getTags } from '../../service/tags';

const tagApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'tags',
  endpoints: builder => ({
    getTags: builder.query({
      queryFn: async () => {
        const tags = await getTags();

        return { data: tags };
      },
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
export default tagApi;
