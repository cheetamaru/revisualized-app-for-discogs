const getUsernameInputPushPath = (username: string) => {
    return `/wantlist/${username}`;
}

export const UserDomain = {
    getUsernameInputPushPath,
}