import { atom } from "recoil";

export const UserDetailsState = atom({
  key: "user-details-state",
  default: {},
});

export const UserState = atom({
  key: "user-state",
  default: {
    name: "",
    email: "",
  },
});
