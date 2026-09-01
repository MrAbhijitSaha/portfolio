import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Contact",
};

const page = () => {
	return (
		<section className="grid place-items-center py-8 text-center text-lg md:h-[65dvh] md:py-0">
			<div className="">
				<p className="text-sm text-gray-400">Send me a mail to</p>
				<Link
					href={"mailto:work.abhijitsaha@gmail.com"}
					className="font-bodonimoda mt-2"
					target="_blank">
					work.abhijitsaha@gmail.com
				</Link>
			</div>
		</section>
	);
};

export default page;
