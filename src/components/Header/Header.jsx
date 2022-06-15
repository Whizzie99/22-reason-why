import Container from '../shared/Container/Container';
import { StyledWrapper } from './styles';

const Header = () => {
	return (
		<StyledWrapper>
			<Container>
				<div className="main-header-section">
					<h1>
						22 reasons <br /> why
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
						excepturi!
					</p>
				</div>
			</Container>
		</StyledWrapper>
	);
};

export default Header;
