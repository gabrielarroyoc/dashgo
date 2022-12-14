import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Tr,
  Th,
  Thead,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de Cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gabriel Arroyo</Text>
                    <Text fontSize="sm" color="gray.300" fontWeight="bold">
                      gabrielarroyoc18@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>12 de Novembro, 2022</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
