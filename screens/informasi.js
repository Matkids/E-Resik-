import {
    Heading,
    Box,
    FlatList,
    HStack,
    Avatar,
    VStack,
    Text,
    Spacer,
    Button,
    Modal,
    FormControl,
    Input,
  } from "native-base";
  import { useState } from "react";
import { Header } from "../components";
import Riwayat from "./riwayat";
import { useNavigation } from "@react-navigation/native";

  
  const data = [
    {
      id: "1",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"), // Menggunakan require untuk gambar lokal
    },
    {
      id: "2",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "3",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "4",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "5",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "6",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "7",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "8",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "9",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "10",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "11",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "12",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "13",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "14",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "15",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "16",
      fullName: "Laundry Express",
      recentText: "Per Kg : Rp 16.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "17",
      fullName: "Laundry Regular",
      recentText: "Per Kg : Rp 13.000",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "18",
      fullName: "Cuci + Kering + Setrika",
      recentText: "Per Kg : Rp 8.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "19",
      fullName: "Cuci + Kering",
      recentText: "Per Kg : Rp 6.500",
      avatarUrl: require("../assets/logos.png"),
    },
    {
      id: "20",
      fullName: "Setrika",
      recentText: "Per Kg : Rp 2.500",
      avatarUrl: require("../assets/logos.png"),
    },
  ];
  
  const Informasi = () => {
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();
    return (
      <>
        <Header />
        <Box>
          <HStack justifyContent={"space-between"}>
            <Heading fontSize="xl" p="4" pb="3">
              History Pemesanan
            </Heading>
            <Button 
              mx={2}
              my={2}
              ml={20}
              mr={2}
              rounded={10}
              bg={"#1a91ff"}
              onPress={() => navigation.navigate (Riwayat)}
            >
              <Text color={"#FFF"}>DISINI</Text>
            </Button >
          </HStack>
          <FlatList
            mx={3}
            my={2}
            data={data}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={item.avatarUrl} />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </>
    );
  };
  
  export default Informasi;