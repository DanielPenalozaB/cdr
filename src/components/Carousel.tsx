"use client";

import useSwipe from "@/hooks/useSwipe";
import React, { useEffect, useState } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const swipeHandlers = useSwipe({
		onSwipedLeft: () => updateIndex(currentIndex + 1),
		onSwipedRight: () => updateIndex(currentIndex - 1),
		onSwipedUp: () => console.log(),
		onSwipedDown: () => console.log(),
	});

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setCurrentIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(currentIndex + 1);
			}
		}, 5000);

		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	return (
		<section
			id="carousel"
			className="overflow-hidden"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				id="inner"
				className="whitespace-nowrap transition-transform"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				{...swipeHandlers}
			>
				{React.Children.map(children, (child, index) => child)}
			</div>
			<div className="flex items-center justify-center gap-4 pt-2">
				<button
					type="button"
					className="py-2 px-2.5 bg-white hover:bg-gray-200 border border-gray-500 rounded-md"
					onClick={() => updateIndex(currentIndex - 1)}
				>
					Prev
				</button>
				{React.Children.map(children, (child, index) => (
					<button
						type="button"
						className={`py-2 px-2.5 ${
							index === currentIndex
								? "bg-indigo-500 hover:bg-indigo-400 text-white"
								: "bg-white hover:bg-gray-200"
						} border border-gray-500 rounded-md`}
						onClick={() => updateIndex(index)}
					>
						{index + 1}
					</button>
				))}
				<button
					type="button"
					className="py-2 px-2.5 bg-white hover:bg-gray-200 border border-gray-500 rounded-md"
					onClick={() => updateIndex(currentIndex + 1)}
				>
					Next
				</button>
			</div>
		</section>
	);
}

Carousel.Item = function CarouselItem({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="inline-flex items-center justify-center h-[200px] w-full bg-indigo-700 text-white select-none">
			{children}
		</div>
	);
};
