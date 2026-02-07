import { SkillsType } from "@/lib/types";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type MySkillsSectionPropsType = {
	data: SkillsType;
};

const MySkillsSection = ({ data }: MySkillsSectionPropsType) => {
	return (
		<Tooltip>
			<TooltipTrigger className="hover:bg-primary hover:text-background border p-2">
				{data.skill}
			</TooltipTrigger>
			<TooltipContent>
				<Image
					src={`/skills/${data.img}.svg`}
					alt={data.img}
					height={240}
					width={240}
					className="h-8 w-8"
				/>
			</TooltipContent>
		</Tooltip>
	);
};

export default MySkillsSection;
