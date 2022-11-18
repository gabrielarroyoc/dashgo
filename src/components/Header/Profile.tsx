import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Arroyo</Text>
          <Text color="gray.300">gabrielarroyoc18@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" src="https://github.com/gabrielarroyoc.png" />
    </Flex>
  );
}
