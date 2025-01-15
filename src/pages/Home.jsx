import React from "react";

const Home = () => {
  return (
    <div>
      <section className="section banner relative">
        <div className="container">
          <div className="row items-center">
            <div className="lg:col-6">
              <h1 className="banner-title text-[3rem] font-[700] leading-[55px]">
                Scale design & dev operations with Avocode Enterprise
              </h1>
              <p className="mt-6">
                A fully integrated suite of authentication & authoriz products,
                Stytch’s platform removes the headache of.
              </p>
              <a className="btn btn-white mt-8" href="#">
                Download The Theme
              </a>
            </div>
            <div className="lg:col-6">
              <img
                className="w-full object-contain"
                src="images/banner-img.png"
                width="603"
                height="396"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
          src="images/banner-shape.svg"
          alt=""
        />
      </section>
      <section className="section key-feature relative">
        <img
          className="absolute left-0 top-0 -z-[1] -translate-y-1/2"
          src="images/icons/feature-shape.svg"
          alt=""
        />
        <div className="container">
          <div className="row justify-between text-center lg:text-start">
            <div className="lg:col-5">
              <h2>The Highlighting Part Of Our Solution</h2>
            </div>
            <div className="mt-6 lg:col-5 lg:mt-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                egestas Werat viverra id et aliquet. vulputate egestas
                sollicitudin .
              </p>
            </div>
          </div>
          <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Live Caption</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-1.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Smart Reply</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-2.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Sound Amplifier</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-3.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Gesture Navigation</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-4.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Dark Theme</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-5.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Privacy Controls</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-6.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Location Controls</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-7.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Security Updates</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-8.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Focus Mode</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-9.svg"
                  alt=""
                />
              </span>
            </div>
            <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
              <div>
                <h3 className="h4 text-xl lg:text-2xl">Family Link</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <span className="icon mt-4">
                <img
                  className="objec-contain"
                  src="images/icons/feature-icon-10.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section services">
        <div className="container">
          <div
            className="tab row gx-5 items-center"
            data-tab-group="integration-tab"
          >
            <div className="lg:col-7 lg:order-2">
              <div className="tab-content" data-tab-content>
                <div className="tab-content-panel active" data-tab-panel="0">
                  <img
                    className="w-full object-contain"
                    src="images/sells-by-country.png"
                  />
                </div>
                <div className="tab-content-panel" data-tab-panel="1">
                  <img
                    className="w-full object-contain"
                    src="images/collaboration.png"
                  />
                </div>
                <div className="tab-content-panel" data-tab-panel="2">
                  <img
                    className="w-full object-contain"
                    src="images/sells-by-country.png"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
              <div className="text-container">
                <h2 className="lg:text-4xl">
                  Prevent failure from to impacting your reputation
                </h2>
                <p className="mt-4">
                  Our platform helps you build secure onboarding authentication
                  experiences that retain and engage your users. We build the
                  infrastructure, you can.
                </p>
                <ul className="tab-nav -ml-4 mt-8 border-b-0" data-tab-nav>
                  <li className="tab-nav-item active" data-tab="0">
                    <img className="mr-3" src="images/icons/drop.svg" alt="" />
                    Habit building essential choose habit
                  </li>
                  <li className="tab-nav-item" data-tab="1">
                    <img className="mr-3" src="images/icons/brain.svg" alt="" />
                    Get an overview of Habit Calendars.
                  </li>
                  <li className="tab-nav-item" data-tab="2">
                    <img className="mr-3" src="images/icons/timer.svg" alt="" />
                    Start building with Habitify platform
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row gx-5 mt-12 items-center lg:mt-0">
            <div className="lg:col-7">
              <div className="relative">
                <img
                  className="w-full object-contain"
                  src="images/collaboration.png"
                />
                <img
                  className="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
                  src="images/shape.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 lg:col-5 lg:mt-0">
              <div className="text-container">
                <h2 className="lg:text-4xl">
                  Accept payments any country in this whole universe
                </h2>
                <p className="mt-4">
                  Donec sollicitudin molestie malesda. Donec sollitudin molestie
                  malesuada. Mauris pellentesque nec, egestas non nisi. Cras
                  ultricies ligula sed
                </p>
                <ul className="mt-6 text-dark lg:-ml-4">
                  <li className="mb-2 flex items-center rounded px-4">
                    <img
                      className="mr-3"
                      src="images/icons/checkmark-circle.svg"
                      alt=""
                    />
                    Supporting more than 119 country world
                  </li>
                  <li className="mb-2 flex items-center rounded px-4">
                    <img
                      className="mr-3"
                      src="images/icons/checkmark-circle.svg"
                      alt=""
                    />
                    Open transaction with more than currencies
                  </li>
                  <li className="flex items-center rounded px-4">
                    <img
                      className="mr-3"
                      src="images/icons/checkmark-circle.svg"
                      alt=""
                    />
                    Customer Service with 79 languages
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row gx-5 mt-12 items-center lg:mt-0">
            <div className="lg:col-7 lg:order-2">
              <div className="video pb-5 pr-9">
                <div className="video-thumbnail overflow-hidden rounded-2xl">
                  <img
                    className="w-full object-contain"
                    src="images/intro-thumbnail.png"
                    alt=""
                  />
                  <button className="video-play-btn">
                    <img src="images/icons/play-icon.svg" alt="" />
                  </button>
                </div>
                <div className="video-player absolute left-0 top-0 z-10 hidden h-full w-full">
                  <iframe
                    className="h-full w-full"
                    allowFullScreen=""
                    src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
                  ></iframe>
                </div>
                <img
                  className="intro-shape absolute bottom-0 right-0 -z-[1]"
                  src="images/shape.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
              <div className="text-container">
                <h2 className="lg:text-4xl">
                  Accountability that works for you
                </h2>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  egestas Werat viverra id et aliquet. vulputate egestas
                  sollicitudin .
                </p>
                <button className="btn btn-white mt-6">know about us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="row justify-between">
            <div className="lg:col-6">
              <h2>Our customers have nice things to say about us</h2>
            </div>
            <div className="lg:col-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                egestas Werat viverra id et aliquet. vulputate egestas
                sollicitudin .
              </p>
            </div>
          </div>
          <div className="row mt-10">
            <div className="col-12">
              <div className="swiper reviews-carousel">
                <div className="swiper-wrapper md:flex gap-5">
                  <div className="swiper-slide">
                    <div className="review">
                      <div className="review-author-avatar bg-gradient">
                        <img src="images/users/user-5.png" alt="" />
                      </div>
                      <h4 className="mb-2">Courtney Henry</h4>
                      <p className="mb-4 text-[#666]">microsoft corp</p>
                      <p>
                        Our platform helps build secure onboarding authentica
                        experiences & engage your users. We build .
                      </p>
                      <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star-white.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review">
                      <div className="review-author-avatar bg-gradient">
                        <img src="images/users/user-2.png" alt="" />
                      </div>
                      <h4 className="mb-2">Ronald Richards</h4>
                      <p className="mb-4 text-[#666]">meta limited</p>
                      <p>
                        Our platform helps build secure onboarding authentica
                        experiences & engage your users. We build .
                      </p>
                      <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star-white.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review">
                      <div className="review-author-avatar bg-gradient">
                        <img src="images/users/user-6.png" alt="" />
                      </div>
                      <h4 className="mb-2">Bessie Cooper</h4>
                      <p className="mb-4 text-[#666]">apple inc ltd</p>
                      <p>
                        Our platform helps build secure onboarding authentica
                        experiences & engage your users. We build .
                      </p>
                      <div className="review-rating mt-6 flex items-center justify-center space-x-2.5">
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star.svg" alt="" />
                        <img src="images/icons/star-white.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination reviews-carousel-pagination !bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 xl:py-[120px]">
        <div className="container">
          <div className="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16">
            <div className="lg:col-11">
              <div className="row">
                <div className="lg:col-7">
                  <h2 className="h1 text-white">
                    Helping teams in the world with focus
                  </h2>
                  <a className="btn btn-white mt-8" href="#">
                    Download The Theme
                  </a>
                </div>
                <div className="mt-8 lg:col-5 lg:mt-0">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi egestas Werat viverra id et aliquet. vulputate egestas
                    sollicitudin .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
