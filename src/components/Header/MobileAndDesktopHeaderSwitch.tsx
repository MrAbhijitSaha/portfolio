"use client";

import { userLocationFetchFunction } from "@/lib/fetchApi";
import { HeaderRouteOptionsType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CurrentTime from "../CustomComponents/DisplayCurrentTime";
import { Separator } from "../ui/separator";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

type MobileAndDesktopHeaderSwitchProps = {
	routes: HeaderRouteOptionsType[];
};

const MobileAndDesktopHeaderSwitch = ({
	routes,
}: MobileAndDesktopHeaderSwitchProps) => {
	const [userContryCode, setUserContryCode] = useState("");

	useEffect(() => {
		userLocationFetchFunction().then(({ data, isSuccess }) => {
			setUserContryCode(isSuccess ? ` ${data?.country_code}` : ``);
		});
	}, []);

	return (
		<>
			<section className="flex justify-between py-6">
				<Link
					href={"/"}
					aria-label="Website-Logo">
					<Image
						src={"/logo/logowhite.png"}
						alt="logo"
						height={28}
						width={28}
						className="h-7 w-7"
					/>
				</Link>
				<div className="flex items-center gap-4">
					<div className="block md:hidden">
						<MobileHeader routes={routes} />
					</div>
					<div className="hidden md:block">
						<DesktopHeader routes={routes} />
					</div>

					<div className="flex gap-2 text-[12px] text-zinc-400 md:text-sm">
						{userContryCode},<CurrentTime />
					</div>
				</div>
			</section>

			<Separator />
		</>
	);
};

export default MobileAndDesktopHeaderSwitch;
