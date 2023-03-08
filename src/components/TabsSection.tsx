"use client";
import DropDown from "@/components/DropDown";
// import { usePlatformStore } from "@/store/platforms";

type Props = {
  children: React.ReactElement;
};

function TabsSection({ children }: Props) {
  // const { arrPlatform } = usePlatformStore();
  // const addPlatformData = usePlatformStore((state) => state.addPlatforms);

  // const getData = () => {
  //   addPlatformData(platforms)

  //   console.log(arrPlatform)
  // }

  return children;
}

export default TabsSection;
