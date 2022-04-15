import React from 'react'
import {Flex, Box, Button, Text, Image, Spacer,useDisclosure,} from '@chakra-ui/react'
import logoPng from '../assets/images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import DrawerComponent from './DrawerComponent'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const handleModal=()=>{
       setOpen(true)
    }

   
    return (
       <Flex px={{base:'20px', md:'150px' }} py={{base:'12px', md:'38px'}} h='20%' w='100%'>
            <Box>
                <Image src={logoPng} alt='logo'/>
            </Box>
            <Spacer/>
            <Flex color='white' align='center' fontSize='16px' fontWeight='500' gap={12} display={{base:'none', md:'flex'}}>
                <Flex gap={8}>
                    <Text>Home</Text>
                    <Text>About</Text>
                    <Text>Contact</Text>
                </Flex>
                <Button variant='action' p={6}>DONATE</Button>
            </Flex>
            <Flex display={{base:'flex', md:'none'}} color='green'>
                <GiHamburgerMenu onClick={handleModal}/>
            </Flex>
            <DrawerComponent open={open} close={setOpen}/>
       </Flex>
    )
}

export default Navbar
