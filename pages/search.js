import { format } from "date-fns";
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCarfd from "../components/InfoCarfd";
import Map from "../components/Map";

const Search = ({searchResults}) => {
    const router=useRouter();
    const {location,startDate,endDate,noOfGuests}=router.query;
    const formattedStartDate= format(new Date(startDate),"dd MMMM yy");
    const formattedEndtDate= format(new Date(endDate),"dd MMMM yy");
    const range=`${formattedStartDate}-${formattedEndtDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">

                
                    <p className="text-xs ">300 + stays {range} for {noOfGuests} Guests</p>
                    <h1 className="text-3xl font-semibold  mt-2 mb-6">Stays in {location}</h1>
                    <div className=" hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                        
                    </div>
                    <div className="flex flex-col">
                    {searchResults.map(({img,location,title,description,star,price,
                            total})=>(
                        <InfoCarfd 
                        key={star}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}

                        />
                    ))}
                    </div>
                   
                </section>

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map className="absolute top-0 bottom-0 w-100" searchResults={searchResults}/>
                </section>

            </main>
            <Footer />
            <div className="bg-gray-100 px-32 py-5">
                    <hr />
                    <h3>© 2021 Trigya Roy</h3>
            </div>
        </div>
    )
}

export default Search
export async function getServerSideProps(){
    const  searchResults= await  fetch("https://links.papareact.com/isz").then((res)=>res.json());

    return{
        props:{
            searchResults
        }
    }
}
