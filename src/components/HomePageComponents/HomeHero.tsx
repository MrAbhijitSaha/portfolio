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
		<section className="grid gap-6 space-y-2 md:grid-cols-3">
			<div className="space-y-2 text-sm">
				<h1 className="">Hey Visitor {locationText}</h1>

				<p>
					I&lsquo;m <span className="text-primary">Abhijit Saha</span>
				</p>
			</div>

			<Image
				src={"/me.png"}
				alt="My image"
				width={1080}
				height={720}
				className="col-end-2 h-auto w-auto rounded-xl"
			/>

			<p className="">
				A <span className="text-primary">Kolkata</span> based Fullstack
				Developer passionate about building responsive, visually
				stunning web applications.
			</p>
		</section>
	);
};

export default HomeHero;
