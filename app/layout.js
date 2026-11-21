import "./globals.css";
import { getContent } from "@/lib/content";
import { LangProvider } from "@/components/LangProvider";
import Navigation from "@/components/organisms/Navigation";
import Footer from "@/components/organisms/Footer";

export const metadata = {
  title: "Prologg for Legal",
  description:
    "Veilig en anoniem bewijs verzamelen met een telefoon. Voor advocaten in zaken rond arbeidsuitbuiting.",
};

export default function RootLayout({ children }) {
  const content = getContent();

  return (
    <html lang="nl">
      <head>
        <meta name="text-scale" content="scale" />
      </head>
      <body>
        <LangProvider content={content}>
          <Navigation />
          {children}
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
