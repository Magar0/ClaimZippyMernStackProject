import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = "https://claim-zippy-mern-stack-project.vercel.app";

export const documentApi = createApi({
    reducerPath: 'documentApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (build) => ({
        fetchDocument: build.query({
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
