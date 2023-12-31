import Link from 'next/link'
function Footer(){
  return (
    <>
    
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><Link href="/">Yummato</Link></span>
            <ul class="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/" class="mr-4 hover:underline md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link href="/partner-shops" class="mr-4 hover:underline md:mr-6">Partners Shops</Link>
                </li>
                <li>
                    <Link href="/partner/login" class="mr-4 hover:underline md:mr-6 ">Shop Partnership</Link>
                </li>
                <li>
                    <Link href="/" class="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Yummato™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </>
  )
}

export default Footer