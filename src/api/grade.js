import get from "./apiCaller";

export default async() => {
    const res = await get("/api/grade/");
    if (!res.error) {
        // (res.response.data)
        return res.response;
    } else console.error(res.response.status);
};