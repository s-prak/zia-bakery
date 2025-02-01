/* eslint-disable react/prop-types */
export const Button = ({ variant, children, onClick }) => {
	return (
		<button
			className={`${variant} flex items-center gap-2 font-semibold py-3 px-5 rounded-lg group active:scale-[97%]`}
			onClick={onClick}>
			{children}
		</button>
	)
}
