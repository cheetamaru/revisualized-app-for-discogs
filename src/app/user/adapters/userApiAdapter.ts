import { UserApiAdapterDomain } from "../domain/UserApiAdapterDomain";
import userApi from "../services/api/userApi";
import { UserProfile } from "../types/UserProfile";
import { UserResourcesDomain } from "../domain/UserResourcesDomain";

const { transformToUserProfile } = UserApiAdapterDomain;

const getUserProfile = (username: string): Promise<UserProfile> => {
    return userApi
        .getCachedUserProfile(username)
        .then(transformToUserProfile)
};

const getUserProfileForResources = async (username: string): Promise<UserProfile> => {
        const user = await getUserProfile(username);
        if (!UserResourcesDomain.hasAnyContent(user)
            || !UserResourcesDomain.hasCollectionAccess(user)
            || !UserResourcesDomain.hasWantlistAccess(user)) {
            return userApi.getFreshUserProfile(username).then(transformToUserProfile);
        }
        return user;
    }

const userApiAdapter = {
    getUserProfile,
    getUserProfileForResources,
};

export default userApiAdapter;
