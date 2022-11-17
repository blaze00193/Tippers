export const FlagIcon = ({
	size = '24',
	className
}: {
	size?: string;
	className?: string;
}): JSX.Element => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			stroke="red"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
			<line x1="4" y1="22" x2="4" y2="15"></line>
		</svg>
	);
};
