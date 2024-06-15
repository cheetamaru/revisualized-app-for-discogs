import { UserApiAdapterDomain } from "../domain/UserApiAdapterDomain";
import userApi from "../services/api/userApi";
import { UserProfile } from "../types/UserProfile";

const { transformToUserProfile } = UserApiAdapterDomain;

const getUserProfile = (username: string): Promise<UserProfile> => {
    return userApi
        .getCachedUserProfile(username)
        .then(transformToUserProfile)
};

const userApiAdapter = {
    getUserProfile,
};

export default userApiAdapter;
