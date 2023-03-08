import { getPlatforms } from "@/api";
import { Platform } from "@/types/platforms";
import Header from "@/components/Header";
import TabsSection from "@/components/TabsSection";
import DropDown from "@/components/DropDown";
import "./globals.css";

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
        <div className="flex w-full flex-col items-center">
          <Header />
          <main className="mx-auto flex max-w-7xl flex-col gap-5 py-8 px-5 text-zinc-100">
            <h4 className="text-center text-4xl font-bold leading-[16px]">
              New and trending
            </h4>
            <p className="text-center">
              Based on player counts and release date
            </p>
            <TabsSection>
              <DropDown platforms={platforms} />
            </TabsSection>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
