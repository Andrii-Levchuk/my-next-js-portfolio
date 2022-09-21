import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	Name: 'string'
	Email: 'string'
	Subject: 'string'
	Message: 'string'
}

type Props = {}

const ContactMe = (props: Props) => {
	const { register, handleSubmit } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:andriykolevchuk@gmail.com?subject=${formData.Subject}&body= Hi, My name is ${formData.Name}. ${formData.Message} (${formData.Email}) `
  }
	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact
			</h3>
			<div className='flex flex-col space-y-10'>
				<h4 className='text-4xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#f7ab0a] underline'>Lets Talk.</span>
				</h4>
				<div className='space-y-10'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>+48791072772</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>Andriykolevchuk@gmail.com</p>
					</div>
					<div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>Krakow</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-fit mx-auto'
				>
					<div className='flex space-x-2'>
						<input
							{...register('Name')}
							placeholder='Name'
							className='contactInput'
							type='text'
						/>
						<input
							{...register('Email')}
							placeholder='Email'
							className='contactInput'
							type='email'
						/>
					</div>
					<input
						{...register('Subject')}
						placeholder='Subject'
						className='contactInput'
						type='text'
					/>
					<textarea
						{...register('Message')}
						placeholder='Message'
						className='contactInput'
					/>

					<button
						type='submit'
						className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactMe
