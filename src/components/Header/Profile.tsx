import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Danilo Gonçalves</Text>
        <Text color="gray.300">danilogdev@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Danilo Gonçalves" src="https://github.com/jovemdan.png" />
    </Flex>
  )
}
