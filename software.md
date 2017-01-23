---
layout: page
title: Software
permalink: /software/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'software' %}
			{% include function-generate-post-preview.html post=post %}
		{% endif %}
	{% endfor %}
</div>
