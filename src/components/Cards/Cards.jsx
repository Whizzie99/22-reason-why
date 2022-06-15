import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import Container from '../shared/Container/Container';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { StyledWrapper } from './styles';

const Cards = () => {
	return (
		<StyledWrapper>
			<Container>
				<div className="cards-section">
					<Swiper modules={[EffectCards]} effect={'cards'} grabCursor={true}>
						<SwiperSlide>you're amazing!</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 5</SwiperSlide>
						<SwiperSlide>Slide 6</SwiperSlide>
						<SwiperSlide>Slide 7</SwiperSlide>
						<SwiperSlide>Slide 8</SwiperSlide>
						<SwiperSlide>Slide 9</SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</StyledWrapper>
	);
};

export default Cards;
