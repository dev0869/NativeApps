/// <reference types="nativewind/types" />
declare module "*.png";
type navigation = {
  navigate: any;
  navigation: NativeStackNavigationProp<any, "">;
};
type error = {
  message: string;
  [key: string]: any;
};
