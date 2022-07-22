import axios, { AxiosRequestConfig } from "axios"
import type { NextApiRequest, NextApiResponse } from "next"
import { serialize, CookieSerializeOptions } from "cookie"

export let accessToken = ""

export const setCookie = (
    res: NextApiResponse,
    name: string,
    value: unknown,
    options: CookieSerializeOptions = {}
) => {
    const stringValue =
        typeof value === "object" ? "j:" + JSON.stringify(value) : String(value)

    if (typeof options.maxAge === "number") {
        options.expires = new Date(Date.now() + options.maxAge * 1000)
    }

    res.setHeader("Set-Cookie", serialize(name, stringValue, options))
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const code = req.query.code ?? ""

        try {
            const { data } = await axios.post(
                "https://api.restream.io/oauth/token",
                new URLSearchParams({
                    code: code as string,
                    grant_type: "authorization_code",
                    redirect_uri:
                        process.env.NEXT_PUBLIC_REDIRECT_URI ??
                        "http://localhost:3002/api/auth",
                }),
                {
                    headers: {
                        Authorization: `Basic ${process.env.RESTREAM_SECRET}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )

            await axios.post("https://be.sipher.xyz/api/restream/token", {
                secret: "sipher-restream",
                accessToken: data.access_token,
                refreshToken: data.refresh_token,
            })

            res.redirect("/success")
        } catch (e) {
            res.redirect("/failed")
        }
    }
}
