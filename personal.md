---
layout: category
title: Personal
subtitle: The following are entries I've written for myself. If reading other people's diaries sounds appealing, then feel free to read them!
permalink: /personal/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'personal' %}
			{% include function-generate-post-preview.html post=post %}
		{% endif %}
	{% endfor %}
</div>
