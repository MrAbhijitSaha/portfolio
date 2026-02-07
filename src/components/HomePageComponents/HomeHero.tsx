"use client";

import { userLocationFetchFunction } from "@/lib/fetchApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomeHero = () => {
	const [locationText, setLocationText] = useState("");

	useEffect(() => {
		userLocationFetchFunction().then(({ data, isSuccess }) => {
			setLocationText(
				isSuccess ? `from ${data?.city}, ${data?.region}` : ``,
			);
		});
	}, []);

	return (
		<section className="grid space-y-2 md:grid-cols-3">
			<p className="text-sm">
				Hey Visitor {locationText}
				<br />
				I&lsquo;m <span className="text-primary">Abhijit Saha</span>
			</p>

			<Image
				src={"/me.png"}
				alt="My image"
				width={1080}
				height={720}
				className="col-end-2 h-auto w-auto rounded-xl"
			/>
			<div className="">
				<p className="">
					A <span className="text-primary">Kolkata</span> based
					Fullstack Developer passionate about building responsive,
					visually stunning web applications.
				</p>
			</div>
		</section>
	);
};

export default HomeHero;
