import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import img1 from '../public/img1.webp';
import img2 from '../public/img2.webp';
import img3 from '../public/img3.webp';
import img4 from '../public/img4.webp';

export default function Home({exploreData,cardsData}) {


  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        {/* <link rel="icon" href="/airbnb.png" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
       
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />


      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" > 
              {exploreData?.map(({img,location,distance})=>(
                <SmallCard key={location} img={img} location={location} distance={distance}/>
              ))}
          </div>

        </section>
          

        <LargeCard img={"https://links.papareact.com/4cj"}
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb"
          buttonText="Get Inspired"
          />

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({img,title})=>(
              <MediumCard key={img} img={img} title={title}/>
            ))}
          </div>
         
        </section>

        <section >
          <h2 className="text-4xl font-semibold py-8">Discover things to do</h2>
          <div className="flex justify-between  space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            
              <MediumCard  img={img2} title="Featured Collection"/>
              <MediumCard  img={img3} title="Online Experiences"/>
              <MediumCard  img={img4} title="Experiences"/>
           
          </div>
         
        </section>
          <div className="text-white">
            
          <LargeCard img={img1}
            title="Try Hosting"
            description="Earn extra income and unlock new  oppurtunities by sharing your space."
            // buttonText="Learn More"
            />   
          </div> 

       
      </main>
      <hr className="bg-gray-300"/>
      <Footer />
      <div className="bg-gray-100 px-32 py-5">
         <hr />
          <h2>© 2021 Trigya Roy</h2>
      </div>
      
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await fetch('https://jsonkeeper.com/b/ETBJ').then((res)=>res.json());
  const cardsData=await fetch('https://links.papareact.com/zp1').then((res)=>res.json());
  
  return{
    props:{
      exploreData,
      cardsData
      
    }
  }
}
