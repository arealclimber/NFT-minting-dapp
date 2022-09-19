const Button = ({ children, className, onClick, ...args }) => {
	return (
		<button
			className={`p-2 rounded-xl hover:ring-2 hover:ring-gray-400 ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
