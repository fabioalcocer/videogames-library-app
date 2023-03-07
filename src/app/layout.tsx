import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Videogame library ",
  description:
    "Find all the video games you love and add them to your playlist",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-900 text-zinc-100">
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
