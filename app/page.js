import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center md:flex-row text-black gap-3 px-4">
        {/* Image Section */}
        <div className="flex justify-center items-center h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] bg-[url('/assets/heroImg.jpg')] bg-cover bg-[200%] bg-center border-[4px] border-white bg-white rounded-full" />

        {/* Description Section */}
        <div className="w-full md:w-[540px] flex flex-col justify-around mt-6 md:mt-0 text-center md:text-left">
          <h1 className="text-[28px] sm:text-[32px] md:text-[44px] font-bold">
            Hi<span className="inline-block animate-wave">👋</span>, I&apos;m Bishr
            Mubaraq,
          </h1>
          <p className="text-[12px] sm:text-[14px] tracking-tight font-medium">
            I have two years of expertise creating user-friendly,
            high-performing online applications through design and development.
            Enthusiastic about coding and practical problem-solving.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-4 items-center mt-4">
            <Link href={"https://github.com/BishrMubaraq"} target="_blank">
              <Image
                src="assets/github.svg"
                width={24}
                height={24}
                alt="github icon"
                className="cursor-pointer hover:opacity-50"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/bishr-mubaraq"}
              target="_blank"
            >
              <Image
                src="assets/linkedin.svg"
                width={24}
                height={24}
                alt="linkedin icon"
                className="cursor-pointer hover:opacity-50"
              />
            </Link>
            <Link href={"https://x.com/bishr_mubaraq"} target="_blank">
              <Image
                src="assets/twitter.svg"
                width={17}
                height={17}
                alt="twitter icon"
                className="cursor-pointer hover:opacity-50"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
