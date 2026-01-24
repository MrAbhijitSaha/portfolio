import { randomQuoteFetchFunction } from "@/lib/fetchApi";
import TextModifier from "../ui/text-modifier";

const RandomQuotes = async () => {
	const { isSuccess, data } = await randomQuoteFetchFunction();

	return (
		<section className="max-w-xl rounded-lg border border-yellow-50 text-center">
			<TextModifier
				highlightColorClass=""
				markerColorClass="bg-yellow-500"
				className="text-foreground">
				{isSuccess ? (
					<div className="inline-block">
						{/* Highlighted quote ONLY */}
						<p className="">{data?.q}</p>

						{/* Author OUTSIDE highlight */}
						<p className="mt-2 text-right italic">— {data?.a}</p>
					</div>
				) : (
					<p>We couldn&apos;t load your quote.</p>
				)}
			</TextModifier>
		</section>
	);
};

export default RandomQuotes;
