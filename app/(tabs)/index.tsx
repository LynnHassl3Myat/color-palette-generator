import {TouchableOpacity, Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {useRouter} from "expo-router";


export default function HomeScreen() {
    const router = useRouter();
  return (
    <SafeAreaView className={"flex h-full w-full justify-center items-center"}>
        <TouchableOpacity className={"bg-amber-300 rounded-full p-5 shadow"} onPress={() => router.replace('/generate')}>
            <Text className={"text-3xl"}>Go to Generate Page</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

