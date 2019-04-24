---
layout: post
title: mediabiasfactcheck Bias
subtitle: bias in my bias?
image: /images/title_media-bias.jpg
og_image: /images/og_media-bias.png
categories:
- other
include:
- jquery
- datatables
---

[mediabiasfactcheck.com](https://mediabiasfactcheck.com/) seems like a great site to lookup the bias of a media outlet, after a bit of browsing on the site I noticed that they had a few entries that differed a bit to [ad fontes media](https://www.adfontesmedia.com/).

I wrote a web scraper to collect all the media outlets listed on mediabiasfactcheck.com and I have presented that data below. Unfortunately they score media outlets with discreet values rather than on continuous spectra. Their discreet scores for left-right bias are: "Extreme Left", "Left Bias", "Left-Centre Bias", "Least Biased", "Right-Centre Bias", "Right Bias", and "Extreme Right"; while their scores for factual reporting are: "High", "Mixed", and "Questionable". They do show a continuous slider of the top of each page to show the lef-right bias and an extension of this project would to be translate that slider into a continuous value. Initially that was my plan, but the naming scheme of their sliders was very inconsistent, which made the task quite off putting.    

<script>
    window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
                text: "mediabiasfactcheck.com Bias"
            },
            axisX: {
                title: "Article Bias"
            },
            axisY: {
                title: "Number of Articles"
            },
            legend: {
                verticalAlign: "top",
                horizontalAlign: "right",
                dockInsidePlotArea: true,
                reversed: true
            },
            toolTip: {
                shared: true,
                reversed: true
            },
            data: [
                {
                    name: "Questionable",
                    showInLegend: true,
                    legendMarkerType: "square",
                    type: "stackedArea",
                    color: "rgba(192,46,29,0.7)",
                    markerSize: 0,
                    dataPoints: [
                        { label: "Extreme Left", y: 42 },
                        { label: "Left Bias", y: 6 },
                        { label: "Left-Centre Bias", y: 3 },
                        { label: "Least Biased", y: 0 },
                        { label: "Right-Centre Bias", y: 4 },
                        { label: "Right Bias", y: 37 },
                        { label: "Extreme Right", y: 359 }
                    ]
                },
                {
                    name: "Mixed",
                    showInLegend: true,
                    legendMarkerType: "square",
                    type: "stackedArea",
                    color: "rgba(241,108,32,0.7)",
                    markerSize: 0,
                    dataPoints: [
                        { label: "Extreme Left", y: 2 },
                        { label: "Left Bias", y: 123 },
                        { label: "Left-Centre Bias", y: 40 },
                        { label: "Least Biased", y: 17 },
                        { label: "Right-Centre Bias", y: 39 },
                        { label: "Right Bias", y: 223 },
                        { label: "Extreme Right", y: 5 }
                    ]
                },
                {
                    name: "High",
                    showInLegend: true,
                    legendMarkerType: "square",
                    type: "stackedArea",
                    color: "rgba(162,184,108,0.6)",
                    markerSize: 0,
                    dataPoints: [
                        { label: "Extreme Left", y: 0 },
                        { label: "Left Bias", y: 195 },
                        { label: "Left-Centre Bias", y: 427 },
                        { label: "Least Biased", y: 287 },
                        { label: "Right-Centre Bias", y: 188 },
                        { label: "Right Bias", y: 41 },
                        { label: "Extreme Right", y: 0 }
                    ]
                }]
        });
        chart.render();

    }
</script>

<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

This data was collected on the 24th of April 2019 at around 12:00 GMT.

<script>
    $(document).ready( function () {
        $('#table_id').DataTable({
            "columnDefs": [
                { "targets": [3, 4], "searchable": false } // Last two columns are not searchable
            ]
        });
    } );
</script>
<table id="table_id" class="display">
    <thead>
    <tr>
        <th>Name</th>
        <th>Factual Reporting</th>
        <th>Bias</th>
        <th>Left-Right Spectrum Image</th>
        <th>Page Link</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th>10News.one</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/10news-one/)</th>
    </tr>
    <tr>
        <th>24 News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/24-news/)</th>
    </tr>
    <tr>
        <th>100 Percent Fed Up</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/100-percent-fed-up/)</th>
    </tr>
    <tr>
        <th>247 News Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/247-news-media/)</th>
    </tr>
    <tr>
        <th>70 News (Fake)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/70-news/)</th>
    </tr>
    <tr>
        <th>Activist Mommy</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/activist-mommy/)</th>
    </tr>
    <tr>
        <th>Age of Shitlords</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/age-of-shitlords/)</th>
    </tr>
    <tr>
        <th>Alpha News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/alpha-news/)</th>
    </tr>
    <tr>
        <th>Allen West Republic</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/allen-west-republic/)</th>
    </tr>
    <tr>
        <th>Alliance Defending Freedom</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/alliance-defending-freedom/)</th>
    </tr>
    <tr>
        <th>All News Pipeline</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/all-news-pipeline/)</th>
    </tr>
    <tr>
        <th>Alternative Media Syndicate</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/alternative-media-syndicate/)</th>
    </tr>
    <tr>
        <th>AltRight.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/altright-com/)</th>
    </tr>
    <tr>
        <th>Amazingnews.net</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/amazingnews-net/)</th>
    </tr>
    <tr>
        <th>American College of Pediatricians</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-college-of-pediatricians/)</th>
    </tr>
    <tr>
        <th>American Fans</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-fans/)</th>
    </tr>
    <tr>
        <th>American Patriot Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-patriot-daily/)</th>
    </tr>
    <tr>
        <th>American Family Association</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-family-association/)</th>
    </tr>
    <tr>
        <th>American Flavor</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-flavor/)</th>
    </tr>
    <tr>
        <th>Americas Freedom Fighters</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-freedom-fighters/)</th>
    </tr>
    <tr>
        <th>American Journal Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-journal-review/)</th>
    </tr>
    <tr>
        <th>American Lookout</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-lookout/)</th>
    </tr>
    <tr>
        <th>American News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-news/)</th>
    </tr>
    <tr>
        <th>American People Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-people-network/)</th>
    </tr>
    <tr>
        <th>American Prides</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-prides/)</th>
    </tr>
    <tr>
        <th>American Principles Project</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-principles-project/)</th>
    </tr>
    <tr>
        <th>American Renaissance Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-renaissance-magazine/)</th>
    </tr>
    <tr>
        <th>American Society for the Defense of Tradition, Family, and Property</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-society-defense-tradition-family-property/)</th>
    </tr>
    <tr>
        <th>American Thinker</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-thinker/)</th>
    </tr>
    <tr>
        <th>American Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-today/)</th>
    </tr>
    <tr>
        <th>American Truth Seekers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-truth-seekers/)</th>
    </tr>
    <tr>
        <th>American Updater</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-updater/)</th>
    </tr>
    <tr>
        <th>Americans Against the Tea Party (AATTP)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/americans-against-the-tea-party-aattp/)</th>
    </tr>
    <tr>
        <th>anews-24.com (American News)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/anews-24-com-american-news/)</th>
    </tr>
    <tr>
        <th>Aurora-News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/aurora-news/)</th>
    </tr>
    <tr>
        <th>A Voice for Men</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/a-voice-for-men/)</th>
    </tr>
    <tr>
        <th>Banned Information</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/banned-information/)</th>
    </tr>
    <tr>
        <th>Bare Naked Islam</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bare-naked-islam/)</th>
    </tr>
    <tr>
        <th>BB4SP</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bb4sp/)</th>
    </tr>
    <tr>
        <th>BeAware</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/beaware/)</th>
    </tr>
    <tr>
        <th>Big Blue Vision</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/big-blue-vision/)</th>
    </tr>
    <tr>
        <th>Bipartisan Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bipartisan-report/)</th>
    </tr>
    <tr>
        <th>Black Genocide</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/black-genocide/)</th>
    </tr>
    <tr>
        <th>Black Pigeon Speaks</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/black-pigeon-speaks/)</th>
    </tr>
    <tr>
        <th>BlingNews.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/blingnews-com/)</th>
    </tr>
    <tr>
        <th>Blue Informer</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/blue-informer/)</th>
    </tr>
    <tr>
        <th>Blue Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/blue-tribune/)</th>
    </tr>
    <tr>
        <th>BlueVision.News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bluevision-news/)</th>
    </tr>
    <tr>
        <th>Blue Vision Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/blue-vision-post/)</th>
    </tr>
    <tr>
        <th>Blunt Force Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/blunt-force-truth/)</th>
    </tr>
    <tr>
        <th>Borderland Alternative Media (BAM)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/borderland-alternative-media-bam/)</th>
    </tr>
    <tr>
        <th>Breakingtop.world</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/breakingtop-world/)</th>
    </tr>
    <tr>
        <th>Breitbart</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/breitbart/)</th>
    </tr>
    <tr>
        <th>Britain First</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/britain-first/)</th>
    </tr>
    <tr>
        <th>Canada Free Press</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/canada-free-press/)</th>
    </tr>
    <tr>
        <th>Censored.News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/censored-news/)</th>
    </tr>
    <tr>
        <th>Center for Immigration Studies (CIS)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-immigration-studies-cis/)</th>
    </tr>
    <tr>
        <th>Centre for Research of Radicalism and National Security (CRRNS)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/centre-for-research-of-radicalism-and-national-security-crrns/)</th>
    </tr>
    <tr>
        <th>Cerno (Cernovich.com)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/cerno-cernovich-com/)</th>
    </tr>
    <tr>
        <th>Christian Action Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/christian-action-network/)</th>
    </tr>
    <tr>
        <th>Clarion Project</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/clarion-project/)</th>
    </tr>
    <tr>
        <th>Clash Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/clash-daily/)</th>
    </tr>
    <tr>
        <th>CNS News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cns-news/)</th>
    </tr>
    <tr>
        <th>Concerned Women for America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/concerned-women-america/)</th>
    </tr>
    <tr>
        <th>Conservative Army</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-army/)</th>
    </tr>
    <tr>
        <th>The Conservative Buzz</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-conservative-buzz/)</th>
    </tr>
    <tr>
        <th>Conservative Byte</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-byte/)</th>
    </tr>
    <tr>
        <th>Conservative Daily Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-daily-post/)</th>
    </tr>
    <tr>
        <th>Conservative Fighters</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-fighters/)</th>
    </tr>
    <tr>
        <th>Conservative Firing Line</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-firing-line/)</th>
    </tr>
    <tr>
        <th>Conservative Free Press</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-free-press/)</th>
    </tr>
    <tr>
        <th>Conservative Info Corner</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-info-corner/)</th>
    </tr>
    <tr>
        <th>Conservative Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-media/)</th>
    </tr>
    <tr>
        <th>Conservative Movement</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-movement/)</th>
    </tr>
    <tr>
        <th>Conservative Nation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-nation/)</th>
    </tr>
    <tr>
        <th>Conservative Flash News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-flash-news/)</th>
    </tr>
    <tr>
        <th>Conservapedia</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservapedia/)</th>
    </tr>
    <tr>
        <th>Conservative 101</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-101/)</th>
    </tr>
    <tr>
        <th>Conservative Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-patriot/)</th>
    </tr>
    <tr>
        <th>Conservative Politicus</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-politicus/)</th>
    </tr>
    <tr>
        <th>Conservative Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-post/)</th>
    </tr>
    <tr>
        <th>Conservative Spirit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-spirit/)</th>
    </tr>
    <tr>
        <th>Conservative Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-tribune/)</th>
    </tr>
    <tr>
        <th>Constitution Rising</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/constitution-rising/)</th>
    </tr>
    <tr>
        <th>Council on American-Islamic Relations (CAIR)</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th>[rightcenter021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/council-on-american-islamic-relations-cair/)</th>
    </tr>
    <tr>
        <th>Daily Headlines</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-headlines/)</th>
    </tr>
    <tr>
        <th>Daily Infobox</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-infobox/)</th>
    </tr>
    <tr>
        <th>Daily Insider News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-insider-news/)</th>
    </tr>
    <tr>
        <th>Daily Mail</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-mail/)</th>
    </tr>
    <tr>
        <th>Daily Notify</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-notify/)</th>
    </tr>
    <tr>
        <th>Daily Political Newswire</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-political-newswire/)</th>
    </tr>
    <tr>
        <th>Daily Presser</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-presser/)</th>
    </tr>
    <tr>
        <th>Daily Stormer</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-stormer/)</th>
    </tr>
    <tr>
        <th>Daily USA Update</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-usa-update/)</th>
    </tr>
    <tr>
        <th>Daily World Information</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-world-information/)</th>
    </tr>
    <tr>
        <th>Danger and Play</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/danger-and-play/)</th>
    </tr>
    <tr>
        <th>David Horowitz Freedom Center</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/david-horowitz-freedom-center/)</th>
    </tr>
    <tr>
        <th>DC Dirty Laundry</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dc-dirty-laundry/)</th>
    </tr>
    <tr>
        <th>DEBKAfile</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/debkafile/)</th>
    </tr>
    <tr>
        <th>Defend Europa</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/defend-europa/)</th>
    </tr>
    <tr>
        <th>Defiant America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/defiant-america/)</th>
    </tr>
    <tr>
        <th>Defund.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/defund-com/)</th>
    </tr>
    <tr>
        <th>Democratic Moms</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/democratic-moms/)</th>
    </tr>
    <tr>
        <th>Democratic Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/democratic-review/)</th>
    </tr>
    <tr>
        <th>Departed (Maganews.com)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/departed-maganews-com/)</th>
    </tr>
    <tr>
        <th>Deplorable Movement 2020</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deplorable-movement-2020/)</th>
    </tr>
    <tr>
        <th>DC Gazette</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dc-gazette/)</th>
    </tr>
    <tr>
        <th>Discover the Networks</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/discover-the-networks/)</th>
    </tr>
    <tr>
        <th>Donald Trump News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/donald-trump-news/)</th>
    </tr>
    <tr>
        <th>Donald Trump Potus 45</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/donald-trump-potus-45/)</th>
    </tr>
    <tr>
        <th>Downtrend</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/downtrend/)</th>
    </tr>
    <tr>
        <th>Draining the Swamp</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/draining-the-swamp/)</th>
    </tr>
    <tr>
        <th>Drudge Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/drudge-report/)</th>
    </tr>
    <tr>
        <th>Eagle Rising</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/eagle-rising/)</th>
    </tr>
    <tr>
        <th>EarthNews – Conservative News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/earthnews-conservative-news/)</th>
    </tr>
    <tr>
        <th>Embols</th>
        <th>QUESTIONABLE</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/embols/)</th>
    </tr>
    <tr>
        <th>Ending the Fed News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ending-the-fed-news/)</th>
    </tr>
    <tr>
        <th>ENH Live</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/enh-live/)</th>
    </tr>
    <tr>
        <th>En Volve</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/en-volve/)</th>
    </tr>
    <tr>
        <th>Exposing Government</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/exposing-government/)</th>
    </tr>
    <tr>
        <th>Fact-Checking Turkey</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fact-checking-turkey/)</th>
    </tr>
    <tr>
        <th>Facts Wanted</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/facts-wanted/)</th>
    </tr>
    <tr>
        <th>Family Research Council</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/family-research-council/)</th>
    </tr>
    <tr>
        <th>Fars News</th>
        <th>QUESTIONABLE</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fars-news/)</th>
    </tr>
    <tr>
        <th>Federalist Nation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/federalist-nation/)</th>
    </tr>
    <tr>
        <th>Federalist Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/federalist-tribune/)</th>
    </tr>
    <tr>
        <th>Flash News Corner</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/flash-news-corner/)</th>
    </tr>
    <tr>
        <th>Flex Mag</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/flex-mag/)</th>
    </tr>
    <tr>
        <th>Focus on the Family</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/focus-on-the-family/)</th>
    </tr>
    <tr>
        <th>Freakout Nation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freakout-nation/)</th>
    </tr>
    <tr>
        <th>Free Patriot Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/free-patriot-post/)</th>
    </tr>
    <tr>
        <th>Free Speech Time</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/free-speech-time/)</th>
    </tr>
    <tr>
        <th>Freedom Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freedom-daily/)</th>
    </tr>
    <tr>
        <th>Freedom Liberty News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freedom-liberty-news/)</th>
    </tr>
    <tr>
        <th>Freedom’s Final Stand</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freedoms-final-stand/)</th>
    </tr>
    <tr>
        <th>Freedom News Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/freedom-news-report/)</th>
    </tr>
    <tr>
        <th>Fresh News – USA</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fresh-news-usa/)</th>
    </tr>
    <tr>
        <th>Frontpage Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/frontpage-magazine/)</th>
    </tr>
    <tr>
        <th>Fury News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fury-news/)</th>
    </tr>
    <tr>
        <th>FWD Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fwd-now/)</th>
    </tr>
    <tr>
        <th>Geller Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/geller-report/)</th>
    </tr>
    <tr>
        <th>Ghost.Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ghost-report/)</th>
    </tr>
    <tr>
        <th>Girls Just Wanna Have Guns</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/girls-just-wanna-have-guns/)</th>
    </tr>
    <tr>
        <th>Global Info Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/global-info-today/)</th>
    </tr>
    <tr>
        <th>Global Politics Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/global-politics-now/)</th>
    </tr>
    <tr>
        <th>Godfather Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/godfather-politics/)</th>
    </tr>
    <tr>
        <th>Gone Left</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gone-left/)</th>
    </tr>
    <tr>
        <th>GoodGopher</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/goodgopher/)</th>
    </tr>
    <tr>
        <th>GOD (Good Lord Above)</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/god-good-lord-above/)</th>
    </tr>
    <tr>
        <th>GOP Watchdog</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gop-watchdog/)</th>
    </tr>
    <tr>
        <th>GotNews</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gotnews/)</th>
    </tr>
    <tr>
        <th>Hang the Bankers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hang-the-bankers/)</th>
    </tr>
    <tr>
        <th>Hard News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hard-news/)</th>
    </tr>
    <tr>
        <th>Hawar News Agency</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hawar-news-agency/)</th>
    </tr>
    <tr>
        <th>Heartland Institute</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/heartland-institute/)</th>
    </tr>
    <tr>
        <th>Hogg Watch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hogg-watch/)</th>
    </tr>
    <tr>
        <th>I Hate the Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/i-hate-the-media/)</th>
    </tr>
    <tr>
        <th>If You Only News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/if-you-only-news/)</th>
    </tr>
    <tr>
        <th>I have the Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/i-have-the-truth/)</th>
    </tr>
    <tr>
        <th>I, Hypocrite</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/i-hypocrite/)</th>
    </tr>
    <tr>
        <th>Illicit Info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/illicit-info/)</th>
    </tr>
    <tr>
        <th>I Love My Freedom</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/i-love-my-freedom/)</th>
    </tr>
    <tr>
        <th>IMOwired</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/imowired/)</th>
    </tr>
    <tr>
        <th>InfoGalactic</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/infogalactic/)</th>
    </tr>
    <tr>
        <th>Information Liberation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/information-liberation/)</th>
    </tr>
    <tr>
        <th>Informed Owners</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/informed-owners/)</th>
    </tr>
    <tr>
        <th>InfoScum</th>
        <th>QUESTIONABLE</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/infoscum/)</th>
    </tr>
    <tr>
        <th>Institute for Historical Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/institute-for-historical-review/)</th>
    </tr>
    <tr>
        <th>International Organization for the Family (IOF)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/international-organization-for-the-family-iof/)</th>
    </tr>
    <tr>
        <th>Israel Video Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/israel-video-network/)</th>
    </tr>
    <tr>
        <th>Jew Watch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jew-watch/)</th>
    </tr>
    <tr>
        <th>Jihad Watch</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jihad-watch/)</th>
    </tr>
    <tr>
        <th>Joe for America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/joe-for-america/)</th>
    </tr>
    <tr>
        <th>Jookos News</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jookos-news/)</th>
    </tr>
    <tr>
        <th>Judicial Watch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/judicial-watch/)</th>
    </tr>
    <tr>
        <th>Just the Facts</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/just-the-facts/)</th>
    </tr>
    <tr>
        <th>Knights Templar International</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/knights-templar-international/)</th>
    </tr>
    <tr>
        <th>Korean Central News Agency</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/korean-central-news-agency/)</th>
    </tr>
    <tr>
        <th>Lady Liberty News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lady-liberty-news/)</th>
    </tr>
    <tr>
        <th>Learn Progress</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/learn-progress/)</th>
    </tr>
    <tr>
        <th>Left Exposed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/left-exposed/)</th>
    </tr>
    <tr>
        <th>Lew Rockwell</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lew-rockwell/)</th>
    </tr>
    <tr>
        <th>Liberal Plug</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberal-plug/)</th>
    </tr>
    <tr>
        <th>Liberal Society</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberal-society/)</th>
    </tr>
    <tr>
        <th>Liberal Speak</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/liberal-speak/)</th>
    </tr>
    <tr>
        <th>Liberty Alliance</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-alliance/)</th>
    </tr>
    <tr>
        <th>Liberty Brief</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-brief/)</th>
    </tr>
    <tr>
        <th>Liberty Courier</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-courier/)</th>
    </tr>
    <tr>
        <th>Liberty is Viral</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-is-viral/)</th>
    </tr>
    <tr>
        <th>Liberty Writers News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-writers-news/)</th>
    </tr>
    <tr>
        <th>London Web News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/london-web-news/)</th>
    </tr>
    <tr>
        <th>LoonWatch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/loonwatch/)</th>
    </tr>
    <tr>
        <th>Loser.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/loser-com/)</th>
    </tr>
    <tr>
        <th>Mad American Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mad-american-network/)</th>
    </tr>
    <tr>
        <th>Mad World News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mad-world-news/)</th>
    </tr>
    <tr>
        <th>MAGA Daily Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/maga-daily-report/)</th>
    </tr>
    <tr>
        <th>MagaPill</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/magapill/)</th>
    </tr>
    <tr>
        <th>MAGAVoter.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/magavoter-com/)</th>
    </tr>
    <tr>
        <th>MartinLutherKing.org</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/martinlutherking-org/)</th>
    </tr>
    <tr>
        <th>MBGA – Make Britain Great Again</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mbga-make-britain-great/)</th>
    </tr>
    <tr>
        <th>Media Zone</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/media-zone/)</th>
    </tr>
    <tr>
        <th>Metapedia</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/metapedia/)</th>
    </tr>
    <tr>
        <th>Middle East Forum</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/middle-east-forum/)</th>
    </tr>
    <tr>
        <th>Middle East Media Research Institute (MEMRI)</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/middle-east-media-research-institute-memri/)</th>
    </tr>
    <tr>
        <th>MILO News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/milo-news/)</th>
    </tr>
    <tr>
        <th>Mixi.Media</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mixi-media/)</th>
    </tr>
    <tr>
        <th>Molon Labe Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/molon-labe-media/)</th>
    </tr>
    <tr>
        <th>Moving Left</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/moving-left/)</th>
    </tr>
    <tr>
        <th>Mr. Conservative (MRC)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mr-conservative-mrc/)</th>
    </tr>
    <tr>
        <th>My Right American</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/my-right-american/)</th>
    </tr>
    <tr>
        <th>MyZoneToday</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright05.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/extremeright05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/myzonetoday/)</th>
    </tr>
    <tr>
        <th>Nation45</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/nation45/)</th>
    </tr>
    <tr>
        <th>National Alliance</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-alliance/)</th>
    </tr>
    <tr>
        <th>National Economics Editorial</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-economics-editorial/)</th>
    </tr>
    <tr>
        <th>National Enquirer</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-enquirer/)</th>
    </tr>
    <tr>
        <th>National Policy Institute</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-policy-institute/)</th>
    </tr>
    <tr>
        <th>National Vanguard</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-vanguard/)</th>
    </tr>
    <tr>
        <th>NeverRepublican.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/neverrepublican-com/)</th>
    </tr>
    <tr>
        <th>Nevo News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nevo-news/)</th>
    </tr>
    <tr>
        <th>New Century Times</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-century-times/)</th>
    </tr>
    <tr>
        <th>NewsAmmo</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newsammo/)</th>
    </tr>
    <tr>
        <th>News and Stories From USA</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-stories-usa/)</th>
    </tr>
    <tr>
        <th>News Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-conservative/)</th>
    </tr>
    <tr>
        <th>New Nation News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-nation-news/)</th>
    </tr>
    <tr>
        <th>New Politics Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-politics-today/)</th>
    </tr>
    <tr>
        <th>News Blaze</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-blaze/)</th>
    </tr>
    <tr>
        <th>NewsBreaksHere</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsbreakshere/)</th>
    </tr>
    <tr>
        <th>News Chicken</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-chicken/)</th>
    </tr>
    <tr>
        <th>News Feed Hunter</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-feed-hunter/)</th>
    </tr>
    <tr>
        <th>News Procession</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-procession/)</th>
    </tr>
    <tr>
        <th>News Punch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-punch/)</th>
    </tr>
    <tr>
        <th>News Up Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-up-today/)</th>
    </tr>
    <tr>
        <th>NewsWars</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newswars/)</th>
    </tr>
    <tr>
        <th>News With Views</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-with-views/)</th>
    </tr>
    <tr>
        <th>NMWS.us</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/nmws-us/)</th>
    </tr>
    <tr>
        <th>Nos Comunicamos</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nos-comunicamos/)</th>
    </tr>
    <tr>
        <th>Oath Keepers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/oath-keepers/)</th>
    </tr>
    <tr>
        <th>Occupy Democrats</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/occupy-democrats/)</th>
    </tr>
    <tr>
        <th>Online Conservative Press</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/online-conservative-press/)</th>
    </tr>
    <tr>
        <th>Open Magazines</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/open-magazines/)</th>
    </tr>
    <tr>
        <th>Opposition Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft05.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/opposition-report/)</th>
    </tr>
    <tr>
        <th>Our Eye on Islam</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/our-eye-on-islam/)</th>
    </tr>
    <tr>
        <th>Overpasses for America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/overpasses-for-america/)</th>
    </tr>
    <tr>
        <th>Pacific Pundit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pacific-pundit/)</th>
    </tr>
    <tr>
        <th>Patriot Beacon</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriot-beacon/)</th>
    </tr>
    <tr>
        <th>Patriot Beat</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriot-beat/)</th>
    </tr>
    <tr>
        <th>Patriotic Express</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriotic-express/)</th>
    </tr>
    <tr>
        <th>Patribotics Blog</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patribotics-blog/)</th>
    </tr>
    <tr>
        <th>Patriot Fires</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/patriot-fires/)</th>
    </tr>
    <tr>
        <th>Patriot Hangout</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/patriot-hangout/)</th>
    </tr>
    <tr>
        <th>Patriot Journal</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriot-journal/)</th>
    </tr>
    <tr>
        <th>Patriot Update</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/patriot-update/)</th>
    </tr>
    <tr>
        <th>Patriotic Viral News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/patriotic-viral-news/)</th>
    </tr>
    <tr>
        <th>Patriots Voice</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriots-voice/)</th>
    </tr>
    <tr>
        <th>Personal Liberty</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/personal-liberty/)</th>
    </tr>
    <tr>
        <th>Plymouth Patriot Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/plymouth-patriot-post/)</th>
    </tr>
    <tr>
        <th>PM Nightly News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pm-nightly-news/)</th>
    </tr>
    <tr>
        <th>Police Times</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/police-times/)</th>
    </tr>
    <tr>
        <th>Polipace</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/polipace/)</th>
    </tr>
    <tr>
        <th>Political Ears</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/political-ears/)</th>
    </tr>
    <tr>
        <th>Political Inbox</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/political-inbox/)</th>
    </tr>
    <tr>
        <th>Political Mayhem News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/political-mayhem-news/)</th>
    </tr>
    <tr>
        <th>Political Site News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/political-site-news/)</th>
    </tr>
    <tr>
        <th>Politico Info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/politico-info/)</th>
    </tr>
    <tr>
        <th>Politics Live</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/politics-live/)</th>
    </tr>
    <tr>
        <th>Politifact News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/politifact-news/)</th>
    </tr>
    <tr>
        <th>Powdered Wig Society</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/powdered-wig-society/)</th>
    </tr>
    <tr>
        <th>PragerU</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/prageru/)</th>
    </tr>
    <tr>
        <th>President 45 Donald Trump</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/president-45-donald-trump/)</th>
    </tr>
    <tr>
        <th>Prideof-America.org (American News)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/prideof-america-org-american-news/)</th>
    </tr>
    <tr>
        <th>Prntly</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/prntly/)</th>
    </tr>
    <tr>
        <th>Pro-America News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pro-america-news/)</th>
    </tr>
    <tr>
        <th>Progress Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft05.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/progress-tribune/)</th>
    </tr>
    <tr>
        <th>Progressives Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/progressives-today/)</th>
    </tr>
    <tr>
        <th>Project Purge</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/project-purge/)</th>
    </tr>
    <tr>
        <th>The Proud Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-proud-conservative/)</th>
    </tr>
    <tr>
        <th>Proud Leader</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/proud-leader/)</th>
    </tr>
    <tr>
        <th>Proud Patriots</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/proud-patriots/)</th>
    </tr>
    <tr>
        <th>Puppet String News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/puppet-string-news/)</th>
    </tr>
    <tr>
        <th>QPolitical</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/qpolitical/)</th>
    </tr>
    <tr>
        <th>Read Conservatives</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/read-conservatives/)</th>
    </tr>
    <tr>
        <th>Reagan Coalition</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/reagan-coalition/)</th>
    </tr>
    <tr>
        <th>Real Time Politics</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/real-time-politics/)</th>
    </tr>
    <tr>
        <th>Red Country – Conservative News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-country-conservative-news/)</th>
    </tr>
    <tr>
        <th>Red Ice TV</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-ice-tv/)</th>
    </tr>
    <tr>
        <th>Red Info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-info/)</th>
    </tr>
    <tr>
        <th>Red People</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-people/)</th>
    </tr>
    <tr>
        <th>Red Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-politics/)</th>
    </tr>
    <tr>
        <th>Red Rock Daily News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-rock-daily-news/)</th>
    </tr>
    <tr>
        <th>Red Rock Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-rock-tribune/)</th>
    </tr>
    <tr>
        <th>Red State Journalist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-state-journalist/)</th>
    </tr>
    <tr>
        <th>Red State Pundit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-state-pundit/)</th>
    </tr>
    <tr>
        <th>Red State Watcher</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-state-watcher/)</th>
    </tr>
    <tr>
        <th>RedStateWave</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/redstatewave/)</th>
    </tr>
    <tr>
        <th>Red, White and Right</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-white-and-right/)</th>
    </tr>
    <tr>
        <th>Renew America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/renew-america/)</th>
    </tr>
    <tr>
        <th>Resistance Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/resistance-report/)</th>
    </tr>
    <tr>
        <th>Return of Kings</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/return-of-kings/)</th>
    </tr>
    <tr>
        <th>Right Alerts</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/right-alerts/)</th>
    </tr>
    <tr>
        <th>Right Journalist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/right-journalist/)</th>
    </tr>
    <tr>
        <th>Right Smarts</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/right-smarts/)</th>
    </tr>
    <tr>
        <th>Right Wing News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/right-wing-news/)</th>
    </tr>
    <tr>
        <th>Right Wing News (Rightwing.news)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/right-wing-news-rightwing-news/)</th>
    </tr>
    <tr>
        <th>Right Wing Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/right-wing-tribune/)</th>
    </tr>
    <tr>
        <th>RINF</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rinf/)</th>
    </tr>
    <tr>
        <th>Rodong Sinmun (North Korea)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rodong-sinmun-north-korea/)</th>
    </tr>
    <tr>
        <th>RT News (RT.Com)</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rt-news/)</th>
    </tr>
    <tr>
        <th>Ruth Institute</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ruth-institute/)</th>
    </tr>
    <tr>
        <th>Santa Monica Observer</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/santa-monica-observer/)</th>
    </tr>
    <tr>
        <th>Shared News Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/shared-news-report/)</th>
    </tr>
    <tr>
        <th>Sharia Watch UK</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sharia-watch-uk/)</th>
    </tr>
    <tr>
        <th>SHTFplan.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/shtfplan-com/)</th>
    </tr>
    <tr>
        <th>Smoloko News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/smoloko-news/)</th>
    </tr>
    <tr>
        <th>South Africa Today</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/south-africa-today/)</th>
    </tr>
    <tr>
        <th>SpeakGov.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/speakgov-com/)</th>
    </tr>
    <tr>
        <th>South Jersey Mechanic (Trump News)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/south-jersey-mechanic-trump-news/)</th>
    </tr>
    <tr>
        <th>Speisa</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/speisa/)</th>
    </tr>
    <tr>
        <th>Spinzon</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/spinzon/)</th>
    </tr>
    <tr>
        <th>Sputnik News</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sputnik-news/)</th>
    </tr>
    <tr>
        <th>Squawker</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/squawker/)</th>
    </tr>
    <tr>
        <th>Stares at the World</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/stares-at-the-world/)</th>
    </tr>
    <tr>
        <th>State Fort Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/state-fort-daily/)</th>
    </tr>
    <tr>
        <th>State of the Nation 2012</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/state-of-the-union-2012/)</th>
    </tr>
    <tr>
        <th>Steadfast and Loyal</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/steadfast-and-loyal/)</th>
    </tr>
    <tr>
        <th>Stone Cold Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/stone-cold-truth/)</th>
    </tr>
    <tr>
        <th>Studio News Network</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/studio-news-network/)</th>
    </tr>
    <tr>
        <th>Subject Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/subject-politics/)</th>
    </tr>
    <tr>
        <th>Supreme Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/supreme-patriot/)</th>
    </tr>
    <tr>
        <th>Sure News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sure-news/)</th>
    </tr>
    <tr>
        <th>Svijmedia.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/svijmedia-com/)</th>
    </tr>
    <tr>
        <th>SwampDrain.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/swampdrain-com/)</th>
    </tr>
    <tr>
        <th>Taki’s Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/takis-magazine/)</th>
    </tr>
    <tr>
        <th>TashNews</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tashnews/)</th>
    </tr>
    <tr>
        <th>Tea Party Inc</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tea-party-inc/)</th>
    </tr>
    <tr>
        <th>TD Newswire</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/td-newswire/)</th>
    </tr>
    <tr>
        <th>TdtAlliance.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tdtalliance-com/)</th>
    </tr>
    <tr>
        <th>Teddy Stick</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/teddy-stick/)</th>
    </tr>
    <tr>
        <th>Tell Me Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tell-me-now/)</th>
    </tr>
    <tr>
        <th>Tell Me Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tell-me-now/)</th>
    </tr>
    <tr>
        <th>TheBreakingNews</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/thebreakingnews/)</th>
    </tr>
    <tr>
        <th>The African Exponent</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-african-exponent/)</th>
    </tr>
    <tr>
        <th>The American Mirror</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-american-mirror/)</th>
    </tr>
    <tr>
        <th>The Angry Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-angry-patriot/)</th>
    </tr>
    <tr>
        <th>The Boston Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-boston-tribune/)</th>
    </tr>
    <tr>
        <th>The Conservative Brief</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-conservative-brief/)</th>
    </tr>
    <tr>
        <th>The D.C. Clothesline</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-d-c-clothesline/)</th>
    </tr>
    <tr>
        <th>The Daily Bell</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-bell/)</th>
    </tr>
    <tr>
        <th>The Deplorable Society</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-deplorable-society/)</th>
    </tr>
    <tr>
        <th>The Deplorables</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-deplorables/)</th>
    </tr>
    <tr>
        <th>The Duran</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-duran/)</th>
    </tr>
    <tr>
        <th>The Federalist Papers Project</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-federalist-papers-project/)</th>
    </tr>
    <tr>
        <th>The Federation for American Immigration Reform (FAIR)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-federation-for-american-immigration-reform-fair/)</th>
    </tr>
    <tr>
        <th>The Free Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-free-patriot/)</th>
    </tr>
    <tr>
        <th>The Free Telegraph</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-free-telegraph/)</th>
    </tr>
    <tr>
        <th>The Gateway Pundit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-gateway-pundit/)</th>
    </tr>
    <tr>
        <th>The Goldwater</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-goldwater/)</th>
    </tr>
    <tr>
        <th>The Horn News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-horn-news/)</th>
    </tr>
    <tr>
        <th>The Last Resistance</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-last-resistance/)</th>
    </tr>
    <tr>
        <th>The Liberty Eagle</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-liberty-eagle/)</th>
    </tr>
    <tr>
        <th>The Millennium Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-millennium-report/)</th>
    </tr>
    <tr>
        <th>The National Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-national-patriot/)</th>
    </tr>
    <tr>
        <th>The National Pulse</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-national-pulse/)</th>
    </tr>
    <tr>
        <th>The New Observer</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-new-observer/)</th>
    </tr>
    <tr>
        <th>The News Guru</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-news-guru/)</th>
    </tr>
    <tr>
        <th>The New York Evening</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-new-york-evening/)</th>
    </tr>
    <tr>
        <th>The Other 98%</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-other-98/)</th>
    </tr>
    <tr>
        <th>The Peoples Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-peoples-truth/)</th>
    </tr>
    <tr>
        <th>The Political Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-political-tribune/)</th>
    </tr>
    <tr>
        <th>The Premium News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-premium-news/)</th>
    </tr>
    <tr>
        <th>The Proud Liberal</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-proud-liberal/)</th>
    </tr>
    <tr>
        <th>The Religion of Peace</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-religion-of-peace/)</th>
    </tr>
    <tr>
        <th>The Remnant Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-remnant-magazine/)</th>
    </tr>
    <tr>
        <th>The Right Stuff</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-right-stuff/)</th>
    </tr>
    <tr>
        <th>The Science News Reporter</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-science-news-reporter/)</th>
    </tr>
    <tr>
        <th>The Trump Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-trump-media/)</th>
    </tr>
    <tr>
        <th>The Truth Division</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-truth-division/)</th>
    </tr>
    <tr>
        <th>The Unz Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-unz-report/)</th>
    </tr>
    <tr>
        <th>The US Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-us-patriot/)</th>
    </tr>
    <tr>
        <th>The USA Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-usa-conservative/)</th>
    </tr>
    <tr>
        <th>The Washington Feed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-washington-feed/)</th>
    </tr>
    <tr>
        <th>The Washington Reporter</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-washington-reporter/)</th>
    </tr>
    <tr>
        <th>Think Americana</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/think-americana/)</th>
    </tr>
    <tr>
        <th>The Times of America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-times-of-america/)</th>
    </tr>
    <tr>
        <th>Today Dispatch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/today-dispatch/)</th>
    </tr>
    <tr>
        <th>Top Right News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/top-right-news/)</th>
    </tr>
    <tr>
        <th>Top Topic</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/top-topic/)</th>
    </tr>
    <tr>
        <th>TriggerReset</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/triggerreset/)</th>
    </tr>
    <tr>
        <th>Truth and Action</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-and-action/)</th>
    </tr>
    <tr>
        <th>True Activist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/true-activist/)</th>
    </tr>
    <tr>
        <th>True Blue Scoop</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/true-blue-scoop/)</th>
    </tr>
    <tr>
        <th>True Trumpers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/true-trumpers/)</th>
    </tr>
    <tr>
        <th>Trump.News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/trump-news/)</th>
    </tr>
    <tr>
        <th>Trumpservative News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/trumpservative-news/)</th>
    </tr>
    <tr>
        <th>Truth Examiner</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-examiner/)</th>
    </tr>
    <tr>
        <th>TruthFeed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truthfeed/)</th>
    </tr>
    <tr>
        <th>Truth in Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-in-media/)</th>
    </tr>
    <tr>
        <th>Truth Monitor</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-monitor/)</th>
    </tr>
    <tr>
        <th>Truth Revolt</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-revolt/)</th>
    </tr>
    <tr>
        <th>Truth Uncensored</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/truth-uncensored/)</th>
    </tr>
    <tr>
        <th>Uncle Sams Misguided Children</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/uncle-sams-misguided-children/)</th>
    </tr>
    <tr>
        <th>Underground Journalist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/underground-journalist/)</th>
    </tr>
    <tr>
        <th>Understanding The Threat</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/understanding-the-threat/)</th>
    </tr>
    <tr>
        <th>Unique Web Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/unique-web-magazine/)</th>
    </tr>
    <tr>
        <th>Universe Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/universe-politics/)</th>
    </tr>
    <tr>
        <th>US Advisor</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-advisor/)</th>
    </tr>
    <tr>
        <th>US Chronicle</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-chronicle/)</th>
    </tr>
    <tr>
        <th>US Herald</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-herald/)</th>
    </tr>
    <tr>
        <th>US Info News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-info-news/)</th>
    </tr>
    <tr>
        <th>US Journal Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/us-journal-review/)</th>
    </tr>
    <tr>
        <th>US Postman</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-postman/)</th>
    </tr>
    <tr>
        <th>USA Conservative Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usa-conservative-report/)</th>
    </tr>
    <tr>
        <th>USA Daily Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-daily-post/)</th>
    </tr>
    <tr>
        <th>USA Daily Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usa-daily-review/)</th>
    </tr>
    <tr>
        <th>USA Daily Time</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-daily-time/)</th>
    </tr>
    <tr>
        <th>USA Dose News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-dose-news/)</th>
    </tr>
    <tr>
        <th>USAFirstInfo</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usafirstinfo/)</th>
    </tr>
    <tr>
        <th>USA in Front</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usa-in-front/)</th>
    </tr>
    <tr>
        <th>USAnetwork.info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usanetwork-info/)</th>
    </tr>
    <tr>
        <th>USA Newsflash</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-newsflash/)</th>
    </tr>
    <tr>
        <th>USA News for You</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-news-for-you/)</th>
    </tr>
    <tr>
        <th>USA News/Politics USA News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-newspolitics-usa-news/)</th>
    </tr>
    <tr>
        <th>USA News/States-TV</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-newsstates-tv/)</th>
    </tr>
    <tr>
        <th>USANewsToday</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usanewstoday/)</th>
    </tr>
    <tr>
        <th>USA Politics Now</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-politics-now/)</th>
    </tr>
    <tr>
        <th>USA Public Life</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usa-public-life/)</th>
    </tr>
    <tr>
        <th>USA Really</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usa-really/)</th>
    </tr>
    <tr>
        <th>USA Supreme</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-supreme/)</th>
    </tr>
    <tr>
        <th>USA Viral News Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/usa-viral-news-today/)</th>
    </tr>
    <tr>
        <th>USA World Box</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-world-box/)</th>
    </tr>
    <tr>
        <th>US National News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/us-national-news/)</th>
    </tr>
    <tr>
        <th>Vanguard America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vanguard-america/)</th>
    </tr>
    <tr>
        <th>Vatican Radio</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vatican-radio/)</th>
    </tr>
    <tr>
        <th>VDARE</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vdare/)</th>
    </tr>
    <tr>
        <th>Vidmax</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vidmax-2/)</th>
    </tr>
    <tr>
        <th>Viral Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/viral-patriot/)</th>
    </tr>
    <tr>
        <th>Voice of Europe</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/voice-of-europe/)</th>
    </tr>
    <tr>
        <th>Walk With Her</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/walk-with-her/)</th>
    </tr>
    <tr>
        <th>WallBuilders</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wallbuilders/)</th>
    </tr>
    <tr>
        <th>Web Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/web-daily/)</th>
    </tr>
    <tr>
        <th>We Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/we-conservative/)</th>
    </tr>
    <tr>
        <th>Western Sentinel</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/western-sentinel/)</th>
    </tr>
    <tr>
        <th>Winning Democrats</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeleft01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/winning-democrats/)</th>
    </tr>
    <tr>
        <th>Witherspoon Institute</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/witherspoon-institute/)</th>
    </tr>
    <tr>
        <th>World Net Daily (WND)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-net-daily-wnd/)</th>
    </tr>
    <tr>
        <th>Woke Sloth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeleft04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/woke-sloth/)</th>
    </tr>
    <tr>
        <th>World News Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-news-politics/)</th>
    </tr>
    <tr>
        <th>WorldPolitics News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/worldpolitics-news/)</th>
    </tr>
    <tr>
        <th>World Politicus</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-politicus/)</th>
    </tr>
    <tr>
        <th>Yes, I’m Right</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/yes-im-right/)</th>
    </tr>
    <tr>
        <th>ZootFeed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th>[extremeright021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/zootfeed/)</th>
    </tr>
    <tr>
        <th>Act.TV</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/act-tv/)</th>
    </tr>
    <tr>
        <th>Addicting Info</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left5.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/addicting-info/)</th>
    </tr>
    <tr>
        <th>Advocate</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/advocate/)</th>
    </tr>
    <tr>
        <th>Aftonbladet</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/aftonbladet/)</th>
    </tr>
    <tr>
        <th>Akkadian Times</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/akkadian-times/)</th>
    </tr>
    <tr>
        <th>Alliance for Justice (AFJ)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/alliance-for-justice-afj/)</th>
    </tr>
    <tr>
        <th>All That’s Fab</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/all-thats-fab/)</th>
    </tr>
    <tr>
        <th>AlterNet</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/alternet/)</th>
    </tr>
    <tr>
        <th>Amandla</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/amandla/)</th>
    </tr>
    <tr>
        <th>AmericaBlog</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/americablog/)</th>
    </tr>
    <tr>
        <th>American Bridge 21st Century</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-bridge-21st-century/)</th>
    </tr>
    <tr>
        <th>American News X</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-news-x/)</th>
    </tr>
    <tr>
        <th>American United for Separation of Church and State</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-united-separation-church-state/)</th>
    </tr>
    <tr>
        <th>Angry White Men</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/angry-white-men/)</th>
    </tr>
    <tr>
        <th>Anti-Fascist News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/anti-fascist-news/)</th>
    </tr>
    <tr>
        <th>AutoStraddle</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/autostraddle/)</th>
    </tr>
    <tr>
        <th>Backed by Fact</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/backed-by-fact/)</th>
    </tr>
    <tr>
        <th>Baltimore City Paper</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/baltimore-city-paper/)</th>
    </tr>
    <tr>
        <th>Bay Area Reporter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bay-area-reporter/)</th>
    </tr>
    <tr>
        <th>Being Liberal</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/being-liberal/)</th>
    </tr>
    <tr>
        <th>Bitch Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bitch-media/)</th>
    </tr>
    <tr>
        <th>Black Agenda Report</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/black-agenda-report/)</th>
    </tr>
    <tr>
        <th>Black Lives Matter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/black-lives-matter/)</th>
    </tr>
    <tr>
        <th>Blue Dot Daily</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeleft06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/blue-dot-daily/)</th>
    </tr>
    <tr>
        <th>Blue Nation Review</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/blue-nation-review/)</th>
    </tr>
    <tr>
        <th>Blue State Daily</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/blue-state-daily/)</th>
    </tr>
    <tr>
        <th>Boing Boing</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/boing-boing/)</th>
    </tr>
    <tr>
        <th>Boston Review</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/boston-review/)</th>
    </tr>
    <tr>
        <th>Breitbart Unmasked</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/breitbart-unmasked/)</th>
    </tr>
    <tr>
        <th>Bust Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bust-magazine/)</th>
    </tr>
    <tr>
        <th>Canadian Dimension</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/canadian-dimension/)</th>
    </tr>
    <tr>
        <th>Capital & Main</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/capital-main/)</th>
    </tr>
    <tr>
        <th>Carbonated TV</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/carbonated-tv/)</th>
    </tr>
    <tr>
        <th>Care2</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/care2/)</th>
    </tr>
    <tr>
        <th>Center for American Progress</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-american-progress/)</th>
    </tr>
    <tr>
        <th>Center for Media and Democracy (PR Watch)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-media-and-democracy/)</th>
    </tr>
    <tr>
        <th>Certified Politics</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/certified-politics/)</th>
    </tr>
    <tr>
        <th>Change.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/change-org/)</th>
    </tr>
    <tr>
        <th>Chicago Reader</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/chicago-reader/)</th>
    </tr>
    <tr>
        <th>Chronicles of Democracy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/chronicles-of-democracy/)</th>
    </tr>
    <tr>
        <th>Citizen Critics</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/citizen-critics/)</th>
    </tr>
    <tr>
        <th>CNN</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cnn/)</th>
    </tr>
    <tr>
        <th>Code Pink</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/code-pink/)</th>
    </tr>
    <tr>
        <th>Common Dreams</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/common-dreams/)</th>
    </tr>
    <tr>
        <th>Content News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/content-news/)</th>
    </tr>
    <tr>
        <th>Cosmopolitan</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cosmopolitan/)</th>
    </tr>
    <tr>
        <th>CounterCurrents.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/countercurrents-org/)</th>
    </tr>
    <tr>
        <th>CounterPunch</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/counterpunch/)</th>
    </tr>
    <tr>
        <th>CrimethInc</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/crimethinc/)</th>
    </tr>
    <tr>
        <th>Crooked Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/crooked-media/)</th>
    </tr>
    <tr>
        <th>Crooks and Liars</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/crooks-and-liars/)</th>
    </tr>
    <tr>
        <th>Current Affairs Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/current-affairs-magazine/)</th>
    </tr>
    <tr>
        <th>Curve Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/curve-magazine/)</th>
    </tr>
    <tr>
        <th>Daily 49er</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-49er/)</th>
    </tr>
    <tr>
        <th>Daily Beast</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-beast/)</th>
    </tr>
    <tr>
        <th>Daily Dems</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-dems/)</th>
    </tr>
    <tr>
        <th>Daily Dot</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-dot/)</th>
    </tr>
    <tr>
        <th>Daily Kos</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-kos/)</th>
    </tr>
    <tr>
        <th>Daily Mirror</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-mirror/)</th>
    </tr>
    <tr>
        <th>Daily News Bin</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-news-bin/)</th>
    </tr>
    <tr>
        <th>Daily Record (Scotland)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-record-scotland/)</th>
    </tr>
    <tr>
        <th>Dallas Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dallas-voice/)</th>
    </tr>
    <tr>
        <th>DC Tribune</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dc-tribune/)</th>
    </tr>
    <tr>
        <th>Deadspin</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deadspin/)</th>
    </tr>
    <tr>
        <th>Dead State</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dead-state/)</th>
    </tr>
    <tr>
        <th>DeathandTaxes</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/deathandtaxes/)</th>
    </tr>
    <tr>
        <th>Deep Left Field</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deep-left-field/)</th>
    </tr>
    <tr>
        <th>DeepStateNation.com</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deepstatenation-com/)</th>
    </tr>
    <tr>
        <th>Democracy Chronicles</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/democracy-chronicles/)</th>
    </tr>
    <tr>
        <th>Democracy Guardian</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/democracy-guardian/)</th>
    </tr>
    <tr>
        <th>Democracy Now</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/democracy-now/)</th>
    </tr>
    <tr>
        <th>Democratic Underground</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/democratic-underground/)</th>
    </tr>
    <tr>
        <th>DeSmog</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/desmog/)</th>
    </tr>
    <tr>
        <th>Die Hard Democrat</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/die-hard-democrat/)</th>
    </tr>
    <tr>
        <th>Dissent Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dissent-magazine/)</th>
    </tr>
    <tr>
        <th>Drudge Retort</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/drudge-retort/)</th>
    </tr>
    <tr>
        <th>Earth First Journal</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/earth-first-journal/)</th>
    </tr>
    <tr>
        <th>Economy In Crisis</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left6.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/economy-in-crisis/)</th>
    </tr>
    <tr>
        <th>EgbertoWillies</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/egbertowillies/)</th>
    </tr>
    <tr>
        <th>Electoral-Vote.com</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/electoral-vote-com/)</th>
    </tr>
    <tr>
        <th>Electronic Intifada</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/electronic-intifada/)</th>
    </tr>
    <tr>
        <th>Elisabeth Parker</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/elisabeth-parker/)</th>
    </tr>
    <tr>
        <th>Elite Daily</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/elite-daily/)</th>
    </tr>
    <tr>
        <th>Esquire Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/esquire-magazine/)</th>
    </tr>
    <tr>
        <th>Everyday Feminism</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/everyday-feminism/)</th>
    </tr>
    <tr>
        <th>Evonomics</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/evonomics/)</th>
    </tr>
    <tr>
        <th>ExtraNewsFeed</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](https://mediabiasfactcheck.com/extranewsfeed/)</th>
    </tr>
    <tr>
        <th>Feminist Current</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/feminist-current/)</th>
    </tr>
    <tr>
        <th>Feministing</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](https://mediabiasfactcheck.com/feministing/)</th>
    </tr>
    <tr>
        <th>Fifth Estate</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fifth-estate/)</th>
    </tr>
    <tr>
        <th>Filming Cops</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/filming-cops/)</th>
    </tr>
    <tr>
        <th>First Post</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/first-post/)</th>
    </tr>
    <tr>
        <th>Food and Water Watch</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/food-and-water-watch/)</th>
    </tr>
    <tr>
        <th>Foreign Policy Journal</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/foreign-policy-journal/)</th>
    </tr>
    <tr>
        <th>Foreign Policy News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/foreign-policy-news/)</th>
    </tr>
    <tr>
        <th>Forward Progressives</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/forward-progressives/)</th>
    </tr>
    <tr>
        <th>Freedom From Religion Foundation (FFRF)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/freedom-religion-foundation-ffrf/)</th>
    </tr>
    <tr>
        <th>Free Press</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/free-press-2/)</th>
    </tr>
    <tr>
        <th>Free Rein News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/free-rein-report/)</th>
    </tr>
    <tr>
        <th>Freedom News and Journal</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/freedom-news-and-journal/)</th>
    </tr>
    <tr>
        <th>FStv (freespeech.org)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fstv-freespeech-org/)</th>
    </tr>
    <tr>
        <th>Gizmodo</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gizmodo/)</th>
    </tr>
    <tr>
        <th>Global Voices</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/global-voices/)</th>
    </tr>
    <tr>
        <th>Globe Today</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/globe-today/)</th>
    </tr>
    <tr>
        <th>Good Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/good-magazine/)</th>
    </tr>
    <tr>
        <th>GOPOCALYPSE</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gopocalypse/)</th>
    </tr>
    <tr>
        <th>GQ Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gq-magazine/)</th>
    </tr>
    <tr>
        <th>Grasping Reality With Both Hands: Bradford DeLong</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/grasping-reality-hands-bradford-delong/)</th>
    </tr>
    <tr>
        <th>Green Left Weekly</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/green-left-weekly/)</th>
    </tr>
    <tr>
        <th>Greenville Gazette</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/greenville-gazette/)</th>
    </tr>
    <tr>
        <th>Grit Post</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/grit-post/)</th>
    </tr>
    <tr>
        <th>Groopspeak</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/groopspeak/)</th>
    </tr>
    <tr>
        <th>Guardian Liberty Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/guardian-liberty-voice/)</th>
    </tr>
    <tr>
        <th>Guardians of Democracy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/guardians-of-democracy/)</th>
    </tr>
    <tr>
        <th>Happy Foxie</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/happy-foxie/)</th>
    </tr>
    <tr>
        <th>Hill Reporter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hill-reporter/)</th>
    </tr>
    <tr>
        <th>Huffington Post (HuffPost)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/05/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/huffington-post/)</th>
    </tr>
    <tr>
        <th>Human Rights Campaign (HRC)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/human-rights-campaign/)</th>
    </tr>
    <tr>
        <th>Impeach Trump Now</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/impeach-donald-trump/)</th>
    </tr>
    <tr>
        <th>In Defence of Marxism</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/in-defence-of-marxism/)</th>
    </tr>
    <tr>
        <th>Independent Reporter (Ir.net)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/independent-reporter-ir-net/)</th>
    </tr>
    <tr>
        <th>Inequality Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/inequality-media/)</th>
    </tr>
    <tr>
        <th>Informed Comment</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/informed-comment/)</th>
    </tr>
    <tr>
        <th>Institute for Policy Studies</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/institute-policy-studies/)</th>
    </tr>
    <tr>
        <th>International Viewpoint</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/international-viewpoint/)</th>
    </tr>
    <tr>
        <th>In These Times</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/in-these-times/)</th>
    </tr>
    <tr>
        <th>Intrepid Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/intrepid-report/)</th>
    </tr>
    <tr>
        <th>Iowa Starting Line</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/iowa-starting-line/)</th>
    </tr>
    <tr>
        <th>It’s Going Down</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/its-going-down/)</th>
    </tr>
    <tr>
        <th>Jacobin</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jacobin/)</th>
    </tr>
    <tr>
        <th>Jezebel</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left1.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jezebel/)</th>
    </tr>
    <tr>
        <th>Latest.com</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/latest-com/)</th>
    </tr>
    <tr>
        <th>Lavender Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lavender-magazine/)</th>
    </tr>
    <tr>
        <th>Left Action</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left5.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/left-action/)</th>
    </tr>
    <tr>
        <th>Left Foot Forward</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/left-foot-forward/)</th>
    </tr>
    <tr>
        <th>Left Over Rights</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/left-over-rights/)</th>
    </tr>
    <tr>
        <th>LeftScoop</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/leftscoop/)</th>
    </tr>
    <tr>
        <th>Left Side of History</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/left-side-of-history/)</th>
    </tr>
    <tr>
        <th>Left Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/left-voice/)</th>
    </tr>
    <tr>
        <th>Left Wing Nation</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/left-wing-nation/)</th>
    </tr>
    <tr>
        <th>LGBTQ Nation</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lgbtq-nation/)</th>
    </tr>
    <tr>
        <th>Libcom.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/libcom-org/)</th>
    </tr>
    <tr>
        <th>Liberal America</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left5.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberal-america/)</th>
    </tr>
    <tr>
        <th>Liberal Examiner</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/liberal-examiner/)</th>
    </tr>
    <tr>
        <th>Liberals Unite (Samuel Warde)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberals-unite-samuel-warde/)</th>
    </tr>
    <tr>
        <th>Liberation News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberation-news/)</th>
    </tr>
    <tr>
        <th>Little Green Footballs</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/little-green-footballs/)</th>
    </tr>
    <tr>
        <th>Love Knowledge</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/love-knowledge/)</th>
    </tr>
    <tr>
        <th>Mashable</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mashable/)</th>
    </tr>
    <tr>
        <th>Mean Left Hook</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mean-left-hook/)</th>
    </tr>
    <tr>
        <th>Mediaite</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mediaite/)</th>
    </tr>
    <tr>
        <th>Media Matters</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/media-matters/)</th>
    </tr>
    <tr>
        <th>Meduza</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/meduza/)</th>
    </tr>
    <tr>
        <th>Merry Jane</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/merry-jane/)</th>
    </tr>
    <tr>
        <th>Miami New Times</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/miami-new-times-2/)</th>
    </tr>
    <tr>
        <th>Middle East Monitor</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/middle-east-monitor/)</th>
    </tr>
    <tr>
        <th>Modern Liberals</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/modern-liberals/)</th>
    </tr>
    <tr>
        <th>Molad The Center for the Renewal of Israeli Democracy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/molad-center-renewal-israeli-democracy/)</th>
    </tr>
    <tr>
        <th>Mondoweiss</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mondoweiss/)</th>
    </tr>
    <tr>
        <th>Moon of Alabama</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/moon-of-alabama/)</th>
    </tr>
    <tr>
        <th>Move On</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/move-on/)</th>
    </tr>
    <tr>
        <th>Ms. (Magazine)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ms-magazine/)</th>
    </tr>
    <tr>
        <th>MSNBC</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/msnbc/)</th>
    </tr>
    <tr>
        <th>Nap-Sack</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nap-sack/)</th>
    </tr>
    <tr>
        <th>Nation of Change</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nation-of-change/)</th>
    </tr>
    <tr>
        <th>New Internationalist</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-internationalist/)</th>
    </tr>
    <tr>
        <th>New Politics Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-politics-magazine/)</th>
    </tr>
    <tr>
        <th>New Republic</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-republic/)</th>
    </tr>
    <tr>
        <th>New Statesman</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-statesman/)</th>
    </tr>
    <tr>
        <th>New York Amsterdam News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/new-york-amsterdam-news/)</th>
    </tr>
    <tr>
        <th>New York Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-york-magazine/)</th>
    </tr>
    <tr>
        <th>New Yorker</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-yorker/)</th>
    </tr>
    <tr>
        <th>News Corpse</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-corpse/)</th>
    </tr>
    <tr>
        <th>NewsHounds</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left5.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newshounds/)</th>
    </tr>
    <tr>
        <th>NewsLogue</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newslogue/)</th>
    </tr>
    <tr>
        <th>Newsweek</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsweek/)</th>
    </tr>
    <tr>
        <th>North99</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/north99/)</th>
    </tr>
    <tr>
        <th>Nova Magazine</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/nova-magazine/)</th>
    </tr>
    <tr>
        <th>Now Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/now-magazine/)</th>
    </tr>
    <tr>
        <th>NowThis News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nowthis-news/)</th>
    </tr>
    <tr>
        <th>Occupy.com</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/occupy-com/)</th>
    </tr>
    <tr>
        <th>One Green Planet</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/one-green-planet/)</th>
    </tr>
    <tr>
        <th>OpEdNews (OEN)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/opednews-oen/)</th>
    </tr>
    <tr>
        <th>Our Voice NY</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](https://mediabiasfactcheck.com/our-voice-ny/)</th>
    </tr>
    <tr>
        <th>The Palestine Chronicle</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-palestine-chronicle/)</th>
    </tr>
    <tr>
        <th>Palmer Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/palmer-report/)</th>
    </tr>
    <tr>
        <th>Paste Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/paste-magazine/)</th>
    </tr>
    <tr>
        <th>Peacock Panache</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/peacock-panache/)</th>
    </tr>
    <tr>
        <th>People for the American Way (PFAW)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/people-american-way-pfaw/)</th>
    </tr>
    <tr>
        <th>People Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/people-magazine/)</th>
    </tr>
    <tr>
        <th>PINAC</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pinac/)</th>
    </tr>
    <tr>
        <th>Pink News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pink-news/)</th>
    </tr>
    <tr>
        <th>Political Dig</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/political-dig/)</th>
    </tr>
    <tr>
        <th>Political Updater</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/political-updater/)</th>
    </tr>
    <tr>
        <th>PoliticusUSA</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/politicususa/)</th>
    </tr>
    <tr>
        <th>Politizoom</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/politizoom/)</th>
    </tr>
    <tr>
        <th>Popular Resistance</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/popular-resistance/)</th>
    </tr>
    <tr>
        <th>Pravda Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pravda-report/)</th>
    </tr>
    <tr>
        <th>Press Progress</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/press-progress/)</th>
    </tr>
    <tr>
        <th>Progressive Army</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/progressive-army/)</th>
    </tr>
    <tr>
        <th>Progressive Liberal</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/progressive-liberal/)</th>
    </tr>
    <tr>
        <th>Project Censored</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/project-censored/)</th>
    </tr>
    <tr>
        <th>Proud Democrat</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left6.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/proud-democrat/)</th>
    </tr>
    <tr>
        <th>PutinTrump.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/putintrump-org/)</th>
    </tr>
    <tr>
        <th>Queerty</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/queerty/)</th>
    </tr>
    <tr>
        <th>Rabble.ca</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rabble-ca/)</th>
    </tr>
    <tr>
        <th>Rantt Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rantt-media/)</th>
    </tr>
    <tr>
        <th>Rappler</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rappler/)</th>
    </tr>
    <tr>
        <th>Raw Progressive</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/raw-progressive/)</th>
    </tr>
    <tr>
        <th>Raw Story</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/raw-story/)</th>
    </tr>
    <tr>
        <th>Reading the Pictures</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/reading-the-pictures/)</th>
    </tr>
    <tr>
        <th>Reader Supported News (RSN)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/reader-supported-news-rsn/)</th>
    </tr>
    <tr>
        <th>Red Pepper</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-pepper/)</th>
    </tr>
    <tr>
        <th>Red State Disaster</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-state-disaster/)</th>
    </tr>
    <tr>
        <th>Red Youth</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/red-youth/)</th>
    </tr>
    <tr>
        <th>Republicans Suck</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/republicans-suck/)</th>
    </tr>
    <tr>
        <th>Republic Report</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/republic-report/)</th>
    </tr>
    <tr>
        <th>Resilience (Post Carbon Institute)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/resilience-post-carbon-institute/)</th>
    </tr>
    <tr>
        <th>Rewire</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rewire/)</th>
    </tr>
    <tr>
        <th>Revcom.us</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/revcom-us/)</th>
    </tr>
    <tr>
        <th>Reverb Press</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/reverb-press/)</th>
    </tr>
    <tr>
        <th>Revere Press</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/revere-press/)</th>
    </tr>
    <tr>
        <th>Revolution News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/revolution-news/)</th>
    </tr>
    <tr>
        <th>Right Wing Watch</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/right-wing-watch/)</th>
    </tr>
    <tr>
        <th>Ring of Fire</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ring-of-fire/)</th>
    </tr>
    <tr>
        <th>Salon</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/salon/)</th>
    </tr>
    <tr>
        <th>Scary Mommy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/scary-mommy/)</th>
    </tr>
    <tr>
        <th>Second Nexus</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/second-nexus/)</th>
    </tr>
    <tr>
        <th>Seventeen</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/seventeen/)</th>
    </tr>
    <tr>
        <th>Shadow Proof</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/shadow-proof/)</th>
    </tr>
    <tr>
        <th>Shareblue</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/shareblue/)</th>
    </tr>
    <tr>
        <th>Slate</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/slate/)</th>
    </tr>
    <tr>
        <th>Smirking Chimp</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/smirking-chimp/)</th>
    </tr>
    <tr>
        <th>Socialist Standard</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/socialist-standard/)</th>
    </tr>
    <tr>
        <th>SocialistWorker.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/socialistworker-org/)</th>
    </tr>
    <tr>
        <th>SourceWatch</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sourcewatch/)</th>
    </tr>
    <tr>
        <th>Sparks/CnnTimes</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sparkscnntimes/)</th>
    </tr>
    <tr>
        <th>Splinter</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/splinter/)</th>
    </tr>
    <tr>
        <th>St. Pete for Peace</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/st-pete-for-peace/)</th>
    </tr>
    <tr>
        <th>Syriana Analysis</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/syriana-analysis/)</th>
    </tr>
    <tr>
        <th>Talking Points Memo</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/talking-points-memo/)</th>
    </tr>
    <tr>
        <th>TakePart</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/takepart/)</th>
    </tr>
    <tr>
        <th>TeleSUR</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/telesur/)</th>
    </tr>
    <tr>
        <th>The American Independent Institute</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-independent-institute/)</th>
    </tr>
    <tr>
        <th>The American Prospect</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-american-prospect/)</th>
    </tr>
    <tr>
        <th>The Austin Chronicle</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-austin-chronicle/)</th>
    </tr>
    <tr>
        <th>The Blue Route</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-blue-route/)</th>
    </tr>
    <tr>
        <th>The Burning Spear</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-burning-spear/)</th>
    </tr>
    <tr>
        <th>The Canary (UK)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-canary-uk/)</th>
    </tr>
    <tr>
        <th>The Climate Reality Project</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-climate-reality-project/)</th>
    </tr>
    <tr>
        <th>The Daily Banter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-banter/)</th>
    </tr>
    <tr>
        <th>The Daily Buzz</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-buzz/)</th>
    </tr>
    <tr>
        <th>The Daily Vox</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-vox/)</th>
    </tr>
    <tr>
        <th>The Democratic Hub</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-democratic-hub/)</th>
    </tr>
    <tr>
        <th>The Dworkin Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-dworkin-report/)</th>
    </tr>
    <tr>
        <th>The Establishment</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-establishment/)</th>
    </tr>
    <tr>
        <th>The Florida Squeeze</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-florida-squeeze/)</th>
    </tr>
    <tr>
        <th>The Frisky</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-frisky/)</th>
    </tr>
    <tr>
        <th>The Fucking News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-fucking-news/)</th>
    </tr>
    <tr>
        <th>TheGrio</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/thegrio/)</th>
    </tr>
    <tr>
        <th>TheImproper Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left5.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png)</th>
        <th>[link](https://mediabiasfactcheck.com/theimproper-magazine/)</th>
    </tr>
    <tr>
        <th>The Indypendent</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-indypendent/)</th>
    </tr>
    <tr>
        <th>The Intellectualist</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-intellectualist/)</th>
    </tr>
    <tr>
        <th>The Intercept</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-intercept/)</th>
    </tr>
    <tr>
        <th>The Lily</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-lily/)</th>
    </tr>
    <tr>
        <th>The London Economic</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-london-economic/)</th>
    </tr>
    <tr>
        <th>The Mary Sue</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-mary-sue/)</th>
    </tr>
    <tr>
        <th>The Militant</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-militant/)</th>
    </tr>
    <tr>
        <th>The Morning Star</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-morning-star/)</th>
    </tr>
    <tr>
        <th>The Nation</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-nation/)</th>
    </tr>
    <tr>
        <th>The National Memo</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-national-memo/)</th>
    </tr>
    <tr>
        <th>The New Civil Rights Movement</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-new-civil-rights-movement/)</th>
    </tr>
    <tr>
        <th>The Outline</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-outline/)</th>
    </tr>
    <tr>
        <th>The Progressive</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-progressive/)</th>
    </tr>
    <tr>
        <th>The Progressive Frontier</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-progressive-frontier/)</th>
    </tr>
    <tr>
        <th>The Reality-Based Community</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/reality-based-community/)</th>
    </tr>
    <tr>
        <th>The Root</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-root/)</th>
    </tr>
    <tr>
        <th>The Source Newspaper (La Source)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/source-newspaper-la-source/)</th>
    </tr>
    <tr>
        <th>The Stern Facts</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-stern-facts/)</th>
    </tr>
    <tr>
        <th>The Texas Observer</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-texas-observer/)</th>
    </tr>
    <tr>
        <th>The Village Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-village-voice/)</th>
    </tr>
    <tr>
        <th>The Walrus</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-walrus/)</th>
    </tr>
    <tr>
        <th>The Week (USA)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-week/)</th>
    </tr>
    <tr>
        <th>The World Can’t Wait</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](https://mediabiasfactcheck.com/world-cant-wait/)</th>
    </tr>
    <tr>
        <th>TheosWatch.com</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/theoswatch-com/)</th>
    </tr>
    <tr>
        <th>Think Progress</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/think-progress/)</th>
    </tr>
    <tr>
        <th>This Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/this-magazine/)</th>
    </tr>
    <tr>
        <th>Towleroad</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/towleroad/)</th>
    </tr>
    <tr>
        <th>Tribune Magazine UK</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tribune-magazine-uk/)</th>
    </tr>
    <tr>
        <th>Truth Against the Machine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/truth-against-the-machine/)</th>
    </tr>
    <tr>
        <th>Truthdig</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truthdig/)</th>
    </tr>
    <tr>
        <th>Truth Out</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-out/)</th>
    </tr>
    <tr>
        <th>Uproxx</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/uproxx/)</th>
    </tr>
    <tr>
        <th>Upworthy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/upworthy/)</th>
    </tr>
    <tr>
        <th>US Political Post</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-political-post/)</th>
    </tr>
    <tr>
        <th>US Uncut</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeleft03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeleft03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-uncut/)</th>
    </tr>
    <tr>
        <th>Vanity Fair</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left9.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vanity-fair/)</th>
    </tr>
    <tr>
        <th>Verified Politics</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/verified-politics/)</th>
    </tr>
    <tr>
        <th>Verrit</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/verrit/)</th>
    </tr>
    <tr>
        <th>Vermont Independent</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png)</th>
        <th>[link](https://mediabiasfactcheck.com/vermont-independent/)</th>
    </tr>
    <tr>
        <th>Viral Title</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/viral-title/)</th>
    </tr>
    <tr>
        <th>Vote</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vote/)</th>
    </tr>
    <tr>
        <th>Vox</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left7.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vox/)</th>
    </tr>
    <tr>
        <th>Washington Daily Wire</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left2.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-daily-wire/)</th>
    </tr>
    <tr>
        <th>Washington Journal (Not C-Span)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-journal-not-c-span/)</th>
    </tr>
    <tr>
        <th>Washington Monthly</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left12.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/washington-monthly/)</th>
    </tr>
    <tr>
        <th>Washington Press</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-press/)</th>
    </tr>
    <tr>
        <th>Washington Sources</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-sources/)</th>
    </tr>
    <tr>
        <th>Wear Your Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wear-your-voice/)</th>
    </tr>
    <tr>
        <th>What Matters News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left4.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png)</th>
        <th>[link](https://mediabiasfactcheck.com/what-matters-news/)</th>
    </tr>
    <tr>
        <th>White House Watch</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left1.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png)</th>
        <th>[link](https://mediabiasfactcheck.com/white-house-watch/)</th>
    </tr>
    <tr>
        <th>Who.What.Why</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left9.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png)</th>
        <th>[link](https://mediabiasfactcheck.com/who-what-why/)</th>
    </tr>
    <tr>
        <th>Wonkette</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left4.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wonkette/)</th>
    </tr>
    <tr>
        <th>Workers World</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](https://mediabiasfactcheck.com/workers-world/)</th>
    </tr>
    <tr>
        <th>World Socialist Web Site</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left6.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-socialist-web-site/)</th>
    </tr>
    <tr>
        <th>Yes Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/yes-magazine/)</th>
    </tr>
    <tr>
        <th>The Young Turks</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left3.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-young-turks/)</th>
    </tr>
    <tr>
        <th>Your Black World</th>
        <th>MIXED</th>
        <th>Left</th>
        <th>[left8.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png)</th>
        <th>[link](https://mediabiasfactcheck.com/your-black-world/)</th>
    </tr>
    <tr>
        <th>Z Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left8.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png)</th>
        <th>[link](http://mediabiasfactcheck.com/z-magazine/)</th>
    </tr>
    <tr>
        <th>+972 Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/972-magazine/)</th>
    </tr>
    <tr>
        <th>ABC11 Eyewitness News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/abc11-eyewitness-news/)</th>
    </tr>
    <tr>
        <th>ABC News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/abc-news/)</th>
    </tr>
    <tr>
        <th>ABC News Australia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/abc-news-australia/)</th>
    </tr>
    <tr>
        <th>Above the Law</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/above-the-law/)</th>
    </tr>
    <tr>
        <th>Aeon</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/aeon/)</th>
    </tr>
    <tr>
        <th>Affinity Magazine</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/affinity-magazine/)</th>
    </tr>
    <tr>
        <th>African Arguments</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/african-arguments/)</th>
    </tr>
    <tr>
        <th>Al-Hayat</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/al-hayat/)</th>
    </tr>
    <tr>
        <th>Al Jazeera</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/al-jazeera/)</th>
    </tr>
    <tr>
        <th>Al-Masdar News (AMN)</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/al-masdar-news-amn/)</th>
    </tr>
    <tr>
        <th>Al Monitor</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/al-monitor/)</th>
    </tr>
    <tr>
        <th>Al-Sura</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/al-sura/)</th>
    </tr>
    <tr>
        <th>Alan Guttmacher Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/alan-guttmacher-institute/)</th>
    </tr>
    <tr>
        <th>Alaska Dispatch News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/alaska-dispatch-news/)</th>
    </tr>
    <tr>
        <th>Albany Times-Union</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/albany-times-union/)</th>
    </tr>
    <tr>
        <th>Allied Progress</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/allied-progress/)</th>
    </tr>
    <tr>
        <th>Akron Beacon Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/akron-beacon-journal/)</th>
    </tr>
    <tr>
        <th>AM New York</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/am-new-york/)</th>
    </tr>
    <tr>
        <th>America Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/america-magazine/)</th>
    </tr>
    <tr>
        <th>American Civil Liberties Union (ACLU)</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-civil-liberties-union-aclu/)</th>
    </tr>
    <tr>
        <th>American Immigration Council</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-immigration-council/)</th>
    </tr>
    <tr>
        <th>Anniston Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/anniston-star/)</th>
    </tr>
    <tr>
        <th>Anti-Defamation League</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/anti-defamation-league/)</th>
    </tr>
    <tr>
        <th>American Public Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-public-media/)</th>
    </tr>
    <tr>
        <th>AOL</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/aol/)</th>
    </tr>
    <tr>
        <th>APM Reports</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/apm-reports/)</th>
    </tr>
    <tr>
        <th>Ara News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ara-news/)</th>
    </tr>
    <tr>
        <th>Areo Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/areo-magazine/)</th>
    </tr>
    <tr>
        <th>Arizona Daily Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/arizona-daily-star/)</th>
    </tr>
    <tr>
        <th>Arizona Daily Sun</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/arizona-daily-sun/)</th>
    </tr>
    <tr>
        <th>Arkansas Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/arkansas-times/)</th>
    </tr>
    <tr>
        <th>Asheville Citizen-Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/asheville-citizen-times/)</th>
    </tr>
    <tr>
        <th>Asia Sentinel</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/asia-sentinel/)</th>
    </tr>
    <tr>
        <th>Asian Correspondent</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/asian-correspondent/)</th>
    </tr>
    <tr>
        <th>Atavist Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/atavist-magazine/)</th>
    </tr>
    <tr>
        <th>Atlanta Black Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/atlanta-black-star/)</th>
    </tr>
    <tr>
        <th>Atlanta Journal-Constitution</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/atlanta-journal-constitution/)</th>
    </tr>
    <tr>
        <th>The Atlantic</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-atlantic/)</th>
    </tr>
    <tr>
        <th>Atlantic Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/atlantic-media/)</th>
    </tr>
    <tr>
        <th>ATTN:</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/attn/)</th>
    </tr>
    <tr>
        <th>Austin American-Statesman</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/austin-american-statesman/)</th>
    </tr>
    <tr>
        <th>Axios</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/axios/)</th>
    </tr>
    <tr>
        <th>BackChannel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/backchannel/)</th>
    </tr>
    <tr>
        <th>Balkan Insight</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/balkan-insight/)</th>
    </tr>
    <tr>
        <th>Baltimore Sun</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/baltimore-sun/)</th>
    </tr>
    <tr>
        <th>Bangor Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bangor-daily-news/)</th>
    </tr>
    <tr>
        <th>Baptist News Global</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/baptist-news-global/)</th>
    </tr>
    <tr>
        <th>Battle Creek Enquirer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/battle-creek-enquirer/)</th>
    </tr>
    <tr>
        <th>BBC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bbc/)</th>
    </tr>
    <tr>
        <th>Beijing Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/beijing-review/)</th>
    </tr>
    <tr>
        <th>Berkeleyside</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/berkeleyside/)</th>
    </tr>
    <tr>
        <th>Berkshire Eagle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/berkshire-eagle/)</th>
    </tr>
    <tr>
        <th>BillMoyers.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/billmoyers-com/)</th>
    </tr>
    <tr>
        <th>Bing News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bing-news/)</th>
    </tr>
    <tr>
        <th>Birmingham Mail</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/birmingham-mail/)</th>
    </tr>
    <tr>
        <th>BlastingNews</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/blastingnews/)</th>
    </tr>
    <tr>
        <th>Bloomberg News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bloomberg/)</th>
    </tr>
    <tr>
        <th>Bluestem Prairie</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bluestem-prairie/)</th>
    </tr>
    <tr>
        <th>Boston Globe</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/boston-globe/)</th>
    </tr>
    <tr>
        <th>Boy Genius Report (BGR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/boy-genius-report-bgr/)</th>
    </tr>
    <tr>
        <th>Brennan Center for Justice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/brennan-center-for-justice/)</th>
    </tr>
    <tr>
        <th>Brookings Institution</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/brookings-institute/)</th>
    </tr>
    <tr>
        <th>Buffalo News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/buffalo-news/)</th>
    </tr>
    <tr>
        <th>Business Insider</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/business-insider/)</th>
    </tr>
    <tr>
        <th>Bustle Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bustle-magazine/)</th>
    </tr>
    <tr>
        <th>Buzzfeed</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/buzzfeed/)</th>
    </tr>
    <tr>
        <th>Calgary Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/calgary-herald/)</th>
    </tr>
    <tr>
        <th>CalWatchdog.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/calwatchdog-com/)</th>
    </tr>
    <tr>
        <th>Canadaland</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/canadaland/)</th>
    </tr>
    <tr>
        <th>Capital Gazette</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/capital-gazette/)</th>
    </tr>
    <tr>
        <th>Carolina Public Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/carolina-public-press/)</th>
    </tr>
    <tr>
        <th>Caribbean Life News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/caribbean-life-news/)</th>
    </tr>
    <tr>
        <th>CBC News (Canadian Broadcasting)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cbc-news-canadian-broadcasting/)</th>
    </tr>
    <tr>
        <th>CBS News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cbs-news/)</th>
    </tr>
    <tr>
        <th>CCTV America</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cctv-america/)</th>
    </tr>
    <tr>
        <th>Center for International Policy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-international-policy/)</th>
    </tr>
    <tr>
        <th>Center for Popular Democracy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/center-popular-democracy/)</th>
    </tr>
    <tr>
        <th>The Center on Budget and Policy Priorities</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-center-on-budget-and-policy-priorities/)</th>
    </tr>
    <tr>
        <th>Charleston Gazette-Mail</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/charleston-gazette-mail/)</th>
    </tr>
    <tr>
        <th>Charlotte Observer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/charlotte-observer/)</th>
    </tr>
    <tr>
        <th>Cheddar</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/cheddar/)</th>
    </tr>
    <tr>
        <th>The Chicago Reporter</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-chicago-reporter/)</th>
    </tr>
    <tr>
        <th>Chicago Sun Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/chicago-sun-times/)</th>
    </tr>
    <tr>
        <th>Citizens for Legitimate Government (CLG News)</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/citizens-for-legitimate-government-clg-news/)</th>
    </tr>
    <tr>
        <th>Citizens for Responsibility and Ethics in Washington (CREW)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/citizens-responsibility-ethics-washington-crew/)</th>
    </tr>
    <tr>
        <th>Citizens for Tax Justice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/citizens-for-tax-justice/)</th>
    </tr>
    <tr>
        <th>Citizen Truth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/citizen-truth/)</th>
    </tr>
    <tr>
        <th>Clean Technica</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/clean-technica/)</th>
    </tr>
    <tr>
        <th>CNBC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cnbc/)</th>
    </tr>
    <tr>
        <th>Columbia Journalism Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/columbia-journalism-review/)</th>
    </tr>
    <tr>
        <th>Colombia Reports</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/columbia-reports/)</th>
    </tr>
    <tr>
        <th>Committee to Investigate Russia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/committee-investigate-russia/)</th>
    </tr>
    <tr>
        <th>Common Cause</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/common-cause/)</th>
    </tr>
    <tr>
        <th>Commonweal Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/commonweal-magazine/)</th>
    </tr>
    <tr>
        <th>Commonwealth Fund</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/commonwealth-fund/)</th>
    </tr>
    <tr>
        <th>Corporate Presidency</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/corporate-presidency/)</th>
    </tr>
    <tr>
        <th>Council for the National Interest</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/council-for-the-national-interest/)</th>
    </tr>
    <tr>
        <th>Credo Action</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/credo-action/)</th>
    </tr>
    <tr>
        <th>Crosscut.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/crosscut-com/)</th>
    </tr>
    <tr>
        <th>CT Mirror</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ct-mirror/)</th>
    </tr>
    <tr>
        <th>CTV News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ctv-news/)</th>
    </tr>
    <tr>
        <th>Daily Hive</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-hive/)</th>
    </tr>
    <tr>
        <th>Dawn</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dawn/)</th>
    </tr>
    <tr>
        <th>DCReport.org</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dcreport-org/)</th>
    </tr>
    <tr>
        <th>Deadline Hollywood</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/deadline-hollywood/)</th>
    </tr>
    <tr>
        <th>Deccan Herald</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deccan-herald/)</th>
    </tr>
    <tr>
        <th>Delaware Online – The News Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/delaware-online-news-journal/)</th>
    </tr>
    <tr>
        <th>Democracy 21</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/democracy-21/)</th>
    </tr>
    <tr>
        <th>Democrat and Chronicle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/democrat-and-chronicle/)</th>
    </tr>
    <tr>
        <th>Demos</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/demos/)</th>
    </tr>
    <tr>
        <th>Denver Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/denver-post/)</th>
    </tr>
    <tr>
        <th>Denver Westword</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/denver-westword/)</th>
    </tr>
    <tr>
        <th>Detroit Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/detroit-free-press/)</th>
    </tr>
    <tr>
        <th>Die Zeit</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/die-zeit/)</th>
    </tr>
    <tr>
        <th>Digg</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/digg/)</th>
    </tr>
    <tr>
        <th>DiversityInc</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/diversityinc/)</th>
    </tr>
    <tr>
        <th>Dutch Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dutch-daily-news/)</th>
    </tr>
    <tr>
        <th>Dutch Review</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dutch-review/)</th>
    </tr>
    <tr>
        <th>DW News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dw-news/)</th>
    </tr>
    <tr>
        <th>EarthJustice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/earthjustice/)</th>
    </tr>
    <tr>
        <th>East Bay Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/east-bay-times/)</th>
    </tr>
    <tr>
        <th>Economic Policy Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/economic-policy-institute/)</th>
    </tr>
    <tr>
        <th>Economics.Help</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/economics-help/)</th>
    </tr>
    <tr>
        <th>Edmonton Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/edmonton-journal/)</th>
    </tr>
    <tr>
        <th>Electronic Frontier Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/electronic-frontier-foundation/)</th>
    </tr>
    <tr>
        <th>El Pais</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/el-pais/)</th>
    </tr>
    <tr>
        <th>El Paso Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/el-paso-times/)</th>
    </tr>
    <tr>
        <th>Emirates 24/7</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/emirates-247/)</th>
    </tr>
    <tr>
        <th>Empty Wheel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/empty-wheel/)</th>
    </tr>
    <tr>
        <th>Engadget</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/engadget/)</th>
    </tr>
    <tr>
        <th>Euractiv</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/euractiv/)</th>
    </tr>
    <tr>
        <th>EU Observer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/eu-observer/)</th>
    </tr>
    <tr>
        <th>Exposing the Truth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/exposing-the-truth/)</th>
    </tr>
    <tr>
        <th>Factbox.TV</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/factbox-tv/)</th>
    </tr>
    <tr>
        <th>Fact / Myth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/factmyth/)</th>
    </tr>
    <tr>
        <th>Fairness & Accuracy in Reporting (FAIR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fairness-accuracy-in-reporting-fair/)</th>
    </tr>
    <tr>
        <th>FairVote</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fairvote/)</th>
    </tr>
    <tr>
        <th>Fast Company Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fast-company-magazine/)</th>
    </tr>
    <tr>
        <th>Feminist Frequency</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/feminist-frequency/)</th>
    </tr>
    <tr>
        <th>Fight for the Future</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fight-for-the-future/)</th>
    </tr>
    <tr>
        <th>FiveThirtyEight</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fivethirtyeight/)</th>
    </tr>
    <tr>
        <th>Foreign Policy in Focus</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/foreign-policy-focus/)</th>
    </tr>
    <tr>
        <th>Fort Worth Weekly</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fort-worth-weekly/)</th>
    </tr>
    <tr>
        <th>France24</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/france24/)</th>
    </tr>
    <tr>
        <th>Freakonomics Radio</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freakonomics-radio/)</th>
    </tr>
    <tr>
        <th>Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/free-press/)</th>
    </tr>
    <tr>
        <th>Fresno Bee</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fresno-bee/)</th>
    </tr>
    <tr>
        <th>Fusion</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fusion/)</th>
    </tr>
    <tr>
        <th>Gay Star News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gay-star-news/)</th>
    </tr>
    <tr>
        <th>Geopolitics Alert</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/geopolitics-alert/)</th>
    </tr>
    <tr>
        <th>Greensboro News and Record</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/greensboro-news-and-record/)</th>
    </tr>
    <tr>
        <th>Greentech Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/greentech-media/)</th>
    </tr>
    <tr>
        <th>Glamour Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/glamour-magazine/)</th>
    </tr>
    <tr>
        <th>Global Citizen</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/global-citizen/)</th>
    </tr>
    <tr>
        <th>Global News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/global-news/)</th>
    </tr>
    <tr>
        <th>Global Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/global-post/)</th>
    </tr>
    <tr>
        <th>Global Risk Insights (GRI)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/global-risk-insights-gri/)</th>
    </tr>
    <tr>
        <th>Global Times (China)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/global-times-china/)</th>
    </tr>
    <tr>
        <th>Google News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/google-news/)</th>
    </tr>
    <tr>
        <th>Governing Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/governing-magazine/)</th>
    </tr>
    <tr>
        <th>Grist</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/grist/)</th>
    </tr>
    <tr>
        <th>Gun Violence Archive</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gun-violence-archive/)</th>
    </tr>
    <tr>
        <th>Haaretz</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/haaretz/)</th>
    </tr>
    <tr>
        <th>Harper’s Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/harpers/)</th>
    </tr>
    <tr>
        <th>The Hartford Courant</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-hartford-courant/)</th>
    </tr>
    <tr>
        <th>Health Magazine</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/health-magazine/)</th>
    </tr>
    <tr>
        <th>HealthyWay</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/healthyway/)</th>
    </tr>
    <tr>
        <th>Heavy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/heavy/)</th>
    </tr>
    <tr>
        <th>Helsinki Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/helsinki-times/)</th>
    </tr>
    <tr>
        <th>High Country News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/high-country-news/)</th>
    </tr>
    <tr>
        <th>Highline</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/highline/)</th>
    </tr>
    <tr>
        <th>Hindustan Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hindustan-times/)</th>
    </tr>
    <tr>
        <th>History News Network</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/history-news-network/)</th>
    </tr>
    <tr>
        <th>Hollywood Reporter</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hollywood-reporter/)</th>
    </tr>
    <tr>
        <th>Honolulu Star-Advertiser</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/honolulu-star-advertiser/)</th>
    </tr>
    <tr>
        <th>Houston Chronicle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/houston-chronicle/)</th>
    </tr>
    <tr>
        <th>Human Rights Watch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/human-rights-watch/)</th>
    </tr>
    <tr>
        <th>Humanium</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/humanium/)</th>
    </tr>
    <tr>
        <th>Hurriyet Daily News</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hurriyet-daily-news/)</th>
    </tr>
    <tr>
        <th>Ice News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ice-news/)</th>
    </tr>
    <tr>
        <th>If Americans Knew</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/if-america-knew/)</th>
    </tr>
    <tr>
        <th>Independent Australia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/independent-australia/)</th>
    </tr>
    <tr>
        <th>Independent Media Center</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/independent-media-center/)</th>
    </tr>
    <tr>
        <th>Indianapolis Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/indianapolis-star/)</th>
    </tr>
    <tr>
        <th>iNews</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/inews/)</th>
    </tr>
    <tr>
        <th>Inquisitr</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/inquisitr/)</th>
    </tr>
    <tr>
        <th>InsideClimate News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/insideclimate-news/)</th>
    </tr>
    <tr>
        <th>Inside Edition</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/inside-edition/)</th>
    </tr>
    <tr>
        <th>Inside Higher Ed</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/inside-higher-ed/)</th>
    </tr>
    <tr>
        <th>Inside Philanthropy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/inside-philanthropy/)</th>
    </tr>
    <tr>
        <th>Institute for Middle East Understanding (IMEU)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/institute-for-middle-east-understanding-imeu/)</th>
    </tr>
    <tr>
        <th>Institute on Taxation and Economic Policy (ITEP)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/institute-on-taxation-and-economic-policy-itep/)</th>
    </tr>
    <tr>
        <th>International Business Times</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-business-times/)</th>
    </tr>
    <tr>
        <th>International Center for Research on Women</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-center-for-research-on-women/)</th>
    </tr>
    <tr>
        <th>International Crisis Group</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-crisis-group/)</th>
    </tr>
    <tr>
        <th>Inter Press Service (IPS)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/inter-press-service-ips/)</th>
    </tr>
    <tr>
        <th>Inverse</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/inverse/)</th>
    </tr>
    <tr>
        <th>iPolitics</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ipolitics/)</th>
    </tr>
    <tr>
        <th>IRIN News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/irin-news/)</th>
    </tr>
    <tr>
        <th>Jackson Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jackson-free-press/)</th>
    </tr>
    <tr>
        <th>Jihadica</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jihadica/)</th>
    </tr>
    <tr>
        <th>Joint Center for Political and Economic Studies</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/joint-center-for-political-and-economic-studies/)</th>
    </tr>
    <tr>
        <th>Journal of Politics and Society</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/journal-of-politics-and-society/)</th>
    </tr>
    <tr>
        <th>Kansas City Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/kansas-city-star/)</th>
    </tr>
    <tr>
        <th>Knight Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/knight-foundation/)</th>
    </tr>
    <tr>
        <th>KMOV</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/kmov/)</th>
    </tr>
    <tr>
        <th>KOCO News 5</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/koco-news-5/)</th>
    </tr>
    <tr>
        <th>Kotaku</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/kotaku/)</th>
    </tr>
    <tr>
        <th>KUOW NPR</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/kuow-npr/)</th>
    </tr>
    <tr>
        <th>Kurdistan 24</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/kurdistan-24/)</th>
    </tr>
    <tr>
        <th>Kyiv Post</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/kyiv-post/)</th>
    </tr>
    <tr>
        <th>La Presse</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/la-presse/)</th>
    </tr>
    <tr>
        <th>LA Times (Los Angeles Times)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/la-times-los-angeles-times/)</th>
    </tr>
    <tr>
        <th>Latin Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/latin-times/)</th>
    </tr>
    <tr>
        <th>Lawfare Blog</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lawfare-blog/)</th>
    </tr>
    <tr>
        <th>Law Newz</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/law-newz/)</th>
    </tr>
    <tr>
        <th>Left Justified</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/left-justified/)</th>
    </tr>
    <tr>
        <th>Lethbridge Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lethbridge-herald/)</th>
    </tr>
    <tr>
        <th>Lexington Herald Leader</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lexington-herald-leader/)</th>
    </tr>
    <tr>
        <th>Liberal Mountain</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/liberal-mountain/)</th>
    </tr>
    <tr>
        <th>Lifehacker</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lifehacker/)</th>
    </tr>
    <tr>
        <th>LiveLeak</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liveleak/)</th>
    </tr>
    <tr>
        <th>Maclean’s Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/macleans-magazine/)</th>
    </tr>
    <tr>
        <th>Maine Beacon</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/maine-beacon/)</th>
    </tr>
    <tr>
        <th>McClatchyDC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mcclatchydc/)</th>
    </tr>
    <tr>
        <th>MediaFile</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mediafile/)</th>
    </tr>
    <tr>
        <th>Medium</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/medium/)</th>
    </tr>
    <tr>
        <th>Metro</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/metro/)</th>
    </tr>
    <tr>
        <th>Metro UK</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/metro-uk/)</th>
    </tr>
    <tr>
        <th>Mexico Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mexico-daily-news/)</th>
    </tr>
    <tr>
        <th>Miami Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/miami-herald/)</th>
    </tr>
    <tr>
        <th>Mic</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mic/)</th>
    </tr>
    <tr>
        <th>Migration Policy Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/migration-policy-institute/)</th>
    </tr>
    <tr>
        <th>Milwaukee Journal-Sentinel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/milwaukee-journal-sentinel/)</th>
    </tr>
    <tr>
        <th>Minneapolis Star Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/minneapolis-star-tribune/)</th>
    </tr>
    <tr>
        <th>Minnesota Public Radio (MPR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/minnesota-public-radio-mpr/)</th>
    </tr>
    <tr>
        <th>MinnPost</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/minnpost/)</th>
    </tr>
    <tr>
        <th>Mint Press News</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mint-press-news/)</th>
    </tr>
    <tr>
        <th>Mongabay</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mongabay/)</th>
    </tr>
    <tr>
        <th>Monthly Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/monthly-review/)</th>
    </tr>
    <tr>
        <th>Montreal Gazette</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/montreal-gazette/)</th>
    </tr>
    <tr>
        <th>Morning Consult</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/morning-consult/)</th>
    </tr>
    <tr>
        <th>Moscow Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/moscow-times/)</th>
    </tr>
    <tr>
        <th>Mother Jones</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mother-jones/)</th>
    </tr>
    <tr>
        <th>Mother Nature Network</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mother-nature-network/)</th>
    </tr>
    <tr>
        <th>Mountain Democrat</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mountain-democrat/)</th>
    </tr>
    <tr>
        <th>MSN.com (MSN News)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/msn-com/)</th>
    </tr>
    <tr>
        <th>Muncie Voice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/muncie-voice/)</th>
    </tr>
    <tr>
        <th>MWC News – Media With Conscience</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mwc-news-media-conscience/)</th>
    </tr>
    <tr>
        <th>Naked Capitalism</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/naked-capitalism/)</th>
    </tr>
    <tr>
        <th>Naples Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/naples-daily-news/)</th>
    </tr>
    <tr>
        <th>National Association for the Advancement of Colored People (NAACP)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-association-advancement-colored-people-naacp/)</th>
    </tr>
    <tr>
        <th>National Center for Transgender Equality (NCTE)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-center-transgender-equality-ncte/)</th>
    </tr>
    <tr>
        <th>National Monitor</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/leftcenter/national-monitor/)</th>
    </tr>
    <tr>
        <th>National Newswatch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-newswatch/)</th>
    </tr>
    <tr>
        <th>National Observer (Canada)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-observer-canada/)</th>
    </tr>
    <tr>
        <th>National Youth Rights Association</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-youth-rights-association/)</th>
    </tr>
    <tr>
        <th>Natural Resources Defense Council</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/natural-resources-defense-council/)</th>
    </tr>
    <tr>
        <th>Natural Resource Governance Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/natural-resource-governance-institute/)</th>
    </tr>
    <tr>
        <th>Nature Conservancy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/nature-conservancy/)</th>
    </tr>
    <tr>
        <th>NBC News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nbc-news/)</th>
    </tr>
    <tr>
        <th>NC Policy Watch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nc-policy-watch/)</th>
    </tr>
    <tr>
        <th>Need 2 Know</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/need-2-know/)</th>
    </tr>
    <tr>
        <th>New England Cable News (NECN)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/new-england-cable-news-necn/)</th>
    </tr>
    <tr>
        <th>News Channel 4 (KFOR.com)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-channel-4-kfor-com/)</th>
    </tr>
    <tr>
        <th>News.com.au</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-com-au/)</th>
    </tr>
    <tr>
        <th>Newsday</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsday/)</th>
    </tr>
    <tr>
        <th>News Deeply</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-deeply/)</th>
    </tr>
    <tr>
        <th>NewsGru</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newsgru/)</th>
    </tr>
    <tr>
        <th>Newser</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newser/)</th>
    </tr>
    <tr>
        <th>NewsOne</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsone/)</th>
    </tr>
    <tr>
        <th>Newsy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsy/)</th>
    </tr>
    <tr>
        <th>New Europe</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/new-europe/)</th>
    </tr>
    <tr>
        <th>New Left Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-left-review/)</th>
    </tr>
    <tr>
        <th>New Matilda</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-matilda/)</th>
    </tr>
    <tr>
        <th>New Moderate</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-moderate/)</th>
    </tr>
    <tr>
        <th>New York Daily News</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-york-daily-news/)</th>
    </tr>
    <tr>
        <th>News and Guts</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-and-guts/)</th>
    </tr>
    <tr>
        <th>NPR (National Public Radio)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/npr/)</th>
    </tr>
    <tr>
        <th>New York Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-york-times/)</th>
    </tr>
    <tr>
        <th>OC Weekly</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/oc-weekly/)</th>
    </tr>
    <tr>
        <th>The Odyssey Online</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-odyssey-online/)</th>
    </tr>
    <tr>
        <th>Oil and Water Don’t Mix</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/oil-and-water-dont-mix/)</th>
    </tr>
    <tr>
        <th>openDemocracy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/opendemocracy/)</th>
    </tr>
    <tr>
        <th>Opposing Views</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/opposing-views/)</th>
    </tr>
    <tr>
        <th>OneIndia</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/oneindia/)</th>
    </tr>
    <tr>
        <th>Our World In Data</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/our-world-in-data/)</th>
    </tr>
    <tr>
        <th>Outside The Beltway</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/outside-the-beltway/)</th>
    </tr>
    <tr>
        <th>Ozy Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ozy-media/)</th>
    </tr>
    <tr>
        <th>Pacific Standard Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pacific-standard-magazine/)</th>
    </tr>
    <tr>
        <th>PanAm Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/panam-post/)</th>
    </tr>
    <tr>
        <th>Patriotic Millionaires</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriotic-millionaires/)</th>
    </tr>
    <tr>
        <th>PBS NewsHour</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pbs-news-hour/)</th>
    </tr>
    <tr>
        <th>Philadelphia Inquirer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/philadelphia-inquirer/)</th>
    </tr>
    <tr>
        <th>Philadelphia Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/philadelphia-tribune/)</th>
    </tr>
    <tr>
        <th>Philippine Daily Inquirer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/philippine-daily-inquirer/)</th>
    </tr>
    <tr>
        <th>Phoenix New Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/phoenix-new-times/)</th>
    </tr>
    <tr>
        <th>Political Critique</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/political-critique/)</th>
    </tr>
    <tr>
        <th>Politics That Work</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/politics-that-work/)</th>
    </tr>
    <tr>
        <th>Population Connection</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/population-connection/)</th>
    </tr>
    <tr>
        <th>Portland Press-Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/portland-press-herald/)</th>
    </tr>
    <tr>
        <th>Portland Tribune</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](https://mediabiasfactcheck.com/portland-tribune/)</th>
    </tr>
    <tr>
        <th>Positive News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/positive-news/)</th>
    </tr>
    <tr>
        <th>Press TV</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/press-tv/)</th>
    </tr>
    <tr>
        <th>Propublica</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/propublica/)</th>
    </tr>
    <tr>
        <th>Prospect Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/prospect-magazine/)</th>
    </tr>
    <tr>
        <th>The Providence Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-providence-journal/)</th>
    </tr>
    <tr>
        <th>Public Citizen</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/public-citizen/)</th>
    </tr>
    <tr>
        <th>Public Radio International (PRI)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/public-radio-international-pri/)</th>
    </tr>
    <tr>
        <th>Quartz</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/quartz/)</th>
    </tr>
    <tr>
        <th>Radio Free Asia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/radio-free-asia/)</th>
    </tr>
    <tr>
        <th>Raleigh News and Observer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/raleigh-news-observer/)</th>
    </tr>
    <tr>
        <th>RationalWiki</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rationalwiki/)</th>
    </tr>
    <tr>
        <th>Real News Network</th>
        <th>HIGH</th>
        <th>Left</th>
        <th>[left11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/real-news-network/)</th>
    </tr>
    <tr>
        <th>Religion News Service (RNS)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/religion-news-service-rns/)</th>
    </tr>
    <tr>
        <th>Reveal – Center for Investigative Reporting</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/reveal-center-for-investigative-reporting/)</th>
    </tr>
    <tr>
        <th>Right Web</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/right-web/)</th>
    </tr>
    <tr>
        <th>Roanoke Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/roanoke-times/)</th>
    </tr>
    <tr>
        <th>Rolling Stone</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rolling-stone/)</th>
    </tr>
    <tr>
        <th>Roosevelt Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/roosevelt-institute/)</th>
    </tr>
    <tr>
        <th>Rudaw</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rudaw/)</th>
    </tr>
    <tr>
        <th>Sacramento Bee</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sacramento-bee/)</th>
    </tr>
    <tr>
        <th>Salt Lake Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/salt-lake-tribune/)</th>
    </tr>
    <tr>
        <th>San Antonio Express-News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/san-antonio-express-news/)</th>
    </tr>
    <tr>
        <th>San Diego Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/san-diego-free-press/)</th>
    </tr>
    <tr>
        <th>San Diego Reader</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/san-diego-reader/)</th>
    </tr>
    <tr>
        <th>San Francisco Chronicle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/san-francisco-chronicle/)</th>
    </tr>
    <tr>
        <th>San Francisco Examiner</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/san-francisco-examiner/)</th>
    </tr>
    <tr>
        <th>San Francisco Globe</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/san-francisco-globe/)</th>
    </tr>
    <tr>
        <th>San Jose Mercury News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/san-jose-mercury-news/)</th>
    </tr>
    <tr>
        <th>Santa Barbara Independent</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/santa-barbara-independent/)</th>
    </tr>
    <tr>
        <th>The Santa Fe New Mexican</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/santa-fe-new-mexican/)</th>
    </tr>
    <tr>
        <th>Saudi Gazette</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/saudi-gazette/)</th>
    </tr>
    <tr>
        <th>ScoopWhoop</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/scoopwhoop/)</th>
    </tr>
    <tr>
        <th>Scroll.in</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/scroll-in/)</th>
    </tr>
    <tr>
        <th>Seattle Post-Intelligencer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/seattle-post-intelligencer/)</th>
    </tr>
    <tr>
        <th>Seattle Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/seattle-times/)</th>
    </tr>
    <tr>
        <th>Sentencing Project</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sentencing-project/)</th>
    </tr>
    <tr>
        <th>SFGate</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sfgate/)</th>
    </tr>
    <tr>
        <th>Shame Project</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/shame-project/)</th>
    </tr>
    <tr>
        <th>Sojourners (Soho)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sojourners-soho/)</th>
    </tr>
    <tr>
        <th>SooToday.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sootoday-com/)</th>
    </tr>
    <tr>
        <th>Southern Poverty Law Center</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/southern-poverty-law-center/)</th>
    </tr>
    <tr>
        <th>Special Broadcasting Service (SBS)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/special-broadcasting-service-sbs/)</th>
    </tr>
    <tr>
        <th>Spiegel Online</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/spiegel-online/)</th>
    </tr>
    <tr>
        <th>Star-Ledger</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/star-ledger/)</th>
    </tr>
    <tr>
        <th>Staten Island Advance</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/staten-island-advance/)</th>
    </tr>
    <tr>
        <th>StepFeed</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/stepfeed/)</th>
    </tr>
    <tr>
        <th>St. Louis Post-Dispatch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/st-louis-post-dispatch/)</th>
    </tr>
    <tr>
        <th>Stocks News Daily</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/stocks-news-daily/)</th>
    </tr>
    <tr>
        <th>StopFake</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/stopfake/)</th>
    </tr>
    <tr>
        <th>St. Paul Pioneer Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/st-paul-pioneer-press/)</th>
    </tr>
    <tr>
        <th>Stuff</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/stuff/)</th>
    </tr>
    <tr>
        <th>SWI – Swissinfo.ch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/swi-swissinfo-ch/)</th>
    </tr>
    <tr>
        <th>Syrian Observatory for Human Rights (SOHR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/syrian-observatory-for-human-rights-sohr/)</th>
    </tr>
    <tr>
        <th>Tablet Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tablet-magazine/)</th>
    </tr>
    <tr>
        <th>Tax Justice Network</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tax-justice-network/)</th>
    </tr>
    <tr>
        <th>Tax Policy Center</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tax-policy-center/)</th>
    </tr>
    <tr>
        <th>TechCrunch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/techcrunch/)</th>
    </tr>
    <tr>
        <th>Techdirt</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/techdirt/)</th>
    </tr>
    <tr>
        <th>Texas Monthly</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/texas-monthly/)</th>
    </tr>
    <tr>
        <th>The Sun Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-sun-magazine/)</th>
    </tr>
    <tr>
        <th>Tampa Bay Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tampa-bay-times/)</th>
    </tr>
    <tr>
        <th>The Age (Australia)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-age-australia/)</th>
    </tr>
    <tr>
        <th>The Asahi Shimbun</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-asahi-shimbun/)</th>
    </tr>
    <tr>
        <th>The Asbury Park Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-asbury-park-press/)</th>
    </tr>
    <tr>
        <th>The Automatic Earth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-automatic-earth/)</th>
    </tr>
    <tr>
        <th>The Baffler</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-baffler/)</th>
    </tr>
    <tr>
        <th>The Brownsville Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-brownsville-herald/)</th>
    </tr>
    <tr>
        <th>The Budapest Beacon</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-budapest-beacon/)</th>
    </tr>
    <tr>
        <th>The Century Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-century-foundation/)</th>
    </tr>
    <tr>
        <th>The Christian Left</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-christian-left/)</th>
    </tr>
    <tr>
        <th>The Citizen</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-citizen/)</th>
    </tr>
    <tr>
        <th>The Council of Canadians</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-council-of-canadians/)</th>
    </tr>
    <tr>
        <th>The Courier-Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-courier-journal/)</th>
    </tr>
    <tr>
        <th>The Daily Climate</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-climate/)</th>
    </tr>
    <tr>
        <th>The Daily Tarheel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-tarheel/)</th>
    </tr>
    <tr>
        <th>The Economic Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-economic-times/)</th>
    </tr>
    <tr>
        <th>The European Council on Foreign Relations (ECFR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/european-council-foreign-relations-ecfr/)</th>
    </tr>
    <tr>
        <th>The Express-Times (Lehigh Valley)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-express-times-lehigh-valley/)</th>
    </tr>
    <tr>
        <th>The Fifth Column</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fifth-column-news/)</th>
    </tr>
    <tr>
        <th>The Forward</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-forward/)</th>
    </tr>
    <tr>
        <th>The Guardian</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-guardian/)</th>
    </tr>
    <tr>
        <th>The Herald (Everett)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-herald-everett/)</th>
    </tr>
    <tr>
        <th>The Hill</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-hill/)</th>
    </tr>
    <tr>
        <th>The Hill Talk</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-hill-talk/)</th>
    </tr>
    <tr>
        <th>The Hindu</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-hindu/)</th>
    </tr>
    <tr>
        <th>The Independent</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-independent/)</th>
    </tr>
    <tr>
        <th>(The) Interpreter Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-interpreter-magazine/)</th>
    </tr>
    <tr>
        <th>The Irish Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-irish-times/)</th>
    </tr>
    <tr>
        <th>The Irrawaddy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-irrawaddy/)</th>
    </tr>
    <tr>
        <th>The Jerusalem Report</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-jerusalem-report/)</th>
    </tr>
    <tr>
        <th>The Journal News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-journal-news/)</th>
    </tr>
    <tr>
        <th>The Korea Times</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-korea-times/)</th>
    </tr>
    <tr>
        <th>The Local (Norway)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-local-norway/)</th>
    </tr>
    <tr>
        <th>The Moderate Voice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-moderate-voice/)</th>
    </tr>
    <tr>
        <th>The Monthly (Australia)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-monthly-australia/)</th>
    </tr>
    <tr>
        <th>The Nation Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-nation-institute/)</th>
    </tr>
    <tr>
        <th>The New Arab</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-new-arab/)</th>
    </tr>
    <tr>
        <th>The News-Times (Danbury)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-news-times-danbury/)</th>
    </tr>
    <tr>
        <th>The News Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-news-tribune/)</th>
    </tr>
    <tr>
        <th>The New Tropic</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-new-tropic/)</th>
    </tr>
    <tr>
        <th>The Next Web</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-next-web/)</th>
    </tr>
    <tr>
        <th>The Observer (UK)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-observer/)</th>
    </tr>
    <tr>
        <th>The Olympian</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-olympian/)</th>
    </tr>
    <tr>
        <th>The Oslo Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-oslo-times/)</th>
    </tr>
    <tr>
        <th>The Palm Beach Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-palm-beach-post/)</th>
    </tr>
    <tr>
        <th>The Patriot-News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-patriot-news/)</th>
    </tr>
    <tr>
        <th>The Plain Dealer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-plain-dealer/)</th>
    </tr>
    <tr>
        <th>The Press Democrat</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-press-democrat/)</th>
    </tr>
    <tr>
        <th>The Pulse</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-pulse/)</th>
    </tr>
    <tr>
        <th>The Oslo Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-oslo-times/)</th>
    </tr>
    <tr>
        <th>The Record (New Jersey)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-record-new-jersey/)</th>
    </tr>
    <tr>
        <th>The Ringer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-ringer/)</th>
    </tr>
    <tr>
        <th>The Saturday Paper</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-saturday-paper/)</th>
    </tr>
    <tr>
        <th>The State</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-state/)</th>
    </tr>
    <tr>
        <th>The Stranger</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-stranger/)</th>
    </tr>
    <tr>
        <th>The Sun Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-sun-magazine/)</th>
    </tr>
    <tr>
        <th>The Sydney Morning Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-sydney-morning-herald/)</th>
    </tr>
    <tr>
        <th>The Tab</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-tab/)</th>
    </tr>
    <tr>
        <th>The Trace</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-trace/)</th>
    </tr>
    <tr>
        <th>The Tyee</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-tyee/)</th>
    </tr>
    <tr>
        <th>The Varsity</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-varsity/)</th>
    </tr>
    <tr>
        <th>The Verge</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-verge/)</th>
    </tr>
    <tr>
        <th>The Virginian-Pilot</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-virginian-pilot/)</th>
    </tr>
    <tr>
        <th>The Week UK</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-week-uk/)</th>
    </tr>
    <tr>
        <th>The Wilderness Society</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-wilderness-society/)</th>
    </tr>
    <tr>
        <th>The Wire – India</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-wire-india/)</th>
    </tr>
    <tr>
        <th>The Zero Hour</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-zero-hour/)</th>
    </tr>
    <tr>
        <th>Thomson Reuters Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/thomson-reuters-foundation/)</th>
    </tr>
    <tr>
        <th>Time Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/time/)</th>
    </tr>
    <tr>
        <th>Times-Colonist</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/times-colonist/)</th>
    </tr>
    <tr>
        <th>Times Headline</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/times-headline/)</th>
    </tr>
    <tr>
        <th>Times of Israel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/times-of-israel/)</th>
    </tr>
    <tr>
        <th>The Times-Picayune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-times-picayune/)</th>
    </tr>
    <tr>
        <th>Timeline</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/timeline/)</th>
    </tr>
    <tr>
        <th>TomDispatch.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tomdispatch-com/)</th>
    </tr>
    <tr>
        <th>To Inform is to Influence</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/to-inform-is-to-influence/)</th>
    </tr>
    <tr>
        <th>Toronto Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/toronto-star/)</th>
    </tr>
    <tr>
        <th>UAWire</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/uawire/)</th>
    </tr>
    <tr>
        <th>Unicorn Riot</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/unicorn-riot/)</th>
    </tr>
    <tr>
        <th>United Federation of Teachers (UFT)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/united-federation-of-teachers-uft/)</th>
    </tr>
    <tr>
        <th>University Business</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/university-business/)</th>
    </tr>
    <tr>
        <th>Urban Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/urban-institute/)</th>
    </tr>
    <tr>
        <th>US News World Report</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-news-world-report/)</th>
    </tr>
    <tr>
        <th>USA Today</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter09.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-today-2/)</th>
    </tr>
    <tr>
        <th>Utah Public Radio (UPR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](https://mediabiasfactcheck.com/utah-public-radio-upr/)</th>
    </tr>
    <tr>
        <th>Vice News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vice-news/)</th>
    </tr>
    <tr>
        <th>VoteVets.org</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/votevets-org/)</th>
    </tr>
    <tr>
        <th>Vulture</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/vulture/)</th>
    </tr>
    <tr>
        <th>Wall Street on Parade</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wall-street-on-parade/)</th>
    </tr>
    <tr>
        <th>Washington Blade</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/washington-blade/)</th>
    </tr>
    <tr>
        <th>Washington Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/washington-post/)</th>
    </tr>
    <tr>
        <th>WGN News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wgn-news/)</th>
    </tr>
    <tr>
        <th>Windsor Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/windsor-star/)</th>
    </tr>
    <tr>
        <th>Wings Over Scotland</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wings-over-scotland/)</th>
    </tr>
    <tr>
        <th>Wired Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wired-magazine/)</th>
    </tr>
    <tr>
        <th>WNYC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wnyc/)</th>
    </tr>
    <tr>
        <th>World Affairs Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-affairs-journal/)</th>
    </tr>
    <tr>
        <th>WorldCrunch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](https://mediabiasfactcheck.com/worldcrunch/)</th>
    </tr>
    <tr>
        <th>World Policy Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](https://mediabiasfactcheck.com/world-policy-institute/)</th>
    </tr>
    <tr>
        <th>Xinhua News Agency</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th>[leftcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png)</th>
        <th>[link](https://mediabiasfactcheck.com/xinhua-news-agency/)</th>
    </tr>
    <tr>
        <th>Yahoo News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter06.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/yahoo-news/)</th>
    </tr>
    <tr>
        <th>YnetNews</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ynetnews/)</th>
    </tr>
    <tr>
        <th>York Daily Record</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter11.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/york-daily-record/)</th>
    </tr>
    <tr>
        <th>York Dispatch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png)</th>
        <th>[link](https://mediabiasfactcheck.com/york-dispatch/)</th>
    </tr>
    <tr>
        <th>Youth Radio</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter08.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png)</th>
        <th>[link](https://mediabiasfactcheck.com/youth-radio/)</th>
    </tr>
    <tr>
        <th>680 News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/680-news/)</th>
    </tr>
    <tr>
        <th>38 North</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/38-north/)</th>
    </tr>
    <tr>
        <th>ABS-CBN News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/abs-cbn-news/)</th>
    </tr>
    <tr>
        <th>AFP (Agence France Presse)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/afp-agence-france-presse/)</th>
    </tr>
    <tr>
        <th>Africa News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/africa-news/)</th>
    </tr>
    <tr>
        <th>Agerpres</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/agerpres/)</th>
    </tr>
    <tr>
        <th>Ahram Online</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ahram-online/)</th>
    </tr>
    <tr>
        <th>Air Force Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/air-force-times/)</th>
    </tr>
    <tr>
        <th>Airwars</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/airwars/)</th>
    </tr>
    <tr>
        <th>Al Arabiya</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/al-arabiya/)</th>
    </tr>
    <tr>
        <th>Al Bawaba</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/al-bawaba/)</th>
    </tr>
    <tr>
        <th>Al Majalla</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/al-majalla/)</th>
    </tr>
    <tr>
        <th>Alabama Political Reporter</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/alabama-political-reporter/)</th>
    </tr>
    <tr>
        <th>Alabama Today</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/alabama-today/)</th>
    </tr>
    <tr>
        <th>Albany Democrat Herald</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/albany-democrat-herald/)</th>
    </tr>
    <tr>
        <th>All Generalizations are False (Ad Fontes Media)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/all-generalizations-are-false/)</th>
    </tr>
    <tr>
        <th>AllGov</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/allgov/)</th>
    </tr>
    <tr>
        <th>Alliance for Securing Democracy</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/alliance-securing-democracy/)</th>
    </tr>
    <tr>
        <th>Amarillo Globe-News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/amarillo-globe-news/)</th>
    </tr>
    <tr>
        <th>American Heritage</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-heritage/)</th>
    </tr>
    <tr>
        <th>American Military News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-military-news/)</th>
    </tr>
    <tr>
        <th>American Press Institute (API)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-press-institute-api/)</th>
    </tr>
    <tr>
        <th>Amnesty International</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/amnesty-international/)</th>
    </tr>
    <tr>
        <th>Anthropocene Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservation-magazine/)</th>
    </tr>
    <tr>
        <th>APTN News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/aptn-news/)</th>
    </tr>
    <tr>
        <th>Arizona Capitol Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/arizona-capitol-times/)</th>
    </tr>
    <tr>
        <th>Asian News International (ANI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/asian-news-international-ani/)</th>
    </tr>
    <tr>
        <th>Asia Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/asia-times/)</th>
    </tr>
    <tr>
        <th>Associated Press</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/associated-press/)</th>
    </tr>
    <tr>
        <th>Atlantic Council</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/atlantic-council/)</th>
    </tr>
    <tr>
        <th>The Australian Financial Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-australian-financial-review/)</th>
    </tr>
    <tr>
        <th>Ballotpedia</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ballotpedia/)</th>
    </tr>
    <tr>
        <th>The Bangkok Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-bangkok-post/)</th>
    </tr>
    <tr>
        <th>Battlefords News Optimist</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/battlefords-news-optimist/)</th>
    </tr>
    <tr>
        <th>Bbarta24</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bbarta24/)</th>
    </tr>
    <tr>
        <th>The Belfer Center for Science and International Affairs</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-belfer-center-for-science-and-international-affairs/)</th>
    </tr>
    <tr>
        <th>Belleville News-Democrat</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/belleville-news-democrat/)</th>
    </tr>
    <tr>
        <th>Bellingcat</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bellingcat/)</th>
    </tr>
    <tr>
        <th>Better Government Association</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/better-government-association/)</th>
    </tr>
    <tr>
        <th>BDNews24</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bdnews24/)</th>
    </tr>
    <tr>
        <th>Big News Network</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/big-news-network/)</th>
    </tr>
    <tr>
        <th>Big Think</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/big-think/)</th>
    </tr>
    <tr>
        <th>Biloxi Sun Herald</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/biloxi-sun-herald/)</th>
    </tr>
    <tr>
        <th>Bismarck Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bismarck-tribune/)</th>
    </tr>
    <tr>
        <th>BNO News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bno-news/)</th>
    </tr>
    <tr>
        <th>Bozeman Daily Chronicle</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bozeman-daily-chronicle/)</th>
    </tr>
    <tr>
        <th>Bridge Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bridge-magazine/)</th>
    </tr>
    <tr>
        <th>Brief.News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/brief-news/)</th>
    </tr>
    <tr>
        <th>Bulletin of the Atomic Scientists</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bulletin-of-the-atomic-scientists/)</th>
    </tr>
    <tr>
        <th>Bullshido</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bullshido/)</th>
    </tr>
    <tr>
        <th>Burnett County Sentinel</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/burnett-county-sentinel/)</th>
    </tr>
    <tr>
        <th>Business 2 Community</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/business-2-community/)</th>
    </tr>
    <tr>
        <th>Canadian Public Affairs Channel (CPAC)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/canadian-public-affairs-channel-cpac/)</th>
    </tr>
    <tr>
        <th>Cape Cod Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/cape-cod-times/)</th>
    </tr>
    <tr>
        <th>Capitol Fax</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/capitol-fax/)</th>
    </tr>
    <tr>
        <th>Carnegie Endowment for International Peace</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/carnegie-endowment-for-international-peace/)</th>
    </tr>
    <tr>
        <th>Casper Star-Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/casper-star-tribune/)</th>
    </tr>
    <tr>
        <th>Castanet</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/castanet/)</th>
    </tr>
    <tr>
        <th>Center for Advanced Defense Studies</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-advanced-defense-studies/)</th>
    </tr>
    <tr>
        <th>Center for Democracy and Technology</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/center-democracy-technology/)</th>
    </tr>
    <tr>
        <th>Center for Global Development</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-global-development/)</th>
    </tr>
    <tr>
        <th>Center for Inquiry</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-inquiry/)</th>
    </tr>
    <tr>
        <th>Center for a New American Security</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-a-new-american-security/)</th>
    </tr>
    <tr>
        <th>Center for Public Integrity</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-public-integrity/)</th>
    </tr>
    <tr>
        <th>Center for Responsive Politics (Open Secrets)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-responsive-politics-open-secrets/)</th>
    </tr>
    <tr>
        <th>Center for Strategic and International Studies</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-strategic-and-international-studies/)</th>
    </tr>
    <tr>
        <th>China Daily</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/china-daily/)</th>
    </tr>
    <tr>
        <th>China Global Television Network (CGTN)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/china-global-television-network-cgtn/)</th>
    </tr>
    <tr>
        <th>Chinook Observer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/chinook-observer/)</th>
    </tr>
    <tr>
        <th>Christian Science Monitor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/christian-science-monitor/)</th>
    </tr>
    <tr>
        <th>City and State New York</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/city-and-state-new-york/)</th>
    </tr>
    <tr>
        <th>Committee for Economic Development</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/committee-for-economic-development/)</th>
    </tr>
    <tr>
        <th>Committee for a Responsible Federal Budget</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/committee-for-a-responsible-federal-budget/)</th>
    </tr>
    <tr>
        <th>Committee to Protect Journalists</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/committee-to-protect-journalists/)</th>
    </tr>
    <tr>
        <th>Concord Monitor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/concord-monitor/)</th>
    </tr>
    <tr>
        <th>Conflict News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conflict-news/)</th>
    </tr>
    <tr>
        <th>Congress.gov</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/congress-gov/)</th>
    </tr>
    <tr>
        <th>Congressional Budget Office (CBO)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/congressional-budget-office-cbo/)</th>
    </tr>
    <tr>
        <th>Anthropocene Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservation-magazine/)</th>
    </tr>
    <tr>
        <th>Consortium News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/consortium-news/)</th>
    </tr>
    <tr>
        <th>Constitution Daily</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/constitution-daily/)</th>
    </tr>
    <tr>
        <th>Constitution Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/constitution-project/)</th>
    </tr>
    <tr>
        <th>Consumerist</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/consumerist/)</th>
    </tr>
    <tr>
        <th>Consumer Reports</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/consumer-reports/)</th>
    </tr>
    <tr>
        <th>Cook Political Report</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cook-political-report/)</th>
    </tr>
    <tr>
        <th>Countable</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/countable-news/)</th>
    </tr>
    <tr>
        <th>Courthouse News Service</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/courthouse-news-service/)</th>
    </tr>
    <tr>
        <th>CP24</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/cp24/)</th>
    </tr>
    <tr>
        <th>Crimeola</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/crimeola/)</th>
    </tr>
    <tr>
        <th>C-SPAN</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/c-span/)</th>
    </tr>
    <tr>
        <th>Daily Business Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-business-review/)</th>
    </tr>
    <tr>
        <th>Daily Journal (Illinois)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-journal-illinois/)</th>
    </tr>
    <tr>
        <th>Daily Journal (Missouri)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-journal-missouri/)</th>
    </tr>
    <tr>
        <th>Daily Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-record/)</th>
    </tr>
    <tr>
        <th>Darien Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/darien-times/)</th>
    </tr>
    <tr>
        <th>Dayton Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dayton-daily-news/)</th>
    </tr>
    <tr>
        <th>D.C. Circuit Breaker</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/d-c-circuit-breaker/)</th>
    </tr>
    <tr>
        <th>Defense News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/defense-news/)</th>
    </tr>
    <tr>
        <th>Defense One</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/defense-one/)</th>
    </tr>
    <tr>
        <th>Denton Record-Chronicle</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/denton-record-chronicle/)</th>
    </tr>
    <tr>
        <th>The Des Moines Register</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-des-moines-register/)</th>
    </tr>
    <tr>
        <th>DifferenceBetween.net</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/differencebetween-net/)</th>
    </tr>
    <tr>
        <th>Digital Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/digital-journal/)</th>
    </tr>
    <tr>
        <th>Doctors Without Borders</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/doctors-without-borders/)</th>
    </tr>
    <tr>
        <th>DPA German Press Agency</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dpa-german-press-agency/)</th>
    </tr>
    <tr>
        <th>Eagle Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/eagle-tribune/)</th>
    </tr>
    <tr>
        <th>Earth Institute</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/earth-institute/)</th>
    </tr>
    <tr>
        <th>EJ Insight (EJI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ej-insight-eji/)</th>
    </tr>
    <tr>
        <th>Elko Daily Free Press</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/elko-daily-free-press/)</th>
    </tr>
    <tr>
        <th>Erie Times-News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/erie-times-news/)</th>
    </tr>
    <tr>
        <th>ERR News (Estonia Public Broadcasting)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/err-news-estonia-public-broadcasting/)</th>
    </tr>
    <tr>
        <th>Eurasia Group</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/eurasia-group/)</th>
    </tr>
    <tr>
        <th>Eurasia Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/eurasia-review/)</th>
    </tr>
    <tr>
        <th>Euronews</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/euronews/)</th>
    </tr>
    <tr>
        <th>Every CRS Report</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/every-crs-report/)</th>
    </tr>
    <tr>
        <th>FactCheck</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/factcheck/)</th>
    </tr>
    <tr>
        <th>FactsCan</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/factscan/)</th>
    </tr>
    <tr>
        <th>Factwire News Agency</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/factwire-news-agency/)</th>
    </tr>
    <tr>
        <th>Fair Observer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fair-observer/)</th>
    </tr>
    <tr>
        <th>Federal News Radio</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/federal-news-radio/)</th>
    </tr>
    <tr>
        <th>Federal Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/federal-times/)</th>
    </tr>
    <tr>
        <th>Financial Express</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/financial-express/)</th>
    </tr>
    <tr>
        <th>Financial Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/financial-times/)</th>
    </tr>
    <tr>
        <th>First Draft News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/first-draft-news/)</th>
    </tr>
    <tr>
        <th>Foreign Affairs</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/foreign-affairs/)</th>
    </tr>
    <tr>
        <th>Foreign Policy</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/foreign-policy/)</th>
    </tr>
    <tr>
        <th>Full Fact (UK)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/full-fact-uk/)</th>
    </tr>
    <tr>
        <th>Gallup</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gallup/)</th>
    </tr>
    <tr>
        <th>Gears of Biz</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gears-of-biz/)</th>
    </tr>
    <tr>
        <th>GBTimes</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gbtimes/)</th>
    </tr>
    <tr>
        <th>Government Executive</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/government-executive/)</th>
    </tr>
    <tr>
        <th>GovTrack</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/govtrack/)</th>
    </tr>
    <tr>
        <th>Global Integrity</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/global-integrity/)</th>
    </tr>
    <tr>
        <th>Global Slavery Index</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/global-slavery-index/)</th>
    </tr>
    <tr>
        <th>Globe Gazette (Iowa)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/globe-gazette-iowa/)</th>
    </tr>
    <tr>
        <th>GoodNewsNetwork</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/goodnewsnetwork/)</th>
    </tr>
    <tr>
        <th>Great Falls Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/great-falls-tribune/)</th>
    </tr>
    <tr>
        <th>Green Bay Press-Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/green-bay-press-gazette/)</th>
    </tr>
    <tr>
        <th>Greenville News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/greenville-news/)</th>
    </tr>
    <tr>
        <th>Harvard Business Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/harvard-business-review/)</th>
    </tr>
    <tr>
        <th>Harvard Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/harvard-gazette/)</th>
    </tr>
    <tr>
        <th>Harvard Political Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/harvard-political-review/)</th>
    </tr>
    <tr>
        <th>Hastings Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hastings-tribune/)</th>
    </tr>
    <tr>
        <th>Healthcare Finance News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/healthcare-finance-news/)</th>
    </tr>
    <tr>
        <th>Herald & Review (Illinois)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/herald-review-illinois/)</th>
    </tr>
    <tr>
        <th>Hoax Slayer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hoax-slayer/)</th>
    </tr>
    <tr>
        <th>Homeland Security News Wire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/homeland-security-news-wire/)</th>
    </tr>
    <tr>
        <th>I24 News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/i24-news/)</th>
    </tr>
    <tr>
        <th>ICitizen</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/icitizen/)</th>
    </tr>
    <tr>
        <th>Idaho Statesman</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/idaho-statesman/)</th>
    </tr>
    <tr>
        <th>iMediaEthics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/imediaethics/)</th>
    </tr>
    <tr>
        <th>Independent Record (Montana)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/independent-record-montana/)</th>
    </tr>
    <tr>
        <th>Independent Voter Network (IVN)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/independent-voter-network-ivn/)</th>
    </tr>
    <tr>
        <th>India Today</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/india-today/)</th>
    </tr>
    <tr>
        <th>Inland Valley Daily Bulletin</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/inland-valley-daily-bulletin/)</th>
    </tr>
    <tr>
        <th>Institute for Women’s Policy Research (IWPR)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/institute-for-womens-policy-research-iwpr/)</th>
    </tr>
    <tr>
        <th>Investigative Reporters and Editors</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/investigative-reporters-and-editors/)</th>
    </tr>
    <tr>
        <th>International Consortium of Investigative Journalists</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-consortium-of-investigative-journalists/)</th>
    </tr>
    <tr>
        <th>International Energy Agency (IEA)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-energy-agency-iea/)</th>
    </tr>
    <tr>
        <th>International Organization</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-organization/)</th>
    </tr>
    <tr>
        <th>International Press Institute</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-press-institute/)</th>
    </tr>
    <tr>
        <th>International Rescue Committee (IRC)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/international-rescue-committee-irc/)</th>
    </tr>
    <tr>
        <th>Investopedia</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/investopedia/)</th>
    </tr>
    <tr>
        <th>Jackson Sun</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jackson-sun/)</th>
    </tr>
    <tr>
        <th>IHS Janes 360</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ihs-janes-360/)</th>
    </tr>
    <tr>
        <th>Japan Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/japan-times/)</th>
    </tr>
    <tr>
        <th>Jewish Telegraphic Agency (JTA)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jewish-telegraphic-agency-jta/)</th>
    </tr>
    <tr>
        <th>Journal Standard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/journal-standard/)</th>
    </tr>
    <tr>
        <th>JStor Daily</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jstore-daily/)</th>
    </tr>
    <tr>
        <th>Just Security</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/just-security/)</th>
    </tr>
    <tr>
        <th>Justice Denied</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/justice-denied/)</th>
    </tr>
    <tr>
        <th>Kaiser Family Foundation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/kaiser-family-foundation/)</th>
    </tr>
    <tr>
        <th>Knowhere</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/knowhere/)</th>
    </tr>
    <tr>
        <th>Know Your Meme</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/know-your-meme/)</th>
    </tr>
    <tr>
        <th>Lead Stories</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lead-stories/)</th>
    </tr>
    <tr>
        <th>Le Devoir</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/le-devoir/)</th>
    </tr>
    <tr>
        <th>Lima Charlie News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lima-charlie-news/)</th>
    </tr>
    <tr>
        <th>Lincoln Journal Star</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lincoln-journal-star/)</th>
    </tr>
    <tr>
        <th>ListVerse</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/listverse/)</th>
    </tr>
    <tr>
        <th>Lompoc Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lompoc-record/)</th>
    </tr>
    <tr>
        <th>Longview News-Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/longview-news-journal/)</th>
    </tr>
    <tr>
        <th>MakeUseOf</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/makeuseof/)</th>
    </tr>
    <tr>
        <th>Malaysia Today</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/malaysia-today/)</th>
    </tr>
    <tr>
        <th>Maplight</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/maplight/)</th>
    </tr>
    <tr>
        <th>McClatchyDC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th>[leftcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mcclatchydc/)</th>
    </tr>
    <tr>
        <th>MediaShift</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mediashift/)</th>
    </tr>
    <tr>
        <th>Memeorandum</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/memeorandum/)</th>
    </tr>
    <tr>
        <th>Mental Floss</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mental-floss/)</th>
    </tr>
    <tr>
        <th>MercoPress</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mercopress/)</th>
    </tr>
    <tr>
        <th>Merion West</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/merion-west/)</th>
    </tr>
    <tr>
        <th>Metabunk</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/metabunk/)</th>
    </tr>
    <tr>
        <th>MetroWest Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/metrowest-daily-news/)</th>
    </tr>
    <tr>
        <th>Military.com</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/military-com/)</th>
    </tr>
    <tr>
        <th>Missoulian</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/missoulian/)</th>
    </tr>
    <tr>
        <th>MLive (Michigan – Booth Newspapers)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mlive-michigan-booth-newspapers/)</th>
    </tr>
    <tr>
        <th>Montana Standard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/montana-standard/)</th>
    </tr>
    <tr>
        <th>Napa Valley Register</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/napa-valley-register/)</th>
    </tr>
    <tr>
        <th>National Bureau of Economic Research (NBER)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-bureau-of-economic-research-nber/)</th>
    </tr>
    <tr>
        <th>National Institute on Money in State Politics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-institute-money-state-politics/)</th>
    </tr>
    <tr>
        <th>National Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-journal/)</th>
    </tr>
    <tr>
        <th>NationMaster</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/nationmaster/)</th>
    </tr>
    <tr>
        <th>New America</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/new-america/)</th>
    </tr>
    <tr>
        <th>New Bern Sun Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-bern-sun-journal/)</th>
    </tr>
    <tr>
        <th>News24 (South Africa)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news24-south-africa/)</th>
    </tr>
    <tr>
        <th>Newsela</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsela/)</th>
    </tr>
    <tr>
        <th>Newsguard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newsguard/)</th>
    </tr>
    <tr>
        <th>News Lookup</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-lookup/)</th>
    </tr>
    <tr>
        <th>NewsNow (UK)</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsnow-uk/)</th>
    </tr>
    <tr>
        <th>NewzJunky.com</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newzjunky-com/)</th>
    </tr>
    <tr>
        <th>New Zealand Herald</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/new-zealand-herald/)</th>
    </tr>
    <tr>
        <th>Next Avenue</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/next-avenue/)</th>
    </tr>
    <tr>
        <th>NextGov</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nextgov/)</th>
    </tr>
    <tr>
        <th>NHK World</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/nhk-world/)</th>
    </tr>
    <tr>
        <th>Niskanen Center</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/niskanen-center/)</th>
    </tr>
    <tr>
        <th>NK News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/nk-news/)</th>
    </tr>
    <tr>
        <th>Noozhawk</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/noozhawk/)</th>
    </tr>
    <tr>
        <th>Norfolk Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/norfolk-daily-news/)</th>
    </tr>
    <tr>
        <th>North Korea Times</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/north-korea-times/)</th>
    </tr>
    <tr>
        <th>Northwest Indiana Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/northwest-indiana-times/)</th>
    </tr>
    <tr>
        <th>Novinite</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/novinite/)</th>
    </tr>
    <tr>
        <th>No Labels</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/no-labels/)</th>
    </tr>
    <tr>
        <th>OneEighty</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/oneeighty/)</th>
    </tr>
    <tr>
        <th>Open the Government</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/open-the-government/)</th>
    </tr>
    <tr>
        <th>Oyez Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/oyez-project/)</th>
    </tr>
    <tr>
        <th>Pacific Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pacific-daily-news/)</th>
    </tr>
    <tr>
        <th>Patch</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patch/)</th>
    </tr>
    <tr>
        <th>Patheos</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/patheos/)</th>
    </tr>
    <tr>
        <th>Pensacola News Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pensacola-news-journal/)</th>
    </tr>
    <tr>
        <th>Peterson Foundation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/peterson-foundation/)</th>
    </tr>
    <tr>
        <th>Peterson Institute for International Economics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/peterson-institute-for-international-economics/)</th>
    </tr>
    <tr>
        <th>Pew Research</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pew-research/)</th>
    </tr>
    <tr>
        <th>Places Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/places-journal/)</th>
    </tr>
    <tr>
        <th>Pocono Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pocono-record/)</th>
    </tr>
    <tr>
        <th>Political Storm</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/political-storm/)</th>
    </tr>
    <tr>
        <th>Political Wire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/political-wire/)</th>
    </tr>
    <tr>
        <th>Politico</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/politico/)</th>
    </tr>
    <tr>
        <th>Politifact</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/politifact/)</th>
    </tr>
    <tr>
        <th>Polygraph.info</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/polygraph-info/)</th>
    </tr>
    <tr>
        <th>Poynter Institute</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/poynter-institute/)</th>
    </tr>
    <tr>
        <th>PR Newswire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pr-newswire/)</th>
    </tr>
    <tr>
        <th>ProCon.org</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/procon-org/)</th>
    </tr>
    <tr>
        <th>Project on Government Oversight</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/project-on-government-oversight/)</th>
    </tr>
    <tr>
        <th>Project Syndicate</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/project-syndicate/)</th>
    </tr>
    <tr>
        <th>Public Policy Polling (PPP)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/public-policy-polling-ppp/)</th>
    </tr>
    <tr>
        <th>Public Religion Research Institute (PRRI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/public-religion-research-institute-prri/)</th>
    </tr>
    <tr>
        <th>Parallax News (PXW)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/parallax-news-pxw/)</th>
    </tr>
    <tr>
        <th>Quad City Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/quad-city-times/)</th>
    </tr>
    <tr>
        <th>Radio Free Europe / Radio Liberty</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/radio-free-europe-radio-liberty/)</th>
    </tr>
    <tr>
        <th>Rand Corporation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rand-corporation/)</th>
    </tr>
    <tr>
        <th>Rapid City Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rapid-city-journal/)</th>
    </tr>
    <tr>
        <th>Recode</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/recode/)</th>
    </tr>
    <tr>
        <th>Relevant Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/relevant-magazine/)</th>
    </tr>
    <tr>
        <th>Reporters Lab</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/reporters-lab/)</th>
    </tr>
    <tr>
        <th>Reporters Without Borders</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/reporters-without-borders/)</th>
    </tr>
    <tr>
        <th>Represent.Us</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/represent-us/)</th>
    </tr>
    <tr>
        <th>Reuters</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/reuters/)</th>
    </tr>
    <tr>
        <th>RiverBender.com</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/riverbender-com/)</th>
    </tr>
    <tr>
        <th>Roll Call</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/roll-call/)</th>
    </tr>
    <tr>
        <th>RTE (Radio Television of Ireland)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rte-radio-television-ireland/)</th>
    </tr>
    <tr>
        <th>Russian Media Monitor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/russian-media-monitor/)</th>
    </tr>
    <tr>
        <th>San Diego Union Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/san-diego-union-tribune/)</th>
    </tr>
    <tr>
        <th>San Marcos Daily Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/san-marcos-daily-record/)</th>
    </tr>
    <tr>
        <th>Santa Maria Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/santa-maria-times/)</th>
    </tr>
    <tr>
        <th>Sarasota Herald-Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sarasota-herald-tribune/)</th>
    </tr>
    <tr>
        <th>Sayfie Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sayfie-review/)</th>
    </tr>
    <tr>
        <th>Science Debate</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/science-debate/)</th>
    </tr>
    <tr>
        <th>Scoopnest</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/scoopnest/)</th>
    </tr>
    <tr>
        <th>SCOTUSblog</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/scotusblog/)</th>
    </tr>
    <tr>
        <th>Shareably</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/shareably/)</th>
    </tr>
    <tr>
        <th>Shorenstein Center</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/shorenstein-center/)</th>
    </tr>
    <tr>
        <th>Simple Politics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/simple-politics/)</th>
    </tr>
    <tr>
        <th>Sioux City Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sioux-city-journal/)</th>
    </tr>
    <tr>
        <th>Sky News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sky-news/)</th>
    </tr>
    <tr>
        <th>SmartNews</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/smartnews/)</th>
    </tr>
    <tr>
        <th>Snopes</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/snopes/)</th>
    </tr>
    <tr>
        <th>South Bend Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/south-bend-tribune/)</th>
    </tr>
    <tr>
        <th>South China Morning Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/south-china-morning-post/)</th>
    </tr>
    <tr>
        <th>Spectrum News – NY1</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/spectrum-news-ny1/)</th>
    </tr>
    <tr>
        <th>Spectrum Report</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/spectrum-report/)</th>
    </tr>
    <tr>
        <th>St. Cloud Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/st-cloud-times/)</th>
    </tr>
    <tr>
        <th>Stars and Stripes</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/stars-and-stripes/)</th>
    </tr>
    <tr>
        <th>Stat (News)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/stat-news/)</th>
    </tr>
    <tr>
        <th>Statesville Record & Landmark</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/statesville-record-landmark/)</th>
    </tr>
    <tr>
        <th>Stimson Center</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/stimson-center/)</th>
    </tr>
    <tr>
        <th>Stock News USA</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/stock-news-usa/)</th>
    </tr>
    <tr>
        <th>StrategyPage</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/strategypage/)</th>
    </tr>
    <tr>
        <th>Stratfor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/stratfor/)</th>
    </tr>
    <tr>
        <th>Sunlight Foundation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sunlight-foundation/)</th>
    </tr>
    <tr>
        <th>Taipei Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/taipei-times/)</th>
    </tr>
    <tr>
        <th>Taiwan News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/taiwan-news/)</th>
    </tr>
    <tr>
        <th>Task and Purpose</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/task-and-purpose/)</th>
    </tr>
    <tr>
        <th>Telegram & Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/telegram-gazette/)</th>
    </tr>
    <tr>
        <th>Texas Standard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/texas-standard/)</th>
    </tr>
    <tr>
        <th>Texas Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/texas-tribune/)</th>
    </tr>
    <tr>
        <th>That’s Nonsense</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/thats-nonsense/)</th>
    </tr>
    <tr>
        <th>The Auburn Citizen</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-auburn-citizen/)</th>
    </tr>
    <tr>
        <th>The Balance</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-balance/)</th>
    </tr>
    <tr>
        <th>The Baxter Bulletin</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-baxter-bulletin/)</th>
    </tr>
    <tr>
        <th>The Bureau of Investigative Journalism</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-bureau-of-investigative-journalism/)</th>
    </tr>
    <tr>
        <th>The Canadian Press</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-canadian-press/)</th>
    </tr>
    <tr>
        <th>The China Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-china-post/)</th>
    </tr>
    <tr>
        <th>The Chronicle of Higher Education</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-chronicle-of-higher-education/)</th>
    </tr>
    <tr>
        <th>The Cipher Brief</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-cipher-brief/)</th>
    </tr>
    <tr>
        <th>The Conversation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-conversation/)</th>
    </tr>
    <tr>
        <th>The Daily Centrist</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-centrist/)</th>
    </tr>
    <tr>
        <th>The Day (New London)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/day-new-london/)</th>
    </tr>
    <tr>
        <th>The Daily Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-gazette/)</th>
    </tr>
    <tr>
        <th>The Daily News (Longview)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-news-longview/)</th>
    </tr>
    <tr>
        <th>The Daily News (Longview)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-news-longview/)</th>
    </tr>
    <tr>
        <th>The Daily Northwestern</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-northwestern/)</th>
    </tr>
    <tr>
        <th>The Daily Progress</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-progress/)</th>
    </tr>
    <tr>
        <th>The Defcon Warning System</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/defcon-warning-system/)</th>
    </tr>
    <tr>
        <th>The Diplomat Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-diplomat-magazine/)</th>
    </tr>
    <tr>
        <th>The Economist</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-economist/)</th>
    </tr>
    <tr>
        <th>The Fake News Codex</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-fake-news-codex/)</th>
    </tr>
    <tr>
        <th>The Herald-Dispatch</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-herald-dispatch/)</th>
    </tr>
    <tr>
        <th>The Herald Journal (Utah)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-herald-journal-utah/)</th>
    </tr>
    <tr>
        <th>The Herald-Sun (Durham, North Carolina)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-herald-sun-durham-north-carolina/)</th>
    </tr>
    <tr>
        <th>The Humanist Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-humanist-magazine/)</th>
    </tr>
    <tr>
        <th>The Indian Express</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-indian-express/)</th>
    </tr>
    <tr>
        <th>The Jakarta Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-jakarta-post/)</th>
    </tr>
    <tr>
        <th>The Jerusalem Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-jerusalem-post/)</th>
    </tr>
    <tr>
        <th>The Jordan Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-jordan-times/)</th>
    </tr>
    <tr>
        <th>Journal Gazette & Times-Courier</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/journal-gazette-times-courier/)</th>
    </tr>
    <tr>
        <th>TheJournal.ie</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/thejournal-ie/)</th>
    </tr>
    <tr>
        <th>The Knife</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-knife/)</th>
    </tr>
    <tr>
        <th>The Marshall Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-marshall-project/)</th>
    </tr>
    <tr>
        <th>The Meme Policeman</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-meme-policeman/)</th>
    </tr>
    <tr>
        <th>The Middle East in London</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-middle-east-in-london/)</th>
    </tr>
    <tr>
        <th>The Moderated Media</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-moderated-media/)</th>
    </tr>
    <tr>
        <th>The Modesto Bee</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-modesto-bee/)</th>
    </tr>
    <tr>
        <th>The Morning Call</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-morning-call/)</th>
    </tr>
    <tr>
        <th>The Nevada Independent</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-nevada-independent/)</th>
    </tr>
    <tr>
        <th>The News (Mexico City)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-news-mexico-city/)</th>
    </tr>
    <tr>
        <th>The News International</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-news-international/)</th>
    </tr>
    <tr>
        <th>The News Literacy Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-literacy-project/)</th>
    </tr>
    <tr>
        <th>The Observatory</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-observatory/)</th>
    </tr>
    <tr>
        <th>The Outlook (Monmouth University)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-outlook-monmouth-university/)</th>
    </tr>
    <tr>
        <th>The Pantagraph</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-pantagraph/)</th>
    </tr>
    <tr>
        <th>The Phnom Penh Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-phnom-penh-post/)</th>
    </tr>
    <tr>
        <th>The Post and Courier</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-post-and-courier/)</th>
    </tr>
    <tr>
        <th>The Post-Standard (Syracuse)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-post-standard-syracuse/)</th>
    </tr>
    <tr>
        <th>The Post Star</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-post-star/)</th>
    </tr>
    <tr>
        <th>The Scotsman</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-scotsman/)</th>
    </tr>
    <tr>
        <th>The Sentinel (Pennsylvania)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-sentinel-pennsylvania/)</th>
    </tr>
    <tr>
        <th>The Skimm</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-skimm/)</th>
    </tr>
    <tr>
        <th>The Sociable</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-sociable/)</th>
    </tr>
    <tr>
        <th>The Southern Illinoisan</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-southern-illinoisan/)</th>
    </tr>
    <tr>
        <th>The Star Democrat</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-star-democrat/)</th>
    </tr>
    <tr>
        <th>The Strategy Bridge</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased081.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-strategy-bridge/)</th>
    </tr>
    <tr>
        <th>The Swedish Wire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-swedish-wire/)</th>
    </tr>
    <tr>
        <th>The Times (Illinois)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-times-illinois/)</th>
    </tr>
    <tr>
        <th>Times of India</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/times-of-india/)</th>
    </tr>
    <tr>
        <th>The TruthSetter</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-truthsetter/)</th>
    </tr>
    <tr>
        <th>The Whim</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-whim/)</th>
    </tr>
    <tr>
        <th>TheWrap</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/thewrap/)</th>
    </tr>
    <tr>
        <th>Third Way</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/third-way/)</th>
    </tr>
    <tr>
        <th>ThoughtCo</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/thoughtco/)</th>
    </tr>
    <tr>
        <th>Times-News (Idaho)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/times-news-idaho/)</th>
    </tr>
    <tr>
        <th>Times of San Diego</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/times-san-diego/)</th>
    </tr>
    <tr>
        <th>Today I Found Out</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/today-i-found-out/)</th>
    </tr>
    <tr>
        <th>Transparency International</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/transparency-international/)</th>
    </tr>
    <tr>
        <th>Transpartisan Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/transpartisan-review/)</th>
    </tr>
    <tr>
        <th>Traverse City Record-Eagle</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/traverse-city-record-eagle/)</th>
    </tr>
    <tr>
        <th>Tribune News Service</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tribune-news-service/)</th>
    </tr>
    <tr>
        <th>Truth Be Told</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/truth-be-told/)</th>
    </tr>
    <tr>
        <th>TruthOrFiction.com</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/truthorfiction-com/)</th>
    </tr>
    <tr>
        <th>Turkey and Facts (Dogruluk Payi)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/turkey-and-facts-dogruluk-payi/)</th>
    </tr>
    <tr>
        <th>TVW Washington State</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tvw-washington-state/)</th>
    </tr>
    <tr>
        <th>Undark</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/undark/)</th>
    </tr>
    <tr>
        <th>United Press International (UPI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/united-press-international-upi/)</th>
    </tr>
    <tr>
        <th>United States House of Representatives (House.gov)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/united-states-house-representatives-house-gov/)</th>
    </tr>
    <tr>
        <th>US Government Accountability Office (GAO)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/us-government-accountability-office-gao/)</th>
    </tr>
    <tr>
        <th>USA Facts</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-facts/)</th>
    </tr>
    <tr>
        <th>USA Spending</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-spending/)</th>
    </tr>
    <tr>
        <th>Utah Standard-Examiner</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/utah-standard-examiner/)</th>
    </tr>
    <tr>
        <th>Vera Files</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/vera-files/)</th>
    </tr>
    <tr>
        <th>Viral Thread</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/viral-thread/)</th>
    </tr>
    <tr>
        <th>Vocativ</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vocativ/)</th>
    </tr>
    <tr>
        <th>Voice of America</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/voice-of-america/)</th>
    </tr>
    <tr>
        <th>Voice of San Diego</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/voice-of-san-diego/)</th>
    </tr>
    <tr>
        <th>Vos Iz Neias</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/vos-iz-neias/)</th>
    </tr>
    <tr>
        <th>Vote Smart</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/votesmart/)</th>
    </tr>
    <tr>
        <th>War on the Rocks</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/war-on-the-rocks/)</th>
    </tr>
    <tr>
        <th>Washington Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-journal/)</th>
    </tr>
    <tr>
        <th>Washington’s Top News (WTOP)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washingtons-top-news-wtop/)</th>
    </tr>
    <tr>
        <th>The Waterloo-Cedar Falls Courier</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-waterloo-cedar-falls-courier/)</th>
    </tr>
    <tr>
        <th>We Are The Mighty</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased091.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/we-are-the-mighty/)</th>
    </tr>
    <tr>
        <th>WikiNews</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wikinews/)</th>
    </tr>
    <tr>
        <th>Wikipedia</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wikipedia/)</th>
    </tr>
    <tr>
        <th>WikiTribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wikitribune/)</th>
    </tr>
    <tr>
        <th>Winona Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/winona-daily-news/)</th>
    </tr>
    <tr>
        <th>Winston-Salem Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/winston-salem-journal/)</th>
    </tr>
    <tr>
        <th>WION (World is One News)</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wion-world-one-news/)</th>
    </tr>
    <tr>
        <th>Wisconsin State Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/wisconsin-state-journal/)</th>
    </tr>
    <tr>
        <th>Woodrow Wilson International Center for Scholars</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/woodrow-wilson-international-center-for-scholars/)</th>
    </tr>
    <tr>
        <th>World Economic Forum</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/world-economic-forum/)</th>
    </tr>
    <tr>
        <th>World News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased071.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-news/)</th>
    </tr>
    <tr>
        <th>World Politics Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-politics-review/)</th>
    </tr>
    <tr>
        <th>World Press Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased041.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-press-review/)</th>
    </tr>
    <tr>
        <th>World Resources Institute (WRI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/world-resources-institute-wri/)</th>
    </tr>
    <tr>
        <th>WRAL</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wral/)</th>
    </tr>
    <tr>
        <th>ZDF (Zweites Deutsches Fernsehen)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/zdf-zweites-deutsches-fernsehen/)</th>
    </tr>
    <tr>
        <th>9 News (Australia)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](http://mediabiasfactcheck.com/9-news-australia/)</th>
    </tr>
    <tr>
        <th>71 Republic</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/71-republic/)</th>
    </tr>
    <tr>
        <th>AL.com (Alabama News)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/al-com-alabama-news/)</th>
    </tr>
    <tr>
        <th>Albuquerque Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/albuquerque-journal/)</th>
    </tr>
    <tr>
        <th>American Action Forum</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-action-forum/)</th>
    </tr>
    <tr>
        <th>American Affairs Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-affairs-journal/)</th>
    </tr>
    <tr>
        <th>American Council on Science and Health</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-council-on-science-and-health/)</th>
    </tr>
    <tr>
        <th>American Firearms Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-firearms-institute/)</th>
    </tr>
    <tr>
        <th>American Foreign Policy Council (AFPC)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-foreign-policy-council/)</th>
    </tr>
    <tr>
        <th>American Institute for Economic Research</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-institute-for-economic-research/)</th>
    </tr>
    <tr>
        <th>Americas Quarterly</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/americas-quarterly/)</th>
    </tr>
    <tr>
        <th>Angus Reid Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/angus-reid-institute/)</th>
    </tr>
    <tr>
        <th>Anti-War</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/anti-war/)</th>
    </tr>
    <tr>
        <th>Arab News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/arab-news/)</th>
    </tr>
    <tr>
        <th>Arizona Republic</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/arizona-republic/)</th>
    </tr>
    <tr>
        <th>Arkansas Democrat-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/arkansas-democrat-gazette/)</th>
    </tr>
    <tr>
        <th>Armstrong Economics</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/armstrong-economics/)</th>
    </tr>
    <tr>
        <th>Arutz Sheva (Israel National News)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/arutz-sheva-israel-national-news/)</th>
    </tr>
    <tr>
        <th>Asharq Al-Awsat</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/asharq-al-awsat-2/)</th>
    </tr>
    <tr>
        <th>Billings Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/billings-gazette/)</th>
    </tr>
    <tr>
        <th>Bipartisan Policy Center</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bipartisan-policy-center/)</th>
    </tr>
    <tr>
        <th>Boston Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/boston-herald/)</th>
    </tr>
    <tr>
        <th>Breaking Defense</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/breaking-defense/)</th>
    </tr>
    <tr>
        <th>Breakthrough Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/breakthrough-institute/)</th>
    </tr>
    <tr>
        <th>BusinessLIVE</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/businesslive/)</th>
    </tr>
    <tr>
        <th>Calgary Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/calgary-sun/)</th>
    </tr>
    <tr>
        <th>California Globe</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/california-globe/)</th>
    </tr>
    <tr>
        <th>California Political Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter041.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/california-political-review/)</th>
    </tr>
    <tr>
        <th>Campaign for Liberty</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/campaign-for-liberty/)</th>
    </tr>
    <tr>
        <th>Canadian Jewish News (CJN)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/canadian-jewish-news-cjn/)</th>
    </tr>
    <tr>
        <th>Canadian Taxpayers Federation</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/canadian-taxpayers-federation/)</th>
    </tr>
    <tr>
        <th>Cato Institute</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cato-institute/)</th>
    </tr>
    <tr>
        <th>Center for a Stateless Society</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-a-stateless-society/)</th>
    </tr>
    <tr>
        <th>Center for the National Interest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/center-for-the-national-interest/)</th>
    </tr>
    <tr>
        <th>Check Your Fact</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/check-your-fact/)</th>
    </tr>
    <tr>
        <th>Chicago Tribune</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/chicago-tribune/)</th>
    </tr>
    <tr>
        <th>Christianity Today</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/christianity-today/)</th>
    </tr>
    <tr>
        <th>Cincinnati Enquirer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th>[leastbiased021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cincinnati-enquirer/)</th>
    </tr>
    <tr>
        <th>Circa News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/circa-news/)</th>
    </tr>
    <tr>
        <th>Colorado Springs Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/colorado-springs-gazette/)</th>
    </tr>
    <tr>
        <th>Columbia Daily Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/columbia-daily-herald/)</th>
    </tr>
    <tr>
        <th>Columbus Dispatch</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/columbus-dispatch/)</th>
    </tr>
    <tr>
        <th>Competitive Enterprise Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/competitive-enterprise-institute/)</th>
    </tr>
    <tr>
        <th>Council on Foreign Relations</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/council-on-foreign-relations/)</th>
    </tr>
    <tr>
        <th>Daily Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-herald/)</th>
    </tr>
    <tr>
        <th>Daily Press</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-press/)</th>
    </tr>
    <tr>
        <th>Dallas Morning News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dallas-morning-news/)</th>
    </tr>
    <tr>
        <th>Deccan Chronicle</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter041.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deccan-chronicle/)</th>
    </tr>
    <tr>
        <th>Deseret News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/deseret-news/)</th>
    </tr>
    <tr>
        <th>Desert Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter12.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/desert-sun/)</th>
    </tr>
    <tr>
        <th>Detroit News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/detroit-news/)</th>
    </tr>
    <tr>
        <th>de Volkskrant</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/de-volkskrant/)</th>
    </tr>
    <tr>
        <th>Downsizing the Federal Government</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/downsizing-the-federal-government/)</th>
    </tr>
    <tr>
        <th>Duluth News Tribune</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/duluth-news-tribune/)</th>
    </tr>
    <tr>
        <th>The EC Journal</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-ec-journal/)</th>
    </tr>
    <tr>
        <th>Edmonton Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/edmonton-sun/)</th>
    </tr>
    <tr>
        <th>The Elkhart Truth</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-elkhart-truth/)</th>
    </tr>
    <tr>
        <th>Ethics and Public Policy Center (EPPC)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ethics-public-policy-center-eppc/)</th>
    </tr>
    <tr>
        <th>Faith Family America</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/faith-family-america/)</th>
    </tr>
    <tr>
        <th>Financial Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/financial-post/)</th>
    </tr>
    <tr>
        <th>FitsNews</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fitsnews/)</th>
    </tr>
    <tr>
        <th>Florida Times-Union</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/florida-times-union/)</th>
    </tr>
    <tr>
        <th>Forbes</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter041.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/forbes/)</th>
    </tr>
    <tr>
        <th>Foreign Policy Initiative</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/foreign-policy-initiative/)</th>
    </tr>
    <tr>
        <th>Foreign Policy Research Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/foreign-policy-research-institute/)</th>
    </tr>
    <tr>
        <th>Fortnightly Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fortnightly-review/)</th>
    </tr>
    <tr>
        <th>Fortune Magazine</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fortune-magazine/)</th>
    </tr>
    <tr>
        <th>Fort Bend Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fort-bend-herald/)</th>
    </tr>
    <tr>
        <th>Fort Worth Star-Telegram</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/star-telegram/)</th>
    </tr>
    <tr>
        <th>Foundation for Economic Education</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/foundation-for-economic-education/)</th>
    </tr>
    <tr>
        <th>Franklin Center for Government and Public Integrity</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/franklin-center-for-government-and-public-integrity/)</th>
    </tr>
    <tr>
        <th>Fraser Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fraser-institute/)</th>
    </tr>
    <tr>
        <th>Freedom House</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freedom-house/)</th>
    </tr>
    <tr>
        <th>Grand Rapids Press</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/grand-rapids-press/)</th>
    </tr>
    <tr>
        <th>Group of Thirty</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/group-of-thirty/)</th>
    </tr>
    <tr>
        <th>Gulf News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gulf-news/)</th>
    </tr>
    <tr>
        <th>Guns.com</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/guns-com/)</th>
    </tr>
    <tr>
        <th>Herald-Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/herald-sun/)</th>
    </tr>
    <tr>
        <th>Heterodox Academy</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/heterodox-academy/)</th>
    </tr>
    <tr>
        <th>High Point Enterprise</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/high-point-enterprise/)</th>
    </tr>
    <tr>
        <th>The Hindu Business Line</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-hindu-business-line/)</th>
    </tr>
    <tr>
        <th>Honest Reporting</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/honest-reporting/)</th>
    </tr>
    <tr>
        <th>Hoover Institution</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hoover-institution/)</th>
    </tr>
    <tr>
        <th>Human Progress</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/human-progress/)</th>
    </tr>
    <tr>
        <th>In Homeland Security</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/in-homeland-security/)</th>
    </tr>
    <tr>
        <th>InsideSources</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/insidesources/)</th>
    </tr>
    <tr>
        <th>Institute for Humane Studies</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://mediabiasfactcheck.files.wordpress.com/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/institute-for-humane-studies/)</th>
    </tr>
    <tr>
        <th>Irish Independent</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/irish-independent/)</th>
    </tr>
    <tr>
        <th>Israel Hayom</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/israel-hayom/)</th>
    </tr>
    <tr>
        <th>ITV News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/itv-news/)</th>
    </tr>
    <tr>
        <th>Japan Today</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/japan-today/)</th>
    </tr>
    <tr>
        <th>Jewish Breaking News</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jewish-breaking-news/)</th>
    </tr>
    <tr>
        <th>Jewish News Syndicate (JNS)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jewish-news-syndicate-jns/)</th>
    </tr>
    <tr>
        <th>Just Facts</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/just-facts/)</th>
    </tr>
    <tr>
        <th>Just Facts Daily</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right111.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right111.png)</th>
        <th>[link](http://mediabiasfactcheck.com/just-facts-daily/)</th>
    </tr>
    <tr>
        <th>Korea Herald</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/korean-herald/)</th>
    </tr>
    <tr>
        <th>KUTV Salt Lake City</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/kutv-salt-lake-city/)</th>
    </tr>
    <tr>
        <th>Las Vegas Review-Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/las-vegas-review-journal/)</th>
    </tr>
    <tr>
        <th>Learn Liberty</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/learn-liberty/)</th>
    </tr>
    <tr>
        <th>Lexington Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lexington-institute/)</th>
    </tr>
    <tr>
        <th>Libertarianism.org</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/libertarianism-org/)</th>
    </tr>
    <tr>
        <th>Liberty Viral</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-viral/)</th>
    </tr>
    <tr>
        <th>London Broadcasting Company (LBC)</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/london-broadcasting-company-lbc/)</th>
    </tr>
    <tr>
        <th>London Evening Standard</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/london-evening-standard/)</th>
    </tr>
    <tr>
        <th>London Free Press</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/london-free-press/)</th>
    </tr>
    <tr>
        <th>Los Angeles Daily News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](http://mediabiasfactcheck.com/los-angeles-daily-news/)</th>
    </tr>
    <tr>
        <th>Lubbock Avalanche Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lubbock-avalanche-journal/)</th>
    </tr>
    <tr>
        <th>Lynx Media</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lynx-media/)</th>
    </tr>
    <tr>
        <th>Mackinac Center for Public Policy</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mackinac-center-for-public-policy/)</th>
    </tr>
    <tr>
        <th>Manhattan Institute for Policy Research</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/manhattan-institute-for-policy-research/)</th>
    </tr>
    <tr>
        <th>The Manila Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-manila-times/)</th>
    </tr>
    <tr>
        <th>MarketWatch</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/marketwatch/)</th>
    </tr>
    <tr>
        <th>Mercatus Center</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter041.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mercatus-center/)</th>
    </tr>
    <tr>
        <th>Military Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/military-times/)</th>
    </tr>
    <tr>
        <th>Mises Daily</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/mises-daily/)</th>
    </tr>
    <tr>
        <th>MyNorthwest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mynorthwest/)</th>
    </tr>
    <tr>
        <th>National Affairs Magazine</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-affairs-magazine/)</th>
    </tr>
    <tr>
        <th>National Interest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-interest/)</th>
    </tr>
    <tr>
        <th>National Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-post/)</th>
    </tr>
    <tr>
        <th>Netherlands Radio and Television Association (NOS)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/netherlands-radio-and-television-association-nos/)</th>
    </tr>
    <tr>
        <th>New York Post</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-york-post/)</th>
    </tr>
    <tr>
        <th>News-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/news-gazette/)</th>
    </tr>
    <tr>
        <th>News Heist</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-heist/)</th>
    </tr>
    <tr>
        <th>Newsline</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/newsline/)</th>
    </tr>
    <tr>
        <th>News Rescue</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/news-rescue/)</th>
    </tr>
    <tr>
        <th>NTD.TV (New Tang Dynasty)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter041.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ntd-tv-new-tang-dynasty/)</th>
    </tr>
    <tr>
        <th>Odessa American</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/odessa-american/)</th>
    </tr>
    <tr>
        <th>Oil Price</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/oil-price/)</th>
    </tr>
    <tr>
        <th>Omaha World-Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/omaha-world-herald/)</th>
    </tr>
    <tr>
        <th>Open Doors</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/open-doors/)</th>
    </tr>
    <tr>
        <th>Orange County Register</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/orange-county-register/)</th>
    </tr>
    <tr>
        <th>Oregonian</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/oregonian/)</th>
    </tr>
    <tr>
        <th>Orlando Sentinel</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/orlando-sentinel/)</th>
    </tr>
    <tr>
        <th>Ottawa Citizen</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ottawa-citizen/)</th>
    </tr>
    <tr>
        <th>Ottawa Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ottawa-sun/)</th>
    </tr>
    <tr>
        <th>Pacific Research Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pacific-research-institute/)</th>
    </tr>
    <tr>
        <th>Peninsula Daily News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/peninsula-daily-news/)</th>
    </tr>
    <tr>
        <th>Pittsburgh Post-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pittsburgh-post-gazette/)</th>
    </tr>
    <tr>
        <th>Pittsburgh Tribune Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pittsburgh-tribune-review/)</th>
    </tr>
    <tr>
        <th>PolicyEd</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/policyed/)</th>
    </tr>
    <tr>
        <th>Post-Bulletin</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](http://mediabiasfactcheck.com/post-bulletin/)</th>
    </tr>
    <tr>
        <th>PunchingBag Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/punchingbag-post/)</th>
    </tr>
    <tr>
        <th>Quillette</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/quillette/)</th>
    </tr>
    <tr>
        <th>R Street Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/r-street-institute/)</th>
    </tr>
    <tr>
        <th>Rare News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/rare-news/)</th>
    </tr>
    <tr>
        <th>Rasmussen Reports</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/rasmussen-reports/)</th>
    </tr>
    <tr>
        <th>Reagan Battalion</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/reagan-battalion/)</th>
    </tr>
    <tr>
        <th>Real Clear Defense</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/real-clear-defense/)</th>
    </tr>
    <tr>
        <th>Real Clear Investigations</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/real-clear-investigations/)</th>
    </tr>
    <tr>
        <th>Real Clear Policy</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/real-clear-policy/)</th>
    </tr>
    <tr>
        <th>Real Clear Politics</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/real-clear-politics/)</th>
    </tr>
    <tr>
        <th>RealClearReligion</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/realclearreligion/)</th>
    </tr>
    <tr>
        <th>Reason</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/reason/)</th>
    </tr>
    <tr>
        <th>Red River Valley News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-river-valley-news/)</th>
    </tr>
    <tr>
        <th>Regina Leader-Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/regina-leader-post/)</th>
    </tr>
    <tr>
        <th>Regulation Magazine</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter02.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/regulation-magazine/)</th>
    </tr>
    <tr>
        <th>Remington Research Group</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](https://mediabiasfactcheck.com/remington-research-group/)</th>
    </tr>
    <tr>
        <th>Republic World</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/republic-world/)</th>
    </tr>
    <tr>
        <th>Richmond Times-Dispatch</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/richmond-times-dispatch/)</th>
    </tr>
    <tr>
        <th>Russia Insider</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/russia-insider/)</th>
    </tr>
    <tr>
        <th>Russian News Agency-TASS</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/russian-news-agency-tass/)</th>
    </tr>
    <tr>
        <th>Salem Radio Network News (SRN News)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/salem-radio-network-news-srn-news/)</th>
    </tr>
    <tr>
        <th>Saskatoon StarPhoenix</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/saskatoon-starphoenix/)</th>
    </tr>
    <tr>
        <th>Savannah Morning News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/savannah-morning-news/)</th>
    </tr>
    <tr>
        <th>SOFREP</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/sofrep/)</th>
    </tr>
    <tr>
        <th>South Florida Sun-Sentinel</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/south-florida-sun-sentinel/)</th>
    </tr>
    <tr>
        <th>The Spokesman-Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter12.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-spokesman-review/)</th>
    </tr>
    <tr>
        <th>Fort Worth Star-Telegram</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/star-telegram/)</th>
    </tr>
    <tr>
        <th>Statesman Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/statesman-journal/)</th>
    </tr>
    <tr>
        <th>Student Daily News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/student-daily-news/)</th>
    </tr>
    <tr>
        <th>Swarajya</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/swarajya/)</th>
    </tr>
    <tr>
        <th>Tallahassee Democrat</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tallahassee-democrat/)</th>
    </tr>
    <tr>
        <th>Tampa Tribune</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tampa-tribune/)</th>
    </tr>
    <tr>
        <th>Tax Foundation</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tax-foundation/)</th>
    </tr>
    <tr>
        <th>Tharawat Magazine</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tharawat-magazine/)</th>
    </tr>
    <tr>
        <th>The Algemeiner Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter04.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-algemeiner-journal/)</th>
    </tr>
    <tr>
        <th>The American Conservative</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-american-conservative/)</th>
    </tr>
    <tr>
        <th>The American Interest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-american-interest/)</th>
    </tr>
    <tr>
        <th>The Augusta Chronicle</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-augusta-chronicle/)</th>
    </tr>
    <tr>
        <th>The Australian</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-australian/)</th>
    </tr>
    <tr>
        <th>The Chronicle Herald</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-chronicle-herald/)</th>
    </tr>
    <tr>
        <th>The Courier-Mail (Australia)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter041.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-courier-mail/)</th>
    </tr>
    <tr>
        <th>The Daily Citizen (Dalton)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/daily-citizen-dalton/)</th>
    </tr>
    <tr>
        <th>The Durango Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-durango-herald/)</th>
    </tr>
    <tr>
        <th>The Epoch Times</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-epoch-times/)</th>
    </tr>
    <tr>
        <th>The Fiscal Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-fiscal-times/)</th>
    </tr>
    <tr>
        <th>The Gazette (Cedar Rapids)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-gazette-cedar-rapids/)</th>
    </tr>
    <tr>
        <th>The Globe and Mail</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-globe-and-mail/)</th>
    </tr>
    <tr>
        <th>The Independent Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter12.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter12.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-independent-review/)</th>
    </tr>
    <tr>
        <th>The Jack News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-jack-news/)</th>
    </tr>
    <tr>
        <th>The Jamestown Foundation</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-jamestown-foundation/)</th>
    </tr>
    <tr>
        <th>The Japan News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter10.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-japan-news/)</th>
    </tr>
    <tr>
        <th>The Jewish Press</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-jewish-press/)</th>
    </tr>
    <tr>
        <th>The Ledger</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-ledger/)</th>
    </tr>
    <tr>
        <th>The Libertarian Republic</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter04.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/rightcenter04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-libertarian-republic/)</th>
    </tr>
    <tr>
        <th>The Nation Pakistan</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-nation-pakistan/)</th>
    </tr>
    <tr>
        <th>The National (UAE)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-national-uae/)</th>
    </tr>
    <tr>
        <th>The New Atlantis</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-new-atlantis/)</th>
    </tr>
    <tr>
        <th>The News Lens</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-news-lens/)</th>
    </tr>
    <tr>
        <th>The Objective Standard</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-objective-standard/)</th>
    </tr>
    <tr>
        <th>The Oklahoman</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-oklahoman/)</th>
    </tr>
    <tr>
        <th>The Press-Enterprise</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-press-enterprise/)</th>
    </tr>
    <tr>
        <th>The Quint</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-quint/)</th>
    </tr>
    <tr>
        <th>The Smoking Gun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-smoking-gun/)</th>
    </tr>
    <tr>
        <th>The Sorrentino</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-sorrentino/)</th>
    </tr>
    <tr>
        <th>The Spectator (UK)</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-spectator-uk/)</th>
    </tr>
    <tr>
        <th>The Straits Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-straits-times/)</th>
    </tr>
    <tr>
        <th>The Sumter Item</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-sumter-item/)</th>
    </tr>
    <tr>
        <th>The Tennessean</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-tennessean/)</th>
    </tr>
    <tr>
        <th>The Times Herald (Port Huron)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-times-herald-port-huron/)</th>
    </tr>
    <tr>
        <th>Washington Institute for Near East Policy</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter021.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-institute-for-near-east-policy/)</th>
    </tr>
    <tr>
        <th>The West Australian</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter061.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-west-australian/)</th>
    </tr>
    <tr>
        <th>The Winchester Star</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter051.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-winchester-star/)</th>
    </tr>
    <tr>
        <th>The Times of London</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-times-of-london/)</th>
    </tr>
    <tr>
        <th>Times News (Pennsylvania)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/times-news-pennsylvania/)</th>
    </tr>
    <tr>
        <th>Times of South Africa (Times Live)</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/times-of-south-africa-times-live/)</th>
    </tr>
    <tr>
        <th>Toledo Blade</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](http://mediabiasfactcheck.com/toledo-blade/)</th>
    </tr>
    <tr>
        <th>Topeka Capital-Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter112.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png)</th>
        <th>[link](https://mediabiasfactcheck.com/topeka-capital-journal/)</th>
    </tr>
    <tr>
        <th>Tulsa World</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tulsa-world/)</th>
    </tr>
    <tr>
        <th>ValueWalk</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/valuewalk/)</th>
    </tr>
    <tr>
        <th>Vancouver Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter101.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vancouver-sun/)</th>
    </tr>
    <tr>
        <th>Wall Street Journal</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter011.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wall-street-journal/)</th>
    </tr>
    <tr>
        <th>Washington Babylon</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/washington-babylon/)</th>
    </tr>
    <tr>
        <th>Washington Times</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter01.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/washington-times/)</th>
    </tr>
    <tr>
        <th>Watchdog.org</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter031.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/watchdog-org/)</th>
    </tr>
    <tr>
        <th>Waterbury Republican-American</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter06.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/waterbury-republican-american/)</th>
    </tr>
    <tr>
        <th>Wichita Eagle</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter122.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wichita-eagle/)</th>
    </tr>
    <tr>
        <th>WikiLeaks</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th>[rightcenter05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/wikileaks/)</th>
    </tr>
    <tr>
        <th>Williamsport Sun-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th>[rightcenter081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/williamsport-sun-gazette/)</th>
    </tr>
    <tr>
        <th>1600 Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/1600-daily/)</th>
    </tr>
    <tr>
        <th>2ndVote</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/2ndvote/)</th>
    </tr>
    <tr>
        <th>Acculturated</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/acculturated/)</th>
    </tr>
    <tr>
        <th>Accuracy in Academia (AIA)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/accuracy-in-academia-aia/)</th>
    </tr>
    <tr>
        <th>Accuracy in Media (AIM)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/accuracy-in-media-aim/)</th>
    </tr>
    <tr>
        <th>Acting Man</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/acting-man/)</th>
    </tr>
    <tr>
        <th>Against Crony Capitialism</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/against-crony-capitialism/)</th>
    </tr>
    <tr>
        <th>Allen B. West</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/allen-b-west/)</th>
    </tr>
    <tr>
        <th>AltNewsMedia.net</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/altnewsmedia-net/)</th>
    </tr>
    <tr>
        <th>America First Action SuperPAC</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/america-first-action-superpac/)</th>
    </tr>
    <tr>
        <th>American Center for Law and Justice (ACLJ)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-center-law-justice-aclj/)</th>
    </tr>
    <tr>
        <th>American Consequences</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-consequences/)</th>
    </tr>
    <tr>
        <th>American Enterprise Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right09.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right09.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-enterprise-institute/)</th>
    </tr>
    <tr>
        <th>American Greatness</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-greatness/)</th>
    </tr>
    <tr>
        <th>Americans for Prosperity</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/americans-for-prosperity/)</th>
    </tr>
    <tr>
        <th>American Legislative Exchange Council (ALEC)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-legislative-exchange-council-alec/)</th>
    </tr>
    <tr>
        <th>American Liberty Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-liberty-report/)</th>
    </tr>
    <tr>
        <th>American News 24/7</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-news-24-7/)</th>
    </tr>
    <tr>
        <th>American News Hub</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/american-news-hub/)</th>
    </tr>
    <tr>
        <th>American Spectator</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-spectator/)</th>
    </tr>
    <tr>
        <th>American Web Media (AWM)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right111.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right111.png)</th>
        <th>[link](http://mediabiasfactcheck.com/american-web-media-awm/)</th>
    </tr>
    <tr>
        <th>Ammoland</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ammoland/)</th>
    </tr>
    <tr>
        <th>Anadolu Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/anadolu-agency/)</th>
    </tr>
    <tr>
        <th>Arizona Daily Independent</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/arizona-daily-independent/)</th>
    </tr>
    <tr>
        <th>Assyrian International News Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/assyrian-international-news-agency/)</th>
    </tr>
    <tr>
        <th>Axiom News Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/axiom-news-network/)</th>
    </tr>
    <tr>
        <th>Bearing Arms</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bearing-arms/)</th>
    </tr>
    <tr>
        <th>Being Libertarian</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/being-libertarian/)</th>
    </tr>
    <tr>
        <th>Beliefnet</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/beliefnet/)</th>
    </tr>
    <tr>
        <th>Big Government News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/big-government-news/)</th>
    </tr>
    <tr>
        <th>Big League Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/big-league-politics/)</th>
    </tr>
    <tr>
        <th>Bizpac Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/bizpac-review/)</th>
    </tr>
    <tr>
        <th>Blue Lives Matter</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/blue-lives-matter/)</th>
    </tr>
    <tr>
        <th>BrexitCentral</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/brexitcentral/)</th>
    </tr>
    <tr>
        <th>Cambridge Analytica</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/cambridge-analytica/)</th>
    </tr>
    <tr>
        <th>Campaign Life Coalition</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/campaign-life-coalition/)</th>
    </tr>
    <tr>
        <th>Campus Reform</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/campus-reform/)</th>
    </tr>
    <tr>
        <th>Capital Research Center</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/capital-research-center/)</th>
    </tr>
    <tr>
        <th>Center for Freedom and Prosperity</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/center-for-freedom-and-prosperity/)</th>
    </tr>
    <tr>
        <th>Chicks on the Right</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/chicks-on-the-right/)</th>
    </tr>
    <tr>
        <th>Christian News Alerts</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/christian-news-alerts/)</th>
    </tr>
    <tr>
        <th>Christian Post</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/christian-post/)</th>
    </tr>
    <tr>
        <th>Chronicles Magazine (Rockford)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/chronicles-magazine-rockford/)</th>
    </tr>
    <tr>
        <th>Church Militant</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/church-militant/)</th>
    </tr>
    <tr>
        <th>Citizen Free Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/citizen-free-press/)</th>
    </tr>
    <tr>
        <th>Citizens United</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/citizens-united/)</th>
    </tr>
    <tr>
        <th>City Journal</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/city-journal/)</th>
    </tr>
    <tr>
        <th>Civitas Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/civitas-institute/)</th>
    </tr>
    <tr>
        <th>Clear Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/clear-politics/)</th>
    </tr>
    <tr>
        <th>Cold Dead Hands</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/cold-dead-hands/)</th>
    </tr>
    <tr>
        <th>Commentary Magazine</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/commentary-magazine/)</th>
    </tr>
    <tr>
        <th>Communities Digital News (CDN)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/communities-digital-news/)</th>
    </tr>
    <tr>
        <th>Conservative Base</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-base/)</th>
    </tr>
    <tr>
        <th>Conservative Daily News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-daily-news/)</th>
    </tr>
    <tr>
        <th>Conservatives Here</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservatives-here/)</th>
    </tr>
    <tr>
        <th>Conservative HQ</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-hq/)</th>
    </tr>
    <tr>
        <th>Conservative Institute</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-institute/)</th>
    </tr>
    <tr>
        <th>ConservativeOpinion.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservativeopinion-com/)</th>
    </tr>
    <tr>
        <th>Conservative Outfitters</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeright03.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-outfitters/)</th>
    </tr>
    <tr>
        <th>Conservative Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/conservative-review/)</th>
    </tr>
    <tr>
        <th>Conservative Today</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/conservative-today/)</th>
    </tr>
    <tr>
        <th>Controversial Times</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/controversial-times/)</th>
    </tr>
    <tr>
        <th>Cowger Nation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/cowger-nation/)</th>
    </tr>
    <tr>
        <th>Crime Prevention Research Center</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/crime-prevention-research-center/)</th>
    </tr>
    <tr>
        <th>Crisis Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/crisis-magazine/)</th>
    </tr>
    <tr>
        <th>CSC Mediagroup USA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/csc-mediagroup-usa/)</th>
    </tr>
    <tr>
        <th>Daily Caller</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-caller/)</th>
    </tr>
    <tr>
        <th>Daily Express</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-express/)</th>
    </tr>
    <tr>
        <th>The Daily Liberator</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-liberator/)</th>
    </tr>
    <tr>
        <th>Daily Telegraph (UK)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-telegraph/)</th>
    </tr>
    <tr>
        <th>Daily Sabah</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-sabah/)</th>
    </tr>
    <tr>
        <th>Daily Signal</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-signal/)</th>
    </tr>
    <tr>
        <th>Daily Surge</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/daily-surge/)</th>
    </tr>
    <tr>
        <th>Dangerous</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dangerous/)</th>
    </tr>
    <tr>
        <th>DC Statesman</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/dc-statesman/)</th>
    </tr>
    <tr>
        <th>DC Whispers</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/dc-whispers/)</th>
    </tr>
    <tr>
        <th>Debate Post</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right111.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right111.png)</th>
        <th>[link](http://mediabiasfactcheck.com/debate-post/)</th>
    </tr>
    <tr>
        <th>Deplorables Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/deplorables-report/)</th>
    </tr>
    <tr>
        <th>Eagle PAC</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/eagle-pac/)</th>
    </tr>
    <tr>
        <th>EconomicPolicyJournal.com</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/economicpolicyjournal-com/)</th>
    </tr>
    <tr>
        <th>Energy Citizens</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/energy-citizens/)</th>
    </tr>
    <tr>
        <th>Ethics & Religious Liberty Commission (ERLC)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ethics-religious-liberty-commission-erlc/)</th>
    </tr>
    <tr>
        <th>Facts and Logic About the Middle East (FLAME)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/facts-and-logic-about-the-middle-east-flame/)</th>
    </tr>
    <tr>
        <th>FaithWire</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/faithwire/)</th>
    </tr>
    <tr>
        <th>Fake Hate Crimes</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/fake-hate-crimes/)</th>
    </tr>
    <tr>
        <th>Family Security Matters</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeright05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/family-security-matters/)</th>
    </tr>
    <tr>
        <th>Far Left Watch</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/far-left-watch/)</th>
    </tr>
    <tr>
        <th>Federalist Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/federalist-press/)</th>
    </tr>
    <tr>
        <th>Federalist Society</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/federalist-society/)</th>
    </tr>
    <tr>
        <th>First in Freedom Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/first-freedom-daily/)</th>
    </tr>
    <tr>
        <th>First Things Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/first-things-magazine/)</th>
    </tr>
    <tr>
        <th>Fox News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/fox-news/)</th>
    </tr>
    <tr>
        <th>Freedom Crossroads</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/freedom-crossroads/)</th>
    </tr>
    <tr>
        <th>Freedom Works</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/freedom-works/)</th>
    </tr>
    <tr>
        <th>Free Republic</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/free-republic/)</th>
    </tr>
    <tr>
        <th>Free West Media</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/free-west-media/)</th>
    </tr>
    <tr>
        <th>Frontiers of Freedom</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/frontiers-of-freedom/)</th>
    </tr>
    <tr>
        <th>Foundation for Defense of Democracies</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](https://mediabiasfactcheck.com/foundation-defense-democracies/)</th>
    </tr>
    <tr>
        <th>Future in America</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/future-in-america/)</th>
    </tr>
    <tr>
        <th>Gatestone Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gatestone-institute/)</th>
    </tr>
    <tr>
        <th>Get Religion</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/get-religion/)</th>
    </tr>
    <tr>
        <th>GOP.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/gop-com/)</th>
    </tr>
    <tr>
        <th>GOPUSA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/gopusa/)</th>
    </tr>
    <tr>
        <th>Government Accountability Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/government-accountability-institute/)</th>
    </tr>
    <tr>
        <th>Grabien News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/grabien-news/)</th>
    </tr>
    <tr>
        <th>Great American Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/great-american-politics/)</th>
    </tr>
    <tr>
        <th>Guerrilla News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/guerrilla-news/)</th>
    </tr>
    <tr>
        <th>Guido Fawkes</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/guido-fawkes/)</th>
    </tr>
    <tr>
        <th>Heat Street</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/heat-street/)</th>
    </tr>
    <tr>
        <th>Heritage Foundation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/heritage-foundation/)</th>
    </tr>
    <tr>
        <th>HermanCain.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hermancain-com/)</th>
    </tr>
    <tr>
        <th>Hillary Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/hillary-daily/)</th>
    </tr>
    <tr>
        <th>Hot Air</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hot-air/)</th>
    </tr>
    <tr>
        <th>Hudson Institute</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/hudson-institute/)</th>
    </tr>
    <tr>
        <th>Human Events</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/human-events/)</th>
    </tr>
    <tr>
        <th>Imprimis (Hillsdale College)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/imprimis-hillsdale-college/)</th>
    </tr>
    <tr>
        <th>Independent Journal Review</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/independent-journal-review/)</th>
    </tr>
    <tr>
        <th>Independent Sentinel</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/independent-sentinel/)</th>
    </tr>
    <tr>
        <th>Independent Women’s Forum (IWF)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/independent-womens-forum-iwf/)</th>
    </tr>
    <tr>
        <th>Influence Watch</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/influence-watch/)</th>
    </tr>
    <tr>
        <th>Illinois Policy Institute</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/illinois-policy-institute/)</th>
    </tr>
    <tr>
        <th>Intellectual Takeout</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/intellectual-takeout/)</th>
    </tr>
    <tr>
        <th>I Bleed Red White and Blue</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/bleed-red-white-blue/)</th>
    </tr>
    <tr>
        <th>iPatriot</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ipatriot/)</th>
    </tr>
    <tr>
        <th>Institute for Family Studies</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/institute-for-family-studies/)</th>
    </tr>
    <tr>
        <th>Investors Business Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/investors-business-daily/)</th>
    </tr>
    <tr>
        <th>Jewish Policy Center</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/jewish-policy-center/)</th>
    </tr>
    <tr>
        <th>Jewish World Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/jewish-world-review/)</th>
    </tr>
    <tr>
        <th>Judicial Crisis Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/judicial-crisis-network/)</th>
    </tr>
    <tr>
        <th>Kansas Policy Institute (KPI)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/kansas-policy-institute-kpi/)</th>
    </tr>
    <tr>
        <th>Keep and Bear</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/keep-and-bear/)</th>
    </tr>
    <tr>
        <th>Knox Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://mediabiasfactcheck.files.wordpress.com/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/knox-report/)</th>
    </tr>
    <tr>
        <th>Legal Insurrection</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/legal-insurrection/)</th>
    </tr>
    <tr>
        <th>Liberty Hangout</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-hangout/)</th>
    </tr>
    <tr>
        <th>Liberty Headlines</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/liberty-headlines/)</th>
    </tr>
    <tr>
        <th>Liberty Nation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/liberty-nation/)</th>
    </tr>
    <tr>
        <th>Liberty News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/liberty-news/)</th>
    </tr>
    <tr>
        <th>LibertyTalk.FM</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeright04.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/libertytalk-fm/)</th>
    </tr>
    <tr>
        <th>Life and About</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/life-and-about/)</th>
    </tr>
    <tr>
        <th>Life Decisions International</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/life-decisions-international/)</th>
    </tr>
    <tr>
        <th>Life News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/life-news/)</th>
    </tr>
    <tr>
        <th>Life Site News</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeright05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/life-site-news/)</th>
    </tr>
    <tr>
        <th>LifeZette</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lifezette/)</th>
    </tr>
    <tr>
        <th>Lone Conservative</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lone-conservative/)</th>
    </tr>
    <tr>
        <th>Lozier Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/lozier-institute/)</th>
    </tr>
    <tr>
        <th>Lyin’ Comey</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/lyin-comey/)</th>
    </tr>
    <tr>
        <th>Louder With Crowder</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/louder-with-crowder/)</th>
    </tr>
    <tr>
        <th>Manchester Union Leader</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right11.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right11.png)</th>
        <th>[link](http://mediabiasfactcheck.com/manchester-union-leader/)</th>
    </tr>
    <tr>
        <th>Media Circus</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/media-circus/)</th>
    </tr>
    <tr>
        <th>Media Equalizer</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/media-equalizer/)</th>
    </tr>
    <tr>
        <th>Media Research Center (MRC)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/media-research-center-mrc/)</th>
    </tr>
    <tr>
        <th>Media Trackers</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/media-trackers/)</th>
    </tr>
    <tr>
        <th>Mehr News Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mehr-news-agency/)</th>
    </tr>
    <tr>
        <th>Mercatornet</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/mercatornet/)</th>
    </tr>
    <tr>
        <th>National Center for Public Policy Research (NCPPR)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/national-center-public-policy-research-ncppr/)</th>
    </tr>
    <tr>
        <th>National Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-review/)</th>
    </tr>
    <tr>
        <th>National Rifle Association (NRA)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/national-rifle-association-nra/)</th>
    </tr>
    <tr>
        <th>New Boston Post</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/new-boston-post/)</th>
    </tr>
    <tr>
        <th>Newsbusters</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsbusters/)</th>
    </tr>
    <tr>
        <th>Newsmax</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/newsmax/)</th>
    </tr>
    <tr>
        <th>New Revolution Now</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-revolution-now/)</th>
    </tr>
    <tr>
        <th>New York Observer</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/new-york-observer/)</th>
    </tr>
    <tr>
        <th>Next News Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/next-news-network/)</th>
    </tr>
    <tr>
        <th>Not Liberal</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/not-liberal/)</th>
    </tr>
    <tr>
        <th>NTK Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ntk-network/)</th>
    </tr>
    <tr>
        <th>Numbers USA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/numbers-usa/)</th>
    </tr>
    <tr>
        <th>Offended America</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/offended-america/)</th>
    </tr>
    <tr>
        <th>Offgrid Survival</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/offgrid-survival/)</th>
    </tr>
    <tr>
        <th>One America News Network (OAN)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/one-america-news-network/)</th>
    </tr>
    <tr>
        <th>OneNewsNow</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/onenewsnow/)</th>
    </tr>
    <tr>
        <th>Ontario Proud</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ontario-proud/)</th>
    </tr>
    <tr>
        <th>OpsLens</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/opslens/)</th>
    </tr>
    <tr>
        <th>Patriot News Alerts</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriot-news-alerts/)</th>
    </tr>
    <tr>
        <th>Patriot News Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriot-news-daily/)</th>
    </tr>
    <tr>
        <th>PatriotRetort.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/patriotretort-com/)</th>
    </tr>
    <tr>
        <th>PJ Media</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/pj-media/)</th>
    </tr>
    <tr>
        <th>Policy Review</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/policy-review/)</th>
    </tr>
    <tr>
        <th>Political Insider</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/political-insider/)</th>
    </tr>
    <tr>
        <th>Politichicks</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/politichicks/)</th>
    </tr>
    <tr>
        <th>PoliticsNote</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/politicsnote/)</th>
    </tr>
    <tr>
        <th>Politifeed</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/politifeed/)</th>
    </tr>
    <tr>
        <th>Politisite</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/politisite/)</th>
    </tr>
    <tr>
        <th>Populist Wire</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/populist-wire/)</th>
    </tr>
    <tr>
        <th>Power Line</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/power-line/)</th>
    </tr>
    <tr>
        <th>Project Veritas</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/project-veritas/)</th>
    </tr>
    <tr>
        <th>Proud Conservatives</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/proud-conservatives/)</th>
    </tr>
    <tr>
        <th>Public Interest Legal Foundation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/public-interest-legal-foundation/)</th>
    </tr>
    <tr>
        <th>Pluralist</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/pluralist/)</th>
    </tr>
    <tr>
        <th>Quadrant Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/quadrant-magazine/)</th>
    </tr>
    <tr>
        <th>Reader’s Digest</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png)</th>
        <th>[link](https://mediabiasfactcheck.com/readers-digest/)</th>
    </tr>
    <tr>
        <th>Red Alert Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-alert-politics/)</th>
    </tr>
    <tr>
        <th>Red Flag News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/red-flag-news/)</th>
    </tr>
    <tr>
        <th>Regated News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/regated-news/)</th>
    </tr>
    <tr>
        <th>RenewedRight.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/renewedright-com/)</th>
    </tr>
    <tr>
        <th>Resistance Media</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th>[extremeright061.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/resistance-media/)</th>
    </tr>
    <tr>
        <th>Restore American Glory</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/restore-american-glory/)</th>
    </tr>
    <tr>
        <th>Richochet</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/richochet/)</th>
    </tr>
    <tr>
        <th>Ron Paul Liberty Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/ron-paul-liberty-report/)</th>
    </tr>
    <tr>
        <th>Save Jersey</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/save-jersey/)</th>
    </tr>
    <tr>
        <th>Secure America Now</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/secure-america-now/)</th>
    </tr>
    <tr>
        <th>Sentinel KSMO</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sentinel-ksmo/)</th>
    </tr>
    <tr>
        <th>Silence is Consent</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/silence-is-consent/)</th>
    </tr>
    <tr>
        <th>Sinclair Broadcast Group</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sinclair-broadcast-group/)</th>
    </tr>
    <tr>
        <th>Sonoran News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/sonoran-news/)</th>
    </tr>
    <tr>
        <th>Spiked Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/spiked-magazine/)</th>
    </tr>
    <tr>
        <th>Standpoint Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/standpoint-magazine/)</th>
    </tr>
    <tr>
        <th>Tasnim News Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tasnim-news-agency/)</th>
    </tr>
    <tr>
        <th>Tea Party News (The Point)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tea-party-news-tpnn/)</th>
    </tr>
    <tr>
        <th>Tea Party Patriots</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right101.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tea-party-patriots/)</th>
    </tr>
    <tr>
        <th>Tea Party Tribune</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tea-party-tribune/)</th>
    </tr>
    <tr>
        <th>Tehran Times</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/tehran-times/)</th>
    </tr>
    <tr>
        <th>The Advertiser</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-advertiser/)</th>
    </tr>
    <tr>
        <th>The American Cause</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-american-cause/)</th>
    </tr>
    <tr>
        <th>The Blacksphere (Kevin Jackson)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-blacksphere-kevin-jackson/)</th>
    </tr>
    <tr>
        <th>The Blaze</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-blaze/)</th>
    </tr>
    <tr>
        <th>The California Republican</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-california-republican/)</th>
    </tr>
    <tr>
        <th>The Citizen Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-citizen-press/)</th>
    </tr>
    <tr>
        <th>The College Fix</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-college-fix/)</th>
    </tr>
    <tr>
        <th>The Conservative Nut</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-conservative-nut/)</th>
    </tr>
    <tr>
        <th>The Conservative Woman</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-conservative-woman/)</th>
    </tr>
    <tr>
        <th>The Daily Defender</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-daily-defender/)</th>
    </tr>
    <tr>
        <th>The Daily Telegraph (Australia)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-telegraph-australia/)</th>
    </tr>
    <tr>
        <th>The Daily Wire</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-daily-wire/)</th>
    </tr>
    <tr>
        <th>The DC Chronicle</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-dc-chronicle/)</th>
    </tr>
    <tr>
        <th>The Federalist</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-federalist/)</th>
    </tr>
    <tr>
        <th>The Hayride</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-hayride/)</th>
    </tr>
    <tr>
        <th>The Last Refuge (Conservative Treehouse)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-last-refuge/)</th>
    </tr>
    <tr>
        <th>The Millennial Review</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-millennial-review/)</th>
    </tr>
    <tr>
        <th>The New American</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right07.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-new-american/)</th>
    </tr>
    <tr>
        <th>The Newly Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-newly-press/)</th>
    </tr>
    <tr>
        <th>The Ohio Star</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-ohio-star/)</th>
    </tr>
    <tr>
        <th>The Patriot Post</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-patriot-post/)</th>
    </tr>
    <tr>
        <th>The Post and Email</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-post-email/)</th>
    </tr>
    <tr>
        <th>The Post Millennial</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-post-millennial/)</th>
    </tr>
    <tr>
        <th>The RANTidote</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-rantidote/)</th>
    </tr>
    <tr>
        <th>The Real Strategy</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-real-strategy/)</th>
    </tr>
    <tr>
        <th>The Rebel</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-rebel/)</th>
    </tr>
    <tr>
        <th>The Resurgent</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-resurgent/)</th>
    </tr>
    <tr>
        <th>The Right Scoop</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right04.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right04.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-right-scoop/)</th>
    </tr>
    <tr>
        <th>The Ron Paul Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-ron-paul-institute/)</th>
    </tr>
    <tr>
        <th>The Sun</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right05.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png)</th>
        <th>[link](http://mediabiasfactcheck.com/the-sun/)</th>
    </tr>
    <tr>
        <th>The Tennessee Star</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-tennessee-star/)</th>
    </tr>
    <tr>
        <th>The Truth About Guns</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right081.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png)</th>
        <th>[link](https://mediabiasfactcheck.com/the-truth-about-guns/)</th>
    </tr>
    <tr>
        <th>Toronto Sun</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right08.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png)</th>
        <th>[link](http://mediabiasfactcheck.com/toronto-sun/)</th>
    </tr>
    <tr>
        <th>Townhall</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right06.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png)</th>
        <th>[link](http://mediabiasfactcheck.com/townhall/)</th>
    </tr>
    <tr>
        <th>Tribunist</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/tribunist/)</th>
    </tr>
    <tr>
        <th>TRT World</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/trt-world/)</th>
    </tr>
    <tr>
        <th>Turning Point USA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/turning-point-usa/)</th>
    </tr>
    <tr>
        <th>Twitchy</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/twitchy/)</th>
    </tr>
    <tr>
        <th>Unbiased America</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/unbiased-america/)</th>
    </tr>
    <tr>
        <th>Unity News Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](https://mediabiasfactcheck.com/unity-news-network/)</th>
    </tr>
    <tr>
        <th>UN Watch</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/un-watch/)</th>
    </tr>
    <tr>
        <th>US Politics Info</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/us-politics-info/)</th>
    </tr>
    <tr>
        <th>USA Politics Today</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/usa-politics-today/)</th>
    </tr>
    <tr>
        <th>USSA News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](https://mediabiasfactcheck.com/ussa-news/)</th>
    </tr>
    <tr>
        <th>Vessel News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right021.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vessel-news/)</th>
    </tr>
    <tr>
        <th>VivaLiberty</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right031.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png)</th>
        <th>[link](http://mediabiasfactcheck.com/vivaliberty/)</th>
    </tr>
    <tr>
        <th>Washington Examiner</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right091.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png)</th>
        <th>[link](http://mediabiasfactcheck.com/washington-examiner/)</th>
    </tr>
    <tr>
        <th>Washington Free Beacon</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right03.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png)</th>
        <th>[link](http://mediabiasfactcheck.com/washington-free-beacon/)</th>
    </tr>
    <tr>
        <th>Weasel Zippers</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right01.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png)</th>
        <th>[link](http://mediabiasfactcheck.com/weasel-zippers/)</th>
    </tr>
    <tr>
        <th>Weekly Standard</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](http://mediabiasfactcheck.com/weekly-standard/)</th>
    </tr>
    <tr>
        <th>Western Journal</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right02.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png)</th>
        <th>[link](http://mediabiasfactcheck.com/western-journalism/)</th>
    </tr>
    <tr>
        <th>WestMonster</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right041.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png)</th>
        <th>[link](https://mediabiasfactcheck.com/westmonster/)</th>
    </tr>
    <tr>
        <th>Whatfinger</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right051.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png)</th>
        <th>[link](https://mediabiasfactcheck.com/whatfinger/)</th>
    </tr>
    <tr>
        <th>World Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right061.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-magazine/)</th>
    </tr>
    <tr>
        <th>World Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/world-tribune/)</th>
    </tr>
    <tr>
        <th>YellowHammer News</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right10.png](https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right10.png)</th>
        <th>[link](http://mediabiasfactcheck.com/yellowhammer-news/)</th>
    </tr>
    <tr>
        <th>Young America’s Foundation (YAF)</th>
        <th>HIGH</th>
        <th>Right</th>
        <th>[right071.png](https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png)</th>
        <th>[link](https://mediabiasfactcheck.com/young-americas-foundation-yaf/)</th>
    </tr>
    <tr>
        <th>Young Conservatives</th>
        <th>MIXED</th>
        <th>Right</th>
        <th>[right011.png](https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png)</th>
        <th>[link](http://mediabiasfactcheck.com/young-conservatives/)</th>
    </tr>
    </tbody>
</table>

The data is skewed towards more centre-left sources and lists them as proportionally more factual than centre-right sources, but in isolation these data do not imply mediabiasfactcheck.com has any left-right bias.

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/mediabiasfactcheck.com-bias).

## Future Work

I would like to collect a more fine grained left-right bias from their website, which can be done using the slider on each page. I would then like to compare the values given on mediabiasfactcheck.com with those givern on adfontesmedia.com and chart the difference between their scores for each media outlet.