import { useEffect } from "react";

interface SEOProps {
	title: string;
	description: string;
	keywords?: string;

	ogImage?: string;
	ogUrl?: string;
	twitterCard?: string;
	twitterSite?: string;
}

export const SEO = ({
	title,
	description,
	keywords,
	ogImage,
	ogUrl,
	twitterCard = "summary_large_image",
	twitterSite,
}: SEOProps) => {
	useEffect(() => {
		document.title = title;

		const setMetaTag = (attr: "name" | "property", name: string, content: string) => {
			let metaTag = document.head.querySelector(`meta[${attr}="${name}"]`);
			if (!metaTag) {
				metaTag = document.createElement("meta");
				metaTag.setAttribute(attr, name);
				document.head.appendChild(metaTag);
			}
			metaTag.setAttribute("content", content);
		};

		// Etiquetas básicas
		setMetaTag("name", "description", description);
		if (keywords) setMetaTag("name", "keywords", keywords);

		// Open Graph: Utilizadas por Facebook, LinkedIn, WhatsApp, etc.
		setMetaTag("property", "og:title", title || title);
		setMetaTag("property", "og:description", description || description);
		if (ogImage) setMetaTag("property", "og:image", ogImage);
		if (ogUrl) setMetaTag("property", "og:url", ogUrl);

		// Twitter Cards
		setMetaTag("name", "twitter:card", twitterCard);
		setMetaTag("name", "twitter:title", title);
		setMetaTag("name", "twitter:description", description);
		if (ogImage) setMetaTag("name", "twitter:image", ogImage);
		if (twitterSite) setMetaTag("name", "twitter:site", twitterSite);
	}, [title, description, keywords, ogImage, ogUrl, twitterCard, twitterSite]);

	return null;
};
