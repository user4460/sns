//nextと
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

//react
import * as React from "react";
//components
import Listlink from "./components/Listlink";
//chakraUi
import { ChakraProvider } from "@chakra-ui/react"

export default function Home() {
  return (
    <ChakraProvider>
      <Listlink />
    </ChakraProvider>
  )
}
