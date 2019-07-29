---
layout: post
title: Pyramid Solitaire Solver
subtitle: The mysteries of the pyramids solved!
image: /images/title_pyramid-solitaire.jpg
og_image: /images/og_pyramid-solitaire.png
comments: true
categories:
- other
include:
- jquery
- konva
---

Solves a deal of the game Pyramid Solitaire.

<link rel="stylesheet" href="{{ site.baseurl }}/assets/style/pyramid-solitaire.css">

Click on the top card and start typing. Cards are represented by a pair of letters for rank and suit, e.g. AS, 2D, TH, KC... The algorithm is brute force with some minor heuristic tweaks, so it might take long on unsolvable decks. The row of cards at the bottom is the stock. Once all the cards are entered, click the solve button. If the card background turns maroon it means you have a duplicate.

For mobile devices, you can enter the cards into the textbox below. Start from top of the pyramid, use a space as a seperator.

<div id="containerImportExport">
    <input type="text" id="txtEncoded" />
    <input type="button" id="btnImport" value="Import" />
    <input type="button" id="btnExport" value="Export" />
</div>
<div id="container"></div>
<div style="text-align: center;">
    <input type="button" id="btnSolve" value="Solve" />
</div>
<div id="moves">
    <ol id="movesList">
    </ol>
</div>

{% include_relative _fragments/2019-07-23-pyramid-solitaire-solver/solver.md %}

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/javascript-pyramid-solitaire-solver).