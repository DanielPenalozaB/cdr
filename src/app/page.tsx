"use client";

import { HandsIcon } from "@/assets/svg";
import { Carousel, Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Navbar />
			<Carousel>
				<Carousel.Item>Item #1</Carousel.Item>
				<Carousel.Item>Item #2</Carousel.Item>
				<Carousel.Item>Item #3</Carousel.Item>
			</Carousel>
			<section className="flex items-center justify-center py-8">
				<div className="flex items-center justify-between gap-11 p-11 bg-icc w-full max-w-7xl rounded-2xl">
					<div className="flex items-center justify-center h-40 min-w-[10rem]">
						<HandsIcon className="h-40 w-auto fill-white" />
					</div>
					<div className="flex flex-col gap-4 w-full text-white">
						<div className="flex flex-col text-3xl font-bold">
							<span>¿Deseas que oremos por tí?</span>
							<span>
								Permítenos orar por tu vida y tus necesidades
							</span>
						</div>
						<p>
							Solicita una petición de oración por el motivo que
							desees. *Todos tus datos son privados*
						</p>
					</div>
					<button
						type="button"
						className="py-2 px-4 bg-white text-base text-icc font-semibold rounded-lg whitespace-nowrap"
					>
						Enviar petición
					</button>
				</div>
			</section>
			<section className="flex flex-col gap-10 items-center justify-center py-8">
				<div className="relative flex items-center justify-center">
					<h1 className="text-4xl text-gray-800 font-bold border-b-4 border-icc z-10">
						Eventos
					</h1>
					<span className="absolute text-8xl font-bold text-icc text-opacity-20 uppercase z-0 select-none">
						Eventos
					</span>
				</div>
				<ul>
					<li className="flex gap-6 py-6 px-11 bg-white rounded-2xl shadow-md">
						<div className="flex flex-col items-center justify-center text-gray-700 font-semibold">
							<span className="text-4xl">30</span>
							<span className="text-2xl">JUL</span>
						</div>
						<div className="flex h-[150px] w-[2px] bg-gray-300" />
						<div className="flex items-center justify-center h-[150px] min-w-[150px] bg-gray-400 text-gray-600 rounded-lg">
							Image
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-4">
								<h2 className="text-gray-700 text-4xl font-semibold">
									Culto familiar
								</h2>
								<div className="h-2 w-2 bg-gray-400 rounded-full"></div>
								<span className="text-base text-gray-400">
									8:00 AM
								</span>
							</div>
							<p className="text-gray-500">
								Asiste a una reunión llena del espíritu de Dios
								y palabra para tu vida.
							</p>
						</div>
						<div className="flex flex-col justify-center gap-6">
							<button
								type="button"
								className="py-2 px-4 rounded-md bg-icc text-white font-medium"
							>
								Ver más
							</button>
							<button
								type="button"
								className="py-2 px-4 rounded-md border-2 border-icc text-icc font-medium"
							>
								Inscribirme
							</button>
						</div>
					</li>
					<li className="flex justify-end pt-4 w-full">
						<Link
							href="/events"
							className="text-blue-500 hover:text-blue-400"
						>
							Ver más
						</Link>
					</li>
				</ul>
			</section>
			<section className="flex flex-col gap-10 items-center justify-center py-8 bg-icc">
				<div className="relative flex items-center justify-center">
					<h1 className="text-4xl text-white font-bold border-b-4 border-white z-10">
						Horarios
					</h1>
					<span className="absolute text-8xl font-bold text-white text-opacity-20 uppercase z-0 select-none">
						Horarios
					</span>
				</div>
				<div>
					<div className="flex flex-col gap-4 px-11 py-8 bg-white rounded-2xl">
						<div className="flex flex-col gap-4">
							<span className="text-gray-500 text-4xl font-medium">
								Miércoles
							</span>
							<span className="text-gray-700 text-4xl font-semibold">
								Culto familiar
							</span>
							<span className="text-gray-500 text-2xl font-semibold">
								07:00 AM - 8:30 AM
							</span>
						</div>
						<span className="text-gray-500 text-2xl">
							Asiste a nuestra reunión
						</span>
						<div className="h-0.5 w-full bg-gray-300"></div>
						<span className="text-gray-500 text-2xl">
							Conéctate la transmisión en vivo
						</span>
						<div className="flex flex-col gap-2 w-full">
							<button
								type="button"
								className="px-4 py-2 bg-icc text-white text-base rounded-md"
							>
								Ver transmisión
							</button>
							<button
								type="button"
								className="px-4 py-2 bg-red-500 text-white text-base rounded-md"
							>
								Ver transmisión
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-10 items-center justify-center py-8">
				<div className="relative flex items-center justify-center">
					<h1 className="text-4xl text-gray-800 font-bold border-b-4 border-icc z-10">
						Peticiones
					</h1>
					<span className="absolute text-8xl font-bold text-icc text-opacity-20 uppercase z-0 select-none">
						Peticiones
					</span>
				</div>
				<div className="flex flex-wrap gap-6">
					<div className="flex flex-col gap-4 px-11 py-8 min-w-[25rem] w-min bg-white rounded-2xl border-4 border-gray-300 text-gray-700 ">
						<div className="flex flex-col gap-4">
							<HandsIcon className="h-20 w-auto fill-gray-500" />
						</div>
						<span className="text-2xl font-bold">
							¿Deseas que oremos por tí?
						</span>
						<span className="text-lg font-semibold">
							Permítenos orar por tu vida
						</span>
						<span className="text-lg">
							Solicita una petición de oración por el motivo que
							desees y permíte que la voluntad de Dios obre en tú
							vida.
						</span>
						<button type="button" className="px-4 py-2 text-white bg-icc rounded-lg">Enviar petición</button>
					</div>
					<div className="flex flex-col gap-4 px-11 py-8 min-w-[25rem] w-min bg-icc rounded-2xl text-white">
						<div className="flex flex-col gap-4">
							<HandsIcon className="h-20 w-auto fill-white" />
						</div>
						<span className="text-2xl font-bold">
							¡Apoya nuestra fundación!
						</span>
						<span className="text-lg font-semibold">
							Permítenos orar por tu vida
						</span>
						<span className="text-lg">
							Solicita una petición de oración por el motivo que
							desees y permíte que la voluntad de Dios obre en tú
							vida.
						</span>
						<button type="button" className="px-4 py-2 text-white bg-icc rounded-lg">Enviar petición</button>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-10 items-center justify-center py-8">
				<div className="relative flex items-center justify-center">
					<h1 className="text-4xl text-gray-800 font-bold border-b-4 border-icc z-10">
						Galería
					</h1>
					<span className="absolute text-8xl font-bold text-icc text-opacity-20 uppercase z-0 select-none">
						Galería
					</span>
				</div>
				<div className="grid grid-cols-4 gap-4 px-10 w-full">
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
					<div className="p-4 h-36 w-full rounded-lg shadow-lg bg-gray-500 hover:scale-105 duration-150 cursor-pointer"></div>
				</div>
			</section>
			<footer className="flex items-center justify-between p-10 bg-icc text-white">
				<div className="h-20 w-20 bg-white rounded-full"></div>
				<div>
					<ul className="flex flex-col gap-4">
						<li className="hover:text-gray-300 hover:underline cursor-pointer">
							Inicio
						</li>
						<li className="hover:text-gray-300 hover:underline cursor-pointer">
							¿Quiénes somos?
						</li>
						<li className="hover:text-gray-300 hover:underline cursor-pointer">
							Sedes
						</li>
						<li className="hover:text-gray-300 hover:underline cursor-pointer">
							Ministerios
						</li>
						<li className="hover:text-gray-300 hover:underline cursor-pointer">
							Contáctanos
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-4">
						<li className="flex gap-2">
							<span className="font-semibold">Celular:</span>
							<span>315 660 7008</span>
						</li>
						<li className="flex gap-2">
							<span className="font-semibold">Teléfono:</span>
							<span>602 436 1501</span>
						</li>
						<li className="flex gap-2">
							<span className="font-semibold">Email:</span>
							<span>icccasaderestauracion@gmail.com</span>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex gap-4">
						<li className="h-10 w-10 bg-white rounded-md"></li>
						<li className="h-10 w-10 bg-white rounded-md"></li>
					</ul>
				</div>
			</footer>
		</>
	);
}
