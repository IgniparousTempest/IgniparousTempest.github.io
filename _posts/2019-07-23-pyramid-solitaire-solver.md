---
layout: post
title: Pyramid Solitaire Solver
subtitle: The mysteries of the pyramids solved!
image: /images/title_pyramid-solitaire.jpg
og_image: /images/og_pyramid-solitaire.png
categories:
- other
include:
- jquery
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/style/pyramid-solitaire.css">

Click on the top card and start typing. Cards are represented by a pair of letters for rank and suit. AS, 2D, TH, KC... The algorithm is a brute force with some minor heuristic tweaks, so it might take long on unsolvable decks.

<div id="container"></div>
<div style="text-align: center;">
    <input type="button" id="btnSolve" value="Solve" />
</div>
<div id="moves">
    <ol id="movesList">
    </ol>
</div>

{% include_relative _fragments/2019-07-23-pyramid-solitaire-solver/solver.md %}

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/).