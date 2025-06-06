import { apiSlice } from "./ApiSlice";

export const skipsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllSkips: builder.query({
            query: () => ({
                url: "",
            
            }),
            providesTags: ["Skip"],
            keepUnusedDataFor: 7,
    })
})
})

export const {useGetAllSkipsQuery}=skipsSlice