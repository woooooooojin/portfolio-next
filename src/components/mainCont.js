import Link from "next/link";
import Animation from "./animation";

export default function MainCont() {
  return (
    <>
        <section className="flex min-h-screen felx-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="dark:text-gray-500 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">FrontEnd Developer WooJin Choi
                    <br className="hidden lg:inline-block"/>next js portfolio
                </h1>
                <p className="mb-8 leading-relaxed dark:text-gray-700">asdfasdfasdfasdfasdfasdfasdlkfja;sldkfja;sldkfjasldkfjsldkfjsldkfj</p>
                <div className="flex justify-center">
                    <Link href='/aboutMe' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Read More
                    </Link>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation/>
                </div>
            </div>
        </section>
    </>
  )
}
