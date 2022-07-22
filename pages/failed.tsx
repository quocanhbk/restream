import { Flex, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

const Failed: NextPage = () => {
    return (
        <Flex p={4} w="full" align="center" justify={"center"} h="100vh">
            <Flex direction={"column"} align="center">
                <Text
                    color="red.500"
                    fontWeight={"semibold"}
                    bg="whiteAlpha.100"
                    px={4}
                    py={2}
                    rounded="lg"
                >{`An error has occured, you should try again later!`}</Text>
            </Flex>
        </Flex>
    )
}

export default Failed
