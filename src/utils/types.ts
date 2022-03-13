import { NavigatorScreenParams, ParamListBase, StackRouterOptions } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

export type ScreenNavigationProp = StackNavigationProp<StackParamsList>;
export type ParamsNavigationProp = ParamListBase;
export type ScreenProps = {
  navigation: ScreenNavigationProp;
};

export type StackParamsList = {
  Materias: undefined;
  Cronograma: undefined;
  Settings: undefined;
  Menu: undefined;
};

export type PeriodItemsProps = {
  id : string;
  isEnable : boolean;
  period : string;
  translaction : string;
}

export type ShiftItemsProps = {
  id : string;
  isEnable : boolean;
  shift : string;
  translaction : string;
}

export type SelectedItemsProps = {
  shift: string;
  period: string;
}

export type SubjectListProps = {
  dtCreate: string,
  id: string,
  name: string,
  scheduleList: Array<ScheduleListProps>
}


export type ScheduleListProps = {
  dtCreate: string,
  dtScheduleItem: string,
  scheduleName: string
}