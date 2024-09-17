import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "@/components/MyButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { isColorDark } from "@/util/IsColorDark";

const numOfPalate = 5;

const generate = () => {
  const generateColorHex = (): string => {
    const hexChars = "0123456789ABCDEF";
    let result = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      result += hexChars[randomIndex];
    }
    return result;
  };

  const generateColorCode = () => {
    let newColorCode = [...colorCode];
    for (let i = 0; i < numOfPalate; i++) {
      if (!lock[i]) {
        newColorCode[i] = generateColorHex();
      }
    }
    setColorCode(newColorCode);
  };

  const [colorCode, setColorCode] = useState<string[]>(
    Array.from({ length: numOfPalate }, (): string => generateColorHex()),
  );

  const [lock, setLock] = useState<boolean[]>(() =>
    Array.from({ length: numOfPalate }, () => false),
  );

  return (
    <SafeAreaView
      className={"h-full w-full justify-center items-center flex-col"}
    >
      {colorCode.map((value, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => {
              if (lock[index]) return;
              const newColorCode = [...colorCode];
              newColorCode[index] = generateColorHex();
              setColorCode(newColorCode);
            }}
            className={`flex-1 w-full items-center justify-center flex-row`}
            style={{ backgroundColor: value }}
          >
            <Text
              className={`-right-3.5 justify-center text-center`}
              style={{
                color: isColorDark(value) ? "white" : "black",
              }}
            >
              {value}
            </Text>
            <View className={"-right-3/4"}>
              <Ionicons
                onPress={() => {
                  const newLock = [...lock];
                  newLock[index] = !newLock[index];
                  setLock(newLock);
                }}
                name={lock[index] ? "lock-closed-outline" : "lock-open-outline"}
                size={25}
                color={"blue"}
              />
            </View>
          </Pressable>
        );
      })}

      <MyButton
        title="Generate"
        onPress={() => generateColorCode()}
        textVariant={"Primary"}
        IconLeft={() => (
          <Ionicons name="settings-outline" size={32} color="green" />
        )}
        bgVariant={"Primary"}
      ></MyButton>
    </SafeAreaView>
  );
};

export default generate;
