import "./globals.css";
import { getPlatforms } from "@/api";
import { Platform } from "@/types/platforms";
import Header from "@/components/Header";
import TabsSection from "@/components/TabsSection";
import DropDown from "@/components/DropDown";
import Description from "@/components/Description";
import ReactQueryWrapper from "./ReactQueryWrapper";

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
          <div className="flex w-full flex-col items-center">
            <Header />
            <main className="mx-auto flex flex-col gap-5 py-8 px-5 pt-4 text-zinc-100">
              <Description />
              <TabsSection>
                <DropDown platforms={platforms} />
              </TabsSection>
              <div className="grid grid-cols-aside">
                <aside className="-z-10 max-h-screen mr-2 h-full w-52 bg-black">
                  Text
                </aside>
                {children}
              </div>
            </main>
          </div>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
