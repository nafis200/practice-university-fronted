// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//   reducerPath: 'baseApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:5000/api/v1',
//     credentials: 'include',
//     // its include cookie into browser
//     // credentials na dile cookie set hobe na

//   }),

//   endpoints: () => ({}),
//   // endpoints: (builder) => ({
//   //   login: builder.mutation({
//   //     query: (userInfo) => ({
//   //       url: '/auth/login',
//   //       method: 'POST',
//   //       body: userInfo,
//   //     }),
//   //   }),
//   // }),
// });

import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { logout, setUser } from '../features/auth/authSlice';
import { toast } from 'sonner';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `${token}`);
    }

    return headers;
  },
});

// custom query make korar somay must be 3 ta parameter dite hobe see docs.args, api, extraOptions

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
// eslint-disable-next-line @typescript-eslint/no-explicit-any
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if(result?.error?.status === 404){
    toast.error("User not found")
  }

  if (result?.error?.status === 401) {
    //* Send Refresh
    console.log('Sending refresh token');

    const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
      method: 'POST',
      credentials: 'include',
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);

      // je api karone expire hoyeche or fail hoyeche sei api ke again call korte hobe

    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
