"use client";

import Image from "next/image";

const HomeHero = () => {
	// const [locationText, setLocationText] = useState("");

	// useEffect(() => {
	// 	userLocationFetchFunction().then(({ data, isSuccess }) => {
	// 		setLocationText(
	// 			isSuccess ? `from ${data?.city}, ${data?.region}` : ``,
	// 		);
	// 	});
	// }, []);

	return (
		<section className="space-y-2">
			<p className="text-xl">
				Hey Visitor {"locationText"}
				<br />
				<span>I&lsquo;m Abhijit Saha</span>
			</p>

			<Image
				src={"/image.jpg"}
				alt="My image"
				width={250}
				height={200}
				className="rounded-xl"
			/>

			<p className="">
				A Kolkata based Fullstack Developer passionate about building
				responsive, visually stunning web applications. I specialize in
				React, Next.js, Tailwind CSS, and Shadcn UI to create seamless
				user experiences with clean, maintainable code.
			</p>
		</section>
	);
};

export default HomeHero;
