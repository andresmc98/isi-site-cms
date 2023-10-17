import { Access } from "payload/config";

export const isAdminOrEditor: Access = ({ req: { user } }) => {
    if (user) {
        if (user.roles?.includes('admin')) {
            return true;
        }
        if (user.roles?.includes('editor')) {
            return true;
        }
        return false;
    }
}