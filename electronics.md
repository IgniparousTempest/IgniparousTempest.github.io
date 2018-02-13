---
layout: category
title: Electronics
subtitle: Arduino and PIC mainly
permalink: /electronics/
---

<div class="posts">
	{% for post in site.posts %}
	    {% comment %} is electrnics and not hidden {% endcomment %}
		{% if post.categories contains 'electronics' %}
		    {% unless post.categories contains 'hidden' %}
			    {% include function-generate-post-preview.html post=post %}
			{% endunless %}
		{% endif %}
	{% endfor %}
</div>