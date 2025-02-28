import React, { useEffect } from "react"
import "./main.scss"
import img from "../../assets/chinawall.jpg"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboardCheck } from "react-icons/hi"

import aos from "aos"
import "aos/dist/aos.css"
const Main = () => {
  const travelDestinations = [
    {
      id: 1,
      imgSrc: img,
      destTitle: "Great Wall of China",
      location: "China",
      grade: "Historical Adventure",
      fees: "$800",
      description:
        "A historic fortification known for its stunning views and rich history, stretching over 13,000 miles.",
    },
    {
      id: 2,
      imgSrc: "path/to/image2.jpg",
      destTitle: "Machu Picchu",
      location: "Peru",
      grade: "Cultural Relax",
      fees: "$600",
      description:
        "An ancient Incan city set high in the Andes Mountains, known for its sophisticated dry-stone construction.",
    },
    {
      id: 3,
      imgSrc: "path/to/image3.jpg",
      destTitle: "Eiffel Tower",
      location: "France",
      grade: "Romantic Getaway",
      fees: "$500",
      description:
        "Iconic symbol of Paris, offering breathtaking views of the city and a landmark of architectural beauty.",
    },
    {
      id: 4,
      imgSrc: "path/to/image4.jpg",
      destTitle: "Santorini",
      location: "Greece",
      grade: "Beach Leisure",
      fees: "$750",
      description:
        "A beautiful island famous for its white-washed buildings, stunning sunsets, and blue-domed churches.",
    },
    {
      id: 5,
      imgSrc: "path/to/image5.jpg",
      destTitle: "Grand Canyon",
      location: "USA",
      grade: "Adventure Nature",
      fees: "$400",
      description:
        "A massive canyon carved by the Colorado River, known for its layered red rock formations.",
    },
    {
      id: 6,
      imgSrc: "path/to/image6.jpg",
      destTitle: "Pyramids of Giza",
      location: "Egypt",
      grade: "Historical Wonder",
      fees: "$700",
      description:
        "Ancient pyramids built as tombs for pharaohs, one of the Seven Wonders of the Ancient World.",
    },
    {
      id: 7,
      imgSrc: "path/to/image7.jpg",
      destTitle: "Tokyo Tower",
      location: "Japan",
      grade: "City Exploration",
      fees: "$450",
      description:
        "A communication and observation tower in Tokyo, offering panoramic views of the city.",
    },
    {
      id: 8,
      imgSrc: "path/to/image8.jpg",
      destTitle: "Sydney Opera House",
      location: "Australia",
      grade: "Architectural Marvel",
      fees: "$550",
      description:
        "A multi-venue performing arts center known for its sail-like design, located on the Sydney Harbour.",
    },
    {
      id: 9,
      imgSrc: "path/to/image9.jpg",
      destTitle: "Victoria Falls",
      location: "Zambia/Zimbabwe",
      grade: "Natural Wonder",
      fees: "$650",
      description:
        "A stunning waterfall on the Zambezi River, known for its size and beautiful surroundings.",
    },
  ]

  useEffect(() => {
    aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="main container section">
      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="setContent grid">
        {travelDestinations.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Main
