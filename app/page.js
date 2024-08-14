// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Header from "./dashboard/_components/Header";
// import { AtomIcon, Edit, Share2 } from "lucide-react";

// export default function Home() {
//   return (
//     <div>
//       <Image src={'/grid.svg'} className="absolute z-[-10] w-full" 
//       width={1200} height={300} />
//       <Header/>
//      <section className=" z-50">
//     <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
//         <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your Personal AI Interview Coach</h1>
//         <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Double your chances of landing that job offer

// with our AI-powered interview prep</p>
//         <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
//             <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
//                 Get Started
//                 <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//             </a>
           
//         </div>
       
//     </div>
// </section>


// <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
// <h2 className="font-bold text-3xl">How it Works?</h2>
// <h2 className="text-md text-gray-500">Give mock interview in just 3 simple steps</h2>


//     <div className="mt-12 text-center">
//       <a
//         href="/sign-in"
//         className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
//       >
//         Get Started Today
//       </a>
//     </div>
//     </section>
//     <footer className="bg-primary text-white py-4 text-center"> {/* Updated color to match the theme */}
//         <p className="text-sm">© 2024 Piyush</p> {/* Changed to © symbol */}
//       </footer>
//   </div>
 

//   );
// }


import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Flexbox layout to ensure footer stays at the bottom */}
      <Image 
        src={'/grid.svg'} 
        className="absolute z-[-10] w-full" 
        width={1200} 
        height={300} 
      />
      <Header />
      <section className="z-50 flex-grow"> {/* Allow this section to grow and take available space */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Your Personal AI Interview Coach
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Double your chances of landing that job offer with our AI-powered interview prep
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a 
              href="/dashboard" 
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg 
                className="ml-2 -mr-1 w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      

      {/* Footer Section */}
      <footer className="bg-primary text-white py-4 text-center"> {/* Updated color to match the theme */}
        <p className="text-sm">© 2024 Piyush</p> {/* Changed to © symbol */}
      </footer>
    </div>
  );
}
