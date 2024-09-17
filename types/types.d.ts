import { TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant: "Secondary" | "Primary" | "Danger" | "Success";
  textVariant: "Secondary" | "Primary" | "Danger" | "Success" | "default";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}
