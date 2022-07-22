import { Button, Flex, Image, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

export const CLIENT_ID = "138ecd0c-0960-44e0-95a0-94932cae99eb"

const Home: NextPage = () => {
    const handleClick = () => {
        window.open(
            `https://api.restream.io/login?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&state=sipher`
        )
    }

    return (
        <Flex p={4} w="full" align="center" justify={"center"} h="100vh">
            <Flex direction={"column"} align="center">
                <Button
                    onClick={handleClick}
                    leftIcon={
                        <Image
                            src="https://restream.io/landings-assets/img/restream-circle-dark-54719416b5f95b54c661f0344f931ff9.svg"
                            h="1.5rem"
                            alt="restream"
                        />
                    }
                    size="lg"
                    mb={4}
                    variant="outline"
                >
                    Login To Restream
                </Button>
                <Text textAlign={"center"}>
                    {`After logged in, an access token is generated and will be
                    sent to Sipher's backend to track streaming status.`}
                </Text>
            </Flex>
        </Flex>
    )
}

export default Home

// curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic MTM4ZWNkMGMtMDk2MC00NGUwLTk1YTAtOTQ5MzJjYWU5OWViOmFlN2Y0ZTJiLTdhMmItNDk0My05OGVlLWJmYjNiODU3OTE5Zg==" --data "grant_type=authorization_code&redirect_uri=http://localhost:3002/api/auth&code=59c8980e1eaafdf34834906337c11d7aea6b56d8&code=f750a7fc2af49b26db141bb02d04acc3ed8793f2" https://api.restream.io/oauth/token
