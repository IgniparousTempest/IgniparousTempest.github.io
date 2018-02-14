---
layout: category
title: Software
subtitle: Code and Algorithms
permalink: /software/
---

<div class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'software' %}
		    {% unless post.categories contains 'hidden' %}
			    {% include function-generate-post-preview.html post=post %}
			{% endunless %}
		{% endif %}
	{% endfor %}
</div>
