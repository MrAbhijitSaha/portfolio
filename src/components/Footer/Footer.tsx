import { footerSocialLinks } from "@/lib/footerSocialLinks";
import { FooterSocialLinksType } from "@/lib/types";
import Link from "next/link";

import { Fragment } from "react/jsx-runtime";

type FooterPropsType = {
	data: FooterSocialLinksType[];
};

const Footer = ({ data }: FooterPropsType) => {
	return (
		<div className="flex flex-col items-center gap-2 py-8 text-center text-sm md:text-base">
			<div>© 2026 | Designed & Built by Abhijit</div>
			<div>
				{data.map((item, index) => (
					<Fragment key={item.id}>
						<Link
							target="_blank"
							key={item.id}
							href={item.link}
							className="duration-200 hover:text-gray-400">
							{item.name}
						</Link>

						{index !== footerSocialLinks.length - 1 && (
							<span>&nbsp;|&nbsp;</span>
						)}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default Footer;
