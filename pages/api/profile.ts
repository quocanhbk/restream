import axios, { AxiosRequestConfig } from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import { serialize, CookieSerializeOptions } from "cookie"
import { accessToken } from "./auth"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const { data } = await axios.get("https://api.restream.io/v2/user/profile", {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })

        res.json(data)
    }
}
