import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl:
        "/api/https://clicks.aweber.com/y/ct/?l=eNKMKn&m=8kKiA5Xs4lyuOBlr&b=LN4zdPOCY2wffjE5vH.B0w",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Skip"],
    endpoints: (builder) => ({}),
});