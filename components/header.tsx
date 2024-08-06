import Link from "next/link"

export default function Header() {
    return(
            <div className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
                <Link href="#" className="block transition hover:text-blue-600">
                     Home 
                </Link>
                <ArrowRight />
                <Link href="#" className="block transition hover:text-blue-600"> 
                    product
                </Link>
                <ArrowRight  />
                <h1 className="text-[#000] cursor-default"> 
                    VideoDubber - Fast Video Translator
                </h1>
            </div>
    )
}

function ArrowRight(){
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
        />
    </svg>
    )
}