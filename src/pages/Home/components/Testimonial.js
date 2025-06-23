import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

export const Testimonial = ({ourClients, imageUrl}) => {
  return (
    <div>
      <div className="home-review-section py-5">
                <div className="dfvghhgfdvggyre container text-center pb-5">
                  <span>Full Service Digital Agency</span>
                  <h2 className="mt-2">
                    Our <span>Clients</span>
                  </h2>
                  <p>
                    Our clients are not just clients, they are out partners. We truly{" "}
                    <br /> believe in collaboration to make brands grow.
                  </p>
                </div>
                <div className="portfolio-slider">
                  <div className="sliderdsfrr">
                    <div className="swiper people__slide">
                      <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={false}
                        observer={true}
                        observeParents={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                      >

                        {ourClients.map((ourClient, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="people__card">
                              <div className="people__info">
                                <ul className="people__social">
                                  <li>
                                    <a href="/">
                                      <i className="fa-solid fa-globe" />
                                    </a>
                                  </li>
                                </ul>
                                <h3 className="people__name d-flex align-items-center">
                                  <div className="people__image">
                                    {ourClient?.image && (
                                        <img
                                        src={`${imageUrl}/${ourClient.image}`}
                                        alt=""
                                        />
                                    )}
                                  </div>
                                  {ourClient.name}
                                </h3>
                                <p className="people__position">
                                  {ourClient.designation}
                                </p>
                                <p className="people__desc">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: ourClient?.description && (ourClient.description),
                                        }}
                                    />
                                </p>
                              </div>
                              <div className="people__btn">
                                <a href="/">Contact Us</a>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
