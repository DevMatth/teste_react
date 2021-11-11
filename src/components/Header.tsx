import { Flex, Text, Icon } from "@chakra-ui/react";
import { RiDropboxLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
    >
      <Icon as={RiDropboxLine} fontSize={48} color="blue.400"/>
      <Text
        color="blue.400"
        fontSize="42px"
        fontWeight="300"
      >
        Seguimento da Empresa
      </Text>
    </Flex>
  )
}

