import { Box, Button, Tag } from "@chakra-ui/react"
import axios from "axios"
import type { NextPage } from "next"
import { useEffect, useState } from "react"

export const CLIENT_ID = "138ecd0c-0960-44e0-95a0-94932cae99eb"
export const CLIENT_SECRET = "ae7f4e2b-7a2b-4943-98ee-bfb3b857919f"
export const REDIRECT_URL = "http://localhost:3002/api/auth"

const Home: NextPage = () => {
    const handleClick = () => {
        window.open(
            `https://api.restream.io/login?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=sipher`
        )
    }

    const [isLive, setIsLive] = useState(false)

    useEffect(() => {
        const accessToken = "bf54ade461e3635a494c402b0849958ad34dbb1a"
        const url = `wss://streaming.api.restream.io/ws?accessToken=${accessToken}`
        const connection = new WebSocket(url)

        connection.onmessage = (message) => {
            // IUpdates interface is provided on the right
            const update = JSON.parse(message.data)
            if (JSON.parse(message.data).action === "updateIncoming") {
                setIsLive(true)
            } else if (JSON.parse(message.data).action === "deleteIncoming") {
                setIsLive(false)
            }
            console.log(update)
        }

        connection.onerror = console.error
    }, [])

    return (
        <Box p={4}>
            {isLive && <Tag colorScheme={"red"}>LIVE</Tag>}
            <Button onClick={handleClick}>Login To Restream</Button>
        </Box>
    )
}

export default Home

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic MTM4ZWNkMGMtMDk2MC00NGUwLTk1YTAtOTQ5MzJjYWU5OWViOmFlN2Y0ZTJiLTdhMmItNDk0My05OGVlLWJmYjNiODU3OTE5Zg==" --data "grant_type=authorization_code&redirect_uri=http://localhost:3002/api/auth&code=59c8980e1eaafdf34834906337c11d7aea6b56d8&code=f750a7fc2af49b26db141bb02d04acc3ed8793f2" https://api.restream.io/oauth/token
