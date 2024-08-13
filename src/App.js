import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavSub1, NavSub2,NavSub3 ,NavSub4 ,NavSub5  } from "./comp.js";  // NavSup1과 NavSup2를 NavSub1과 NavSub2로 수정
import { useState } from "react";

// ---------------------------내용
import { Main, CollectionSlide, Best, Tv, Tv1, Tv2, Focus } from './component.js';
import { m, right, best, tv, tv1, tv2, focus1 } from './Data.js';



//부트스트랩

import 'bootstrap/dist/css/bootstrap.min.css';
//main swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const [list, setList] = useState(false);
  const [list2, setList2] = useState(false);
  const [list3, setList3] = useState(false);
  const [list4, setList4] = useState(false);
  const [list5, setList5] = useState(false);
  return (
    <div className="App">
      <header id="header">
        <div className='header-top'>
          <h1 className='logo'></h1>
          <ul className='header-icon'>
            <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i></a></li>
            <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
            <li><a href="#"><i className="fa-regular fa-user"></i></a></li>
          </ul>
        </div>
        <div className='header-down'>
          <ul className='main-nav'>
            <li onMouseOver={() => { setList(true) }} onMouseOut={() => { setList(false) }}><a href="#">MEN</a>
            {list && <NavSub1 />}
            </li>
            <li onMouseOver={() => { setList2(true) }} onMouseOut={() => { setList2(false) }}><a href="#">WOMEN</a>
            {list2 && <NavSub2 />}
            </li>
            <li onMouseOver={() => { setList3(true) }} onMouseOut={() => { setList3(false) }}><a href="#">SHOES</a>
            {list3 && <NavSub3 />}
            </li>
            <li onMouseOver={() => { setList4(true) }} onMouseOut={() => { setList4(false) }}><a href="#">ACC</a>
            
            {list4 && <NavSub4 />}</li>
            <li onMouseOver={() => { setList5(true) }} onMouseOut={() => { setList5(false) }}><a href="#">KIDS</a>
            
            {list5 && <NavSub5 />}</li>

            
            <li onMouseOver={() => { setList5(true) }} onMouseOut={() => { setList5(false) }}>
            <span style={{color:"gray",position:'relative',
          left:"-23px"}}>ㅣ</span>
              <a href="#" className='boldx'>
            
              OUTLET</a>
            
            {list5 && <NavSub5 />}</li>
            <li><a href="#" className='boldx'>PROMOTION</a></li>
            <li><a href="#" className='boldx'>LANCHES</a></li>
            <li onMouseOver={() => { setList5(true) }} onMouseOut={() => { setList5(false) }}><a href="#" className='boldx'>ON VACATION</a>
            
            {list5 && <NavSub5 />}</li>
            <li onMouseOver={() => { setList5(true) }} onMouseOut={() => { setList5(false) }}><a href="#" className='boldx'>TREND</a>
            
            {list5 && <NavSub5 />}</li>
          </ul>
        </div>
      </header>


      <div class="mainWrap">
        <div className="main_slide">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              m.map((a, i) => {
                return (
                  <SwiperSlide className="slide">
                    <Main m={m} i={i}></Main>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
      </div>




{/*컬렉션  */}
<section className="collectionWrap">
        <div className="c_left">
          <h3>COLLECTION</h3>
          <h2>지금 떠나는 바캉스</h2>
          <div className="left_img"><img src={`${process.env.PUBLIC_URL}/images/c_left.jpg`} alt="Description of image" /></div>
        </div>

        <div className="c_right">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            // autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              right.map((a, i) => {
                return (
                  <SwiperSlide className="slide1">
                    <CollectionSlide right={right} i={i}></CollectionSlide>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>

      </section>


{/* 베스트 아이템 */}
<section className="bestWrap">

<div className="besttxt">
  <h3>BEST ITEM</h3>
  <h2>가장 사랑받는 베스트 아이템</h2>
</div>

<div className="nav">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">ALL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">MEN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">WOMEN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">SHOES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">ACC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">KIDS</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
<div className="best">
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={5}
    // autoplay={true}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {
      best.map((a, i) => {
        return (
          <SwiperSlide className="best">
            <Best best={best} i={i}></Best>
          </SwiperSlide>
        )
      })
    }

  </Swiper>
</div>

<div className="btn">
  <button><a href='#'>전체보기</a></button>
</div>
</section>

{/* 배너 */}
      <section className="banner">
        <div className="bannerimg"></div>
        <p>탁월한 내구성에 편안한 착용감까지</p>
        <p>24FW LIBERTY & CRUST SERIES</p>
        <p>일상에서도 활용도 높은 아웃도어 가방</p>
      </section>

      <section className="tv">

        <div className="tvtxt">
          <h3>DISCOVERY TV</h3>
          <h2>즐거움으로 가득한 세상</h2>
        </div>

        <div className="tv_img">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={-100}
            slidesPerView={6}
            // autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              tv.map((a, i) => {
                return (
                  <SwiperSlide className="tv_slide">
                    <Tv tv={tv} i={i}></Tv>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
        <div className="tv_img1">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={-100}
            slidesPerView={6}
            // autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              tv1.map((a, i) => {
                return (
                  <SwiperSlide className="tv1_slide">
                    <Tv1 tv1={tv1} i={i}></Tv1>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
        <div className="tv_img2">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={-100}
            slidesPerView={6}
            // autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              tv2.map((a, i) => {
                return (
                  <SwiperSlide className="tv2_slide">
                    <Tv2 tv2={tv2} i={i}></Tv2>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
      </section>

{/* 포커스 */}
<section className="focus">
        <div className="focustxt">
          <h3>FOCUS ON</h3>
          <h2>주목할 만한 스타일</h2>
        </div>


        <div className="focus_on">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            // autoplay={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {
              focus1.map((a, i) => {
                return (
                  <SwiperSlide className="focus_slide">
                    <Focus focus1={focus1} i={i}></Focus>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
      </section>


{/* footer */}
<footer id="footer">
  <div className='footer-top'>
<ul className='footer-top-text'>
    <li><a href="#">ABOUT DISCOVERY</a></li>
    <li><a href="#">공지사항</a></li>
    <li><a href="#">고객센터</a></li>
    <li><a href="#">매장안내</a></li>
    <li><a href="#">멤버십 혜택</a></li>
</ul>
<ul className='footer-top-icon'>
  <li><a href="#"><img src="img/chanel-4.png"/></a></li>
  <li><a href="#"><img src="img/chanel-3.png"/></a></li>
  <li><a href="#"><img src="img/chanel-2-noname.png"/><span><img src="img/chanel-2-kids.png"/></span></a></li>
  <li><a href="#"><img src="img/chanel-1.png"/></a></li>
</ul>
  </div>
<div className='footer-down'>
  <div className='down-01'>
    <p>(주) 에프앤에프 사업자 정보 <i class="fa-solid fa-chevron-down"></i></p>
    <span>FAMILY SITE <i class="fa-solid fa-chevron-down"></i></span>
    <span>KOREAN <i class="fa-solid fa-chevron-down"></i></span>
  </div>
  <div className='down-02'>
    <p>이용약관 <b>개인정보정리방침</b></p>
    <span><img src="img/footer-store.png"style={{width:"90px"}}/></span>
    <span><img src="img/footer-google.png" style={{width:"90px"}}/></span>
  </div>
  <div className='copyright'>
    <p>Copyright &copy; Corp. All Rights Reserved.</p>
 <span><img src="img/footer-sgi.png"  style={{width:"120px"}}/></span>
 <span><img src="img/footer-icon.png" style={{width:"46px"}}/></span>
 <div className='copyrightBox'>
  <p>[인증범위]에프엔에프 온라인 쇼핑몰 서비스 운영</p>
<span>[유효기간]2024.08.08 ~ 2024.08.09</span>
</div>
</div>
</div>
</footer>
    </div>

  );
}

export default App;
