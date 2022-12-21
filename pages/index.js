import Link from 'next/link';
import Image from 'next/image';
import mypic from '../assets/pipit.png';
import Navbar from '../component/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    <section className='section'>
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">Halo, Saya Pitri Indrayani</h1>
          <p className="desc">Saya Seorang Frontend Developer, Graphic Designer, UI Designer, dan Photogpher.</p>

          <Link href="/contact" className='contact'>Kontak</Link>
        </div>

        <div className="img-wrapper">
          <Image src={mypic} alt='pipit' priority className='img-pit'/>
        </div>
      </div>
    </section>
    </>

     
  )
}