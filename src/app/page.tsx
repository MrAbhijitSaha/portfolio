import RandomQuotes from "@/components/CustomComponents/RandomQuotes";
import HomeHero from "@/components/HomePageComponents/HomeHero";
import MySkillsSection from "@/components/HomePageComponents/MySkillsSection";
import { skills } from "@/lib/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Abhijit Saha",
	description:
		"Learn more about Abhijit Saha — frontend developer, tech enthusiast, and creative coder from Kolkata.",
	keywords: ["Abhijit Saha", "frontend developer", "React", "portfolio"],
};

const page = async () => {
	return (
		<>
			<section className="space-y-8 py-20">
				<HomeHero />

				<div className="">
					<p className="text-xl font-semibold underline underline-offset-2">
						Skills{" "}
					</p>

					{skills.map((data) => (
						<MySkillsSection
							key={data.id}
							data={data}
						/>
					))}
				</div>

				<div className="space-y-4">
					<p className="text-xl font-semibold underline underline-offset-2">
						Quotes{" "}
					</p>

					<RandomQuotes />
				</div>
			</section>
		</>
	);
};

export default page;
