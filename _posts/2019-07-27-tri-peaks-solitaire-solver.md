---
layout: post
title: Tri Peaks Solitaire Solver
subtitle: The mysteries of the pyramids solved!
image: /images/title_tri-peak-solitaire.png
og_image: /images/og_tri-peak-solitaire.png
comments: true
categories:
- other
include:
- jquery
- konva
---

Solves a deal of the Microsoft Tri Peaks Solitaire game.

<link rel="stylesheet" href="{{ site.baseurl }}/assets/style/tri-peaks-solitaire.css">

Click on the top card and start typing. Cards are represented by a pair of letters for rank and suit, e.g. AS, 2D, TH, KC... The algorithm is brute force with some minor heuristic tweaks, so it might take long on unsolvable decks. The row of cards at the bottom is the stock. Once all the cards are entered, click the solve button. If the card background turns maroon it means you have a duplicate.

Enter the stock cards first, as they are easy to find. Then try and figure out the cards in the pyramids, by clearing as much as you can. The remaining cards list may also help you.

<p id="remainingCards">Remaining Cards: None</p>

This can't be operated on mobile devices, yet. This will be rectified soon (in African time at least).

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

{% include_relative _fragments/2019-07-27-tri-peaks-solitaire-solver/solver.md %}

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/javascript-tri-peaks-solitaire-solver).