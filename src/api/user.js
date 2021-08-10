import { post } from "../utils/request";
//发送验证码
export const regApi = (user) => get("/captcha/enst", user);
//登录
export const loginApi = (params) => get("/login/cellphone", params);
