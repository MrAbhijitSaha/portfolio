import ProjectCard from "@/components/ProjectPageComponents/ProjectCard";
import { projectPageAllProjectData } from "@/lib/projects";

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
