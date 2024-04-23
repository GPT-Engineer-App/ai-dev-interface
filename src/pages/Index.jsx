import { Box, Flex, Input, Textarea, Button, VStack, HStack } from "@chakra-ui/react";
import { FaTerminal, FaSearch, FaFolderOpen, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh" p={4}>
      {/* Top Containers */}
      <VStack spacing={4} width="50%">
        {/* Chat Interface */}
        <Box bg="gray.700" borderRadius="lg" p={4} width="100%" height="45%">
          <VStack spacing={4} height="100%">
            <Box bg="white" flex="1" width="100%" overflowY="scroll" p={2} borderRadius="md">
              {/* Chat messages would dynamically appear here */}
            </Box>
            <HStack width="100%">
              <Input placeholder="Type your message..." bg="white" />
              <Button colorScheme="blue">
                <FaPaperPlane />
              </Button>
            </HStack>
          </VStack>
        </Box>
        {/* CLI Terminal */}
        <Box bg="black" color="white" borderRadius="lg" p={4} width="100%" height="45%">
          <Flex alignItems="center">
            <FaTerminal />
            <Text ml={2}>CLI Terminal</Text>
          </Flex>
          <Textarea mt={4} bg="gray.800" placeholder="Terminal output..." readOnly />
        </Box>
      </VStack>

      {/* Bottom Containers */}
      <VStack spacing={4} width="50%">
        {/* Live Browser */}
        <Box bg="white" borderRadius="lg" p={4} width="100%" height="45%">
          <Flex alignItems="center">
            <FaSearch />
            <Text ml={2}>Live Browser</Text>
          </Flex>
          {/* Browser content would dynamically appear here */}
        </Box>
        {/* File Manager */}
        <Box bg="gray.300" borderRadius="lg" p={4} width="100%" height="45%">
          <Flex alignItems="center">
            <FaFolderOpen />
            <Text ml={2}>File Manager</Text>
          </Flex>
          {/* File structure would dynamically appear here */}
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;
