import { describe, it, expect } from "vitest";
import { userSlice } from "@/redux/user-slice";
import { User } from "@/types/types";

describe("userSlice", () => {
  const initialState = {
    username: "",
    displayName: "",
  };

  it("should handle setUser", () => {
    const newUser: User = {
      username: "yoseph_ten",
      displayName: "Yoseph Tenaw",
    };

    const nextState = userSlice.reducer(
      initialState,
      userSlice.actions.setUser(newUser)
    );

    expect(nextState).toEqual({
      username: "yoseph_ten",
      displayName: "Yoseph Tenaw",
    });
  });
});
