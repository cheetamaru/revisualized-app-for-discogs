const getUsernameFromPathname = (pathname: string) => {
    const str = pathname;
    const indexOfSeparator = str.lastIndexOf('/');
    return str.substring(indexOfSeparator + 1);
  }

export const ErrorPathnameDomain = {
    getUsernameFromPathname
}
