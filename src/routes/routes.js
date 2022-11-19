import { NavigationContainer } from "@react-navigation/native";
import * as Store from "../store/store";
import { SafeAreaView, Text } from "react-native";
import HomeRoutes from "./homeRoutes";

export default function Routes() {
        return (
            <NavigationContainer>
                <HomeRoutes />
            </NavigationContainer>
        )
};