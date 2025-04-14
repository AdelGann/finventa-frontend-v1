import { useEffect } from "react";

interface SEOProps {
	title: string;
	description: string;
	keywords?: string;
	ogTitle?: string;
	ogDescription?: string;
}

export const SEO = ({ title, description, keywords, ogTitle, ogDescription }: SEOProps) => {
	useEffect(() => {
		document.title = title;

		const setMetaTag = (name: string, content: string) => {
			let metaTag = document.querySelector(`meta[name='${name}']`);
			if (!metaTag) {
				metaTag = document.createElement("meta");
				metaTag.setAttribute("name", name);
				document.head.appendChild(metaTag);
			}
			metaTag.setAttribute("content", content);
		};

		setMetaTag("description", description);
		if (keywords) setMetaTag("keywords", keywords);
		if (ogTitle) setMetaTag("og:title", ogTitle);
		if (ogDescription) setMetaTag("og:description", ogDescription);
	}, [title, description, keywords, ogTitle, ogDescription]);

	return null;
};
