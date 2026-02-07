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
		<section className="space-y-8 py-20">
			{/* user welcome message, my image and about me inside this home hero */}

			<HomeHero />

			{/* here a random quote */}

			<div className="space-y-4">
				<p className="text-xl font-semibold">A quote for you</p>

				<RandomQuotes />
			</div>

			<section className="space-y-4">
				<p className="text-xl font-semibold">My tech stack</p>

				<div className="grid grid-cols-2 md:grid-cols-4">
					{skills.map((data) => (
						<MySkillsSection
							data={data}
							key={data.id}
						/>
					))}
				</div>
			</section>

			{/* <MySoundTrack /> */}
		</section>
	);
};

export default page;
