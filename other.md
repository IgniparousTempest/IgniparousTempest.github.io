---
layout: category
title: Personal
subtitle: Random useful projects, ideas, and thoughts.
permalink: /other/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'other' %}
		    {% unless post.categories contains 'hidden' %}
			    {% include function-generate-post-preview.html post=post %}
			{% endunless %}
		{% endif %}
	{% endfor %}
</div>
