import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = "http://localhost:3000";

export const documentApi = createApi({
    reducerPath: 'documentApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (build) => ({
        fetchBaseQuery: build.query({
            query: () => '/document'
        }),
        postDocument: build.mutation({
            query: (body) => ({
                url: '/document',
                method: "POST",
                body
            })
        }),
        putDocument: build.mutation({
            query: (id, body) => ({
                url: `/document/${id}`,
                method: "PUT",
                body
            })
        }),
        deleteDocument: build.mutation({
            query: (id) => ({
                url: `/document/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { useFetchDocumentQuery } = documentApi;
