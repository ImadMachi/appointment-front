import { Carousel } from 'react-carousel-minimal';
import React from 'preact/compat';

function Caroussel() {
 const data = [
    {
      image: "images/3959915.jpg",
      caption: "appointement"
    },
    {
      image: "images/TaeAugust11.jpg",
      caption: "all service"
    },
    {
      image: "images/3914478.jpg",
      caption: "Make your appointement"
    }
   
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2 className="my-3 text-blue">Make Your Appointement easely with US :</h2>
        
        <div style={{
          padding: "20px 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="99%"
            height="550px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              margin: "auto",
             
              
            }}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Caroussel;