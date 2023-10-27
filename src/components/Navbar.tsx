import Image from "next/image";

export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 w-full z-20">
			<nav className="bg-white border-gray-200 p-6">
				<div className="flex justify-between items-center h-full">
					<a
						href="https://flowbite.com"
						className="flex items-center"
					>
						<Image
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-12 w-12"
							height={150}
							width={150}
							alt="Branch Logo"
						/>
					</a>
					<div
						className="flex justify-between items-center w-auto order-1"
					>
						<ul className="flex font-medium">
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Nosotros
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Eventos
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Horarios
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Ministerios
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
								>
									Contáctanos
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
