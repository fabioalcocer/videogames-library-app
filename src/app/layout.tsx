import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Videogame library ",
  description:
    "Find all the video games you love and add them to your playlist",
};

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({ weight: ["300", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
