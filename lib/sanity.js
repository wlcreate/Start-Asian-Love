import {
	createClient,
	createPreviewSubscriptionHook,
	createImageUrlBuilder,
	createPortableTextComponent
} from "next-sanity";

const config = {
	projectId: "t4t206nd",
	dataset: "production",
	apiVersion: "v2021-06-07",
	useCdn: true
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const portableText = createPortableTextComponent({
	...config,
	serializers: {},  
}) 
