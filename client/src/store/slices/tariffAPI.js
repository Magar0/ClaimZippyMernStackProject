import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const URL = "http://localhost:3000";
const URL = "https://claim-zippy-mern-stack-project.vercel.app";

export const tariffApi = createApi({
    reducerPath: "tariffApi",
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (build) => ({
        fetchTariff: build.query({
            query: () => '/tariff'
        }),
        postTariff: build.mutation({
            query: (body) => ({
                url: '/tariff',
                method: 'POST',
                body
            })
        }),
        putTariff: build.mutation({
            query: (id, body) => ({
                url: `/tariff/${id}`,
                method: 'PUT',
                body
            })
        }),
        deleteTariff: build.mutation({
            query: (id) => ({
                url: `/tariff/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { useFetchTariffQuery } = tariffApi;
