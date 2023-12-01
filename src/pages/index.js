// Importez les composants nécessaires
import Title from '@/components/Title';
import Image from 'next/image';
import React,{useState,useEffect} from 'react';

function Maintenance() {
    const [logo, setLogo] = useState('/logo/TeramaFlixpic.png')
    useEffect(() => {
        const fetchLogos = async () => {
          try {
              const resp = await fetch('/logo/TeramaFlixpic.png');
              const blob = await resp.blob();
              setLogo(URL.createObjectURL(blob))
          } catch (error) {
            console.error('Error fetching video:', error);
          }
        };
        fetchLogos()
      }, [])
  return (
    <>
      <Title title="Maintenance" />
      <div className="bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500 text-white h-screen flex items-center justify-center">
        <div className="text-center p-8 rounded-md bg-white shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Image src={logo} alt="Tools Icon" width={100} height={100} className="mr-2 h-14 w-14" />
            <h1 className="text-6xl font-bold text-purple-800">Maintenance</h1>
          </div>
          <p className="text-lg mt-4 text-black">Sorry, we're currently undergoing maintenance. Please check back later.</p>
        </div>
      </div>
    </>
  );
}

export default Maintenance;