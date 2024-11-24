import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-10">
    <div className="container mx-auto text-center">
      <p className="text-m text-gray-400">
        &copy; {new Date().getFullYear()} Cihan Yüksel tarafından ❤️ ile yapıldı.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/cihan-yuksel/"
          className="text-gray-400 hover:text-black transition-colors"
        >
          Facebook
        </a>
        <a
            href="https://www.linkedin.com/in/cihan-yuksel/"
          className="text-gray-400 hover:text-black transition-colors"
        >
          Twitter
        </a>
        <a
           href="https://www.linkedin.com/in/cihan-yuksel/"
          className="text-gray-400 hover:text-black transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
