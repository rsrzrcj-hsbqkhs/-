import { TOKEN } from "./tools";

//判断登录
export const isLogined = () => {
  if (localStorage.setItem("token")) {
    return true;
  }
};

//设置token
export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

//获取token
export const getToken = () => {
  localStorage.getItem("token") || "";
};

//移除token
export const removeToken = () => {
  localStorage.removeItem("token");
};
