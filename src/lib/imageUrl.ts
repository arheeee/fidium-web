const baseUrl = process.env.NEXT_PUBLIC_CRAFT_CMS_BASE_PATH || "";

/* 
  This lib resolves the urls for the images prepending the url from the craft side
  Be sure to update the path in the .env when working locally
*/

export const getImageUrl = (url: string): string => {
  if (!url) return "";
  return url.startsWith("http") ? url : `${baseUrl}${url}`;
};
