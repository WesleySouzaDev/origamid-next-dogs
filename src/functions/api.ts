//@ts-nocheck
export const BASE_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = () => {
  return {
    url: `${BASE_URL}/jwt-auth/v1/token`,
  };
};

export const TOKEN_VALIDATE_POST = () => {
  return {
    url: `${BASE_URL}/jwt-auth/v1/token/validate`,
  };
};

export const USER_GET = () => {
  return {
    url: `${BASE_URL}/api/user`,
  };
};

export const USER_POST = () => {
  return {
    url: `${BASE_URL}/api/user`,
  };
};

export const PHOTO_POST = () => {
  return {
    url: `${BASE_URL}/api/photo`,
  };
};

export const PHOTOS_GET = ({
  page,
  total,
  user,
}: {
  page: number;
  total: number;
  user: 0 | string;
}) => {
  return {
    url: `${BASE_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
  };
};

export const PHOTO_GET = (id: string) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
  };
};

export const PHOTO_URL_GET = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
  };
};

export const COMMENTS_POST = (id: string) => {
  return {
    url: `${BASE_URL}/api/comment/${id}`,
  };
};

export const PHOTO_DELETE = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
  };
};

export const PASSWORD_LOST = () => {
  return {
    url: `${BASE_URL}/api/password/lost`,
  };
};

export const PASSWORD_RESET = () => {
  return {
    url: `${BASE_URL}/api/password/reset`,
  };
};

export const STATS_GET = () => {
  return {
    url: `${BASE_URL}/api/stats`,
  };
};
