/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa6'
import { Button } from '../Elements/Button'

export const CardMenu = ({ children }) => {
	return (
		<div className='border shadow-md rounded-2xl p-5 snap-start snap-always group transition-all duration-300 lg:hover:bg-gray-100'>
			{children}
		</div>
	)
}
export const Header = ({ image, stars }) => {
	return (
		<div className='rounded-t-lg overflow-hidden relative w-[300px] lg:w-[inherit]'>
			<img
				className='w-full group-hover:scale-105 transition-all duration-300'
				src={image}
				alt='Menu Kami'
			/>
			<div className='absolute top-3 left-3'>
				<div className='px-4 py-2 flex items-center gap-2 bg-pink rounded-3xl'>
					<FaStar className='fill-yellow-300' />
					<p className='text-white text-sm font-semibold'>{stars}</p>
				</div>
			</div>
		</div>
	)
}
export const Body = ({ name, children }) => {
	return (
		<>
			<h5 className='font-semibold pt-5'>{name}</h5>
			<p className='py-3 whitespace-normal'>{children}</p>
		</>
	)
}
export const Footer = ({ price, onOrderClick }) => {
	return (
	  // eslint-disable-next-line no-mixed-spaces-and-tabs
	  <div className='flex items-center justify-between pt-3'>
		<p className='font-bold'>{price}</p>
		<div className='flex gap-2 items-center'>
		  <Button variant='bg-pink text-white' onClick={onOrderClick}>
			Order
		  </Button>
		</div>
	  </div>
	);
  };
  

CardMenu.Header = Header
CardMenu.Body = Body
CardMenu.Footer = Footer
