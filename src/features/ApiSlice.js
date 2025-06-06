import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl:
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft",
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Skip"],
    endpoints: (builder) => ({}),
});