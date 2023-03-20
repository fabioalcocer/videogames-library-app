import "./globals.css";
import { getPlatforms } from "@/api";
import { Platform } from "@/types/platforms";
import Header from "@/components/Header";
import TabsSection from "@/components/TabsSection";
import DropDown from "@/components/DropDown";
import ReactQueryWrapper from "./ReactQueryWrapper";
import AsideBar from "@/components/AsideBar";
import InfoSection from "@/components/InfoSection";

export const metadata = {
  title: "Videogame library ",
  description:
    "Find all the video games you love and add them to your playlist",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const platforms: Platform[] = await getPlatforms();

  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-900 text-zinc-100">
        <ReactQueryWrapper>
          <div className="w-full">
            <Header />
            <main className="relative mx-auto lg:grid min-h-screen lg:grid-cols-aside gap-5 py-8 px-5 pt-2 text-zinc-100">
              <AsideBar />
              <div>
                <InfoSection />
                <TabsSection>
                  <DropDown platforms={platforms} />
                </TabsSection>
                {children}
              </div>
            </main>
          </div>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
