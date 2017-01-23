---
layout: page
title: Electronics
permalink: /electronics/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'electronics' %}
			<article class="post">

				<h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

				<div class="entry">
					{{ post.excerpt }}
				</div>

				<a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
			</article>
		{% endif %}
	{% endfor %}
</div>