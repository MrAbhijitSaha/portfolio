"use client";

import { useEffect, useState } from "react";
import { SlidingNumber } from "../ui/slidingnumber";

const CurrentTime = () => {
	const [hours, setHours] = useState(new Date().getHours());
	const [minutes, setMinutes] = useState(new Date().getMinutes());
	const [seconds, setSeconds] = useState(new Date().getSeconds());

	useEffect(() => {
		const interval = setInterval(() => {
			setHours(new Date().getHours());
			setMinutes(new Date().getMinutes());
			setSeconds(new Date().getSeconds());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const rawHours = hours;
	const hours12 = rawHours % 12 || 12; // Converts 0-23 to 1-12
	const period = rawHours >= 12 ? "PM" : "AM";

	return (
		<div className="flex items-center gap-0.5">
			<SlidingNumber
				value={hours12}
				padStart={true}
			/>
			:
			<SlidingNumber
				value={minutes}
				padStart={true}
			/>
			:
			<SlidingNumber
				value={seconds}
				padStart={true}
			/>
			<span className="ml-1 text-sm">{period}</span>
		</div>
	);
};

export default CurrentTime;
