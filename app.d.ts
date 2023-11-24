/// <reference types="nativewind/types" />
declare module "*.png";
declare module "*.jpeg" ;
type navigation = {
  navigate: any;
  navigation: NativeStackNavigationProp<any, "">;
};
type error = {
  message: string;
  [key: string]: any;
};
