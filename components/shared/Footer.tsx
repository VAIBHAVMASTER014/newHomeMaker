import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-centeram:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo-no-background.png" width={ 128} height={38} alt="logo"/>
        </Link>
        <p>2024 Home Maker. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer