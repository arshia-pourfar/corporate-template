// Importing global styles for the application
import "./globals.css";
// import { ErrorBoundary } from "react-error-boundary";

// Importing the Rubik font from Google Fonts using Next.js font optimization
import { Rubik } from "next/font/google";

// Configuring the Rubik font with specific subsets and weights
// - subsets: ["latin"] ensures the font supports Latin characters
// - weights: ["400", "500", "700"] loads normal, medium, and bold font weights
const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

// function ErrorFallback({ error }: { error: Error }) {
//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <p>{error.message}</p>
//     </div>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <body className={rubik.className}>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
        {children}
        {/* </ErrorBoundary> */}
      </body>
    </html>
  );
}













// // Importing global styles for the application
// import "./globals.css";

// // Importing the Rubik font from Google Fonts using Next.js font optimization
// import { Rubik } from "next/font/google";

// // Configuring the Rubik font with specific subsets and weights
// // - subsets: ["latin"] ensures the font supports Latin characters
// // - weights: ["400", "500", "700"] loads normal, medium, and bold font weights
// const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

// // Exporting metadata for the application
// // - This metadata is used for SEO and can be accessed in all pages
// export const metadata = {
//   title: "Corporate Website", // Default title for the website
//   description: "A modern corporate website template built with Next.js and Tailwind CSS.", // Default description for the website
// };

// // Default export for the RootLayout component
// // - This component wraps all pages in the application
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     // HTML root element with lang attribute set to "en" for English
//     <html lang="en">
//       {/* Body element with the Rubik font applied */}
//       {/* The `rubik.className` dynamically applies the configured font to the entire app */}
//       <body className={rubik.className}>
//         {/* `children` represents the content of the current page */}
//         {children}
//       </body>
//     </html>
//   );
// }