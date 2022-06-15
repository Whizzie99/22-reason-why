import Container from '../shared/Container/Container';
import { StyledWrapper } from './styles';

const Header = () => {
	return (
		<StyledWrapper>
			<Container>
				<div className="main-header-section">
					<h1 data-aos="fade-down" data-aos-duration="1100">
						22 reasons <br /> why
					</h1>
					<p>hey babe!..This is me letting you know how special you are!</p>
				</div>
			</Container>
		</StyledWrapper>
	);
};

export default Header;
