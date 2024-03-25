import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Companyservices = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
    <div>
      <h1 className="pt-10 text-center font-bold text-4xl">
    Services
    <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
    </h1>
    </div>

    <div className='grid grid-cols-4'>
    <Image alt="a" src="https://drive.google.com/uc?export=view&id=1AJO0tbQXHzkBMOXT1cYszIzfpPFppkaZ" width={300} height={300} />
    <Image alt="b" src="https://drive.google.com/uc?export=view&id=12iaHiTvMCUCnxSWlhSwbA5GZB_T8FoeD" width={300} height={300} />
    <Image alt="c" src="https://drive.google.com/uc?export=view&id=1X5yX6POpJrU1NUezaSF9ef4LVAtq4Oea" width={300} height={300} />
    <Image alt="d" src="https://drive.google.com/uc?export=view&id=1Y6uZ7bIAkdyl0Ng19fmO9L7KpXp1PSew" width={300} height={300} />
    </div>

    <div className='grid grid-cols-4'>
    <Image alt="e" src="https://drive.google.com/uc?export=view&id=1vrOUp9GUWrjJy662WdWTohuiGaMu_VGq" width={300} height={300} />
    <Image alt="f" src="https://drive.google.com/uc?export=view&id=1qUcwskXDdXnhpF0tRrCX7w3PllGXoh4E" width={300} height={300} />
    <Image alt="g" src="https://drive.google.com/uc?export=view&id=15LwBQQgIeOceppvorkMY6gufoCArZv3o" width={300} height={300} />
    <Image alt="h" src="https://drive.google.com/uc?export=view&id=1eYrSJnl-F1iZj-0tZ3yGoRpOBnyWlxDd" width={300} height={300} />
    </div>
    <div className="pt-8 text-center">
          <Button className="bg-orange-500 text-center">
          <Link href="/products">Learn More</Link>
          </Button>
          </div>
    </section>
  )
}

export default Companyservices