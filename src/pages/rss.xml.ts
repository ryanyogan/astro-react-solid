import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
	const blog = await getCollection('blog');

	return rss({
		title: 'The sandwch blog',
		description: 'All sandwhich news, all the time',
		site: context.site!,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/blog/${post.slug}`,
			content: sanitize(parser.render(post.body)),
		})),
	});
}
