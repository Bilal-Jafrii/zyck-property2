import Link from 'next/link'
import React from 'react'


interface ILinks {
    name: string,
    link: string
}
const pages: ILinks[] = [
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact us',
        link: '/contact'
    },
    {
        name: 'FAQs',
        link: '/faqs'
    },
    {
        name: 'Terms & Condition',
        link: '/terms'
    },
]

const listing: ILinks[] = [
    {
        name: "Featured",
        link: '/featured'
    },
    {
        name: "Rent",
        link: "/rent"
    },
    {
        name: "Sale",
        link: '/sale'
    }
]

const Footer = () => {
  return (
    <footer className="p-4 shadow-lg bg-black bg-opacity-75 md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={"/logo.png"} alt="logo" height={3} width={200} />  
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">The Great Real Estate and Property Website with next level funcionality</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        {pages.map((item, index) => (
            <li key={index} className='mr-4 hover:underline md:mr-6 hover:text-green-600 transition-colors delay-100'>
                <Link href={item.link}>{item.name}</Link>
            </li>
        ))}
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" className="hover:underline">ZYCK Property™</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer

