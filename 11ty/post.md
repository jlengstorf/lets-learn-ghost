---
layout: default
pagination:
  data: collections.posts
  alias: post
  size: 1
permalink: '/{{ pagination.items[0].slug }}/index.html'
---

<h1>{{ post.title }}</h1>

{{ post.html | safe}}
