import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: "t4t206nd",
  dataset: "production",
  apiVersion: "v2021-06-07",
  useCdn: true,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// source in urlFor is the asset data we're getting from the content lake (images from the content lake)
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
