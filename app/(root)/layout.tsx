import "@/styles/globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

//   title: "Turbo MIS | Powering the smartest academic institutions",
//   description: "A fast and easy-to-use learning management system.",
//   metadataBase: new URL("https://turbo-mis.vercel.app/"),
//   openGraph: {
//     title: "Turbo MIS | Powering the smartest academic institutions",
//     description: "A fast and easy-to-use learning management system.",
//     url: "https://turbo-mis.vercel.app/",
//     siteName: "Turbo MIS",
//     images: [
//       {
//         url: "https://turbo-mis.vercel.app/og.png",
//         width: 1200,
//         height: 630,
//         alt: "Turbo MIS",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Turbo MIS | Powering the smartest academic institutions",
//     description: "A fast and easy-to-use learning management system.",
//     images: ["https://turbo-mis.vercel.app/og.png"],
//   },
// };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
