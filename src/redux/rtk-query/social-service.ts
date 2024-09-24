import mockApi from "@/api/methods";
import { SocialCard } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const socialApi = createApi({
  reducerPath: "socialApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["socials", "posts"],
  endpoints: (builder) => ({
    getSocials: builder.query({
      queryFn: async () => {
        // Simulate fetching data
        return { data: await mockApi.getSocials() };
      },
      providesTags: ["socials"],
    }),
    getRecentPost: builder.query({
      queryFn: async (id: string) => {
        // Simulate fetching data
        return { data: await mockApi.getRecentPost(id) };
      },
      providesTags: ["posts"],
    }),
    addNewSocial: builder.mutation({
      queryFn: async (newSocial: SocialCard) => {
        // Simulate API
        return { data: await mockApi.addNewSocial(newSocial) };
      },
      invalidatesTags: ["socials"],
    }),
    updateSocial: builder.mutation({
      queryFn: async (updatedSocial: SocialCard) => {
        // Simulate API
        return {
          data: await mockApi.updateSocial(updatedSocial.id, updatedSocial),
        };
      },
      invalidatesTags: ["socials"],
    }),
    removeSocial: builder.mutation({
      queryFn: async (socialId: string) => {
        // Simulate API
        return { data: await mockApi.deleteSocial(socialId) };
      },
      invalidatesTags: ["socials"],
    }),
  }),
});

export default socialApi;

export const {
  useGetSocialsQuery,
  useAddNewSocialMutation,
  useRemoveSocialMutation,
  useUpdateSocialMutation,
  useGetRecentPostQuery,
} = socialApi;
