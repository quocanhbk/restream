import { Box, Button,  } from "@chakra-ui/react"
import type { NextPage } from "next"

export const CLIENT_ID = "138ecd0c-0960-44e0-95a0-94932cae99eb"

const Home: NextPage = () => {
    const handleClick = () => {
        window.open(
            `https://api.restream.io/login?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&state=sipher`
        )
    }

    return (
        <Box p={4}>
            <Button onClick={handleClick}>Login To Restream</Button>
        </Box>
    )
}

export default Home

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic MTM4ZWNkMGMtMDk2MC00NGUwLTk1YTAtOTQ5MzJjYWU5OWViOmFlN2Y0ZTJiLTdhMmItNDk0My05OGVlLWJmYjNiODU3OTE5Zg==" --data "grant_type=authorization_code&redirect_uri=http://localhost:3002/api/auth&code=59c8980e1eaafdf34834906337c11d7aea6b56d8&code=f750a7fc2af49b26db141bb02d04acc3ed8793f2" https://api.restream.io/oauth/token
