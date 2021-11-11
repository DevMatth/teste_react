import { Flex, Text, Button, Icon, Link } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { BsCheckCircle } from "react-icons/bs"
import { RiPencilLine } from "react-icons/ri";
import { useEffect, useState, useContext } from "react";
import { SegmentContext } from "../context/SegmentContext";

export default function Home() {
  const segments = useContext(SegmentContext)
  
  
  return (
    <Flex direction="column" align="center" pt="12">
      <Header />
      
      <Text mt="6" align="center" fontWeight="300">
        Confirme o seguimento que sua empresa atua para personalizarmos sua <br/>
        experiência em nosso aplicativo 
      </Text>
        
      <Text pt="20">
        Seguimento Selecionado:
      </Text>
        
      <Flex align="center">
      { segments ? (
        <Text color="blue.400" fontSize="42px" fontWeight="300">
        
        </Text>
      ) : (
        <Text color="blue.400" fontSize="42px" fontWeight="300">
        Serviços de Beleza
        </Text>
      )}
      
      <Link href="/page_segment">
        <Button
          type="button"
          w="8"
          h="9"
          ml="4"
          border="1px"
          borderColor="blue.100"
          _hover={{
            bg: "blue.50",
          }}
        >
          <Icon as={RiPencilLine} fontSize="24" color="blue.300" />
        </Button>
      </Link>
    </Flex>

      <Flex mt="32">
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
          <Icon as={MdOutlineArrowBackIosNew} mr="4" fontSize="24"/> <Text fontSize="14" >Voltar</Text>
        </Button>
        
        <Button
          type="submit"
          bg="blue.400"
          color="white"
          w="400px"
          h="8"
          ml="6"
          _hover={{
            bg: "blue.300",
          }}
        >
          <Icon as={BsCheckCircle} mr="4" fontSize="24"/> <Text fontSize="14">Finalizar Cadastro</Text>
        </Button>
      </Flex>
    </Flex>
  )
}
