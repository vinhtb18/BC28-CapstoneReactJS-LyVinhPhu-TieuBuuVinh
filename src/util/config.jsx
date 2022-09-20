import axios from 'axios';
// import {history} from '../index'
export const configs = {
    setStore: (name,values)=>{
        localStorage.setItem(name,values);
    },
    getStore: (name) => {
        return localStorage.getItem(name);
    },
    setStoreJSON: (name,values)=>{
        //Biến thành chuỗi
        values = JSON.stringify(values);
        //Lưu vào store
        localStorage.setItem(name,values);
    },
    getStoreJSON: (name) =>{
        if(localStorage.getItem(name)) {
            let content = JSON.parse(localStorage.getItem(name));
            return content;
        }
        return null;
    },
    setCookie : ( value , days,name ) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie : (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    clearCookie: (name)=>{
        setCookie('',-1,name);
    },
    clearLocalStorage : (name)=> {
        localStorage.removeItem(name);
    },
    ACCESS_TOKEN: 'accessToken',
    USER_LOGIN:'userLogin'
}

export const {ACCESS_TOKEN,USER_LOGIN,getCookie,setCookie,getStore,setStore,getStoreJSON,setStoreJSON,clearCookie,clearLocalStorage} = configs;

const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyOCIsIkhldEhhblN0cmluZyI6IjI1LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzI4MzIwMDAwMCIsIm5iZiI6MTY0Nzk2ODQwMCwiZXhwIjoxNjc3NDMwODAwfQ.wEdmkKpVZbDB4s4L_cmLwJ1O8le8Cc-VMgLZCI-HvLA';

//Cấu hình interceptor (Cấu hình cho các request và response)

export const http = axios.create({
    baseURL:`https://shop.cyberlearn.vn/api`,
    timeout: 6000
});

//Cấu hình request 

http.interceptors.request.use((configs)=> {
    //Cấu hình tất cả header add thêm thuộc tính Authorization
    configs.headers = {
        ...configs.headers,
        ['Authorization']: `Bearer ${getStore(ACCESS_TOKEN)}`,
        ['TokenCybersoft']: TOKEN_CYBERSOFT
    }

    return configs;
}, (err) => {
    return Promise.reject(err);
})


/*
    statuscode: mã kết quả trả về do backend qui định
    200(Success): Kết quả trả về thành công
    201(created): Tạo giá trị thành công trên server (thường dùng 200)
    400(Bad Request): Không tồn tại đường dẫn 
    404(Not Found): Không tìm thấy dữ liệu
    401(UnAuthorize): Không có quyền truy cập vào api
    403(Forbiden): Token chưa đủ quyền truy cập
    500(Error in server ): Lỗi xảy ra trên server (Nguyên nhân do frontend hoặc backend tuỳ tình huống )
*/


//Cấu hình kết quả trả về
http.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, err => {
    // const originalRequest = error.config;
    console.log(err.response.status);
    if(err.response.status === 400 || err.response.status === 404) {
        // history.push('/');
        return  Promise.reject(err);
    }
    if(err.response.status === 401 || err.response.status === 403) {
        alert('Token không hợp lệ ! Vui lòng đăng nhập lại !');
        // history.push('/login');
        return Promise.reject(err)
    }
})