import ProjectCard from "@/components/ProjectPageComponents/ProjectCard";
import { projectPageAllProjectData } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Project",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};

const page = () => {
	return (
		<section className="space-y-8">
			{projectPageAllProjectData.map((data) => (
				<ProjectCard
					key={data.id}
					data={data}
				/>
			))}
		</section>
	);
};

export default page;
