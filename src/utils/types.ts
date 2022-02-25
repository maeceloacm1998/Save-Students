import { StackNavigationProp } from "@react-navigation/stack";

export type ScreenNavigationProp = StackNavigationProp<StackParamsList>;
export type ScreenProps = {
  navigation: ScreenNavigationProp;
};

export type StackParamsList = {
  Materias: undefined;
  Cronograma: undefined;
};