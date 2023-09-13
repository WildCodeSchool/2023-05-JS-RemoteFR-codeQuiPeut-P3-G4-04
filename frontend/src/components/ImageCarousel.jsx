import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./ImageCarousel.module.css"

const ImageCarousel = ({ images }) => {
  const [selectedSlide, setSelectedSlide] = useState(0)

  const handleSlideChange = (index) => {
    setSelectedSlide(index)
  }

  return (
    <div className={styles["carousel-container"]}>
      <Carousel
        selectedItem={selectedSlide}
        onChange={handleSlideChange}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index} className={styles["carousel-card"]}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel

// eslint-disable-next-line no-lone-blocks
{
  /* import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "./ImageCarousel.module.css"

const ImageCarousel = ({ images }) => {
  const [selectedSlide, setSelectedSlide] = useState(0)

  const handleSlideChange = (index) => {
    setSelectedSlide(index)
  }

  return (
    <div className={styles["carousel-container"]}>
      <Carousel
        selectedItem={selectedSlide}
        onChange={handleSlideChange}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index} className={styles["carousel-card"]}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
*/
}
