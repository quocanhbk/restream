import { Box, Flex, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

const Success: NextPage = () => {
    return (
        <Flex p={4} w="full" align="center" justify={"center"} h="100vh">
            <Flex direction={"column"} align="center">
                <Box
                    px={4}
                    py={2}
                    color="green.500"
                    fontWeight={"semibold"}
                    bg="whiteAlpha.100"
                    rounded="lg"
                >
                    <Text
                        textAlign={"center"}
                    >{`Access token has been sent to Sipher's backend successfully!`}</Text>
                    <Text
                        textAlign={"center"}
                    >{`You can close this window.`}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Success
