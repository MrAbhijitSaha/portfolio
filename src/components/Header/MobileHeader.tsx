"use client";

import { MobileHeaderPropsType } from "@/lib/types";
import { TableOfContentsIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

const MobileHeader = ({ routes }: MobileHeaderPropsType) => {
	return (
		<>
			<Sheet>
				<SheetTrigger aria-label="Mobile-Nav-Trigger-Button">
					<TableOfContentsIcon size={24} />
					{/* Menu */}
				</SheetTrigger>
				<SheetContent
					className="h-60 rounded-3xl text-center"
					side="left">
					<SheetHeader>
						<SheetTitle className="flex">
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
						</SheetTitle>
					</SheetHeader>

					{routes.map((item) => (
						<section key={item.id}>
							<SheetClose asChild>
								<Link href={item.routes}>{item.Name}</Link>
							</SheetClose>
						</section>
					))}
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileHeader;
