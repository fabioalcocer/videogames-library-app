import AndroidIcon from "@/icons/AndroidIcon";
import AppleIcon from "@/icons/AppleIcon";
import IosIcon from "@/icons/IosIcon";
import PlayStationIcon from "@/icons/PlayStationIcon";
import WindowsIcon from "@/icons/WindowsIcon";
import XboxIcon from "@/icons/XboxIcon";
import { Platform } from "@/types/games";
import { ReactNode } from "react";

type Props = {
  platform: Platform;
};

const ICONS: Record<string, ReactNode> = {
  playstation: <PlayStationIcon />,
  xbox: <XboxIcon />,
  android: <AndroidIcon />,
  pc: <WindowsIcon />,
  ios: <IosIcon />,
  mac: <AppleIcon />,
};

function PlatformIcon({ platform }: Props) {
  return <span className="w-[15px]">{ICONS[platform.platform.slug]}</span>;
}

export default PlatformIcon;
