import { isAuthenticate } from "../auth/localUser";
import { instance } from "./instance";

export const getAllCategory =  () => {
  const url = `/products/category/jewelery`;
  return  instance.get(url);
};

export const getCategory = (id) => {
  const url = `/products/category/jewelery/${id}`;
  return instance.get(url);
};

export const addCategory = (category) => {
  const { user, token } = isAuthenticate();
  const url = `/category/${user._id}`;
  return instance.post(url, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeCategory = (id) => {
  const { user, token } = isAuthenticate();
  const url = `/category/${id}/${user._id}`;
  return instance.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCategory = (category) => {
  const { user, token } = isAuthenticate();
  const url = `/category/${category._id}/${user._id}`;
  return instance.put(url, category, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
