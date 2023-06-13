import type { LoaderArgs } from '@remix-run/node'
import { typedjson } from 'remix-typedjson'

type InstrumentSearchResponse = {
	explains: any[]
	count: number
	quotes: {
		exchange?: string
		shortname?: string
		quoteType?: string
		symbol?: string
		index?: string
		score?: number
		typeDisp?: string
		longname?: string
		exchDisp?: string
		sector?: string
		industry?: string
		dispSecIndFlag?: boolean
		isYahooFinance?: boolean
		name?: string
		permalink?: string
	}[]
	news: any[]
	nav: any[]
	lists: any[]
	researchReports: any[]
	screenerFieldResults: any[]
	totalTime: number
	timeTakenForQuotes: number
	timeTakenForNews: number
	timeTakenForAlgowatchlist: number
	timeTakenForPredefinedScreener: number
	timeTakenForCrunchbase: number
	timeTakenForNav: number
	timeTakenForResearchReports: number
	timeTakenForScreenerField: number
	timeTakenForCulturalAssets: number
}


async function searchPossibleAdditions(query: string) {
	const SEARCH_QUERY_URL =
		'https://query1.finance.yahoo.com/v1/finance/search?q='
	const SEARCH_QUERY_OPTIONS =
		'&quotesCount=6&newsCount=0&listsCount=0&enableFuzzyQuery=false&quotesQueryId=tss_match_phrase_query&multiQuoteQueryId=multi_quote_single_token_query&enableCb=true&enableNavLinks=false'

	try {
		const url = SEARCH_QUERY_URL + query + SEARCH_QUERY_OPTIONS
		const response = await fetch(url)
		// console.log(response);
		const data = (await response.json()) as InstrumentSearchResponse
		return data
	} catch (err) {
		console.error("Error (searchPossibleAdditions): ", err)
	}

	return null
}


export async function loader(args: LoaderArgs) {
	// TODO: This is something we could easily cache. Which we should to. And cache for a day or more.

	const data = await searchPossibleAdditions(
		args.params.query ? args.params.query : '',
	)

	return typedjson(data, {
		status: 200,
		headers: {
			// max-age controls the browser cache
			// s-maxage controls a CDN cache
			'Cache-Control':
				process.env.NODE_ENV === 'development'
					? 'public, max-age=120, s-maxage=86400'
					: 'public, max-age=30, s-maxage=86400',
		},
	})
}
