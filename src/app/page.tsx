import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="h-screen w-full bg-gray-200">Slideshow</div>
			<section>
				<div>
					<div>Add</div>
				</div>
			</section>
		</>
	);
}
