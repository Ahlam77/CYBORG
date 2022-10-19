import './LiveStreams.css'
import { useRef, useEffect, useState } from "react";
import {
  Card,
  SectionHeader,
  SectionWrapper,
  
} from "../../components/index";
import { MostPopular } from "../../sections/index.js";
import LiveStreamsData from '../../Data/LiveStreamsData'
import {motion} from 'framer-motion'

const LiveStreams = () => {
    
   const cards = LiveStreamsData.map((card) => {
     return (
       <Card
         key={card.id}
         image={card.image}
         title={card.title}
         category={card.category}
         rate={card.rate}
         download={card.download}
       />
     );
   });
const [width, setWidth] = useState(0);
const carousel = useRef();
useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
},[]);
  return (
    <>
      <div className="col-lg-4">
        <div className="top-downloaded">
          <div className="heading-section">
            <h4>
              <em>Top</em> Downloaded
            </h4>
          </div>
          <ul>
            <li>
              <img
                src="assets/images/game-01.jpg"
                alt=""
                className="templatemo-item"
              />
              <h4>Fortnite</h4>
              <h6>Sandbox</h6>
              <span>
                <i className="fa fa-star" ></i> 4.9
              </span>
              <span>
                <i className="fa fa-download" ></i> 2.2M
              </span>
              <div className="download">
                <a href="#/">
                  <i className="fa fa-download"></i>
                </a>
              </div>
            </li>
            <li>
              <img
                src="assets/images/game-02.jpg"
                alt=""
                className="templatemo-item"
              />
              <h4>CS-GO</h4>
              <h6>Legendary</h6>
              <span>
                <i className="fa fa-star" ></i> 4.9
              </span>
              <span>
                <i className="fa fa-download" ></i> 2.2M
              </span>
              <div className="download">
                <a href="#/">
                  <i className="fa fa-download"></i>
                </a>
              </div>
            </li>
            <li>
              <img
                src="assets/images/game-03.jpg"
                alt=""
                className="templatemo-item"
              />
              <h4>PugG</h4>
              <h6>Battle Royale</h6>
              <span>
                <i className="fa fa-star" ></i> 4.9
              </span>
              <span>
                <i className="fa fa-download" ></i> 2.2M
              </span>
              <div className="download">
                <a href="#/">
                  <i className="fa fa-download"></i>
                </a>
              </div>
            </li>
          </ul>
          <div className="text-button">
            <a href="profile.html">View All Games</a>
          </div>
        </div>
      </div>
      <SectionWrapper>
        <SectionHeader>Live Streams</SectionHeader>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            <div className="most-popular-items">{cards}</div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
      <MostPopular />
    </>
  );
};


export default LiveStreams