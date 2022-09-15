export const getAssetUrl = (imageUrl) => {
	return new URL(`../assets/img/${imageUrl}`, import.meta.url).href;
};
