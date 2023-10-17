import { Access } from "payload/types";

export const isEditor: Access<any> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('editor'));
}