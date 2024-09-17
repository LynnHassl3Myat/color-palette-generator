import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/types";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "Primary":
      return "bg-blue-200";
    case "Secondary":
      return "bg-grey-200";
    case "Success":
      return "bg-green-200";
    case "Danger":
      return "bg-red-200";
    default:
      return "text-white";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "Primary":
      return "text-black";
    case "Secondary":
      return "text-gray-100";
    case "Danger":
      return "text-red-100";
    case "Success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const MyButton = ({
  onPress,
  title,
  bgVariant = "Primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row w-full justify-center items-center p-5 ${getBgVariantStyle(bgVariant)} ${className}`}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`text-md ${getTextVariantStyle(textVariant)} text-center px-1`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default MyButton;
