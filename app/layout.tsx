import {Roboto_Mono} from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

// 加载 Roboto Mono 字体
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: object = {
  title: {
    title: "%s | Experience Architectural Graduate",
    default: "Jovin Liu | Experience Architectural Graduate"
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dense forests.",
  keywords:
    "architecture, architectural design, town planning permit, planning permit, building permit, architect, building design, building designer, modern architecture, interior design, residential development, multiunit development,,custom home design,renovation design,3D rendering services,landscape architecture,green building,project management,structural design,planning and development,BIM,Building Information Modeling"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        <main>{children}</main>
        <footer>123</footer>
      </body>
    </html>
  );
}
