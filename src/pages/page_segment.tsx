import { Flex, Text, Icon, Button, Link, Table, Tbody, Td, Input } from "@chakra-ui/react";

import { useEffect, useState, useContext } from "react";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import { Header } from "../components/Header";
import { api } from "../services/api";
import { SegmentContext } from "../context/SegmentContext";



export default function PageSelectSegment() {
  const {segments, SegmentInputValue} = useContext(SegmentContext)

  const [ search, setSearch ] = useState('')

  const [ newSearch, setNewSearch ] = useState('')
  console.log(segments)

  function handleNewSearch() {
    if (search === null ) {
      <Text>no search</Text>
    } else {
      SegmentInputValue(search)
    }
  }


  return (
    <Flex direction="column" align="center" pt="12">
      <Header />
      
      <Text mt="6" align="center" fontWeight="300">
        Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de<br/>
        sua empresa.
      </Text>
      
      <Flex my="12" align="center">
        <Flex
          as="label"
          flex="1"
          w="580px"
          h="12"
          border="2px"
          borderColor="blue.400"
          borderRadius="4px"
          align="center"
        >
          <Input
            id="buscador"
            name="selection"
            type="text"
            variant="unstyled"
            placeholder="Ex: Restaurante"
            _placeholder={{
              color: "gray"
            }}
            w="550px"
            value={search}
            onChange={event => setSearch(event.target.value)}
          >
            
          </Input>
            <Button onClick={handleNewSearch}>
          <Icon as={IoIosSearch} fontSize="18" color="black" />
            </Button>
        </Flex>

      </Flex>
      { newSearch ? (
        segments.map( (segment) => {
          
          <Flex align="center" key={segment.list.id}>
            <Table variant="unstyled">
              <Tbody>
                <Td>
                  <Button
                    bg="gray.100"
                    border="2px"
                    borderColor="gray.200"
                    my="2"
                    w="580px"
                    h="12"
                  >
                    {segment.list.description}
                  </Button>
                </Td>
              </Tbody>
            </Table>
          </Flex>
        })
          
        ) : (
        <Flex align="center">
          <Table variant="unstyled">
            <Tbody>
              <Td>
                <Button
                  bg="gray.100"
                  border="2px"
                  borderColor="gray.200"
                  my="2"
                  w="580px"
                  h="12"
                  variant="unstyled"
                  cursor="inherit"
                >
                  <Text fontWeight="400">
                    Informe acima o seguimento para continuar.
                  </Text>
                </Button>
              </Td>
            </Tbody>
          </Table>
        </Flex>
      )}
      <Flex mt="24">
        <Link href="/">
          <Button
            type="button"
            border="1px"
            borderColor="blue.100"
            color="blue.400"
            fontWeight="500"
            w="48"
            h="8"
            _hover={{
              bg: "blue.50",
            }}
          > 
            <Icon as={MdOutlineArrowBackIosNew} mr="4" fontSize="24"/> 
            <Text fontSize="14" >Voltar</Text>
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

