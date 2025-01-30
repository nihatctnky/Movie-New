import Header from "@/components/Header"
import "./globals.css"
import Providers from "./Providers"
import Tabs from "@/components/Tabs"

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-white white:text-black dark:bg-gray-900  dark:text-white">
                <Providers>
                    <Header />
                    <Tabs />
                    {children}
                </Providers>
            </body>

        </html>
    )
}

export default Layout