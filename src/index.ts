import { NativeModules } from "react-native";

export type VisibilityStatus = "visible" | "hidden" | "transitioning";
export type Config = { fade?: boolean };

const NativeModule: {
  hide: (fade: boolean) => Promise<true>;
  getVisibilityStatus: () => Promise<VisibilityStatus>;
} = NativeModules.RNBootSplash;

export function hide(config: Config = {}): Promise<void> {
  return NativeModule.hide({ fade: false, ...config }.fade).then(() => {});
}

export function getVisibilityStatus(): Promise<VisibilityStatus> {
  return NativeModule.getVisibilityStatus();
}

export default {
  hide,
  getVisibilityStatus,
};
