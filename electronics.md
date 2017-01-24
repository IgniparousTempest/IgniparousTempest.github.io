---
layout: category
title: Electronics
subtitle: Arduino and PIC mainly
permalink: /electronics/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'electronics' %}
			{% include function-generate-post-preview.html post=post %}
		{% endif %}
	{% endfor %}
</div>