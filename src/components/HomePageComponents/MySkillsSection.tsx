import { SkillsType } from "@/lib/types";

type MySkillsSectionPropsType = {
	data: SkillsType;
};

const MySkillsSection = ({ data }: MySkillsSectionPropsType) => {
	return (
		<section>
			<div className="uppercase">{data.skill}</div>
		</section>
	);
};

export default MySkillsSection;
