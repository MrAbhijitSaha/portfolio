import ky from "ky";
import { env } from "./env";
import { GeoLocationStateType, ZenQuoteResponseType } from "./types";

export const randomQuoteFetchFunction = async () => {
	try {
		const [quoteData] = await ky
			.get(`${env.QUOTE_API}`)
			.json<ZenQuoteResponseType>();

		return {
			data: quoteData,
			isSuccess: true,
		};
	} catch (error) {
		console.error(error);

		return {
			isSuccess: false,
		};
	}
};

export const userLocationFetchFunction = async () => {
	try {
		const data = await ky.get(`${env.IP_API}`).json<GeoLocationStateType>();

		console.log(data);
		return {
			data: data,
			isSuccess: true,
		};
	} catch (error) {
		console.error(error);

		return {
			data: null,
			isSuccess: false,
		};
	}
};
