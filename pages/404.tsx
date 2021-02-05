import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="flex h-screen items-center justify-center">
            <h1 className='text-4xl font-medium text-red-400'> Sorry, 404 - Page Not Found  
                <Link href='/'><a className='text-lg block text-center my-3 text-green-600'>Back To Home</a></Link> 
            </h1>
        </div>
    )
  }
  