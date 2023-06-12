import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax'
import ProductCard from "@/components/clothes/product-card";

export default function SimpleSlider() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation,  A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            parallax={true}
        >
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard/>
            </SwiperSlide>
        </Swiper>
    );
}