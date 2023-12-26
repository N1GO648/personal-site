import Link from "./Link";
import HomeLink from "./HomeLink";
import AutoRefresh from "./AutoRefresh";
import { serif } from "./fonts";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <AutoRefresh>
      <html lang="en" className={serif.className}>
        <body className="mx-auto max-w-2xl bg-[--bg] px-5 py-12 text-[--text]">
          <header className="mb-14 flex flex-row place-content-between">
            <HomeLink />
            <span className="relative top-[4px] italic">
              by{" "}
              <Link href="https://danabra.mov" target="_blank">
                <img
                  alt="Nico Lim"
                  src="https://media.licdn.com/dms/image/D5603AQFaG_nqw81Dxg/profile-displayphoto-shrink_400_400/0/1680421668277?e=1708560000&v=beta&t=vzqtwtDMBhxrAICT977EtUz2xAgwK4iaY6yvPelYGPY"
                  className="relative -top-1 mx-1 inline h-8 w-8 rounded-full"
                />
              </Link>
            </span>
          </header>
         
          <main>{children}</main>
        </body>
      </html>
    </AutoRefresh>
    
  );
}
