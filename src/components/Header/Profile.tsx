import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Danilo Gonçalves</Text>
          <Text color="gray.300">danilogdev@gmail.com</Text>
        </Box>
      )}


      <Avatar size="md" name="Danilo Gonçalves" src="https://github.com/jovemdan.png" />
    </Flex>
  )
}
