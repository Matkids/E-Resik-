import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

const Header = ({}) => {
  const colour = "#FFFF";
  return (
    <SafeAreaView edges={["top"]}>
      <Box bg={colour} p={"4"} px={2} py={2}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            <>
              <Image
                source={require("../assets/logos.png")}
                w="20"
                h="12"
                alt="laundry Logo"
                mr={"4"}
              />
            </>
            <VStack>
              <Text bold fontSize="xl">
                Hi! Welcome
              </Text>
              <Text fontSize="md">Farrel Ardan</Text>
            </VStack>
          </HStack>
          <HStack>
            <TouchableOpacity>
              <FontAwesome5
                name="money-bill-wave"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;