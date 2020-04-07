---
layout: default
pagination:
  data: collections.posts
  alias: posts
  size: 100
---

<ul>
{% for post in posts %}
  <li><a href="{{post.slug}}">{{ post.title }}</a> {{post.slug}}</li>
{% endfor %}
</ul>
