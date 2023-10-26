"use client";

import { Carousel, Navbar } from "@/components";

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
					<div className="flex flex-col gap-4 text-white">
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
						className="py-2 px-4 bg-white text-base text-icc font-semibold rounded-lg"
					>
						Enviar petición
					</button>
				</div>
			</section>
			<section className="flex flex-col gap-10 items-center justify-center py-8">
				<div className="relative flex items-center justify-center">
					<h1 className="text-4xl text-gray-800 font-bold border-b-4 border-icc">
						Eventos
					</h1>
					<span className="absolute text-8xl font-bold text-icc text-opacity-20 uppercase">
						Eventos
					</span>
				</div>
				<ul>
					<li className="flex gap-8 py-6 px-11 bg-white rounded-2xl shadow-md">
						<div>
							<span>30</span>
							<span>JUL</span>
						</div>
						<div></div>
						<div>Image</div>
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
						<div className="flex flex-col justify-between gap-6">
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
				</ul>
			</section>
		</>
	);
}
