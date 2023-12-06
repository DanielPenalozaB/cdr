'use client'

import { FacebookIcon, HandsIcon, YouTubeIcon } from '@/assets/svg'
import { Carousel, Navbar, Title } from '@/components'
import Image from 'next/image'

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
                <div className="flex w-full max-w-7xl items-center justify-between gap-11 rounded-2xl bg-church-800 p-11">
                    <div className="flex gap-8">
                        <HandsIcon className="h-32 w-32 text-white" />
                        <div className="flex flex-col gap-4 text-white">
                            <div className="flex flex-col text-3xl font-bold">
                                <span>¿Deseas que oremos por tí?</span>
                                <span>
                                    Permítenos orar por tu vida y tus
                                    necesidades
                                </span>
                            </div>
                            <p>
                                Solicita una petición de oración por el motivo
                                que desees. *Todos tus datos son privados*
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-lg bg-white px-4 py-2 text-base font-semibold text-church-800"
                    >
                        Enviar petición
                    </button>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-16 py-32">
                <Title value="Eventos" />
                <ul>
                    <li className="flex gap-8 rounded-2xl bg-white px-11 py-6 shadow-card">
                        <div className="flex flex-col items-center justify-center text-gray-700">
                            <span className="text-3xl font-bold">30</span>
                            <span className="text-2xl font-bold">JUL</span>
                        </div>
                        <div></div>
                        <div className="h-[150px] w-[150px] overflow-hidden rounded-xl bg-church-400">
                            <Image
                                src={'/family-reunion.png'}
                                alt="Culto familiar"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <h2 className="text-4xl font-semibold text-gray-700">
                                    Culto familiar
                                </h2>
                                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
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
                                className="rounded-md bg-church-800 px-4 py-2 font-medium text-white"
                            >
                                Ver más
                            </button>
                            <button
                                type="button"
                                className="rounded-md border-2 border-church-800 px-4 py-2 font-medium text-church-800"
                            >
                                Inscribirme
                            </button>
                        </div>
                    </li>
                    <li className="flex justify-end py-4">
                        <button
                            type="button"
                            className="rounded-lg p-1 text-base font-medium text-church-500 hover:text-church-400"
                        >
                            Ver más
                        </button>
                    </li>
                </ul>
            </section>
            <section className="flex flex-col items-center justify-center gap-16 bg-church-950 py-32">
                <Title value="Horarios" variant="light" />
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Miércoles
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Culto familiar
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            07:00 PM - 08:30 PM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestra reunión
                        </span>
                        <hr className="w-full border-2 border-gray-300" />
                        <span className="text-center text-2xl leading-7 text-gray-500">
                            Conéctate a la trasmisión en vivo
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Ver transmisión
                                <FacebookIcon className="h-4 w-4 fill-white" />
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-4 py-2 text-white hover:bg-[#ff4848]"
                            >
                                Ver transmisión
                                <YouTubeIcon className="h-5 w-5 fill-white" />
                            </button>
                        </div>
                    </div>
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Viernes
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Ayuno
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            09:00 AM - 12:00 PM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestros ayunos semanales
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Inscribirme
                            </button>
                        </div>
                    </div>
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Domingo
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Culto familiar
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            08:00 AM - 09:30 AM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestra reunión
                        </span>
                        <hr className="w-full border-2 border-gray-300" />
                        <span className="text-center text-2xl leading-7 text-gray-500">
                            Conéctate a la trasmisión en vivo
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Ver transmisión
                                <FacebookIcon className="h-4 w-4 fill-white" />
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-4 py-2 text-white hover:bg-[#ff4848]"
                            >
                                Ver transmisión
                                <YouTubeIcon className="h-5 w-5 fill-white" />
                            </button>
                        </div>
                    </div>
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Miércoles
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Culto familiar
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            07:00 PM - 8:30 PM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestra reunión
                        </span>
                        <hr className="w-full border-2 border-gray-300" />
                        <span className="text-center text-2xl leading-7 text-gray-500">
                            Conéctate a la trasmisión en vivo
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Ver transmisión
                                <FacebookIcon className="h-4 w-4 fill-white" />
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-4 py-2 text-white hover:bg-[#ff4848]"
                            >
                                Ver transmisión
                                <YouTubeIcon className="h-5 w-5 fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-16 bg-white py-32">
                <Title value="Peticiones"/>
                <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Miércoles
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Culto familiar
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            07:00 PM - 08:30 PM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestra reunión
                        </span>
                        <hr className="w-full border-2 border-gray-300" />
                        <span className="text-center text-2xl leading-7 text-gray-500">
                            Conéctate a la trasmisión en vivo
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Ver transmisión
                                <FacebookIcon className="h-4 w-4 fill-white" />
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-4 py-2 text-white hover:bg-[#ff4848]"
                            >
                                Ver transmisión
                                <YouTubeIcon className="h-5 w-5 fill-white" />
                            </button>
                        </div>
                    </div>
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-church-800 p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Viernes
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Ayuno
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            09:00 AM - 12:00 PM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestros ayunos semanales
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Inscribirme
                            </button>
                        </div>
                    </div>
                    <div className="flex h-min w-[300px] flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-card 2xl:w-[350px]">
                        <span className="text-2xl uppercase text-gray-500">
                            Domingo
                        </span>
                        <span className="text-2xl font-semibold text-gray-700">
                            Culto familiar
                        </span>
                        <span className="text-xl font-semibold text-gray-500">
                            08:00 AM - 09:30 AM
                        </span>
                        <span className="text-center text-xl text-gray-500">
                            Asiste a nuestra reunión
                        </span>
                        <hr className="w-full border-2 border-gray-300" />
                        <span className="text-center text-2xl leading-7 text-gray-500">
                            Conéctate a la trasmisión en vivo
                        </span>
                        <div className="flex w-full flex-col gap-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-church-800 px-4 py-2 text-white hover:bg-church-700"
                            >
                                Ver transmisión
                                <FacebookIcon className="h-4 w-4 fill-white" />
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF0000] px-4 py-2 text-white hover:bg-[#ff4848]"
                            >
                                Ver transmisión
                                <YouTubeIcon className="h-5 w-5 fill-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
