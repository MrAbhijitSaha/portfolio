"use client";

import { DesktopHeaderPropsType } from "@/lib/types";
import Link from "next/link";

const DesktopHeader = ({ routes }: DesktopHeaderPropsType) => {
	return (
		<div className="flex items-center gap-6">
			<div className="space-x-4">
				{routes.map((item) => (
					<Link
						href={item.routes}
						key={item.id}
						className="hover:text-primary">
						{item.Name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default DesktopHeader;
