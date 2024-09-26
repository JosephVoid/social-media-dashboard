import mockApi from "@/api/methods";
import mock from "@/api/mock.json";
import { SocialCard, Post } from "@/types/types";
import { describe, it, expect, beforeEach, vi } from "vitest";

describe("MockAPI", () => {
  beforeEach(() => {
    vi.clearAllTimers(); // Clear timers between tests
  });

  describe("constructor", () => {
    it("should initialize with socials and posts from mock data", () => {
      expect(mockApi.socials).toEqual(mock.socials as SocialCard[]);
      expect(mockApi.posts).toEqual(mock.posts as Post[]);
    });
  });

  describe("getSocials", () => {
    it("should return the list of socials", async () => {
      const socials = await mockApi.getSocials();
      expect(socials).toEqual(mock.socials as SocialCard[]);
    });
  });

  describe("addNewSocial", () => {
    it("should add a new social and return updated socials list", async () => {
      const newSocial: SocialCard = {
        id: "123",
        icon: "FACEBOOK",
        handle: "mine_handle",
        platform: "Facebook",
        statistics: [{ key: "followers", value: 100 }],
        information: [{ key: "owner", value: "mine" }],
      };

      const updatedSocials = await mockApi.addNewSocial(newSocial);
      expect(updatedSocials).toContainEqual(newSocial);
      expect(mockApi.socials).toContainEqual(newSocial);
    });
  });

  describe("updateSocial", () => {
    it("should update a social with the given id", async () => {
      const updatedSocial: SocialCard = {
        id: "12ab",
        icon: "FACEBOOK",
        handle: "mine_handle",
        platform: "Facebook",
        statistics: [{ key: "followers", value: 100 }],
        information: [{ key: "owner", value: "mine" }],
      };

      await mockApi.updateSocial("12ab", updatedSocial);
      const updated = mockApi.socials.find((social) => social.id === "12ab");

      expect(updated).toEqual(expect.objectContaining(updatedSocial));
    });

    it("should not update a social if the id does not match", async () => {
      const originalSocials = [...mockApi.socials];

      const updatedSocial: SocialCard = {
        id: "09",
        icon: "FACEBOOK",
        handle: "fake_handle",
        platform: "Facebook",
        statistics: [{ key: "followers", value: 100 }],
        information: [{ key: "owner", value: "mine" }],
      };

      await mockApi.updateSocial("nonexistent", updatedSocial);
      expect(mockApi.socials).toEqual(originalSocials);
    });
  });

  describe("deleteSocial", () => {
    it("should delete a social by id", async () => {
      const idToDelete = "12ab";

      await mockApi.deleteSocial(idToDelete);
      const deletedSocial = mockApi.socials.find(
        (social) => social.id === idToDelete
      );

      expect(deletedSocial).toBeUndefined();
    });

    it("should not change socials if the id does not exist", async () => {
      const originalSocials = [...mockApi.socials];

      await mockApi.deleteSocial("nonexistent");
      expect(mockApi.socials).toEqual(originalSocials);
    });
  });

  describe("getRecentPost", () => {
    it("should return the most recent post by a social id", async () => {
      const postId = "12ab";

      const recentPost = await mockApi.getRecentPost(postId);
      expect(recentPost?.postedBy).toBe(postId);
    });

    it("should return undefined if no post is found for the given id", async () => {
      const postId = "nonexistent";

      const recentPost = await mockApi.getRecentPost(postId);
      expect(recentPost).toBeUndefined();
    });
  });
});
