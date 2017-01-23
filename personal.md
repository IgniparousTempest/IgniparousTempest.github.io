---
layout: page
title: Personal
permalink: /personal/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'personal' %}
			{% include function-generate-post-preview.html post=post %}
		{% endif %}
	{% endfor %}
</div>
