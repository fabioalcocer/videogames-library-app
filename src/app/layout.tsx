import "./globals.css";
import { getPlatforms } from "@/api";
import { Platform } from "@/types/platforms";
import Header from "@/components/Header";
import TabsSection from "@/components/TabsSection";
import DropDown from "@/components/DropDown";
import Description from "@/components/Description";
import ReactQueryWrapper from "./ReactQueryWrapper";
import Link from "next/link";

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
            <main className="relative mx-auto grid min-h-screen grid-cols-aside gap-5 py-8 px-5 pt-4 text-zinc-100">
              <aside className="sticky top-0 mr-2 flex h-96 w-full flex-col gap-5 py-6 px-5">
                <Link href="/" className="text-2xl font-bold">
                  Home
                </Link>
                <p className="text-2xl font-bold">
                  Reviews
                </p>
                <p className="text-2xl font-bold">
                  New Releases
                </p>
              </aside>
              <div>
                <Description />
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
