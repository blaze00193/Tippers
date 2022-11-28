// importing styled from styled components
import styled from 'styled-components';

// header-container styling
export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

// connect wallet items and header styles
export const connectButtonDropdown = styled.div`
 position : relative
`

// button styling
export const ConnectButton = styled.button`
	width: 223px;
	height: 62px;
	border: 1px solid #ffffff;
	border-radius: 6px;
	color: white;
	background: transparent;
	font-family: ${({ theme }) => theme.fonts.Inter};
	font-weight: 700;
	font-size: 13px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.4s ease-in-out;
	gap: 0.8rem;
	&:hover {
		background: white;
		color: #4a24aa;
	}
	@media (max-width: 576.98px) {
		width: 148px;
		height: 41.15px;
		font-size: 8.6278px;
	}
`;

// text logo styling
export const TextLogo = styled.a`
	gap: 1rem;
	display: flex;
	@media (max-width: 576.98px) {
		display: none;
	}
`;

// svg logo styling
export const SVGLogo = styled.a`
	@media (min-width: 576.98px) {
		display: none;
	}
`;
