import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { EventItem } from "@/lib/constants";
import { cacheLife } from "next/cache";
// import events from "@/lib/constants"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const page = async() => {
  "use cache"
  cacheLife("hours");
  const response = await fetch(`${BASE_URL}/api/events`);
  const {events} = await response.json();
  

  return (
   <section>
    <h1 className="text-center text-[40px]">The Hub For Every Dev  Event You Can&apos;t Miss</h1>
    <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

    <ExploreBtn/>

      <div className="mt-5 space-y-7">

        <h3>Featured Events</h3>

        {events && events.length > 0 &&<ul className="events list-none" >
          {events.map((event:EventItem)=>(
            <li key={event._id}><EventCard {...event}/></li>
          ))}
        </ul>}

    </div>
   </section>
  )
}

export default page
