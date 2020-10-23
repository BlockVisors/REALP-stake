import React from 'react';
import { Text, Box, Flex, Link, Grid, Image } from "@chakra-ui/core"
import addresses from "../contracts/addresses"
import {shortEther} from "../utils"

export default function Subheading({
  web3, address, totalLid, totalStaked,
  totalStakers, accountLidStaked, accountLid
}) {
  const toBN = web3.utils.toBN
  const toWei = web3.utils.toWei
  return (
    <Box w="100%" m="0" p={["20px", "20px", "0px"]} pt="0px" pb="20px" bg="lid.bgMed" position="relative">
      <Box position="absolute" zIndex="1" left="0px" right="0px" bottom="0px" height="100px" bg="lid.bg" />
      <Flex w="100%" maxW="1200px" align="center" ml="auto" mr="auto" p="0px" pt="20px" pb="20px" position="relative" zIndex="2">
        <Grid w="100%" gap="20px"
          templateRows={{base:"repeat(6, 1fr)", md:"repeat(2, max-content)"}}
          templateColumns={{base:"auto", md:"repeat(3, minmax(0, 1fr))"}}>
          <Box  w="100%"  borderRadius="5px" p="25px" border="solid 1px" borderColor="lid.stroke" bg="lid.bg" >
            <Text fontSize="18px" m="0" p="0" color="lid.fgMed">
               REALP Staking Contract
            </Text>
            <Link wordBreak="break-word" color="lid.brand" href={"https://etherscan.io/address/"+addresses.lidStaking} mt="15px" display="block">
              {addresses.lidStaking}
            </Link>
          </Box>
          <Box  w="100%"  border="solid 1px" borderColor="lid.stroke" color="white" borderRadius="5px" p="25px"
            bg="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)" >
            <Image src="/LID_logo_pure_white.png" alt="Lid Website" w="auto" h="25px" display="inline-block" position="relative" top="-3px"/>
            <Text ml="10px" mt="5px" color="lid.bg" display="inline-block">
              Your Staked REALP
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold">
              {shortEther(accountLidStaked,web3)}
            </Text>
          </Box>
          <Box  w="100%"  border="solid 1px" borderColor="lid.stroke" color="white" borderRadius="5px" p="25px"
            bg="linear-gradient(0deg, rgba(12,101,235,1) 0%, rgba(28,158,247,1) 100%)" >
            <Image src="/LID_logo_pure_white.png" alt="Lid Website" w="auto" h="25px" display="inline-block" position="relative" top="-3px"/>
            <Text ml="10px" mt="5px" color="lid.bg" display="inline-block">
              Your REALP Wallet
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold">
              {shortEther(accountLid,web3)}
            </Text>
          </Box>
          <Box  w="100%"  border="solid 1px" borderColor="lid.stroke" color="lid.fg" borderRadius="5px" p="25px"
            bg="lid.bg" >
            <Image src="/Depositor.png" alt="Lid Website" w="auto" h="25px" display="inline-block" position="relative" top="-3px"/>
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              Total REALP Stakers
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {totalStakers}
            </Text>
          </Box>
          <Box  w="100%"  border="solid 1px" borderColor="lid.stroke" color="lid.fg" borderRadius="5px" p="25px"
            bg="lid.bg" >
            <Image src="/logo-200.png" alt="Lid Website" w="auto" h="25px" display="inline-block" position="relative" top="-3px"/>
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              Total Staked REALP
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {shortEther(totalStaked,web3)}
            </Text>
          </Box>
          <Box  w="100%"  border="solid 1px" borderColor="lid.stroke" color="lid.fg" borderRadius="5px" p="25px"
            bg="lid.bg" >
            <Image src="/logo-200.png" alt="Lid Website" w="auto" h="25px" display="inline-block" position="relative" top="-3px"/>
            <Text ml="10px" mt="5px" color="lid.fgMed" display="inline-block">
              Total REALP
            </Text>
            <Text fontSize="38px" w="100%" fontWeight="bold" color="lid.brand">
              {shortEther(totalLid,web3)}
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
}
