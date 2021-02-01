let baseUrl1 = "http://192.168.188.20:8080"; //地址1
if (process.env.NODE_ENV === "production") {
    baseUrl1  = "你的线上地址"
}
export default {
    baseUrl1
}
