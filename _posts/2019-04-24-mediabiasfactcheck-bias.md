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
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/10news-one/">link</a></th>
    </tr>
    <tr>
        <th>24 News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/24-news/">link</a></th>
    </tr>
    <tr>
        <th>100 Percent Fed Up</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/100-percent-fed-up/">link</a></th>
    </tr>
    <tr>
        <th>247 News Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/247-news-media/">link</a></th>
    </tr>
    <tr>
        <th>70 News (Fake)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/70-news/">link</a></th>
    </tr>
    <tr>
        <th>Activist Mommy</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/activist-mommy/">link</a></th>
    </tr>
    <tr>
        <th>Age of Shitlords</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/age-of-shitlords/">link</a></th>
    </tr>
    <tr>
        <th>Alpha News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/alpha-news/">link</a></th>
    </tr>
    <tr>
        <th>Allen West Republic</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/allen-west-republic/">link</a></th>
    </tr>
    <tr>
        <th>Alliance Defending Freedom</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/alliance-defending-freedom/">link</a></th>
    </tr>
    <tr>
        <th>All News Pipeline</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/all-news-pipeline/">link</a></th>
    </tr>
    <tr>
        <th>Alternative Media Syndicate</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/alternative-media-syndicate/">link</a></th>
    </tr>
    <tr>
        <th>AltRight.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/altright-com/">link</a></th>
    </tr>
    <tr>
        <th>Amazingnews.net</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/amazingnews-net/">link</a></th>
    </tr>
    <tr>
        <th>American College of Pediatricians</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-college-of-pediatricians/">link</a></th>
    </tr>
    <tr>
        <th>American Fans</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-fans/">link</a></th>
    </tr>
    <tr>
        <th>American Patriot Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-patriot-daily/">link</a></th>
    </tr>
    <tr>
        <th>American Family Association</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-family-association/">link</a></th>
    </tr>
    <tr>
        <th>American Flavor</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-flavor/">link</a></th>
    </tr>
    <tr>
        <th>Americas Freedom Fighters</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-freedom-fighters/">link</a></th>
    </tr>
    <tr>
        <th>American Journal Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-journal-review/">link</a></th>
    </tr>
    <tr>
        <th>American Lookout</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-lookout/">link</a></th>
    </tr>
    <tr>
        <th>American News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-news/">link</a></th>
    </tr>
    <tr>
        <th>American People Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-people-network/">link</a></th>
    </tr>
    <tr>
        <th>American Prides</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-prides/">link</a></th>
    </tr>
    <tr>
        <th>American Principles Project</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-principles-project/">link</a></th>
    </tr>
    <tr>
        <th>American Renaissance Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-renaissance-magazine/">link</a></th>
    </tr>
    <tr>
        <th>American Society for the Defense of Tradition, Family, and Property</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-society-defense-tradition-family-property/">link</a></th>
    </tr>
    <tr>
        <th>American Thinker</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-thinker/">link</a></th>
    </tr>
    <tr>
        <th>American Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-today/">link</a></th>
    </tr>
    <tr>
        <th>American Truth Seekers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-truth-seekers/">link</a></th>
    </tr>
    <tr>
        <th>American Updater</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-updater/">link</a></th>
    </tr>
    <tr>
        <th>Americans Against the Tea Party (AATTP)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/americans-against-the-tea-party-aattp/">link</a></th>
    </tr>
    <tr>
        <th>anews-24.com (American News)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/anews-24-com-american-news/">link</a></th>
    </tr>
    <tr>
        <th>Aurora-News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/aurora-news/">link</a></th>
    </tr>
    <tr>
        <th>A Voice for Men</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/a-voice-for-men/">link</a></th>
    </tr>
    <tr>
        <th>Banned Information</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/banned-information/">link</a></th>
    </tr>
    <tr>
        <th>Bare Naked Islam</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bare-naked-islam/">link</a></th>
    </tr>
    <tr>
        <th>BB4SP</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bb4sp/">link</a></th>
    </tr>
    <tr>
        <th>BeAware</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/beaware/">link</a></th>
    </tr>
    <tr>
        <th>Big Blue Vision</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/big-blue-vision/">link</a></th>
    </tr>
    <tr>
        <th>Bipartisan Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bipartisan-report/">link</a></th>
    </tr>
    <tr>
        <th>Black Genocide</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/black-genocide/">link</a></th>
    </tr>
    <tr>
        <th>Black Pigeon Speaks</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/black-pigeon-speaks/">link</a></th>
    </tr>
    <tr>
        <th>BlingNews.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/blingnews-com/">link</a></th>
    </tr>
    <tr>
        <th>Blue Informer</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/blue-informer/">link</a></th>
    </tr>
    <tr>
        <th>Blue Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/blue-tribune/">link</a></th>
    </tr>
    <tr>
        <th>BlueVision.News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bluevision-news/">link</a></th>
    </tr>
    <tr>
        <th>Blue Vision Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/blue-vision-post/">link</a></th>
    </tr>
    <tr>
        <th>Blunt Force Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/blunt-force-truth/">link</a></th>
    </tr>
    <tr>
        <th>Borderland Alternative Media (BAM)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/borderland-alternative-media-bam/">link</a></th>
    </tr>
    <tr>
        <th>Breakingtop.world</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/breakingtop-world/">link</a></th>
    </tr>
    <tr>
        <th>Breitbart</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/breitbart/">link</a></th>
    </tr>
    <tr>
        <th>Britain First</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/britain-first/">link</a></th>
    </tr>
    <tr>
        <th>Canada Free Press</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/canada-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Censored.News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/censored-news/">link</a></th>
    </tr>
    <tr>
        <th>Center for Immigration Studies (CIS)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-immigration-studies-cis/">link</a></th>
    </tr>
    <tr>
        <th>Centre for Research of Radicalism and National Security (CRRNS)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/centre-for-research-of-radicalism-and-national-security-crrns/">link</a></th>
    </tr>
    <tr>
        <th>Cerno (Cernovich.com)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/cerno-cernovich-com/">link</a></th>
    </tr>
    <tr>
        <th>Christian Action Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/christian-action-network/">link</a></th>
    </tr>
    <tr>
        <th>Clarion Project</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/clarion-project/">link</a></th>
    </tr>
    <tr>
        <th>Clash Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/clash-daily/">link</a></th>
    </tr>
    <tr>
        <th>CNS News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cns-news/">link</a></th>
    </tr>
    <tr>
        <th>Concerned Women for America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/concerned-women-america/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Army</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-army/">link</a></th>
    </tr>
    <tr>
        <th>The Conservative Buzz</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-conservative-buzz/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Byte</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-byte/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Daily Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-daily-post/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Fighters</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-fighters/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Firing Line</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-firing-line/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Free Press</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Info Corner</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-info-corner/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-media/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Movement</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-movement/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Nation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-nation/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Flash News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-flash-news/">link</a></th>
    </tr>
    <tr>
        <th>Conservapedia</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservapedia/">link</a></th>
    </tr>
    <tr>
        <th>Conservative 101</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png">extremeright01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-101/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-patriot/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Politicus</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-politicus/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-post/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Spirit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-spirit/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Constitution Rising</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/constitution-rising/">link</a></th>
    </tr>
    <tr>
        <th>Council on American-Islamic Relations (CAIR)</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png">rightcenter021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/council-on-american-islamic-relations-cair/">link</a></th>
    </tr>
    <tr>
        <th>Daily Headlines</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-headlines/">link</a></th>
    </tr>
    <tr>
        <th>Daily Infobox</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-infobox/">link</a></th>
    </tr>
    <tr>
        <th>Daily Insider News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-insider-news/">link</a></th>
    </tr>
    <tr>
        <th>Daily Mail</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-mail/">link</a></th>
    </tr>
    <tr>
        <th>Daily Notify</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-notify/">link</a></th>
    </tr>
    <tr>
        <th>Daily Political Newswire</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-political-newswire/">link</a></th>
    </tr>
    <tr>
        <th>Daily Presser</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-presser/">link</a></th>
    </tr>
    <tr>
        <th>Daily Stormer</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-stormer/">link</a></th>
    </tr>
    <tr>
        <th>Daily USA Update</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-usa-update/">link</a></th>
    </tr>
    <tr>
        <th>Daily World Information</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-world-information/">link</a></th>
    </tr>
    <tr>
        <th>Danger and Play</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/danger-and-play/">link</a></th>
    </tr>
    <tr>
        <th>David Horowitz Freedom Center</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/david-horowitz-freedom-center/">link</a></th>
    </tr>
    <tr>
        <th>DC Dirty Laundry</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dc-dirty-laundry/">link</a></th>
    </tr>
    <tr>
        <th>DEBKAfile</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/debkafile/">link</a></th>
    </tr>
    <tr>
        <th>Defend Europa</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/defend-europa/">link</a></th>
    </tr>
    <tr>
        <th>Defiant America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/defiant-america/">link</a></th>
    </tr>
    <tr>
        <th>Defund.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/defund-com/">link</a></th>
    </tr>
    <tr>
        <th>Democratic Moms</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/democratic-moms/">link</a></th>
    </tr>
    <tr>
        <th>Democratic Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/democratic-review/">link</a></th>
    </tr>
    <tr>
        <th>Departed (Maganews.com)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/departed-maganews-com/">link</a></th>
    </tr>
    <tr>
        <th>Deplorable Movement 2020</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deplorable-movement-2020/">link</a></th>
    </tr>
    <tr>
        <th>DC Gazette</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dc-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Discover the Networks</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/discover-the-networks/">link</a></th>
    </tr>
    <tr>
        <th>Donald Trump News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/donald-trump-news/">link</a></th>
    </tr>
    <tr>
        <th>Donald Trump Potus 45</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/donald-trump-potus-45/">link</a></th>
    </tr>
    <tr>
        <th>Downtrend</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/downtrend/">link</a></th>
    </tr>
    <tr>
        <th>Draining the Swamp</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/draining-the-swamp/">link</a></th>
    </tr>
    <tr>
        <th>Drudge Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/drudge-report/">link</a></th>
    </tr>
    <tr>
        <th>Eagle Rising</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png">extremeright05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/eagle-rising/">link</a></th>
    </tr>
    <tr>
        <th>EarthNews – Conservative News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/earthnews-conservative-news/">link</a></th>
    </tr>
    <tr>
        <th>Embols</th>
        <th>QUESTIONABLE</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/embols/">link</a></th>
    </tr>
    <tr>
        <th>Ending the Fed News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ending-the-fed-news/">link</a></th>
    </tr>
    <tr>
        <th>ENH Live</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/enh-live/">link</a></th>
    </tr>
    <tr>
        <th>En Volve</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/en-volve/">link</a></th>
    </tr>
    <tr>
        <th>Exposing Government</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/exposing-government/">link</a></th>
    </tr>
    <tr>
        <th>Fact-Checking Turkey</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fact-checking-turkey/">link</a></th>
    </tr>
    <tr>
        <th>Facts Wanted</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/facts-wanted/">link</a></th>
    </tr>
    <tr>
        <th>Family Research Council</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/family-research-council/">link</a></th>
    </tr>
    <tr>
        <th>Fars News</th>
        <th>QUESTIONABLE</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fars-news/">link</a></th>
    </tr>
    <tr>
        <th>Federalist Nation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/federalist-nation/">link</a></th>
    </tr>
    <tr>
        <th>Federalist Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/federalist-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Flash News Corner</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/flash-news-corner/">link</a></th>
    </tr>
    <tr>
        <th>Flex Mag</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/flex-mag/">link</a></th>
    </tr>
    <tr>
        <th>Focus on the Family</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/focus-on-the-family/">link</a></th>
    </tr>
    <tr>
        <th>Freakout Nation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freakout-nation/">link</a></th>
    </tr>
    <tr>
        <th>Free Patriot Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/free-patriot-post/">link</a></th>
    </tr>
    <tr>
        <th>Free Speech Time</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/free-speech-time/">link</a></th>
    </tr>
    <tr>
        <th>Freedom Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freedom-daily/">link</a></th>
    </tr>
    <tr>
        <th>Freedom Liberty News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freedom-liberty-news/">link</a></th>
    </tr>
    <tr>
        <th>Freedom’s Final Stand</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freedoms-final-stand/">link</a></th>
    </tr>
    <tr>
        <th>Freedom News Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/freedom-news-report/">link</a></th>
    </tr>
    <tr>
        <th>Fresh News – USA</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fresh-news-usa/">link</a></th>
    </tr>
    <tr>
        <th>Frontpage Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/frontpage-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Fury News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png">extremeright01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fury-news/">link</a></th>
    </tr>
    <tr>
        <th>FWD Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fwd-now/">link</a></th>
    </tr>
    <tr>
        <th>Geller Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/geller-report/">link</a></th>
    </tr>
    <tr>
        <th>Ghost.Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ghost-report/">link</a></th>
    </tr>
    <tr>
        <th>Girls Just Wanna Have Guns</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/girls-just-wanna-have-guns/">link</a></th>
    </tr>
    <tr>
        <th>Global Info Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/global-info-today/">link</a></th>
    </tr>
    <tr>
        <th>Global Politics Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/global-politics-now/">link</a></th>
    </tr>
    <tr>
        <th>Godfather Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/godfather-politics/">link</a></th>
    </tr>
    <tr>
        <th>Gone Left</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gone-left/">link</a></th>
    </tr>
    <tr>
        <th>GoodGopher</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/goodgopher/">link</a></th>
    </tr>
    <tr>
        <th>GOD (Good Lord Above)</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/god-good-lord-above/">link</a></th>
    </tr>
    <tr>
        <th>GOP Watchdog</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gop-watchdog/">link</a></th>
    </tr>
    <tr>
        <th>GotNews</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gotnews/">link</a></th>
    </tr>
    <tr>
        <th>Hang the Bankers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hang-the-bankers/">link</a></th>
    </tr>
    <tr>
        <th>Hard News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hard-news/">link</a></th>
    </tr>
    <tr>
        <th>Hawar News Agency</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hawar-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Heartland Institute</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/heartland-institute/">link</a></th>
    </tr>
    <tr>
        <th>Hogg Watch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hogg-watch/">link</a></th>
    </tr>
    <tr>
        <th>I Hate the Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/i-hate-the-media/">link</a></th>
    </tr>
    <tr>
        <th>If You Only News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/if-you-only-news/">link</a></th>
    </tr>
    <tr>
        <th>I have the Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png">extremeright01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/i-have-the-truth/">link</a></th>
    </tr>
    <tr>
        <th>I, Hypocrite</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/i-hypocrite/">link</a></th>
    </tr>
    <tr>
        <th>Illicit Info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/illicit-info/">link</a></th>
    </tr>
    <tr>
        <th>I Love My Freedom</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/i-love-my-freedom/">link</a></th>
    </tr>
    <tr>
        <th>IMOwired</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/imowired/">link</a></th>
    </tr>
    <tr>
        <th>InfoGalactic</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/infogalactic/">link</a></th>
    </tr>
    <tr>
        <th>Information Liberation</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/information-liberation/">link</a></th>
    </tr>
    <tr>
        <th>Informed Owners</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/informed-owners/">link</a></th>
    </tr>
    <tr>
        <th>InfoScum</th>
        <th>QUESTIONABLE</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/infoscum/">link</a></th>
    </tr>
    <tr>
        <th>Institute for Historical Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/institute-for-historical-review/">link</a></th>
    </tr>
    <tr>
        <th>International Organization for the Family (IOF)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/international-organization-for-the-family-iof/">link</a></th>
    </tr>
    <tr>
        <th>Israel Video Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/israel-video-network/">link</a></th>
    </tr>
    <tr>
        <th>Jew Watch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jew-watch/">link</a></th>
    </tr>
    <tr>
        <th>Jihad Watch</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jihad-watch/">link</a></th>
    </tr>
    <tr>
        <th>Joe for America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/joe-for-america/">link</a></th>
    </tr>
    <tr>
        <th>Jookos News</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jookos-news/">link</a></th>
    </tr>
    <tr>
        <th>Judicial Watch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/judicial-watch/">link</a></th>
    </tr>
    <tr>
        <th>Just the Facts</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/just-the-facts/">link</a></th>
    </tr>
    <tr>
        <th>Knights Templar International</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/knights-templar-international/">link</a></th>
    </tr>
    <tr>
        <th>Korean Central News Agency</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/korean-central-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Lady Liberty News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lady-liberty-news/">link</a></th>
    </tr>
    <tr>
        <th>Learn Progress</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/learn-progress/">link</a></th>
    </tr>
    <tr>
        <th>Left Exposed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/left-exposed/">link</a></th>
    </tr>
    <tr>
        <th>Lew Rockwell</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lew-rockwell/">link</a></th>
    </tr>
    <tr>
        <th>Liberal Plug</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft01.png">extremeleft01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberal-plug/">link</a></th>
    </tr>
    <tr>
        <th>Liberal Society</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberal-society/">link</a></th>
    </tr>
    <tr>
        <th>Liberal Speak</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/liberal-speak/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Alliance</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-alliance/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Brief</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-brief/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Courier</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-courier/">link</a></th>
    </tr>
    <tr>
        <th>Liberty is Viral</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-is-viral/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Writers News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-writers-news/">link</a></th>
    </tr>
    <tr>
        <th>London Web News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/london-web-news/">link</a></th>
    </tr>
    <tr>
        <th>LoonWatch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/loonwatch/">link</a></th>
    </tr>
    <tr>
        <th>Loser.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/loser-com/">link</a></th>
    </tr>
    <tr>
        <th>Mad American Network</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mad-american-network/">link</a></th>
    </tr>
    <tr>
        <th>Mad World News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mad-world-news/">link</a></th>
    </tr>
    <tr>
        <th>MAGA Daily Report</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/maga-daily-report/">link</a></th>
    </tr>
    <tr>
        <th>MagaPill</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/magapill/">link</a></th>
    </tr>
    <tr>
        <th>MAGAVoter.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/magavoter-com/">link</a></th>
    </tr>
    <tr>
        <th>MartinLutherKing.org</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/martinlutherking-org/">link</a></th>
    </tr>
    <tr>
        <th>MBGA – Make Britain Great Again</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mbga-make-britain-great/">link</a></th>
    </tr>
    <tr>
        <th>Media Zone</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/media-zone/">link</a></th>
    </tr>
    <tr>
        <th>Metapedia</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/metapedia/">link</a></th>
    </tr>
    <tr>
        <th>Middle East Forum</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/middle-east-forum/">link</a></th>
    </tr>
    <tr>
        <th>Middle East Media Research Institute (MEMRI)</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/middle-east-media-research-institute-memri/">link</a></th>
    </tr>
    <tr>
        <th>MILO News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/milo-news/">link</a></th>
    </tr>
    <tr>
        <th>Mixi.Media</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mixi-media/">link</a></th>
    </tr>
    <tr>
        <th>Molon Labe Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/molon-labe-media/">link</a></th>
    </tr>
    <tr>
        <th>Moving Left</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/moving-left/">link</a></th>
    </tr>
    <tr>
        <th>Mr. Conservative (MRC)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mr-conservative-mrc/">link</a></th>
    </tr>
    <tr>
        <th>My Right American</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/my-right-american/">link</a></th>
    </tr>
    <tr>
        <th>MyZoneToday</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/extremeright05.png">extremeright05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/myzonetoday/">link</a></th>
    </tr>
    <tr>
        <th>Nation45</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/nation45/">link</a></th>
    </tr>
    <tr>
        <th>National Alliance</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-alliance/">link</a></th>
    </tr>
    <tr>
        <th>National Economics Editorial</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-economics-editorial/">link</a></th>
    </tr>
    <tr>
        <th>National Enquirer</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-enquirer/">link</a></th>
    </tr>
    <tr>
        <th>National Policy Institute</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-policy-institute/">link</a></th>
    </tr>
    <tr>
        <th>National Vanguard</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-vanguard/">link</a></th>
    </tr>
    <tr>
        <th>NeverRepublican.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/neverrepublican-com/">link</a></th>
    </tr>
    <tr>
        <th>Nevo News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nevo-news/">link</a></th>
    </tr>
    <tr>
        <th>New Century Times</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-century-times/">link</a></th>
    </tr>
    <tr>
        <th>NewsAmmo</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newsammo/">link</a></th>
    </tr>
    <tr>
        <th>News and Stories From USA</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-stories-usa/">link</a></th>
    </tr>
    <tr>
        <th>News Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-conservative/">link</a></th>
    </tr>
    <tr>
        <th>New Nation News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-nation-news/">link</a></th>
    </tr>
    <tr>
        <th>New Politics Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-politics-today/">link</a></th>
    </tr>
    <tr>
        <th>News Blaze</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-blaze/">link</a></th>
    </tr>
    <tr>
        <th>NewsBreaksHere</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsbreakshere/">link</a></th>
    </tr>
    <tr>
        <th>News Chicken</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-chicken/">link</a></th>
    </tr>
    <tr>
        <th>News Feed Hunter</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-feed-hunter/">link</a></th>
    </tr>
    <tr>
        <th>News Procession</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-procession/">link</a></th>
    </tr>
    <tr>
        <th>News Punch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-punch/">link</a></th>
    </tr>
    <tr>
        <th>News Up Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-up-today/">link</a></th>
    </tr>
    <tr>
        <th>NewsWars</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newswars/">link</a></th>
    </tr>
    <tr>
        <th>News With Views</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright06.png">extremeright06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-with-views/">link</a></th>
    </tr>
    <tr>
        <th>NMWS.us</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/nmws-us/">link</a></th>
    </tr>
    <tr>
        <th>Nos Comunicamos</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nos-comunicamos/">link</a></th>
    </tr>
    <tr>
        <th>Oath Keepers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/oath-keepers/">link</a></th>
    </tr>
    <tr>
        <th>Occupy Democrats</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/occupy-democrats/">link</a></th>
    </tr>
    <tr>
        <th>Online Conservative Press</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/online-conservative-press/">link</a></th>
    </tr>
    <tr>
        <th>Open Magazines</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/open-magazines/">link</a></th>
    </tr>
    <tr>
        <th>Opposition Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft05.png">extremeleft05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/opposition-report/">link</a></th>
    </tr>
    <tr>
        <th>Our Eye on Islam</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/our-eye-on-islam/">link</a></th>
    </tr>
    <tr>
        <th>Overpasses for America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/overpasses-for-america/">link</a></th>
    </tr>
    <tr>
        <th>Pacific Pundit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pacific-pundit/">link</a></th>
    </tr>
    <tr>
        <th>Patriot Beacon</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriot-beacon/">link</a></th>
    </tr>
    <tr>
        <th>Patriot Beat</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriot-beat/">link</a></th>
    </tr>
    <tr>
        <th>Patriotic Express</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriotic-express/">link</a></th>
    </tr>
    <tr>
        <th>Patribotics Blog</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patribotics-blog/">link</a></th>
    </tr>
    <tr>
        <th>Patriot Fires</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/patriot-fires/">link</a></th>
    </tr>
    <tr>
        <th>Patriot Hangout</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/patriot-hangout/">link</a></th>
    </tr>
    <tr>
        <th>Patriot Journal</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriot-journal/">link</a></th>
    </tr>
    <tr>
        <th>Patriot Update</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/patriot-update/">link</a></th>
    </tr>
    <tr>
        <th>Patriotic Viral News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/patriotic-viral-news/">link</a></th>
    </tr>
    <tr>
        <th>Patriots Voice</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriots-voice/">link</a></th>
    </tr>
    <tr>
        <th>Personal Liberty</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/personal-liberty/">link</a></th>
    </tr>
    <tr>
        <th>Plymouth Patriot Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/plymouth-patriot-post/">link</a></th>
    </tr>
    <tr>
        <th>PM Nightly News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png">extremeright05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pm-nightly-news/">link</a></th>
    </tr>
    <tr>
        <th>Police Times</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/police-times/">link</a></th>
    </tr>
    <tr>
        <th>Polipace</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png">extremeleft06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/polipace/">link</a></th>
    </tr>
    <tr>
        <th>Political Ears</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/political-ears/">link</a></th>
    </tr>
    <tr>
        <th>Political Inbox</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/political-inbox/">link</a></th>
    </tr>
    <tr>
        <th>Political Mayhem News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/political-mayhem-news/">link</a></th>
    </tr>
    <tr>
        <th>Political Site News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/political-site-news/">link</a></th>
    </tr>
    <tr>
        <th>Politico Info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/politico-info/">link</a></th>
    </tr>
    <tr>
        <th>Politics Live</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/politics-live/">link</a></th>
    </tr>
    <tr>
        <th>Politifact News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/politifact-news/">link</a></th>
    </tr>
    <tr>
        <th>Powdered Wig Society</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/powdered-wig-society/">link</a></th>
    </tr>
    <tr>
        <th>PragerU</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/prageru/">link</a></th>
    </tr>
    <tr>
        <th>President 45 Donald Trump</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/president-45-donald-trump/">link</a></th>
    </tr>
    <tr>
        <th>Prideof-America.org (American News)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/prideof-america-org-american-news/">link</a></th>
    </tr>
    <tr>
        <th>Prntly</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/prntly/">link</a></th>
    </tr>
    <tr>
        <th>Pro-America News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pro-america-news/">link</a></th>
    </tr>
    <tr>
        <th>Progress Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft05.png">extremeleft05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/progress-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Progressives Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/progressives-today/">link</a></th>
    </tr>
    <tr>
        <th>Project Purge</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/project-purge/">link</a></th>
    </tr>
    <tr>
        <th>The Proud Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-proud-conservative/">link</a></th>
    </tr>
    <tr>
        <th>Proud Leader</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/proud-leader/">link</a></th>
    </tr>
    <tr>
        <th>Proud Patriots</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/proud-patriots/">link</a></th>
    </tr>
    <tr>
        <th>Puppet String News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/puppet-string-news/">link</a></th>
    </tr>
    <tr>
        <th>QPolitical</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/qpolitical/">link</a></th>
    </tr>
    <tr>
        <th>Read Conservatives</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/read-conservatives/">link</a></th>
    </tr>
    <tr>
        <th>Reagan Coalition</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/reagan-coalition/">link</a></th>
    </tr>
    <tr>
        <th>Real Time Politics</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/real-time-politics/">link</a></th>
    </tr>
    <tr>
        <th>Red Country – Conservative News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-country-conservative-news/">link</a></th>
    </tr>
    <tr>
        <th>Red Ice TV</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-ice-tv/">link</a></th>
    </tr>
    <tr>
        <th>Red Info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-info/">link</a></th>
    </tr>
    <tr>
        <th>Red People</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-people/">link</a></th>
    </tr>
    <tr>
        <th>Red Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-politics/">link</a></th>
    </tr>
    <tr>
        <th>Red Rock Daily News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-rock-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Red Rock Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-rock-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Red State Journalist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-state-journalist/">link</a></th>
    </tr>
    <tr>
        <th>Red State Pundit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-state-pundit/">link</a></th>
    </tr>
    <tr>
        <th>Red State Watcher</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-state-watcher/">link</a></th>
    </tr>
    <tr>
        <th>RedStateWave</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/redstatewave/">link</a></th>
    </tr>
    <tr>
        <th>Red, White and Right</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-white-and-right/">link</a></th>
    </tr>
    <tr>
        <th>Renew America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/renew-america/">link</a></th>
    </tr>
    <tr>
        <th>Resistance Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png">extremeleft06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/resistance-report/">link</a></th>
    </tr>
    <tr>
        <th>Return of Kings</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/return-of-kings/">link</a></th>
    </tr>
    <tr>
        <th>Right Alerts</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/right-alerts/">link</a></th>
    </tr>
    <tr>
        <th>Right Journalist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/right-journalist/">link</a></th>
    </tr>
    <tr>
        <th>Right Smarts</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/right-smarts/">link</a></th>
    </tr>
    <tr>
        <th>Right Wing News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/right-wing-news/">link</a></th>
    </tr>
    <tr>
        <th>Right Wing News (Rightwing.news)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/right-wing-news-rightwing-news/">link</a></th>
    </tr>
    <tr>
        <th>Right Wing Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/right-wing-tribune/">link</a></th>
    </tr>
    <tr>
        <th>RINF</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rinf/">link</a></th>
    </tr>
    <tr>
        <th>Rodong Sinmun (North Korea)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rodong-sinmun-north-korea/">link</a></th>
    </tr>
    <tr>
        <th>RT News (RT.Com)</th>
        <th>QUESTIONABLE</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rt-news/">link</a></th>
    </tr>
    <tr>
        <th>Ruth Institute</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ruth-institute/">link</a></th>
    </tr>
    <tr>
        <th>Santa Monica Observer</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/santa-monica-observer/">link</a></th>
    </tr>
    <tr>
        <th>Shared News Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/shared-news-report/">link</a></th>
    </tr>
    <tr>
        <th>Sharia Watch UK</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sharia-watch-uk/">link</a></th>
    </tr>
    <tr>
        <th>SHTFplan.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/shtfplan-com/">link</a></th>
    </tr>
    <tr>
        <th>Smoloko News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/smoloko-news/">link</a></th>
    </tr>
    <tr>
        <th>South Africa Today</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/south-africa-today/">link</a></th>
    </tr>
    <tr>
        <th>SpeakGov.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/speakgov-com/">link</a></th>
    </tr>
    <tr>
        <th>South Jersey Mechanic (Trump News)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/south-jersey-mechanic-trump-news/">link</a></th>
    </tr>
    <tr>
        <th>Speisa</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/speisa/">link</a></th>
    </tr>
    <tr>
        <th>Spinzon</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/spinzon/">link</a></th>
    </tr>
    <tr>
        <th>Sputnik News</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sputnik-news/">link</a></th>
    </tr>
    <tr>
        <th>Squawker</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/squawker/">link</a></th>
    </tr>
    <tr>
        <th>Stares at the World</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/stares-at-the-world/">link</a></th>
    </tr>
    <tr>
        <th>State Fort Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/state-fort-daily/">link</a></th>
    </tr>
    <tr>
        <th>State of the Nation 2012</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/state-of-the-union-2012/">link</a></th>
    </tr>
    <tr>
        <th>Steadfast and Loyal</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/steadfast-and-loyal/">link</a></th>
    </tr>
    <tr>
        <th>Stone Cold Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/stone-cold-truth/">link</a></th>
    </tr>
    <tr>
        <th>Studio News Network</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/studio-news-network/">link</a></th>
    </tr>
    <tr>
        <th>Subject Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/subject-politics/">link</a></th>
    </tr>
    <tr>
        <th>Supreme Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/supreme-patriot/">link</a></th>
    </tr>
    <tr>
        <th>Sure News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sure-news/">link</a></th>
    </tr>
    <tr>
        <th>Svijmedia.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/svijmedia-com/">link</a></th>
    </tr>
    <tr>
        <th>SwampDrain.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/swampdrain-com/">link</a></th>
    </tr>
    <tr>
        <th>Taki’s Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/takis-magazine/">link</a></th>
    </tr>
    <tr>
        <th>TashNews</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tashnews/">link</a></th>
    </tr>
    <tr>
        <th>Tea Party Inc</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tea-party-inc/">link</a></th>
    </tr>
    <tr>
        <th>TD Newswire</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png">extremeright01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/td-newswire/">link</a></th>
    </tr>
    <tr>
        <th>TdtAlliance.com</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tdtalliance-com/">link</a></th>
    </tr>
    <tr>
        <th>Teddy Stick</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/teddy-stick/">link</a></th>
    </tr>
    <tr>
        <th>Tell Me Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tell-me-now/">link</a></th>
    </tr>
    <tr>
        <th>Tell Me Now</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tell-me-now/">link</a></th>
    </tr>
    <tr>
        <th>TheBreakingNews</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/thebreakingnews/">link</a></th>
    </tr>
    <tr>
        <th>The African Exponent</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-african-exponent/">link</a></th>
    </tr>
    <tr>
        <th>The American Mirror</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-american-mirror/">link</a></th>
    </tr>
    <tr>
        <th>The Angry Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-angry-patriot/">link</a></th>
    </tr>
    <tr>
        <th>The Boston Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-boston-tribune/">link</a></th>
    </tr>
    <tr>
        <th>The Conservative Brief</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-conservative-brief/">link</a></th>
    </tr>
    <tr>
        <th>The D.C. Clothesline</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-d-c-clothesline/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Bell</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-bell/">link</a></th>
    </tr>
    <tr>
        <th>The Deplorable Society</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-deplorable-society/">link</a></th>
    </tr>
    <tr>
        <th>The Deplorables</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-deplorables/">link</a></th>
    </tr>
    <tr>
        <th>The Duran</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png">extremeright05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-duran/">link</a></th>
    </tr>
    <tr>
        <th>The Federalist Papers Project</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-federalist-papers-project/">link</a></th>
    </tr>
    <tr>
        <th>The Federation for American Immigration Reform (FAIR)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png">extremeright01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-federation-for-american-immigration-reform-fair/">link</a></th>
    </tr>
    <tr>
        <th>The Free Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-free-patriot/">link</a></th>
    </tr>
    <tr>
        <th>The Free Telegraph</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-free-telegraph/">link</a></th>
    </tr>
    <tr>
        <th>The Gateway Pundit</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-gateway-pundit/">link</a></th>
    </tr>
    <tr>
        <th>The Goldwater</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-goldwater/">link</a></th>
    </tr>
    <tr>
        <th>The Horn News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-horn-news/">link</a></th>
    </tr>
    <tr>
        <th>The Last Resistance</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-last-resistance/">link</a></th>
    </tr>
    <tr>
        <th>The Liberty Eagle</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-liberty-eagle/">link</a></th>
    </tr>
    <tr>
        <th>The Millennium Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-millennium-report/">link</a></th>
    </tr>
    <tr>
        <th>The National Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-national-patriot/">link</a></th>
    </tr>
    <tr>
        <th>The National Pulse</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-national-pulse/">link</a></th>
    </tr>
    <tr>
        <th>The New Observer</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright01.png">extremeright01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-new-observer/">link</a></th>
    </tr>
    <tr>
        <th>The News Guru</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-news-guru/">link</a></th>
    </tr>
    <tr>
        <th>The New York Evening</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-new-york-evening/">link</a></th>
    </tr>
    <tr>
        <th>The Other 98%</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-other-98/">link</a></th>
    </tr>
    <tr>
        <th>The Peoples Truth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-peoples-truth/">link</a></th>
    </tr>
    <tr>
        <th>The Political Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-political-tribune/">link</a></th>
    </tr>
    <tr>
        <th>The Premium News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-premium-news/">link</a></th>
    </tr>
    <tr>
        <th>The Proud Liberal</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png">extremeleft06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-proud-liberal/">link</a></th>
    </tr>
    <tr>
        <th>The Religion of Peace</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-religion-of-peace/">link</a></th>
    </tr>
    <tr>
        <th>The Remnant Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-remnant-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Right Stuff</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-right-stuff/">link</a></th>
    </tr>
    <tr>
        <th>The Science News Reporter</th>
        <th>QUESTIONABLE</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-science-news-reporter/">link</a></th>
    </tr>
    <tr>
        <th>The Trump Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-trump-media/">link</a></th>
    </tr>
    <tr>
        <th>The Truth Division</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-truth-division/">link</a></th>
    </tr>
    <tr>
        <th>The Unz Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-unz-report/">link</a></th>
    </tr>
    <tr>
        <th>The US Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-us-patriot/">link</a></th>
    </tr>
    <tr>
        <th>The USA Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-usa-conservative/">link</a></th>
    </tr>
    <tr>
        <th>The Washington Feed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-washington-feed/">link</a></th>
    </tr>
    <tr>
        <th>The Washington Reporter</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-washington-reporter/">link</a></th>
    </tr>
    <tr>
        <th>Think Americana</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/think-americana/">link</a></th>
    </tr>
    <tr>
        <th>The Times of America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-times-of-america/">link</a></th>
    </tr>
    <tr>
        <th>Today Dispatch</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/today-dispatch/">link</a></th>
    </tr>
    <tr>
        <th>Top Right News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/top-right-news/">link</a></th>
    </tr>
    <tr>
        <th>Top Topic</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/top-topic/">link</a></th>
    </tr>
    <tr>
        <th>TriggerReset</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/triggerreset/">link</a></th>
    </tr>
    <tr>
        <th>Truth and Action</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-and-action/">link</a></th>
    </tr>
    <tr>
        <th>True Activist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/true-activist/">link</a></th>
    </tr>
    <tr>
        <th>True Blue Scoop</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/true-blue-scoop/">link</a></th>
    </tr>
    <tr>
        <th>True Trumpers</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/true-trumpers/">link</a></th>
    </tr>
    <tr>
        <th>Trump.News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/trump-news/">link</a></th>
    </tr>
    <tr>
        <th>Trumpservative News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/trumpservative-news/">link</a></th>
    </tr>
    <tr>
        <th>Truth Examiner</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-examiner/">link</a></th>
    </tr>
    <tr>
        <th>TruthFeed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truthfeed/">link</a></th>
    </tr>
    <tr>
        <th>Truth in Media</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-in-media/">link</a></th>
    </tr>
    <tr>
        <th>Truth Monitor</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-monitor/">link</a></th>
    </tr>
    <tr>
        <th>Truth Revolt</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-revolt/">link</a></th>
    </tr>
    <tr>
        <th>Truth Uncensored</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/truth-uncensored/">link</a></th>
    </tr>
    <tr>
        <th>Uncle Sams Misguided Children</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/uncle-sams-misguided-children/">link</a></th>
    </tr>
    <tr>
        <th>Underground Journalist</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/underground-journalist/">link</a></th>
    </tr>
    <tr>
        <th>Understanding The Threat</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/understanding-the-threat/">link</a></th>
    </tr>
    <tr>
        <th>Unique Web Magazine</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/unique-web-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Universe Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/universe-politics/">link</a></th>
    </tr>
    <tr>
        <th>US Advisor</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-advisor/">link</a></th>
    </tr>
    <tr>
        <th>US Chronicle</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>US Herald</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-herald/">link</a></th>
    </tr>
    <tr>
        <th>US Info News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-info-news/">link</a></th>
    </tr>
    <tr>
        <th>US Journal Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/us-journal-review/">link</a></th>
    </tr>
    <tr>
        <th>US Postman</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-postman/">link</a></th>
    </tr>
    <tr>
        <th>USA Conservative Report</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usa-conservative-report/">link</a></th>
    </tr>
    <tr>
        <th>USA Daily Post</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-daily-post/">link</a></th>
    </tr>
    <tr>
        <th>USA Daily Review</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usa-daily-review/">link</a></th>
    </tr>
    <tr>
        <th>USA Daily Time</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-daily-time/">link</a></th>
    </tr>
    <tr>
        <th>USA Dose News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-dose-news/">link</a></th>
    </tr>
    <tr>
        <th>USAFirstInfo</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usafirstinfo/">link</a></th>
    </tr>
    <tr>
        <th>USA in Front</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usa-in-front/">link</a></th>
    </tr>
    <tr>
        <th>USAnetwork.info</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usanetwork-info/">link</a></th>
    </tr>
    <tr>
        <th>USA Newsflash</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-newsflash/">link</a></th>
    </tr>
    <tr>
        <th>USA News for You</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft02.png">extremeleft02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-news-for-you/">link</a></th>
    </tr>
    <tr>
        <th>USA News/Politics USA News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-newspolitics-usa-news/">link</a></th>
    </tr>
    <tr>
        <th>USA News/States-TV</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-newsstates-tv/">link</a></th>
    </tr>
    <tr>
        <th>USANewsToday</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usanewstoday/">link</a></th>
    </tr>
    <tr>
        <th>USA Politics Now</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-politics-now/">link</a></th>
    </tr>
    <tr>
        <th>USA Public Life</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usa-public-life/">link</a></th>
    </tr>
    <tr>
        <th>USA Really</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usa-really/">link</a></th>
    </tr>
    <tr>
        <th>USA Supreme</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-supreme/">link</a></th>
    </tr>
    <tr>
        <th>USA Viral News Today</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/usa-viral-news-today/">link</a></th>
    </tr>
    <tr>
        <th>USA World Box</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-world-box/">link</a></th>
    </tr>
    <tr>
        <th>US National News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/us-national-news/">link</a></th>
    </tr>
    <tr>
        <th>Vanguard America</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vanguard-america/">link</a></th>
    </tr>
    <tr>
        <th>Vatican Radio</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vatican-radio/">link</a></th>
    </tr>
    <tr>
        <th>VDARE</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vdare/">link</a></th>
    </tr>
    <tr>
        <th>Vidmax</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vidmax-2/">link</a></th>
    </tr>
    <tr>
        <th>Viral Patriot</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/viral-patriot/">link</a></th>
    </tr>
    <tr>
        <th>Voice of Europe</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/voice-of-europe/">link</a></th>
    </tr>
    <tr>
        <th>Walk With Her</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/walk-with-her/">link</a></th>
    </tr>
    <tr>
        <th>WallBuilders</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wallbuilders/">link</a></th>
    </tr>
    <tr>
        <th>Web Daily</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright02.png">extremeright02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/web-daily/">link</a></th>
    </tr>
    <tr>
        <th>We Conservative</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright011.png">extremeright011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/we-conservative/">link</a></th>
    </tr>
    <tr>
        <th>Western Sentinel</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/western-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>Winning Democrats</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeleft01.png">extremeleft01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/winning-democrats/">link</a></th>
    </tr>
    <tr>
        <th>Witherspoon Institute</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright051.png">extremeright051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/witherspoon-institute/">link</a></th>
    </tr>
    <tr>
        <th>World Net Daily (WND)</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-net-daily-wnd/">link</a></th>
    </tr>
    <tr>
        <th>Woke Sloth</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft04.png">extremeleft04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/woke-sloth/">link</a></th>
    </tr>
    <tr>
        <th>World News Politics</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright041.png">extremeright041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-news-politics/">link</a></th>
    </tr>
    <tr>
        <th>WorldPolitics News</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/worldpolitics-news/">link</a></th>
    </tr>
    <tr>
        <th>World Politicus</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright031.png">extremeright031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-politicus/">link</a></th>
    </tr>
    <tr>
        <th>Yes, I’m Right</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/yes-im-right/">link</a></th>
    </tr>
    <tr>
        <th>ZootFeed</th>
        <th>QUESTIONABLE</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright021.png">extremeright021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/zootfeed/">link</a></th>
    </tr>
    <tr>
        <th>Act.TV</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/act-tv/">link</a></th>
    </tr>
    <tr>
        <th>Addicting Info</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/addicting-info/">link</a></th>
    </tr>
    <tr>
        <th>Advocate</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/advocate/">link</a></th>
    </tr>
    <tr>
        <th>Aftonbladet</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/aftonbladet/">link</a></th>
    </tr>
    <tr>
        <th>Akkadian Times</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/akkadian-times/">link</a></th>
    </tr>
    <tr>
        <th>Alliance for Justice (AFJ)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/alliance-for-justice-afj/">link</a></th>
    </tr>
    <tr>
        <th>All That’s Fab</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/all-thats-fab/">link</a></th>
    </tr>
    <tr>
        <th>AlterNet</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/alternet/">link</a></th>
    </tr>
    <tr>
        <th>Amandla</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/amandla/">link</a></th>
    </tr>
    <tr>
        <th>AmericaBlog</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/americablog/">link</a></th>
    </tr>
    <tr>
        <th>American Bridge 21st Century</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-bridge-21st-century/">link</a></th>
    </tr>
    <tr>
        <th>American News X</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-news-x/">link</a></th>
    </tr>
    <tr>
        <th>American United for Separation of Church and State</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-united-separation-church-state/">link</a></th>
    </tr>
    <tr>
        <th>Angry White Men</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/angry-white-men/">link</a></th>
    </tr>
    <tr>
        <th>Anti-Fascist News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/anti-fascist-news/">link</a></th>
    </tr>
    <tr>
        <th>AutoStraddle</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/autostraddle/">link</a></th>
    </tr>
    <tr>
        <th>Backed by Fact</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/backed-by-fact/">link</a></th>
    </tr>
    <tr>
        <th>Baltimore City Paper</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/baltimore-city-paper/">link</a></th>
    </tr>
    <tr>
        <th>Bay Area Reporter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bay-area-reporter/">link</a></th>
    </tr>
    <tr>
        <th>Being Liberal</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/being-liberal/">link</a></th>
    </tr>
    <tr>
        <th>Bitch Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bitch-media/">link</a></th>
    </tr>
    <tr>
        <th>Black Agenda Report</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/black-agenda-report/">link</a></th>
    </tr>
    <tr>
        <th>Black Lives Matter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/black-lives-matter/">link</a></th>
    </tr>
    <tr>
        <th>Blue Dot Daily</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeleft06.png">extremeleft06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/blue-dot-daily/">link</a></th>
    </tr>
    <tr>
        <th>Blue Nation Review</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/blue-nation-review/">link</a></th>
    </tr>
    <tr>
        <th>Blue State Daily</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/blue-state-daily/">link</a></th>
    </tr>
    <tr>
        <th>Boing Boing</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/boing-boing/">link</a></th>
    </tr>
    <tr>
        <th>Boston Review</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/boston-review/">link</a></th>
    </tr>
    <tr>
        <th>Breitbart Unmasked</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/breitbart-unmasked/">link</a></th>
    </tr>
    <tr>
        <th>Bust Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bust-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Canadian Dimension</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/canadian-dimension/">link</a></th>
    </tr>
    <tr>
        <th>Capital & Main</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/capital-main/">link</a></th>
    </tr>
    <tr>
        <th>Carbonated TV</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/carbonated-tv/">link</a></th>
    </tr>
    <tr>
        <th>Care2</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/care2/">link</a></th>
    </tr>
    <tr>
        <th>Center for American Progress</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-american-progress/">link</a></th>
    </tr>
    <tr>
        <th>Center for Media and Democracy (PR Watch)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-media-and-democracy/">link</a></th>
    </tr>
    <tr>
        <th>Certified Politics</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/certified-politics/">link</a></th>
    </tr>
    <tr>
        <th>Change.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/change-org/">link</a></th>
    </tr>
    <tr>
        <th>Chicago Reader</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/chicago-reader/">link</a></th>
    </tr>
    <tr>
        <th>Chronicles of Democracy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/chronicles-of-democracy/">link</a></th>
    </tr>
    <tr>
        <th>Citizen Critics</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/citizen-critics/">link</a></th>
    </tr>
    <tr>
        <th>CNN</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cnn/">link</a></th>
    </tr>
    <tr>
        <th>Code Pink</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/code-pink/">link</a></th>
    </tr>
    <tr>
        <th>Common Dreams</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/common-dreams/">link</a></th>
    </tr>
    <tr>
        <th>Content News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/content-news/">link</a></th>
    </tr>
    <tr>
        <th>Cosmopolitan</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cosmopolitan/">link</a></th>
    </tr>
    <tr>
        <th>CounterCurrents.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/countercurrents-org/">link</a></th>
    </tr>
    <tr>
        <th>CounterPunch</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/counterpunch/">link</a></th>
    </tr>
    <tr>
        <th>CrimethInc</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/crimethinc/">link</a></th>
    </tr>
    <tr>
        <th>Crooked Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/crooked-media/">link</a></th>
    </tr>
    <tr>
        <th>Crooks and Liars</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/crooks-and-liars/">link</a></th>
    </tr>
    <tr>
        <th>Current Affairs Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/current-affairs-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Curve Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/curve-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Daily 49er</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-49er/">link</a></th>
    </tr>
    <tr>
        <th>Daily Beast</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-beast/">link</a></th>
    </tr>
    <tr>
        <th>Daily Dems</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-dems/">link</a></th>
    </tr>
    <tr>
        <th>Daily Dot</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-dot/">link</a></th>
    </tr>
    <tr>
        <th>Daily Kos</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-kos/">link</a></th>
    </tr>
    <tr>
        <th>Daily Mirror</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-mirror/">link</a></th>
    </tr>
    <tr>
        <th>Daily News Bin</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-news-bin/">link</a></th>
    </tr>
    <tr>
        <th>Daily Record (Scotland)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-record-scotland/">link</a></th>
    </tr>
    <tr>
        <th>Dallas Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dallas-voice/">link</a></th>
    </tr>
    <tr>
        <th>DC Tribune</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dc-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Deadspin</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deadspin/">link</a></th>
    </tr>
    <tr>
        <th>Dead State</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dead-state/">link</a></th>
    </tr>
    <tr>
        <th>DeathandTaxes</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/deathandtaxes/">link</a></th>
    </tr>
    <tr>
        <th>Deep Left Field</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deep-left-field/">link</a></th>
    </tr>
    <tr>
        <th>DeepStateNation.com</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deepstatenation-com/">link</a></th>
    </tr>
    <tr>
        <th>Democracy Chronicles</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/democracy-chronicles/">link</a></th>
    </tr>
    <tr>
        <th>Democracy Guardian</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/democracy-guardian/">link</a></th>
    </tr>
    <tr>
        <th>Democracy Now</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/democracy-now/">link</a></th>
    </tr>
    <tr>
        <th>Democratic Underground</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/democratic-underground/">link</a></th>
    </tr>
    <tr>
        <th>DeSmog</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/desmog/">link</a></th>
    </tr>
    <tr>
        <th>Die Hard Democrat</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/die-hard-democrat/">link</a></th>
    </tr>
    <tr>
        <th>Dissent Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dissent-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Drudge Retort</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/drudge-retort/">link</a></th>
    </tr>
    <tr>
        <th>Earth First Journal</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/earth-first-journal/">link</a></th>
    </tr>
    <tr>
        <th>Economy In Crisis</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/economy-in-crisis/">link</a></th>
    </tr>
    <tr>
        <th>EgbertoWillies</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/egbertowillies/">link</a></th>
    </tr>
    <tr>
        <th>Electoral-Vote.com</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/electoral-vote-com/">link</a></th>
    </tr>
    <tr>
        <th>Electronic Intifada</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/electronic-intifada/">link</a></th>
    </tr>
    <tr>
        <th>Elisabeth Parker</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/elisabeth-parker/">link</a></th>
    </tr>
    <tr>
        <th>Elite Daily</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/elite-daily/">link</a></th>
    </tr>
    <tr>
        <th>Esquire Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/esquire-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Everyday Feminism</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/everyday-feminism/">link</a></th>
    </tr>
    <tr>
        <th>Evonomics</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/evonomics/">link</a></th>
    </tr>
    <tr>
        <th>ExtraNewsFeed</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/extranewsfeed/">link</a></th>
    </tr>
    <tr>
        <th>Feminist Current</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/feminist-current/">link</a></th>
    </tr>
    <tr>
        <th>Feministing</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/feministing/">link</a></th>
    </tr>
    <tr>
        <th>Fifth Estate</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fifth-estate/">link</a></th>
    </tr>
    <tr>
        <th>Filming Cops</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/filming-cops/">link</a></th>
    </tr>
    <tr>
        <th>First Post</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/first-post/">link</a></th>
    </tr>
    <tr>
        <th>Food and Water Watch</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/food-and-water-watch/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Policy Journal</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/foreign-policy-journal/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Policy News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/foreign-policy-news/">link</a></th>
    </tr>
    <tr>
        <th>Forward Progressives</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/forward-progressives/">link</a></th>
    </tr>
    <tr>
        <th>Freedom From Religion Foundation (FFRF)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/freedom-religion-foundation-ffrf/">link</a></th>
    </tr>
    <tr>
        <th>Free Press</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/free-press-2/">link</a></th>
    </tr>
    <tr>
        <th>Free Rein News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/free-rein-report/">link</a></th>
    </tr>
    <tr>
        <th>Freedom News and Journal</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/freedom-news-and-journal/">link</a></th>
    </tr>
    <tr>
        <th>FStv (freespeech.org)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fstv-freespeech-org/">link</a></th>
    </tr>
    <tr>
        <th>Gizmodo</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gizmodo/">link</a></th>
    </tr>
    <tr>
        <th>Global Voices</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/global-voices/">link</a></th>
    </tr>
    <tr>
        <th>Globe Today</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/globe-today/">link</a></th>
    </tr>
    <tr>
        <th>Good Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/good-magazine/">link</a></th>
    </tr>
    <tr>
        <th>GOPOCALYPSE</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gopocalypse/">link</a></th>
    </tr>
    <tr>
        <th>GQ Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gq-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Grasping Reality With Both Hands: Bradford DeLong</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/grasping-reality-hands-bradford-delong/">link</a></th>
    </tr>
    <tr>
        <th>Green Left Weekly</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/green-left-weekly/">link</a></th>
    </tr>
    <tr>
        <th>Greenville Gazette</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/greenville-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Grit Post</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/grit-post/">link</a></th>
    </tr>
    <tr>
        <th>Groopspeak</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/groopspeak/">link</a></th>
    </tr>
    <tr>
        <th>Guardian Liberty Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/guardian-liberty-voice/">link</a></th>
    </tr>
    <tr>
        <th>Guardians of Democracy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/guardians-of-democracy/">link</a></th>
    </tr>
    <tr>
        <th>Happy Foxie</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/happy-foxie/">link</a></th>
    </tr>
    <tr>
        <th>Hill Reporter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hill-reporter/">link</a></th>
    </tr>
    <tr>
        <th>Huffington Post (HuffPost)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/05/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/huffington-post/">link</a></th>
    </tr>
    <tr>
        <th>Human Rights Campaign (HRC)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/human-rights-campaign/">link</a></th>
    </tr>
    <tr>
        <th>Impeach Trump Now</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/impeach-donald-trump/">link</a></th>
    </tr>
    <tr>
        <th>In Defence of Marxism</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/in-defence-of-marxism/">link</a></th>
    </tr>
    <tr>
        <th>Independent Reporter (Ir.net)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/independent-reporter-ir-net/">link</a></th>
    </tr>
    <tr>
        <th>Inequality Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/inequality-media/">link</a></th>
    </tr>
    <tr>
        <th>Informed Comment</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/informed-comment/">link</a></th>
    </tr>
    <tr>
        <th>Institute for Policy Studies</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/institute-policy-studies/">link</a></th>
    </tr>
    <tr>
        <th>International Viewpoint</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/international-viewpoint/">link</a></th>
    </tr>
    <tr>
        <th>In These Times</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/in-these-times/">link</a></th>
    </tr>
    <tr>
        <th>Intrepid Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/intrepid-report/">link</a></th>
    </tr>
    <tr>
        <th>Iowa Starting Line</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/iowa-starting-line/">link</a></th>
    </tr>
    <tr>
        <th>It’s Going Down</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/its-going-down/">link</a></th>
    </tr>
    <tr>
        <th>Jacobin</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jacobin/">link</a></th>
    </tr>
    <tr>
        <th>Jezebel</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jezebel/">link</a></th>
    </tr>
    <tr>
        <th>Latest.com</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/latest-com/">link</a></th>
    </tr>
    <tr>
        <th>Lavender Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lavender-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Left Action</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/left-action/">link</a></th>
    </tr>
    <tr>
        <th>Left Foot Forward</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/left-foot-forward/">link</a></th>
    </tr>
    <tr>
        <th>Left Over Rights</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/left-over-rights/">link</a></th>
    </tr>
    <tr>
        <th>LeftScoop</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/leftscoop/">link</a></th>
    </tr>
    <tr>
        <th>Left Side of History</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/left-side-of-history/">link</a></th>
    </tr>
    <tr>
        <th>Left Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/left-voice/">link</a></th>
    </tr>
    <tr>
        <th>Left Wing Nation</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/left-wing-nation/">link</a></th>
    </tr>
    <tr>
        <th>LGBTQ Nation</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lgbtq-nation/">link</a></th>
    </tr>
    <tr>
        <th>Libcom.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/libcom-org/">link</a></th>
    </tr>
    <tr>
        <th>Liberal America</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberal-america/">link</a></th>
    </tr>
    <tr>
        <th>Liberal Examiner</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/liberal-examiner/">link</a></th>
    </tr>
    <tr>
        <th>Liberals Unite (Samuel Warde)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberals-unite-samuel-warde/">link</a></th>
    </tr>
    <tr>
        <th>Liberation News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberation-news/">link</a></th>
    </tr>
    <tr>
        <th>Little Green Footballs</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/little-green-footballs/">link</a></th>
    </tr>
    <tr>
        <th>Love Knowledge</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/love-knowledge/">link</a></th>
    </tr>
    <tr>
        <th>Mashable</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mashable/">link</a></th>
    </tr>
    <tr>
        <th>Mean Left Hook</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mean-left-hook/">link</a></th>
    </tr>
    <tr>
        <th>Mediaite</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mediaite/">link</a></th>
    </tr>
    <tr>
        <th>Media Matters</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/media-matters/">link</a></th>
    </tr>
    <tr>
        <th>Meduza</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/meduza/">link</a></th>
    </tr>
    <tr>
        <th>Merry Jane</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/merry-jane/">link</a></th>
    </tr>
    <tr>
        <th>Miami New Times</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/miami-new-times-2/">link</a></th>
    </tr>
    <tr>
        <th>Middle East Monitor</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/middle-east-monitor/">link</a></th>
    </tr>
    <tr>
        <th>Modern Liberals</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/modern-liberals/">link</a></th>
    </tr>
    <tr>
        <th>Molad The Center for the Renewal of Israeli Democracy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/molad-center-renewal-israeli-democracy/">link</a></th>
    </tr>
    <tr>
        <th>Mondoweiss</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mondoweiss/">link</a></th>
    </tr>
    <tr>
        <th>Moon of Alabama</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/moon-of-alabama/">link</a></th>
    </tr>
    <tr>
        <th>Move On</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/move-on/">link</a></th>
    </tr>
    <tr>
        <th>Ms. (Magazine)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ms-magazine/">link</a></th>
    </tr>
    <tr>
        <th>MSNBC</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/msnbc/">link</a></th>
    </tr>
    <tr>
        <th>Nap-Sack</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nap-sack/">link</a></th>
    </tr>
    <tr>
        <th>Nation of Change</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nation-of-change/">link</a></th>
    </tr>
    <tr>
        <th>New Internationalist</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-internationalist/">link</a></th>
    </tr>
    <tr>
        <th>New Politics Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-politics-magazine/">link</a></th>
    </tr>
    <tr>
        <th>New Republic</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-republic/">link</a></th>
    </tr>
    <tr>
        <th>New Statesman</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-statesman/">link</a></th>
    </tr>
    <tr>
        <th>New York Amsterdam News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/new-york-amsterdam-news/">link</a></th>
    </tr>
    <tr>
        <th>New York Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-york-magazine/">link</a></th>
    </tr>
    <tr>
        <th>New Yorker</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-yorker/">link</a></th>
    </tr>
    <tr>
        <th>News Corpse</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-corpse/">link</a></th>
    </tr>
    <tr>
        <th>NewsHounds</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newshounds/">link</a></th>
    </tr>
    <tr>
        <th>NewsLogue</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newslogue/">link</a></th>
    </tr>
    <tr>
        <th>Newsweek</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsweek/">link</a></th>
    </tr>
    <tr>
        <th>North99</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/north99/">link</a></th>
    </tr>
    <tr>
        <th>Nova Magazine</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/nova-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Now Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/now-magazine/">link</a></th>
    </tr>
    <tr>
        <th>NowThis News</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nowthis-news/">link</a></th>
    </tr>
    <tr>
        <th>Occupy.com</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/occupy-com/">link</a></th>
    </tr>
    <tr>
        <th>One Green Planet</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/one-green-planet/">link</a></th>
    </tr>
    <tr>
        <th>OpEdNews (OEN)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/opednews-oen/">link</a></th>
    </tr>
    <tr>
        <th>Our Voice NY</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/our-voice-ny/">link</a></th>
    </tr>
    <tr>
        <th>The Palestine Chronicle</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-palestine-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>Palmer Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/palmer-report/">link</a></th>
    </tr>
    <tr>
        <th>Paste Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/paste-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Peacock Panache</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/peacock-panache/">link</a></th>
    </tr>
    <tr>
        <th>People for the American Way (PFAW)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/people-american-way-pfaw/">link</a></th>
    </tr>
    <tr>
        <th>People Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/people-magazine/">link</a></th>
    </tr>
    <tr>
        <th>PINAC</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pinac/">link</a></th>
    </tr>
    <tr>
        <th>Pink News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pink-news/">link</a></th>
    </tr>
    <tr>
        <th>Political Dig</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/political-dig/">link</a></th>
    </tr>
    <tr>
        <th>Political Updater</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/political-updater/">link</a></th>
    </tr>
    <tr>
        <th>PoliticusUSA</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/politicususa/">link</a></th>
    </tr>
    <tr>
        <th>Politizoom</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/politizoom/">link</a></th>
    </tr>
    <tr>
        <th>Popular Resistance</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/popular-resistance/">link</a></th>
    </tr>
    <tr>
        <th>Pravda Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pravda-report/">link</a></th>
    </tr>
    <tr>
        <th>Press Progress</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/press-progress/">link</a></th>
    </tr>
    <tr>
        <th>Progressive Army</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/progressive-army/">link</a></th>
    </tr>
    <tr>
        <th>Progressive Liberal</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/progressive-liberal/">link</a></th>
    </tr>
    <tr>
        <th>Project Censored</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/project-censored/">link</a></th>
    </tr>
    <tr>
        <th>Proud Democrat</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/proud-democrat/">link</a></th>
    </tr>
    <tr>
        <th>PutinTrump.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/putintrump-org/">link</a></th>
    </tr>
    <tr>
        <th>Queerty</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/queerty/">link</a></th>
    </tr>
    <tr>
        <th>Rabble.ca</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rabble-ca/">link</a></th>
    </tr>
    <tr>
        <th>Rantt Media</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rantt-media/">link</a></th>
    </tr>
    <tr>
        <th>Rappler</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rappler/">link</a></th>
    </tr>
    <tr>
        <th>Raw Progressive</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/raw-progressive/">link</a></th>
    </tr>
    <tr>
        <th>Raw Story</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/raw-story/">link</a></th>
    </tr>
    <tr>
        <th>Reading the Pictures</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/reading-the-pictures/">link</a></th>
    </tr>
    <tr>
        <th>Reader Supported News (RSN)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/reader-supported-news-rsn/">link</a></th>
    </tr>
    <tr>
        <th>Red Pepper</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-pepper/">link</a></th>
    </tr>
    <tr>
        <th>Red State Disaster</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-state-disaster/">link</a></th>
    </tr>
    <tr>
        <th>Red Youth</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/red-youth/">link</a></th>
    </tr>
    <tr>
        <th>Republicans Suck</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/republicans-suck/">link</a></th>
    </tr>
    <tr>
        <th>Republic Report</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/republic-report/">link</a></th>
    </tr>
    <tr>
        <th>Resilience (Post Carbon Institute)</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/resilience-post-carbon-institute/">link</a></th>
    </tr>
    <tr>
        <th>Rewire</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rewire/">link</a></th>
    </tr>
    <tr>
        <th>Revcom.us</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/revcom-us/">link</a></th>
    </tr>
    <tr>
        <th>Reverb Press</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/reverb-press/">link</a></th>
    </tr>
    <tr>
        <th>Revere Press</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/revere-press/">link</a></th>
    </tr>
    <tr>
        <th>Revolution News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/revolution-news/">link</a></th>
    </tr>
    <tr>
        <th>Right Wing Watch</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/right-wing-watch/">link</a></th>
    </tr>
    <tr>
        <th>Ring of Fire</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ring-of-fire/">link</a></th>
    </tr>
    <tr>
        <th>Salon</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/salon/">link</a></th>
    </tr>
    <tr>
        <th>Scary Mommy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/scary-mommy/">link</a></th>
    </tr>
    <tr>
        <th>Second Nexus</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/second-nexus/">link</a></th>
    </tr>
    <tr>
        <th>Seventeen</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/seventeen/">link</a></th>
    </tr>
    <tr>
        <th>Shadow Proof</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/shadow-proof/">link</a></th>
    </tr>
    <tr>
        <th>Shareblue</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/shareblue/">link</a></th>
    </tr>
    <tr>
        <th>Slate</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/slate/">link</a></th>
    </tr>
    <tr>
        <th>Smirking Chimp</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/smirking-chimp/">link</a></th>
    </tr>
    <tr>
        <th>Socialist Standard</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/socialist-standard/">link</a></th>
    </tr>
    <tr>
        <th>SocialistWorker.org</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/socialistworker-org/">link</a></th>
    </tr>
    <tr>
        <th>SourceWatch</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sourcewatch/">link</a></th>
    </tr>
    <tr>
        <th>Sparks/CnnTimes</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sparkscnntimes/">link</a></th>
    </tr>
    <tr>
        <th>Splinter</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/splinter/">link</a></th>
    </tr>
    <tr>
        <th>St. Pete for Peace</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/st-pete-for-peace/">link</a></th>
    </tr>
    <tr>
        <th>Syriana Analysis</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/syriana-analysis/">link</a></th>
    </tr>
    <tr>
        <th>Talking Points Memo</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/talking-points-memo/">link</a></th>
    </tr>
    <tr>
        <th>TakePart</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/takepart/">link</a></th>
    </tr>
    <tr>
        <th>TeleSUR</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/telesur/">link</a></th>
    </tr>
    <tr>
        <th>The American Independent Institute</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-independent-institute/">link</a></th>
    </tr>
    <tr>
        <th>The American Prospect</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-american-prospect/">link</a></th>
    </tr>
    <tr>
        <th>The Austin Chronicle</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-austin-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>The Blue Route</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-blue-route/">link</a></th>
    </tr>
    <tr>
        <th>The Burning Spear</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-burning-spear/">link</a></th>
    </tr>
    <tr>
        <th>The Canary (UK)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-canary-uk/">link</a></th>
    </tr>
    <tr>
        <th>The Climate Reality Project</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-climate-reality-project/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Banter</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-banter/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Buzz</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-buzz/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Vox</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-vox/">link</a></th>
    </tr>
    <tr>
        <th>The Democratic Hub</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-democratic-hub/">link</a></th>
    </tr>
    <tr>
        <th>The Dworkin Report</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-dworkin-report/">link</a></th>
    </tr>
    <tr>
        <th>The Establishment</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-establishment/">link</a></th>
    </tr>
    <tr>
        <th>The Florida Squeeze</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-florida-squeeze/">link</a></th>
    </tr>
    <tr>
        <th>The Frisky</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-frisky/">link</a></th>
    </tr>
    <tr>
        <th>The Fucking News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-fucking-news/">link</a></th>
    </tr>
    <tr>
        <th>TheGrio</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/thegrio/">link</a></th>
    </tr>
    <tr>
        <th>TheImproper Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left5.png">left5.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/theimproper-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Indypendent</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-indypendent/">link</a></th>
    </tr>
    <tr>
        <th>The Intellectualist</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-intellectualist/">link</a></th>
    </tr>
    <tr>
        <th>The Intercept</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-intercept/">link</a></th>
    </tr>
    <tr>
        <th>The Lily</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left12.png">left12.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-lily/">link</a></th>
    </tr>
    <tr>
        <th>The London Economic</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-london-economic/">link</a></th>
    </tr>
    <tr>
        <th>The Mary Sue</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-mary-sue/">link</a></th>
    </tr>
    <tr>
        <th>The Militant</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-militant/">link</a></th>
    </tr>
    <tr>
        <th>The Morning Star</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-morning-star/">link</a></th>
    </tr>
    <tr>
        <th>The Nation</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-nation/">link</a></th>
    </tr>
    <tr>
        <th>The National Memo</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-national-memo/">link</a></th>
    </tr>
    <tr>
        <th>The New Civil Rights Movement</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-new-civil-rights-movement/">link</a></th>
    </tr>
    <tr>
        <th>The Outline</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left11.png">left11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-outline/">link</a></th>
    </tr>
    <tr>
        <th>The Progressive</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-progressive/">link</a></th>
    </tr>
    <tr>
        <th>The Progressive Frontier</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-progressive-frontier/">link</a></th>
    </tr>
    <tr>
        <th>The Reality-Based Community</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/reality-based-community/">link</a></th>
    </tr>
    <tr>
        <th>The Root</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-root/">link</a></th>
    </tr>
    <tr>
        <th>The Source Newspaper (La Source)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/source-newspaper-la-source/">link</a></th>
    </tr>
    <tr>
        <th>The Stern Facts</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-stern-facts/">link</a></th>
    </tr>
    <tr>
        <th>The Texas Observer</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left10.png">left10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-texas-observer/">link</a></th>
    </tr>
    <tr>
        <th>The Village Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-village-voice/">link</a></th>
    </tr>
    <tr>
        <th>The Walrus</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-walrus/">link</a></th>
    </tr>
    <tr>
        <th>The Week (USA)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-week/">link</a></th>
    </tr>
    <tr>
        <th>The World Can’t Wait</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/world-cant-wait/">link</a></th>
    </tr>
    <tr>
        <th>TheosWatch.com</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/theoswatch-com/">link</a></th>
    </tr>
    <tr>
        <th>Think Progress</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/think-progress/">link</a></th>
    </tr>
    <tr>
        <th>This Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/this-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Towleroad</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/towleroad/">link</a></th>
    </tr>
    <tr>
        <th>Tribune Magazine UK</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tribune-magazine-uk/">link</a></th>
    </tr>
    <tr>
        <th>Truth Against the Machine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/truth-against-the-machine/">link</a></th>
    </tr>
    <tr>
        <th>Truthdig</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truthdig/">link</a></th>
    </tr>
    <tr>
        <th>Truth Out</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left1.png">left1.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-out/">link</a></th>
    </tr>
    <tr>
        <th>Uproxx</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/uproxx/">link</a></th>
    </tr>
    <tr>
        <th>Upworthy</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/upworthy/">link</a></th>
    </tr>
    <tr>
        <th>US Political Post</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left2.png">left2.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-political-post/">link</a></th>
    </tr>
    <tr>
        <th>US Uncut</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeleft03.png">extremeleft03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-uncut/">link</a></th>
    </tr>
    <tr>
        <th>Vanity Fair</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vanity-fair/">link</a></th>
    </tr>
    <tr>
        <th>Verified Politics</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/verified-politics/">link</a></th>
    </tr>
    <tr>
        <th>Verrit</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/verrit/">link</a></th>
    </tr>
    <tr>
        <th>Vermont Independent</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left7.png">left7.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/vermont-independent/">link</a></th>
    </tr>
    <tr>
        <th>Viral Title</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/viral-title/">link</a></th>
    </tr>
    <tr>
        <th>Vote</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vote/">link</a></th>
    </tr>
    <tr>
        <th>Vox</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left7.png">left7.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vox/">link</a></th>
    </tr>
    <tr>
        <th>Washington Daily Wire</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left2.png">left2.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-daily-wire/">link</a></th>
    </tr>
    <tr>
        <th>Washington Journal (Not C-Span)</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-journal-not-c-span/">link</a></th>
    </tr>
    <tr>
        <th>Washington Monthly</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left12.png">left12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/washington-monthly/">link</a></th>
    </tr>
    <tr>
        <th>Washington Press</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-press/">link</a></th>
    </tr>
    <tr>
        <th>Washington Sources</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-sources/">link</a></th>
    </tr>
    <tr>
        <th>Wear Your Voice</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wear-your-voice/">link</a></th>
    </tr>
    <tr>
        <th>What Matters News</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left4.png">left4.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/what-matters-news/">link</a></th>
    </tr>
    <tr>
        <th>White House Watch</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left1.png">left1.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/white-house-watch/">link</a></th>
    </tr>
    <tr>
        <th>Who.What.Why</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left9.png">left9.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/who-what-why/">link</a></th>
    </tr>
    <tr>
        <th>Wonkette</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left4.png">left4.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wonkette/">link</a></th>
    </tr>
    <tr>
        <th>Workers World</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/workers-world/">link</a></th>
    </tr>
    <tr>
        <th>World Socialist Web Site</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left6.png">left6.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-socialist-web-site/">link</a></th>
    </tr>
    <tr>
        <th>Yes Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/yes-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Young Turks</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left3.png">left3.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-young-turks/">link</a></th>
    </tr>
    <tr>
        <th>Your Black World</th>
        <th>MIXED</th>
        <th>Left</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/left8.png">left8.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/your-black-world/">link</a></th>
    </tr>
    <tr>
        <th>Z Magazine</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left8.png">left8.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/z-magazine/">link</a></th>
    </tr>
    <tr>
        <th>+972 Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/972-magazine/">link</a></th>
    </tr>
    <tr>
        <th>ABC11 Eyewitness News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/abc11-eyewitness-news/">link</a></th>
    </tr>
    <tr>
        <th>ABC News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/abc-news/">link</a></th>
    </tr>
    <tr>
        <th>ABC News Australia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/abc-news-australia/">link</a></th>
    </tr>
    <tr>
        <th>Above the Law</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/above-the-law/">link</a></th>
    </tr>
    <tr>
        <th>Aeon</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/aeon/">link</a></th>
    </tr>
    <tr>
        <th>Affinity Magazine</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/affinity-magazine/">link</a></th>
    </tr>
    <tr>
        <th>African Arguments</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/african-arguments/">link</a></th>
    </tr>
    <tr>
        <th>Al-Hayat</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/al-hayat/">link</a></th>
    </tr>
    <tr>
        <th>Al Jazeera</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/al-jazeera/">link</a></th>
    </tr>
    <tr>
        <th>Al-Masdar News (AMN)</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/al-masdar-news-amn/">link</a></th>
    </tr>
    <tr>
        <th>Al Monitor</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/al-monitor/">link</a></th>
    </tr>
    <tr>
        <th>Al-Sura</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/al-sura/">link</a></th>
    </tr>
    <tr>
        <th>Alan Guttmacher Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/alan-guttmacher-institute/">link</a></th>
    </tr>
    <tr>
        <th>Alaska Dispatch News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/alaska-dispatch-news/">link</a></th>
    </tr>
    <tr>
        <th>Albany Times-Union</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/albany-times-union/">link</a></th>
    </tr>
    <tr>
        <th>Allied Progress</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/allied-progress/">link</a></th>
    </tr>
    <tr>
        <th>Akron Beacon Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/akron-beacon-journal/">link</a></th>
    </tr>
    <tr>
        <th>AM New York</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/am-new-york/">link</a></th>
    </tr>
    <tr>
        <th>America Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/america-magazine/">link</a></th>
    </tr>
    <tr>
        <th>American Civil Liberties Union (ACLU)</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-civil-liberties-union-aclu/">link</a></th>
    </tr>
    <tr>
        <th>American Immigration Council</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-immigration-council/">link</a></th>
    </tr>
    <tr>
        <th>Anniston Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/anniston-star/">link</a></th>
    </tr>
    <tr>
        <th>Anti-Defamation League</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/anti-defamation-league/">link</a></th>
    </tr>
    <tr>
        <th>American Public Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-public-media/">link</a></th>
    </tr>
    <tr>
        <th>AOL</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/aol/">link</a></th>
    </tr>
    <tr>
        <th>APM Reports</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/apm-reports/">link</a></th>
    </tr>
    <tr>
        <th>Ara News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ara-news/">link</a></th>
    </tr>
    <tr>
        <th>Areo Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/areo-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Arizona Daily Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/arizona-daily-star/">link</a></th>
    </tr>
    <tr>
        <th>Arizona Daily Sun</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/arizona-daily-sun/">link</a></th>
    </tr>
    <tr>
        <th>Arkansas Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/arkansas-times/">link</a></th>
    </tr>
    <tr>
        <th>Asheville Citizen-Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/asheville-citizen-times/">link</a></th>
    </tr>
    <tr>
        <th>Asia Sentinel</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/asia-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>Asian Correspondent</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/asian-correspondent/">link</a></th>
    </tr>
    <tr>
        <th>Atavist Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/atavist-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Atlanta Black Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/atlanta-black-star/">link</a></th>
    </tr>
    <tr>
        <th>Atlanta Journal-Constitution</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/atlanta-journal-constitution/">link</a></th>
    </tr>
    <tr>
        <th>The Atlantic</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-atlantic/">link</a></th>
    </tr>
    <tr>
        <th>Atlantic Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/atlantic-media/">link</a></th>
    </tr>
    <tr>
        <th>ATTN:</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/attn/">link</a></th>
    </tr>
    <tr>
        <th>Austin American-Statesman</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/austin-american-statesman/">link</a></th>
    </tr>
    <tr>
        <th>Axios</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/axios/">link</a></th>
    </tr>
    <tr>
        <th>BackChannel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/backchannel/">link</a></th>
    </tr>
    <tr>
        <th>Balkan Insight</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/balkan-insight/">link</a></th>
    </tr>
    <tr>
        <th>Baltimore Sun</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/baltimore-sun/">link</a></th>
    </tr>
    <tr>
        <th>Bangor Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bangor-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Baptist News Global</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/baptist-news-global/">link</a></th>
    </tr>
    <tr>
        <th>Battle Creek Enquirer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/battle-creek-enquirer/">link</a></th>
    </tr>
    <tr>
        <th>BBC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bbc/">link</a></th>
    </tr>
    <tr>
        <th>Beijing Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/beijing-review/">link</a></th>
    </tr>
    <tr>
        <th>Berkeleyside</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/berkeleyside/">link</a></th>
    </tr>
    <tr>
        <th>Berkshire Eagle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/berkshire-eagle/">link</a></th>
    </tr>
    <tr>
        <th>BillMoyers.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/billmoyers-com/">link</a></th>
    </tr>
    <tr>
        <th>Bing News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bing-news/">link</a></th>
    </tr>
    <tr>
        <th>Birmingham Mail</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/birmingham-mail/">link</a></th>
    </tr>
    <tr>
        <th>BlastingNews</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/blastingnews/">link</a></th>
    </tr>
    <tr>
        <th>Bloomberg News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bloomberg/">link</a></th>
    </tr>
    <tr>
        <th>Bluestem Prairie</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bluestem-prairie/">link</a></th>
    </tr>
    <tr>
        <th>Boston Globe</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/boston-globe/">link</a></th>
    </tr>
    <tr>
        <th>Boy Genius Report (BGR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/boy-genius-report-bgr/">link</a></th>
    </tr>
    <tr>
        <th>Brennan Center for Justice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/brennan-center-for-justice/">link</a></th>
    </tr>
    <tr>
        <th>Brookings Institution</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/brookings-institute/">link</a></th>
    </tr>
    <tr>
        <th>Buffalo News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/buffalo-news/">link</a></th>
    </tr>
    <tr>
        <th>Business Insider</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/business-insider/">link</a></th>
    </tr>
    <tr>
        <th>Bustle Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bustle-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Buzzfeed</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/buzzfeed/">link</a></th>
    </tr>
    <tr>
        <th>Calgary Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/calgary-herald/">link</a></th>
    </tr>
    <tr>
        <th>CalWatchdog.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/calwatchdog-com/">link</a></th>
    </tr>
    <tr>
        <th>Canadaland</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/canadaland/">link</a></th>
    </tr>
    <tr>
        <th>Capital Gazette</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/capital-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Carolina Public Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/carolina-public-press/">link</a></th>
    </tr>
    <tr>
        <th>Caribbean Life News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/caribbean-life-news/">link</a></th>
    </tr>
    <tr>
        <th>CBC News (Canadian Broadcasting)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cbc-news-canadian-broadcasting/">link</a></th>
    </tr>
    <tr>
        <th>CBS News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cbs-news/">link</a></th>
    </tr>
    <tr>
        <th>CCTV America</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cctv-america/">link</a></th>
    </tr>
    <tr>
        <th>Center for International Policy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-international-policy/">link</a></th>
    </tr>
    <tr>
        <th>Center for Popular Democracy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/center-popular-democracy/">link</a></th>
    </tr>
    <tr>
        <th>The Center on Budget and Policy Priorities</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-center-on-budget-and-policy-priorities/">link</a></th>
    </tr>
    <tr>
        <th>Charleston Gazette-Mail</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/charleston-gazette-mail/">link</a></th>
    </tr>
    <tr>
        <th>Charlotte Observer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/charlotte-observer/">link</a></th>
    </tr>
    <tr>
        <th>Cheddar</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/cheddar/">link</a></th>
    </tr>
    <tr>
        <th>The Chicago Reporter</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-chicago-reporter/">link</a></th>
    </tr>
    <tr>
        <th>Chicago Sun Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/chicago-sun-times/">link</a></th>
    </tr>
    <tr>
        <th>Citizens for Legitimate Government (CLG News)</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/citizens-for-legitimate-government-clg-news/">link</a></th>
    </tr>
    <tr>
        <th>Citizens for Responsibility and Ethics in Washington (CREW)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/citizens-responsibility-ethics-washington-crew/">link</a></th>
    </tr>
    <tr>
        <th>Citizens for Tax Justice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/citizens-for-tax-justice/">link</a></th>
    </tr>
    <tr>
        <th>Citizen Truth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/citizen-truth/">link</a></th>
    </tr>
    <tr>
        <th>Clean Technica</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/clean-technica/">link</a></th>
    </tr>
    <tr>
        <th>CNBC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cnbc/">link</a></th>
    </tr>
    <tr>
        <th>Columbia Journalism Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/columbia-journalism-review/">link</a></th>
    </tr>
    <tr>
        <th>Colombia Reports</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/columbia-reports/">link</a></th>
    </tr>
    <tr>
        <th>Committee to Investigate Russia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/committee-investigate-russia/">link</a></th>
    </tr>
    <tr>
        <th>Common Cause</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/common-cause/">link</a></th>
    </tr>
    <tr>
        <th>Commonweal Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/commonweal-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Commonwealth Fund</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/commonwealth-fund/">link</a></th>
    </tr>
    <tr>
        <th>Corporate Presidency</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/corporate-presidency/">link</a></th>
    </tr>
    <tr>
        <th>Council for the National Interest</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/council-for-the-national-interest/">link</a></th>
    </tr>
    <tr>
        <th>Credo Action</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/credo-action/">link</a></th>
    </tr>
    <tr>
        <th>Crosscut.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/crosscut-com/">link</a></th>
    </tr>
    <tr>
        <th>CT Mirror</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ct-mirror/">link</a></th>
    </tr>
    <tr>
        <th>CTV News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ctv-news/">link</a></th>
    </tr>
    <tr>
        <th>Daily Hive</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-hive/">link</a></th>
    </tr>
    <tr>
        <th>Dawn</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dawn/">link</a></th>
    </tr>
    <tr>
        <th>DCReport.org</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dcreport-org/">link</a></th>
    </tr>
    <tr>
        <th>Deadline Hollywood</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/deadline-hollywood/">link</a></th>
    </tr>
    <tr>
        <th>Deccan Herald</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deccan-herald/">link</a></th>
    </tr>
    <tr>
        <th>Delaware Online – The News Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/delaware-online-news-journal/">link</a></th>
    </tr>
    <tr>
        <th>Democracy 21</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/democracy-21/">link</a></th>
    </tr>
    <tr>
        <th>Democrat and Chronicle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/democrat-and-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>Demos</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/demos/">link</a></th>
    </tr>
    <tr>
        <th>Denver Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/denver-post/">link</a></th>
    </tr>
    <tr>
        <th>Denver Westword</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/denver-westword/">link</a></th>
    </tr>
    <tr>
        <th>Detroit Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/detroit-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Die Zeit</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/die-zeit/">link</a></th>
    </tr>
    <tr>
        <th>Digg</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/digg/">link</a></th>
    </tr>
    <tr>
        <th>DiversityInc</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/diversityinc/">link</a></th>
    </tr>
    <tr>
        <th>Dutch Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dutch-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Dutch Review</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dutch-review/">link</a></th>
    </tr>
    <tr>
        <th>DW News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dw-news/">link</a></th>
    </tr>
    <tr>
        <th>EarthJustice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/earthjustice/">link</a></th>
    </tr>
    <tr>
        <th>East Bay Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/east-bay-times/">link</a></th>
    </tr>
    <tr>
        <th>Economic Policy Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/economic-policy-institute/">link</a></th>
    </tr>
    <tr>
        <th>Economics.Help</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/economics-help/">link</a></th>
    </tr>
    <tr>
        <th>Edmonton Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/edmonton-journal/">link</a></th>
    </tr>
    <tr>
        <th>Electronic Frontier Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/electronic-frontier-foundation/">link</a></th>
    </tr>
    <tr>
        <th>El Pais</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/el-pais/">link</a></th>
    </tr>
    <tr>
        <th>El Paso Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/el-paso-times/">link</a></th>
    </tr>
    <tr>
        <th>Emirates 24/7</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/emirates-247/">link</a></th>
    </tr>
    <tr>
        <th>Empty Wheel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/empty-wheel/">link</a></th>
    </tr>
    <tr>
        <th>Engadget</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/engadget/">link</a></th>
    </tr>
    <tr>
        <th>Euractiv</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/euractiv/">link</a></th>
    </tr>
    <tr>
        <th>EU Observer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/eu-observer/">link</a></th>
    </tr>
    <tr>
        <th>Exposing the Truth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/exposing-the-truth/">link</a></th>
    </tr>
    <tr>
        <th>Factbox.TV</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/factbox-tv/">link</a></th>
    </tr>
    <tr>
        <th>Fact / Myth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/factmyth/">link</a></th>
    </tr>
    <tr>
        <th>Fairness & Accuracy in Reporting (FAIR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fairness-accuracy-in-reporting-fair/">link</a></th>
    </tr>
    <tr>
        <th>FairVote</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fairvote/">link</a></th>
    </tr>
    <tr>
        <th>Fast Company Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fast-company-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Feminist Frequency</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/feminist-frequency/">link</a></th>
    </tr>
    <tr>
        <th>Fight for the Future</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fight-for-the-future/">link</a></th>
    </tr>
    <tr>
        <th>FiveThirtyEight</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fivethirtyeight/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Policy in Focus</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/foreign-policy-focus/">link</a></th>
    </tr>
    <tr>
        <th>Fort Worth Weekly</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fort-worth-weekly/">link</a></th>
    </tr>
    <tr>
        <th>France24</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/france24/">link</a></th>
    </tr>
    <tr>
        <th>Freakonomics Radio</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freakonomics-radio/">link</a></th>
    </tr>
    <tr>
        <th>Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/free-press/">link</a></th>
    </tr>
    <tr>
        <th>Fresno Bee</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fresno-bee/">link</a></th>
    </tr>
    <tr>
        <th>Fusion</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fusion/">link</a></th>
    </tr>
    <tr>
        <th>Gay Star News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gay-star-news/">link</a></th>
    </tr>
    <tr>
        <th>Geopolitics Alert</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/geopolitics-alert/">link</a></th>
    </tr>
    <tr>
        <th>Greensboro News and Record</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/greensboro-news-and-record/">link</a></th>
    </tr>
    <tr>
        <th>Greentech Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/greentech-media/">link</a></th>
    </tr>
    <tr>
        <th>Glamour Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/glamour-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Global Citizen</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/global-citizen/">link</a></th>
    </tr>
    <tr>
        <th>Global News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/global-news/">link</a></th>
    </tr>
    <tr>
        <th>Global Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/global-post/">link</a></th>
    </tr>
    <tr>
        <th>Global Risk Insights (GRI)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/global-risk-insights-gri/">link</a></th>
    </tr>
    <tr>
        <th>Global Times (China)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/global-times-china/">link</a></th>
    </tr>
    <tr>
        <th>Google News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/google-news/">link</a></th>
    </tr>
    <tr>
        <th>Governing Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/governing-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Grist</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/grist/">link</a></th>
    </tr>
    <tr>
        <th>Gun Violence Archive</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gun-violence-archive/">link</a></th>
    </tr>
    <tr>
        <th>Haaretz</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/haaretz/">link</a></th>
    </tr>
    <tr>
        <th>Harper’s Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/harpers/">link</a></th>
    </tr>
    <tr>
        <th>The Hartford Courant</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-hartford-courant/">link</a></th>
    </tr>
    <tr>
        <th>Health Magazine</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/health-magazine/">link</a></th>
    </tr>
    <tr>
        <th>HealthyWay</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/healthyway/">link</a></th>
    </tr>
    <tr>
        <th>Heavy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/heavy/">link</a></th>
    </tr>
    <tr>
        <th>Helsinki Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/helsinki-times/">link</a></th>
    </tr>
    <tr>
        <th>High Country News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/high-country-news/">link</a></th>
    </tr>
    <tr>
        <th>Highline</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/highline/">link</a></th>
    </tr>
    <tr>
        <th>Hindustan Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hindustan-times/">link</a></th>
    </tr>
    <tr>
        <th>History News Network</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/history-news-network/">link</a></th>
    </tr>
    <tr>
        <th>Hollywood Reporter</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hollywood-reporter/">link</a></th>
    </tr>
    <tr>
        <th>Honolulu Star-Advertiser</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/honolulu-star-advertiser/">link</a></th>
    </tr>
    <tr>
        <th>Houston Chronicle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/houston-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>Human Rights Watch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/human-rights-watch/">link</a></th>
    </tr>
    <tr>
        <th>Humanium</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/humanium/">link</a></th>
    </tr>
    <tr>
        <th>Hurriyet Daily News</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hurriyet-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Ice News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ice-news/">link</a></th>
    </tr>
    <tr>
        <th>If Americans Knew</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/if-america-knew/">link</a></th>
    </tr>
    <tr>
        <th>Independent Australia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/independent-australia/">link</a></th>
    </tr>
    <tr>
        <th>Independent Media Center</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/independent-media-center/">link</a></th>
    </tr>
    <tr>
        <th>Indianapolis Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/indianapolis-star/">link</a></th>
    </tr>
    <tr>
        <th>iNews</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/inews/">link</a></th>
    </tr>
    <tr>
        <th>Inquisitr</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/inquisitr/">link</a></th>
    </tr>
    <tr>
        <th>InsideClimate News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/insideclimate-news/">link</a></th>
    </tr>
    <tr>
        <th>Inside Edition</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/inside-edition/">link</a></th>
    </tr>
    <tr>
        <th>Inside Higher Ed</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/inside-higher-ed/">link</a></th>
    </tr>
    <tr>
        <th>Inside Philanthropy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/inside-philanthropy/">link</a></th>
    </tr>
    <tr>
        <th>Institute for Middle East Understanding (IMEU)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/institute-for-middle-east-understanding-imeu/">link</a></th>
    </tr>
    <tr>
        <th>Institute on Taxation and Economic Policy (ITEP)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/institute-on-taxation-and-economic-policy-itep/">link</a></th>
    </tr>
    <tr>
        <th>International Business Times</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-business-times/">link</a></th>
    </tr>
    <tr>
        <th>International Center for Research on Women</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-center-for-research-on-women/">link</a></th>
    </tr>
    <tr>
        <th>International Crisis Group</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-crisis-group/">link</a></th>
    </tr>
    <tr>
        <th>Inter Press Service (IPS)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/inter-press-service-ips/">link</a></th>
    </tr>
    <tr>
        <th>Inverse</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/inverse/">link</a></th>
    </tr>
    <tr>
        <th>iPolitics</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ipolitics/">link</a></th>
    </tr>
    <tr>
        <th>IRIN News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/irin-news/">link</a></th>
    </tr>
    <tr>
        <th>Jackson Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jackson-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Jihadica</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jihadica/">link</a></th>
    </tr>
    <tr>
        <th>Joint Center for Political and Economic Studies</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/joint-center-for-political-and-economic-studies/">link</a></th>
    </tr>
    <tr>
        <th>Journal of Politics and Society</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/journal-of-politics-and-society/">link</a></th>
    </tr>
    <tr>
        <th>Kansas City Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/kansas-city-star/">link</a></th>
    </tr>
    <tr>
        <th>Knight Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/knight-foundation/">link</a></th>
    </tr>
    <tr>
        <th>KMOV</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/kmov/">link</a></th>
    </tr>
    <tr>
        <th>KOCO News 5</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/koco-news-5/">link</a></th>
    </tr>
    <tr>
        <th>Kotaku</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/kotaku/">link</a></th>
    </tr>
    <tr>
        <th>KUOW NPR</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/kuow-npr/">link</a></th>
    </tr>
    <tr>
        <th>Kurdistan 24</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/kurdistan-24/">link</a></th>
    </tr>
    <tr>
        <th>Kyiv Post</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/kyiv-post/">link</a></th>
    </tr>
    <tr>
        <th>La Presse</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/la-presse/">link</a></th>
    </tr>
    <tr>
        <th>LA Times (Los Angeles Times)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/la-times-los-angeles-times/">link</a></th>
    </tr>
    <tr>
        <th>Latin Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/latin-times/">link</a></th>
    </tr>
    <tr>
        <th>Lawfare Blog</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lawfare-blog/">link</a></th>
    </tr>
    <tr>
        <th>Law Newz</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/law-newz/">link</a></th>
    </tr>
    <tr>
        <th>Left Justified</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/left-justified/">link</a></th>
    </tr>
    <tr>
        <th>Lethbridge Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lethbridge-herald/">link</a></th>
    </tr>
    <tr>
        <th>Lexington Herald Leader</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lexington-herald-leader/">link</a></th>
    </tr>
    <tr>
        <th>Liberal Mountain</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/liberal-mountain/">link</a></th>
    </tr>
    <tr>
        <th>Lifehacker</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lifehacker/">link</a></th>
    </tr>
    <tr>
        <th>LiveLeak</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liveleak/">link</a></th>
    </tr>
    <tr>
        <th>Maclean’s Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/macleans-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Maine Beacon</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/maine-beacon/">link</a></th>
    </tr>
    <tr>
        <th>McClatchyDC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mcclatchydc/">link</a></th>
    </tr>
    <tr>
        <th>MediaFile</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mediafile/">link</a></th>
    </tr>
    <tr>
        <th>Medium</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/medium/">link</a></th>
    </tr>
    <tr>
        <th>Metro</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/metro/">link</a></th>
    </tr>
    <tr>
        <th>Metro UK</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/metro-uk/">link</a></th>
    </tr>
    <tr>
        <th>Mexico Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mexico-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Miami Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/miami-herald/">link</a></th>
    </tr>
    <tr>
        <th>Mic</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mic/">link</a></th>
    </tr>
    <tr>
        <th>Migration Policy Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/migration-policy-institute/">link</a></th>
    </tr>
    <tr>
        <th>Milwaukee Journal-Sentinel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/milwaukee-journal-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>Minneapolis Star Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/minneapolis-star-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Minnesota Public Radio (MPR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/minnesota-public-radio-mpr/">link</a></th>
    </tr>
    <tr>
        <th>MinnPost</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/minnpost/">link</a></th>
    </tr>
    <tr>
        <th>Mint Press News</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mint-press-news/">link</a></th>
    </tr>
    <tr>
        <th>Mongabay</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mongabay/">link</a></th>
    </tr>
    <tr>
        <th>Monthly Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/monthly-review/">link</a></th>
    </tr>
    <tr>
        <th>Montreal Gazette</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/montreal-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Morning Consult</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/morning-consult/">link</a></th>
    </tr>
    <tr>
        <th>Moscow Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/moscow-times/">link</a></th>
    </tr>
    <tr>
        <th>Mother Jones</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mother-jones/">link</a></th>
    </tr>
    <tr>
        <th>Mother Nature Network</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mother-nature-network/">link</a></th>
    </tr>
    <tr>
        <th>Mountain Democrat</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mountain-democrat/">link</a></th>
    </tr>
    <tr>
        <th>MSN.com (MSN News)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/msn-com/">link</a></th>
    </tr>
    <tr>
        <th>Muncie Voice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/muncie-voice/">link</a></th>
    </tr>
    <tr>
        <th>MWC News – Media With Conscience</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mwc-news-media-conscience/">link</a></th>
    </tr>
    <tr>
        <th>Naked Capitalism</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/naked-capitalism/">link</a></th>
    </tr>
    <tr>
        <th>Naples Daily News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/naples-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>National Association for the Advancement of Colored People (NAACP)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-association-advancement-colored-people-naacp/">link</a></th>
    </tr>
    <tr>
        <th>National Center for Transgender Equality (NCTE)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-center-transgender-equality-ncte/">link</a></th>
    </tr>
    <tr>
        <th>National Monitor</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/leftcenter/national-monitor/">link</a></th>
    </tr>
    <tr>
        <th>National Newswatch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-newswatch/">link</a></th>
    </tr>
    <tr>
        <th>National Observer (Canada)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-observer-canada/">link</a></th>
    </tr>
    <tr>
        <th>National Youth Rights Association</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-youth-rights-association/">link</a></th>
    </tr>
    <tr>
        <th>Natural Resources Defense Council</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/natural-resources-defense-council/">link</a></th>
    </tr>
    <tr>
        <th>Natural Resource Governance Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/natural-resource-governance-institute/">link</a></th>
    </tr>
    <tr>
        <th>Nature Conservancy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/nature-conservancy/">link</a></th>
    </tr>
    <tr>
        <th>NBC News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nbc-news/">link</a></th>
    </tr>
    <tr>
        <th>NC Policy Watch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nc-policy-watch/">link</a></th>
    </tr>
    <tr>
        <th>Need 2 Know</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/need-2-know/">link</a></th>
    </tr>
    <tr>
        <th>New England Cable News (NECN)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/new-england-cable-news-necn/">link</a></th>
    </tr>
    <tr>
        <th>News Channel 4 (KFOR.com)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-channel-4-kfor-com/">link</a></th>
    </tr>
    <tr>
        <th>News.com.au</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-com-au/">link</a></th>
    </tr>
    <tr>
        <th>Newsday</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsday/">link</a></th>
    </tr>
    <tr>
        <th>News Deeply</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-deeply/">link</a></th>
    </tr>
    <tr>
        <th>NewsGru</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newsgru/">link</a></th>
    </tr>
    <tr>
        <th>Newser</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newser/">link</a></th>
    </tr>
    <tr>
        <th>NewsOne</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsone/">link</a></th>
    </tr>
    <tr>
        <th>Newsy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsy/">link</a></th>
    </tr>
    <tr>
        <th>New Europe</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/new-europe/">link</a></th>
    </tr>
    <tr>
        <th>New Left Review</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-left-review/">link</a></th>
    </tr>
    <tr>
        <th>New Matilda</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-matilda/">link</a></th>
    </tr>
    <tr>
        <th>New Moderate</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-moderate/">link</a></th>
    </tr>
    <tr>
        <th>New York Daily News</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-york-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>News and Guts</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-and-guts/">link</a></th>
    </tr>
    <tr>
        <th>NPR (National Public Radio)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/npr/">link</a></th>
    </tr>
    <tr>
        <th>New York Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-york-times/">link</a></th>
    </tr>
    <tr>
        <th>OC Weekly</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/oc-weekly/">link</a></th>
    </tr>
    <tr>
        <th>The Odyssey Online</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-odyssey-online/">link</a></th>
    </tr>
    <tr>
        <th>Oil and Water Don’t Mix</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/oil-and-water-dont-mix/">link</a></th>
    </tr>
    <tr>
        <th>openDemocracy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/opendemocracy/">link</a></th>
    </tr>
    <tr>
        <th>Opposing Views</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/opposing-views/">link</a></th>
    </tr>
    <tr>
        <th>OneIndia</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/oneindia/">link</a></th>
    </tr>
    <tr>
        <th>Our World In Data</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/our-world-in-data/">link</a></th>
    </tr>
    <tr>
        <th>Outside The Beltway</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/outside-the-beltway/">link</a></th>
    </tr>
    <tr>
        <th>Ozy Media</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ozy-media/">link</a></th>
    </tr>
    <tr>
        <th>Pacific Standard Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pacific-standard-magazine/">link</a></th>
    </tr>
    <tr>
        <th>PanAm Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/panam-post/">link</a></th>
    </tr>
    <tr>
        <th>Patriotic Millionaires</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriotic-millionaires/">link</a></th>
    </tr>
    <tr>
        <th>PBS NewsHour</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pbs-news-hour/">link</a></th>
    </tr>
    <tr>
        <th>Philadelphia Inquirer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/philadelphia-inquirer/">link</a></th>
    </tr>
    <tr>
        <th>Philadelphia Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/philadelphia-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Philippine Daily Inquirer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/philippine-daily-inquirer/">link</a></th>
    </tr>
    <tr>
        <th>Phoenix New Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/phoenix-new-times/">link</a></th>
    </tr>
    <tr>
        <th>Political Critique</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/political-critique/">link</a></th>
    </tr>
    <tr>
        <th>Politics That Work</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/politics-that-work/">link</a></th>
    </tr>
    <tr>
        <th>Population Connection</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/population-connection/">link</a></th>
    </tr>
    <tr>
        <th>Portland Press-Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/portland-press-herald/">link</a></th>
    </tr>
    <tr>
        <th>Portland Tribune</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/portland-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Positive News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/positive-news/">link</a></th>
    </tr>
    <tr>
        <th>Press TV</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/press-tv/">link</a></th>
    </tr>
    <tr>
        <th>Propublica</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/propublica/">link</a></th>
    </tr>
    <tr>
        <th>Prospect Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/prospect-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Providence Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-providence-journal/">link</a></th>
    </tr>
    <tr>
        <th>Public Citizen</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/public-citizen/">link</a></th>
    </tr>
    <tr>
        <th>Public Radio International (PRI)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/public-radio-international-pri/">link</a></th>
    </tr>
    <tr>
        <th>Quartz</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/quartz/">link</a></th>
    </tr>
    <tr>
        <th>Radio Free Asia</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/radio-free-asia/">link</a></th>
    </tr>
    <tr>
        <th>Raleigh News and Observer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/raleigh-news-observer/">link</a></th>
    </tr>
    <tr>
        <th>RationalWiki</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rationalwiki/">link</a></th>
    </tr>
    <tr>
        <th>Real News Network</th>
        <th>HIGH</th>
        <th>Left</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/left11.png">left11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/real-news-network/">link</a></th>
    </tr>
    <tr>
        <th>Religion News Service (RNS)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/religion-news-service-rns/">link</a></th>
    </tr>
    <tr>
        <th>Reveal – Center for Investigative Reporting</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/reveal-center-for-investigative-reporting/">link</a></th>
    </tr>
    <tr>
        <th>Right Web</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/right-web/">link</a></th>
    </tr>
    <tr>
        <th>Roanoke Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/roanoke-times/">link</a></th>
    </tr>
    <tr>
        <th>Rolling Stone</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rolling-stone/">link</a></th>
    </tr>
    <tr>
        <th>Roosevelt Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/roosevelt-institute/">link</a></th>
    </tr>
    <tr>
        <th>Rudaw</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rudaw/">link</a></th>
    </tr>
    <tr>
        <th>Sacramento Bee</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sacramento-bee/">link</a></th>
    </tr>
    <tr>
        <th>Salt Lake Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/salt-lake-tribune/">link</a></th>
    </tr>
    <tr>
        <th>San Antonio Express-News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/san-antonio-express-news/">link</a></th>
    </tr>
    <tr>
        <th>San Diego Free Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/san-diego-free-press/">link</a></th>
    </tr>
    <tr>
        <th>San Diego Reader</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/san-diego-reader/">link</a></th>
    </tr>
    <tr>
        <th>San Francisco Chronicle</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/san-francisco-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>San Francisco Examiner</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/san-francisco-examiner/">link</a></th>
    </tr>
    <tr>
        <th>San Francisco Globe</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/san-francisco-globe/">link</a></th>
    </tr>
    <tr>
        <th>San Jose Mercury News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/san-jose-mercury-news/">link</a></th>
    </tr>
    <tr>
        <th>Santa Barbara Independent</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/santa-barbara-independent/">link</a></th>
    </tr>
    <tr>
        <th>The Santa Fe New Mexican</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/santa-fe-new-mexican/">link</a></th>
    </tr>
    <tr>
        <th>Saudi Gazette</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/saudi-gazette/">link</a></th>
    </tr>
    <tr>
        <th>ScoopWhoop</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/scoopwhoop/">link</a></th>
    </tr>
    <tr>
        <th>Scroll.in</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/scroll-in/">link</a></th>
    </tr>
    <tr>
        <th>Seattle Post-Intelligencer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/seattle-post-intelligencer/">link</a></th>
    </tr>
    <tr>
        <th>Seattle Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/seattle-times/">link</a></th>
    </tr>
    <tr>
        <th>Sentencing Project</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sentencing-project/">link</a></th>
    </tr>
    <tr>
        <th>SFGate</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sfgate/">link</a></th>
    </tr>
    <tr>
        <th>Shame Project</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/shame-project/">link</a></th>
    </tr>
    <tr>
        <th>Sojourners (Soho)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sojourners-soho/">link</a></th>
    </tr>
    <tr>
        <th>SooToday.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sootoday-com/">link</a></th>
    </tr>
    <tr>
        <th>Southern Poverty Law Center</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/southern-poverty-law-center/">link</a></th>
    </tr>
    <tr>
        <th>Special Broadcasting Service (SBS)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/special-broadcasting-service-sbs/">link</a></th>
    </tr>
    <tr>
        <th>Spiegel Online</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/spiegel-online/">link</a></th>
    </tr>
    <tr>
        <th>Star-Ledger</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/star-ledger/">link</a></th>
    </tr>
    <tr>
        <th>Staten Island Advance</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/staten-island-advance/">link</a></th>
    </tr>
    <tr>
        <th>StepFeed</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/stepfeed/">link</a></th>
    </tr>
    <tr>
        <th>St. Louis Post-Dispatch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/st-louis-post-dispatch/">link</a></th>
    </tr>
    <tr>
        <th>Stocks News Daily</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/stocks-news-daily/">link</a></th>
    </tr>
    <tr>
        <th>StopFake</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/stopfake/">link</a></th>
    </tr>
    <tr>
        <th>St. Paul Pioneer Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/st-paul-pioneer-press/">link</a></th>
    </tr>
    <tr>
        <th>Stuff</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/stuff/">link</a></th>
    </tr>
    <tr>
        <th>SWI – Swissinfo.ch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/swi-swissinfo-ch/">link</a></th>
    </tr>
    <tr>
        <th>Syrian Observatory for Human Rights (SOHR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/syrian-observatory-for-human-rights-sohr/">link</a></th>
    </tr>
    <tr>
        <th>Tablet Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tablet-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Tax Justice Network</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tax-justice-network/">link</a></th>
    </tr>
    <tr>
        <th>Tax Policy Center</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tax-policy-center/">link</a></th>
    </tr>
    <tr>
        <th>TechCrunch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/techcrunch/">link</a></th>
    </tr>
    <tr>
        <th>Techdirt</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/techdirt/">link</a></th>
    </tr>
    <tr>
        <th>Texas Monthly</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/texas-monthly/">link</a></th>
    </tr>
    <tr>
        <th>The Sun Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-sun-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Tampa Bay Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tampa-bay-times/">link</a></th>
    </tr>
    <tr>
        <th>The Age (Australia)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-age-australia/">link</a></th>
    </tr>
    <tr>
        <th>The Asahi Shimbun</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-asahi-shimbun/">link</a></th>
    </tr>
    <tr>
        <th>The Asbury Park Press</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-asbury-park-press/">link</a></th>
    </tr>
    <tr>
        <th>The Automatic Earth</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-automatic-earth/">link</a></th>
    </tr>
    <tr>
        <th>The Baffler</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-baffler/">link</a></th>
    </tr>
    <tr>
        <th>The Brownsville Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-brownsville-herald/">link</a></th>
    </tr>
    <tr>
        <th>The Budapest Beacon</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-budapest-beacon/">link</a></th>
    </tr>
    <tr>
        <th>The Century Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-century-foundation/">link</a></th>
    </tr>
    <tr>
        <th>The Christian Left</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-christian-left/">link</a></th>
    </tr>
    <tr>
        <th>The Citizen</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-citizen/">link</a></th>
    </tr>
    <tr>
        <th>The Council of Canadians</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-council-of-canadians/">link</a></th>
    </tr>
    <tr>
        <th>The Courier-Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-courier-journal/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Climate</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-climate/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Tarheel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-tarheel/">link</a></th>
    </tr>
    <tr>
        <th>The Economic Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-economic-times/">link</a></th>
    </tr>
    <tr>
        <th>The European Council on Foreign Relations (ECFR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/european-council-foreign-relations-ecfr/">link</a></th>
    </tr>
    <tr>
        <th>The Express-Times (Lehigh Valley)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-express-times-lehigh-valley/">link</a></th>
    </tr>
    <tr>
        <th>The Fifth Column</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fifth-column-news/">link</a></th>
    </tr>
    <tr>
        <th>The Forward</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-forward/">link</a></th>
    </tr>
    <tr>
        <th>The Guardian</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-guardian/">link</a></th>
    </tr>
    <tr>
        <th>The Herald (Everett)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-herald-everett/">link</a></th>
    </tr>
    <tr>
        <th>The Hill</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-hill/">link</a></th>
    </tr>
    <tr>
        <th>The Hill Talk</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-hill-talk/">link</a></th>
    </tr>
    <tr>
        <th>The Hindu</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-hindu/">link</a></th>
    </tr>
    <tr>
        <th>The Independent</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-independent/">link</a></th>
    </tr>
    <tr>
        <th>(The) Interpreter Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-interpreter-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Irish Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-irish-times/">link</a></th>
    </tr>
    <tr>
        <th>The Irrawaddy</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-irrawaddy/">link</a></th>
    </tr>
    <tr>
        <th>The Jerusalem Report</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-jerusalem-report/">link</a></th>
    </tr>
    <tr>
        <th>The Journal News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-journal-news/">link</a></th>
    </tr>
    <tr>
        <th>The Korea Times</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-korea-times/">link</a></th>
    </tr>
    <tr>
        <th>The Local (Norway)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-local-norway/">link</a></th>
    </tr>
    <tr>
        <th>The Moderate Voice</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-moderate-voice/">link</a></th>
    </tr>
    <tr>
        <th>The Monthly (Australia)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-monthly-australia/">link</a></th>
    </tr>
    <tr>
        <th>The Nation Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-nation-institute/">link</a></th>
    </tr>
    <tr>
        <th>The New Arab</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-new-arab/">link</a></th>
    </tr>
    <tr>
        <th>The News-Times (Danbury)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-news-times-danbury/">link</a></th>
    </tr>
    <tr>
        <th>The News Tribune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-news-tribune/">link</a></th>
    </tr>
    <tr>
        <th>The New Tropic</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-new-tropic/">link</a></th>
    </tr>
    <tr>
        <th>The Next Web</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-next-web/">link</a></th>
    </tr>
    <tr>
        <th>The Observer (UK)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-observer/">link</a></th>
    </tr>
    <tr>
        <th>The Olympian</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-olympian/">link</a></th>
    </tr>
    <tr>
        <th>The Oslo Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-oslo-times/">link</a></th>
    </tr>
    <tr>
        <th>The Palm Beach Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-palm-beach-post/">link</a></th>
    </tr>
    <tr>
        <th>The Patriot-News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-patriot-news/">link</a></th>
    </tr>
    <tr>
        <th>The Plain Dealer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-plain-dealer/">link</a></th>
    </tr>
    <tr>
        <th>The Press Democrat</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-press-democrat/">link</a></th>
    </tr>
    <tr>
        <th>The Pulse</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-pulse/">link</a></th>
    </tr>
    <tr>
        <th>The Oslo Times</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-oslo-times/">link</a></th>
    </tr>
    <tr>
        <th>The Record (New Jersey)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-record-new-jersey/">link</a></th>
    </tr>
    <tr>
        <th>The Ringer</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-ringer/">link</a></th>
    </tr>
    <tr>
        <th>The Saturday Paper</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-saturday-paper/">link</a></th>
    </tr>
    <tr>
        <th>The State</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-state/">link</a></th>
    </tr>
    <tr>
        <th>The Stranger</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-stranger/">link</a></th>
    </tr>
    <tr>
        <th>The Sun Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-sun-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Sydney Morning Herald</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-sydney-morning-herald/">link</a></th>
    </tr>
    <tr>
        <th>The Tab</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-tab/">link</a></th>
    </tr>
    <tr>
        <th>The Trace</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-trace/">link</a></th>
    </tr>
    <tr>
        <th>The Tyee</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-tyee/">link</a></th>
    </tr>
    <tr>
        <th>The Varsity</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-varsity/">link</a></th>
    </tr>
    <tr>
        <th>The Verge</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-verge/">link</a></th>
    </tr>
    <tr>
        <th>The Virginian-Pilot</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-virginian-pilot/">link</a></th>
    </tr>
    <tr>
        <th>The Week UK</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-week-uk/">link</a></th>
    </tr>
    <tr>
        <th>The Wilderness Society</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-wilderness-society/">link</a></th>
    </tr>
    <tr>
        <th>The Wire – India</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-wire-india/">link</a></th>
    </tr>
    <tr>
        <th>The Zero Hour</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-zero-hour/">link</a></th>
    </tr>
    <tr>
        <th>Thomson Reuters Foundation</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/thomson-reuters-foundation/">link</a></th>
    </tr>
    <tr>
        <th>Time Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/time/">link</a></th>
    </tr>
    <tr>
        <th>Times-Colonist</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/times-colonist/">link</a></th>
    </tr>
    <tr>
        <th>Times Headline</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/times-headline/">link</a></th>
    </tr>
    <tr>
        <th>Times of Israel</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/times-of-israel/">link</a></th>
    </tr>
    <tr>
        <th>The Times-Picayune</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-times-picayune/">link</a></th>
    </tr>
    <tr>
        <th>Timeline</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/timeline/">link</a></th>
    </tr>
    <tr>
        <th>TomDispatch.com</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tomdispatch-com/">link</a></th>
    </tr>
    <tr>
        <th>To Inform is to Influence</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/to-inform-is-to-influence/">link</a></th>
    </tr>
    <tr>
        <th>Toronto Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter01.png">leftcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/toronto-star/">link</a></th>
    </tr>
    <tr>
        <th>UAWire</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/uawire/">link</a></th>
    </tr>
    <tr>
        <th>Unicorn Riot</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/unicorn-riot/">link</a></th>
    </tr>
    <tr>
        <th>United Federation of Teachers (UFT)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/united-federation-of-teachers-uft/">link</a></th>
    </tr>
    <tr>
        <th>University Business</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/university-business/">link</a></th>
    </tr>
    <tr>
        <th>Urban Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/urban-institute/">link</a></th>
    </tr>
    <tr>
        <th>US News World Report</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-news-world-report/">link</a></th>
    </tr>
    <tr>
        <th>USA Today</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter09.png">leftcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-today-2/">link</a></th>
    </tr>
    <tr>
        <th>Utah Public Radio (UPR)</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/utah-public-radio-upr/">link</a></th>
    </tr>
    <tr>
        <th>Vice News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vice-news/">link</a></th>
    </tr>
    <tr>
        <th>VoteVets.org</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/votevets-org/">link</a></th>
    </tr>
    <tr>
        <th>Vulture</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/vulture/">link</a></th>
    </tr>
    <tr>
        <th>Wall Street on Parade</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wall-street-on-parade/">link</a></th>
    </tr>
    <tr>
        <th>Washington Blade</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/washington-blade/">link</a></th>
    </tr>
    <tr>
        <th>Washington Post</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter03.png">leftcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/washington-post/">link</a></th>
    </tr>
    <tr>
        <th>WGN News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wgn-news/">link</a></th>
    </tr>
    <tr>
        <th>Windsor Star</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/windsor-star/">link</a></th>
    </tr>
    <tr>
        <th>Wings Over Scotland</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter02.png">leftcenter02.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wings-over-scotland/">link</a></th>
    </tr>
    <tr>
        <th>Wired Magazine</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wired-magazine/">link</a></th>
    </tr>
    <tr>
        <th>WNYC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wnyc/">link</a></th>
    </tr>
    <tr>
        <th>World Affairs Journal</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-affairs-journal/">link</a></th>
    </tr>
    <tr>
        <th>WorldCrunch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/worldcrunch/">link</a></th>
    </tr>
    <tr>
        <th>World Policy Institute</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/world-policy-institute/">link</a></th>
    </tr>
    <tr>
        <th>Xinhua News Agency</th>
        <th>MIXED</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter05.png">leftcenter05.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/xinhua-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Yahoo News</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter06.png">leftcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/yahoo-news/">link</a></th>
    </tr>
    <tr>
        <th>YnetNews</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter04.png">leftcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ynetnews/">link</a></th>
    </tr>
    <tr>
        <th>York Daily Record</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter11.png">leftcenter11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/york-daily-record/">link</a></th>
    </tr>
    <tr>
        <th>York Dispatch</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter10.png">leftcenter10.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/york-dispatch/">link</a></th>
    </tr>
    <tr>
        <th>Youth Radio</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter08.png">leftcenter08.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/youth-radio/">link</a></th>
    </tr>
    <tr>
        <th>680 News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/680-news/">link</a></th>
    </tr>
    <tr>
        <th>38 North</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/38-north/">link</a></th>
    </tr>
    <tr>
        <th>ABS-CBN News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/abs-cbn-news/">link</a></th>
    </tr>
    <tr>
        <th>AFP (Agence France Presse)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/afp-agence-france-presse/">link</a></th>
    </tr>
    <tr>
        <th>Africa News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/africa-news/">link</a></th>
    </tr>
    <tr>
        <th>Agerpres</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/agerpres/">link</a></th>
    </tr>
    <tr>
        <th>Ahram Online</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ahram-online/">link</a></th>
    </tr>
    <tr>
        <th>Air Force Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/air-force-times/">link</a></th>
    </tr>
    <tr>
        <th>Airwars</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/airwars/">link</a></th>
    </tr>
    <tr>
        <th>Al Arabiya</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/al-arabiya/">link</a></th>
    </tr>
    <tr>
        <th>Al Bawaba</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/al-bawaba/">link</a></th>
    </tr>
    <tr>
        <th>Al Majalla</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/al-majalla/">link</a></th>
    </tr>
    <tr>
        <th>Alabama Political Reporter</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/alabama-political-reporter/">link</a></th>
    </tr>
    <tr>
        <th>Alabama Today</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/alabama-today/">link</a></th>
    </tr>
    <tr>
        <th>Albany Democrat Herald</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/albany-democrat-herald/">link</a></th>
    </tr>
    <tr>
        <th>All Generalizations are False (Ad Fontes Media)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/all-generalizations-are-false/">link</a></th>
    </tr>
    <tr>
        <th>AllGov</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/allgov/">link</a></th>
    </tr>
    <tr>
        <th>Alliance for Securing Democracy</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/alliance-securing-democracy/">link</a></th>
    </tr>
    <tr>
        <th>Amarillo Globe-News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/amarillo-globe-news/">link</a></th>
    </tr>
    <tr>
        <th>American Heritage</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-heritage/">link</a></th>
    </tr>
    <tr>
        <th>American Military News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-military-news/">link</a></th>
    </tr>
    <tr>
        <th>American Press Institute (API)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-press-institute-api/">link</a></th>
    </tr>
    <tr>
        <th>Amnesty International</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/amnesty-international/">link</a></th>
    </tr>
    <tr>
        <th>Anthropocene Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservation-magazine/">link</a></th>
    </tr>
    <tr>
        <th>APTN News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/aptn-news/">link</a></th>
    </tr>
    <tr>
        <th>Arizona Capitol Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/arizona-capitol-times/">link</a></th>
    </tr>
    <tr>
        <th>Asian News International (ANI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/asian-news-international-ani/">link</a></th>
    </tr>
    <tr>
        <th>Asia Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/asia-times/">link</a></th>
    </tr>
    <tr>
        <th>Associated Press</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/associated-press/">link</a></th>
    </tr>
    <tr>
        <th>Atlantic Council</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/atlantic-council/">link</a></th>
    </tr>
    <tr>
        <th>The Australian Financial Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-australian-financial-review/">link</a></th>
    </tr>
    <tr>
        <th>Ballotpedia</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ballotpedia/">link</a></th>
    </tr>
    <tr>
        <th>The Bangkok Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-bangkok-post/">link</a></th>
    </tr>
    <tr>
        <th>Battlefords News Optimist</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/battlefords-news-optimist/">link</a></th>
    </tr>
    <tr>
        <th>Bbarta24</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bbarta24/">link</a></th>
    </tr>
    <tr>
        <th>The Belfer Center for Science and International Affairs</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-belfer-center-for-science-and-international-affairs/">link</a></th>
    </tr>
    <tr>
        <th>Belleville News-Democrat</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/belleville-news-democrat/">link</a></th>
    </tr>
    <tr>
        <th>Bellingcat</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bellingcat/">link</a></th>
    </tr>
    <tr>
        <th>Better Government Association</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/better-government-association/">link</a></th>
    </tr>
    <tr>
        <th>BDNews24</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bdnews24/">link</a></th>
    </tr>
    <tr>
        <th>Big News Network</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/big-news-network/">link</a></th>
    </tr>
    <tr>
        <th>Big Think</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/big-think/">link</a></th>
    </tr>
    <tr>
        <th>Biloxi Sun Herald</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/biloxi-sun-herald/">link</a></th>
    </tr>
    <tr>
        <th>Bismarck Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bismarck-tribune/">link</a></th>
    </tr>
    <tr>
        <th>BNO News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bno-news/">link</a></th>
    </tr>
    <tr>
        <th>Bozeman Daily Chronicle</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bozeman-daily-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>Bridge Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bridge-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Brief.News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/brief-news/">link</a></th>
    </tr>
    <tr>
        <th>Bulletin of the Atomic Scientists</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bulletin-of-the-atomic-scientists/">link</a></th>
    </tr>
    <tr>
        <th>Bullshido</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bullshido/">link</a></th>
    </tr>
    <tr>
        <th>Burnett County Sentinel</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/burnett-county-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>Business 2 Community</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/business-2-community/">link</a></th>
    </tr>
    <tr>
        <th>Canadian Public Affairs Channel (CPAC)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/canadian-public-affairs-channel-cpac/">link</a></th>
    </tr>
    <tr>
        <th>Cape Cod Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/cape-cod-times/">link</a></th>
    </tr>
    <tr>
        <th>Capitol Fax</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/capitol-fax/">link</a></th>
    </tr>
    <tr>
        <th>Carnegie Endowment for International Peace</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/carnegie-endowment-for-international-peace/">link</a></th>
    </tr>
    <tr>
        <th>Casper Star-Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/casper-star-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Castanet</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/castanet/">link</a></th>
    </tr>
    <tr>
        <th>Center for Advanced Defense Studies</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-advanced-defense-studies/">link</a></th>
    </tr>
    <tr>
        <th>Center for Democracy and Technology</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/center-democracy-technology/">link</a></th>
    </tr>
    <tr>
        <th>Center for Global Development</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-global-development/">link</a></th>
    </tr>
    <tr>
        <th>Center for Inquiry</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-inquiry/">link</a></th>
    </tr>
    <tr>
        <th>Center for a New American Security</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-a-new-american-security/">link</a></th>
    </tr>
    <tr>
        <th>Center for Public Integrity</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-public-integrity/">link</a></th>
    </tr>
    <tr>
        <th>Center for Responsive Politics (Open Secrets)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-responsive-politics-open-secrets/">link</a></th>
    </tr>
    <tr>
        <th>Center for Strategic and International Studies</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-strategic-and-international-studies/">link</a></th>
    </tr>
    <tr>
        <th>China Daily</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/china-daily/">link</a></th>
    </tr>
    <tr>
        <th>China Global Television Network (CGTN)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/china-global-television-network-cgtn/">link</a></th>
    </tr>
    <tr>
        <th>Chinook Observer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/chinook-observer/">link</a></th>
    </tr>
    <tr>
        <th>Christian Science Monitor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/christian-science-monitor/">link</a></th>
    </tr>
    <tr>
        <th>City and State New York</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/city-and-state-new-york/">link</a></th>
    </tr>
    <tr>
        <th>Committee for Economic Development</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/committee-for-economic-development/">link</a></th>
    </tr>
    <tr>
        <th>Committee for a Responsible Federal Budget</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/committee-for-a-responsible-federal-budget/">link</a></th>
    </tr>
    <tr>
        <th>Committee to Protect Journalists</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/committee-to-protect-journalists/">link</a></th>
    </tr>
    <tr>
        <th>Concord Monitor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/concord-monitor/">link</a></th>
    </tr>
    <tr>
        <th>Conflict News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conflict-news/">link</a></th>
    </tr>
    <tr>
        <th>Congress.gov</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/congress-gov/">link</a></th>
    </tr>
    <tr>
        <th>Congressional Budget Office (CBO)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/congressional-budget-office-cbo/">link</a></th>
    </tr>
    <tr>
        <th>Anthropocene Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservation-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Consortium News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/consortium-news/">link</a></th>
    </tr>
    <tr>
        <th>Constitution Daily</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/constitution-daily/">link</a></th>
    </tr>
    <tr>
        <th>Constitution Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/constitution-project/">link</a></th>
    </tr>
    <tr>
        <th>Consumerist</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/consumerist/">link</a></th>
    </tr>
    <tr>
        <th>Consumer Reports</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/consumer-reports/">link</a></th>
    </tr>
    <tr>
        <th>Cook Political Report</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cook-political-report/">link</a></th>
    </tr>
    <tr>
        <th>Countable</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/countable-news/">link</a></th>
    </tr>
    <tr>
        <th>Courthouse News Service</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/courthouse-news-service/">link</a></th>
    </tr>
    <tr>
        <th>CP24</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/cp24/">link</a></th>
    </tr>
    <tr>
        <th>Crimeola</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/crimeola/">link</a></th>
    </tr>
    <tr>
        <th>C-SPAN</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/c-span/">link</a></th>
    </tr>
    <tr>
        <th>Daily Business Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-business-review/">link</a></th>
    </tr>
    <tr>
        <th>Daily Journal (Illinois)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-journal-illinois/">link</a></th>
    </tr>
    <tr>
        <th>Daily Journal (Missouri)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-journal-missouri/">link</a></th>
    </tr>
    <tr>
        <th>Daily Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-record/">link</a></th>
    </tr>
    <tr>
        <th>Darien Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/darien-times/">link</a></th>
    </tr>
    <tr>
        <th>Dayton Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dayton-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>D.C. Circuit Breaker</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/d-c-circuit-breaker/">link</a></th>
    </tr>
    <tr>
        <th>Defense News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/defense-news/">link</a></th>
    </tr>
    <tr>
        <th>Defense One</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/defense-one/">link</a></th>
    </tr>
    <tr>
        <th>Denton Record-Chronicle</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/denton-record-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>The Des Moines Register</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-des-moines-register/">link</a></th>
    </tr>
    <tr>
        <th>DifferenceBetween.net</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/differencebetween-net/">link</a></th>
    </tr>
    <tr>
        <th>Digital Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/digital-journal/">link</a></th>
    </tr>
    <tr>
        <th>Doctors Without Borders</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/doctors-without-borders/">link</a></th>
    </tr>
    <tr>
        <th>DPA German Press Agency</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dpa-german-press-agency/">link</a></th>
    </tr>
    <tr>
        <th>Eagle Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/eagle-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Earth Institute</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/earth-institute/">link</a></th>
    </tr>
    <tr>
        <th>EJ Insight (EJI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ej-insight-eji/">link</a></th>
    </tr>
    <tr>
        <th>Elko Daily Free Press</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/elko-daily-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Erie Times-News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/erie-times-news/">link</a></th>
    </tr>
    <tr>
        <th>ERR News (Estonia Public Broadcasting)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/err-news-estonia-public-broadcasting/">link</a></th>
    </tr>
    <tr>
        <th>Eurasia Group</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/eurasia-group/">link</a></th>
    </tr>
    <tr>
        <th>Eurasia Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/eurasia-review/">link</a></th>
    </tr>
    <tr>
        <th>Euronews</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/euronews/">link</a></th>
    </tr>
    <tr>
        <th>Every CRS Report</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/every-crs-report/">link</a></th>
    </tr>
    <tr>
        <th>FactCheck</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/factcheck/">link</a></th>
    </tr>
    <tr>
        <th>FactsCan</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/factscan/">link</a></th>
    </tr>
    <tr>
        <th>Factwire News Agency</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/factwire-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Fair Observer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fair-observer/">link</a></th>
    </tr>
    <tr>
        <th>Federal News Radio</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/federal-news-radio/">link</a></th>
    </tr>
    <tr>
        <th>Federal Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/federal-times/">link</a></th>
    </tr>
    <tr>
        <th>Financial Express</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/financial-express/">link</a></th>
    </tr>
    <tr>
        <th>Financial Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/financial-times/">link</a></th>
    </tr>
    <tr>
        <th>First Draft News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/first-draft-news/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Affairs</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png">leastbiased101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/foreign-affairs/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Policy</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/foreign-policy/">link</a></th>
    </tr>
    <tr>
        <th>Full Fact (UK)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/full-fact-uk/">link</a></th>
    </tr>
    <tr>
        <th>Gallup</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gallup/">link</a></th>
    </tr>
    <tr>
        <th>Gears of Biz</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gears-of-biz/">link</a></th>
    </tr>
    <tr>
        <th>GBTimes</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gbtimes/">link</a></th>
    </tr>
    <tr>
        <th>Government Executive</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/government-executive/">link</a></th>
    </tr>
    <tr>
        <th>GovTrack</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/govtrack/">link</a></th>
    </tr>
    <tr>
        <th>Global Integrity</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/global-integrity/">link</a></th>
    </tr>
    <tr>
        <th>Global Slavery Index</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/global-slavery-index/">link</a></th>
    </tr>
    <tr>
        <th>Globe Gazette (Iowa)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/globe-gazette-iowa/">link</a></th>
    </tr>
    <tr>
        <th>GoodNewsNetwork</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/goodnewsnetwork/">link</a></th>
    </tr>
    <tr>
        <th>Great Falls Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/great-falls-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Green Bay Press-Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/green-bay-press-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Greenville News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/greenville-news/">link</a></th>
    </tr>
    <tr>
        <th>Harvard Business Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/harvard-business-review/">link</a></th>
    </tr>
    <tr>
        <th>Harvard Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/harvard-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Harvard Political Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/harvard-political-review/">link</a></th>
    </tr>
    <tr>
        <th>Hastings Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hastings-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Healthcare Finance News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/healthcare-finance-news/">link</a></th>
    </tr>
    <tr>
        <th>Herald & Review (Illinois)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/herald-review-illinois/">link</a></th>
    </tr>
    <tr>
        <th>Hoax Slayer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hoax-slayer/">link</a></th>
    </tr>
    <tr>
        <th>Homeland Security News Wire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/homeland-security-news-wire/">link</a></th>
    </tr>
    <tr>
        <th>I24 News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/i24-news/">link</a></th>
    </tr>
    <tr>
        <th>ICitizen</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/icitizen/">link</a></th>
    </tr>
    <tr>
        <th>Idaho Statesman</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/idaho-statesman/">link</a></th>
    </tr>
    <tr>
        <th>iMediaEthics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/imediaethics/">link</a></th>
    </tr>
    <tr>
        <th>Independent Record (Montana)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/independent-record-montana/">link</a></th>
    </tr>
    <tr>
        <th>Independent Voter Network (IVN)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/independent-voter-network-ivn/">link</a></th>
    </tr>
    <tr>
        <th>India Today</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/india-today/">link</a></th>
    </tr>
    <tr>
        <th>Inland Valley Daily Bulletin</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/inland-valley-daily-bulletin/">link</a></th>
    </tr>
    <tr>
        <th>Institute for Women’s Policy Research (IWPR)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/institute-for-womens-policy-research-iwpr/">link</a></th>
    </tr>
    <tr>
        <th>Investigative Reporters and Editors</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/investigative-reporters-and-editors/">link</a></th>
    </tr>
    <tr>
        <th>International Consortium of Investigative Journalists</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-consortium-of-investigative-journalists/">link</a></th>
    </tr>
    <tr>
        <th>International Energy Agency (IEA)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-energy-agency-iea/">link</a></th>
    </tr>
    <tr>
        <th>International Organization</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-organization/">link</a></th>
    </tr>
    <tr>
        <th>International Press Institute</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-press-institute/">link</a></th>
    </tr>
    <tr>
        <th>International Rescue Committee (IRC)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/international-rescue-committee-irc/">link</a></th>
    </tr>
    <tr>
        <th>Investopedia</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/investopedia/">link</a></th>
    </tr>
    <tr>
        <th>Jackson Sun</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jackson-sun/">link</a></th>
    </tr>
    <tr>
        <th>IHS Janes 360</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ihs-janes-360/">link</a></th>
    </tr>
    <tr>
        <th>Japan Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/japan-times/">link</a></th>
    </tr>
    <tr>
        <th>Jewish Telegraphic Agency (JTA)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jewish-telegraphic-agency-jta/">link</a></th>
    </tr>
    <tr>
        <th>Journal Standard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/journal-standard/">link</a></th>
    </tr>
    <tr>
        <th>JStor Daily</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jstore-daily/">link</a></th>
    </tr>
    <tr>
        <th>Just Security</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/just-security/">link</a></th>
    </tr>
    <tr>
        <th>Justice Denied</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/justice-denied/">link</a></th>
    </tr>
    <tr>
        <th>Kaiser Family Foundation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/kaiser-family-foundation/">link</a></th>
    </tr>
    <tr>
        <th>Knowhere</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/knowhere/">link</a></th>
    </tr>
    <tr>
        <th>Know Your Meme</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/know-your-meme/">link</a></th>
    </tr>
    <tr>
        <th>Lead Stories</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lead-stories/">link</a></th>
    </tr>
    <tr>
        <th>Le Devoir</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/le-devoir/">link</a></th>
    </tr>
    <tr>
        <th>Lima Charlie News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lima-charlie-news/">link</a></th>
    </tr>
    <tr>
        <th>Lincoln Journal Star</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lincoln-journal-star/">link</a></th>
    </tr>
    <tr>
        <th>ListVerse</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/listverse/">link</a></th>
    </tr>
    <tr>
        <th>Lompoc Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lompoc-record/">link</a></th>
    </tr>
    <tr>
        <th>Longview News-Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/longview-news-journal/">link</a></th>
    </tr>
    <tr>
        <th>MakeUseOf</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/makeuseof/">link</a></th>
    </tr>
    <tr>
        <th>Malaysia Today</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/malaysia-today/">link</a></th>
    </tr>
    <tr>
        <th>Maplight</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/maplight/">link</a></th>
    </tr>
    <tr>
        <th>McClatchyDC</th>
        <th>HIGH</th>
        <th>Left Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leftcenter07.png">leftcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mcclatchydc/">link</a></th>
    </tr>
    <tr>
        <th>MediaShift</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mediashift/">link</a></th>
    </tr>
    <tr>
        <th>Memeorandum</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/memeorandum/">link</a></th>
    </tr>
    <tr>
        <th>Mental Floss</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mental-floss/">link</a></th>
    </tr>
    <tr>
        <th>MercoPress</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mercopress/">link</a></th>
    </tr>
    <tr>
        <th>Merion West</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png">leastbiased101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/merion-west/">link</a></th>
    </tr>
    <tr>
        <th>Metabunk</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/metabunk/">link</a></th>
    </tr>
    <tr>
        <th>MetroWest Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/metrowest-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Military.com</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/military-com/">link</a></th>
    </tr>
    <tr>
        <th>Missoulian</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/missoulian/">link</a></th>
    </tr>
    <tr>
        <th>MLive (Michigan – Booth Newspapers)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mlive-michigan-booth-newspapers/">link</a></th>
    </tr>
    <tr>
        <th>Montana Standard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/montana-standard/">link</a></th>
    </tr>
    <tr>
        <th>Napa Valley Register</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/napa-valley-register/">link</a></th>
    </tr>
    <tr>
        <th>National Bureau of Economic Research (NBER)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-bureau-of-economic-research-nber/">link</a></th>
    </tr>
    <tr>
        <th>National Institute on Money in State Politics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-institute-money-state-politics/">link</a></th>
    </tr>
    <tr>
        <th>National Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-journal/">link</a></th>
    </tr>
    <tr>
        <th>NationMaster</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/nationmaster/">link</a></th>
    </tr>
    <tr>
        <th>New America</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/new-america/">link</a></th>
    </tr>
    <tr>
        <th>New Bern Sun Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-bern-sun-journal/">link</a></th>
    </tr>
    <tr>
        <th>News24 (South Africa)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news24-south-africa/">link</a></th>
    </tr>
    <tr>
        <th>Newsela</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsela/">link</a></th>
    </tr>
    <tr>
        <th>Newsguard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newsguard/">link</a></th>
    </tr>
    <tr>
        <th>News Lookup</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-lookup/">link</a></th>
    </tr>
    <tr>
        <th>NewsNow (UK)</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsnow-uk/">link</a></th>
    </tr>
    <tr>
        <th>NewzJunky.com</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newzjunky-com/">link</a></th>
    </tr>
    <tr>
        <th>New Zealand Herald</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/new-zealand-herald/">link</a></th>
    </tr>
    <tr>
        <th>Next Avenue</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/next-avenue/">link</a></th>
    </tr>
    <tr>
        <th>NextGov</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nextgov/">link</a></th>
    </tr>
    <tr>
        <th>NHK World</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/nhk-world/">link</a></th>
    </tr>
    <tr>
        <th>Niskanen Center</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/niskanen-center/">link</a></th>
    </tr>
    <tr>
        <th>NK News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/nk-news/">link</a></th>
    </tr>
    <tr>
        <th>Noozhawk</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/noozhawk/">link</a></th>
    </tr>
    <tr>
        <th>Norfolk Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/norfolk-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>North Korea Times</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/north-korea-times/">link</a></th>
    </tr>
    <tr>
        <th>Northwest Indiana Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/northwest-indiana-times/">link</a></th>
    </tr>
    <tr>
        <th>Novinite</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/novinite/">link</a></th>
    </tr>
    <tr>
        <th>No Labels</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/no-labels/">link</a></th>
    </tr>
    <tr>
        <th>OneEighty</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/oneeighty/">link</a></th>
    </tr>
    <tr>
        <th>Open the Government</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/open-the-government/">link</a></th>
    </tr>
    <tr>
        <th>Oyez Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/oyez-project/">link</a></th>
    </tr>
    <tr>
        <th>Pacific Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pacific-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Patch</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patch/">link</a></th>
    </tr>
    <tr>
        <th>Patheos</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/patheos/">link</a></th>
    </tr>
    <tr>
        <th>Pensacola News Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pensacola-news-journal/">link</a></th>
    </tr>
    <tr>
        <th>Peterson Foundation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/peterson-foundation/">link</a></th>
    </tr>
    <tr>
        <th>Peterson Institute for International Economics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/peterson-institute-for-international-economics/">link</a></th>
    </tr>
    <tr>
        <th>Pew Research</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pew-research/">link</a></th>
    </tr>
    <tr>
        <th>Places Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/places-journal/">link</a></th>
    </tr>
    <tr>
        <th>Pocono Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pocono-record/">link</a></th>
    </tr>
    <tr>
        <th>Political Storm</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png">leastbiased101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/political-storm/">link</a></th>
    </tr>
    <tr>
        <th>Political Wire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/political-wire/">link</a></th>
    </tr>
    <tr>
        <th>Politico</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/politico/">link</a></th>
    </tr>
    <tr>
        <th>Politifact</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/politifact/">link</a></th>
    </tr>
    <tr>
        <th>Polygraph.info</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/polygraph-info/">link</a></th>
    </tr>
    <tr>
        <th>Poynter Institute</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/poynter-institute/">link</a></th>
    </tr>
    <tr>
        <th>PR Newswire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pr-newswire/">link</a></th>
    </tr>
    <tr>
        <th>ProCon.org</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/procon-org/">link</a></th>
    </tr>
    <tr>
        <th>Project on Government Oversight</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/project-on-government-oversight/">link</a></th>
    </tr>
    <tr>
        <th>Project Syndicate</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/project-syndicate/">link</a></th>
    </tr>
    <tr>
        <th>Public Policy Polling (PPP)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/public-policy-polling-ppp/">link</a></th>
    </tr>
    <tr>
        <th>Public Religion Research Institute (PRRI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/public-religion-research-institute-prri/">link</a></th>
    </tr>
    <tr>
        <th>Parallax News (PXW)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/parallax-news-pxw/">link</a></th>
    </tr>
    <tr>
        <th>Quad City Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/quad-city-times/">link</a></th>
    </tr>
    <tr>
        <th>Radio Free Europe / Radio Liberty</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/radio-free-europe-radio-liberty/">link</a></th>
    </tr>
    <tr>
        <th>Rand Corporation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rand-corporation/">link</a></th>
    </tr>
    <tr>
        <th>Rapid City Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rapid-city-journal/">link</a></th>
    </tr>
    <tr>
        <th>Recode</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/recode/">link</a></th>
    </tr>
    <tr>
        <th>Relevant Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/relevant-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Reporters Lab</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/reporters-lab/">link</a></th>
    </tr>
    <tr>
        <th>Reporters Without Borders</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/reporters-without-borders/">link</a></th>
    </tr>
    <tr>
        <th>Represent.Us</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/represent-us/">link</a></th>
    </tr>
    <tr>
        <th>Reuters</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/reuters/">link</a></th>
    </tr>
    <tr>
        <th>RiverBender.com</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/riverbender-com/">link</a></th>
    </tr>
    <tr>
        <th>Roll Call</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/roll-call/">link</a></th>
    </tr>
    <tr>
        <th>RTE (Radio Television of Ireland)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rte-radio-television-ireland/">link</a></th>
    </tr>
    <tr>
        <th>Russian Media Monitor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/russian-media-monitor/">link</a></th>
    </tr>
    <tr>
        <th>San Diego Union Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/san-diego-union-tribune/">link</a></th>
    </tr>
    <tr>
        <th>San Marcos Daily Record</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/san-marcos-daily-record/">link</a></th>
    </tr>
    <tr>
        <th>Santa Maria Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/santa-maria-times/">link</a></th>
    </tr>
    <tr>
        <th>Sarasota Herald-Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sarasota-herald-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Sayfie Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sayfie-review/">link</a></th>
    </tr>
    <tr>
        <th>Science Debate</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/science-debate/">link</a></th>
    </tr>
    <tr>
        <th>Scoopnest</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/scoopnest/">link</a></th>
    </tr>
    <tr>
        <th>SCOTUSblog</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/scotusblog/">link</a></th>
    </tr>
    <tr>
        <th>Shareably</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/shareably/">link</a></th>
    </tr>
    <tr>
        <th>Shorenstein Center</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/shorenstein-center/">link</a></th>
    </tr>
    <tr>
        <th>Simple Politics</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/simple-politics/">link</a></th>
    </tr>
    <tr>
        <th>Sioux City Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sioux-city-journal/">link</a></th>
    </tr>
    <tr>
        <th>Sky News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sky-news/">link</a></th>
    </tr>
    <tr>
        <th>SmartNews</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/smartnews/">link</a></th>
    </tr>
    <tr>
        <th>Snopes</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/snopes/">link</a></th>
    </tr>
    <tr>
        <th>South Bend Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/south-bend-tribune/">link</a></th>
    </tr>
    <tr>
        <th>South China Morning Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/south-china-morning-post/">link</a></th>
    </tr>
    <tr>
        <th>Spectrum News – NY1</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/spectrum-news-ny1/">link</a></th>
    </tr>
    <tr>
        <th>Spectrum Report</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/spectrum-report/">link</a></th>
    </tr>
    <tr>
        <th>St. Cloud Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/st-cloud-times/">link</a></th>
    </tr>
    <tr>
        <th>Stars and Stripes</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/stars-and-stripes/">link</a></th>
    </tr>
    <tr>
        <th>Stat (News)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/stat-news/">link</a></th>
    </tr>
    <tr>
        <th>Statesville Record & Landmark</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/statesville-record-landmark/">link</a></th>
    </tr>
    <tr>
        <th>Stimson Center</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/stimson-center/">link</a></th>
    </tr>
    <tr>
        <th>Stock News USA</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/stock-news-usa/">link</a></th>
    </tr>
    <tr>
        <th>StrategyPage</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/strategypage/">link</a></th>
    </tr>
    <tr>
        <th>Stratfor</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/stratfor/">link</a></th>
    </tr>
    <tr>
        <th>Sunlight Foundation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sunlight-foundation/">link</a></th>
    </tr>
    <tr>
        <th>Taipei Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/taipei-times/">link</a></th>
    </tr>
    <tr>
        <th>Taiwan News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/taiwan-news/">link</a></th>
    </tr>
    <tr>
        <th>Task and Purpose</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/task-and-purpose/">link</a></th>
    </tr>
    <tr>
        <th>Telegram & Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/telegram-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Texas Standard</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/texas-standard/">link</a></th>
    </tr>
    <tr>
        <th>Texas Tribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/texas-tribune/">link</a></th>
    </tr>
    <tr>
        <th>That’s Nonsense</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/thats-nonsense/">link</a></th>
    </tr>
    <tr>
        <th>The Auburn Citizen</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-auburn-citizen/">link</a></th>
    </tr>
    <tr>
        <th>The Balance</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-balance/">link</a></th>
    </tr>
    <tr>
        <th>The Baxter Bulletin</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-baxter-bulletin/">link</a></th>
    </tr>
    <tr>
        <th>The Bureau of Investigative Journalism</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-bureau-of-investigative-journalism/">link</a></th>
    </tr>
    <tr>
        <th>The Canadian Press</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-canadian-press/">link</a></th>
    </tr>
    <tr>
        <th>The China Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-china-post/">link</a></th>
    </tr>
    <tr>
        <th>The Chronicle of Higher Education</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-chronicle-of-higher-education/">link</a></th>
    </tr>
    <tr>
        <th>The Cipher Brief</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-cipher-brief/">link</a></th>
    </tr>
    <tr>
        <th>The Conversation</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-conversation/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Centrist</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png">leastbiased101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-centrist/">link</a></th>
    </tr>
    <tr>
        <th>The Day (New London)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/day-new-london/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Gazette</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-gazette/">link</a></th>
    </tr>
    <tr>
        <th>The Daily News (Longview)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-news-longview/">link</a></th>
    </tr>
    <tr>
        <th>The Daily News (Longview)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-news-longview/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Northwestern</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-northwestern/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Progress</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-progress/">link</a></th>
    </tr>
    <tr>
        <th>The Defcon Warning System</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/defcon-warning-system/">link</a></th>
    </tr>
    <tr>
        <th>The Diplomat Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-diplomat-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Economist</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-economist/">link</a></th>
    </tr>
    <tr>
        <th>The Fake News Codex</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-fake-news-codex/">link</a></th>
    </tr>
    <tr>
        <th>The Herald-Dispatch</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-herald-dispatch/">link</a></th>
    </tr>
    <tr>
        <th>The Herald Journal (Utah)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-herald-journal-utah/">link</a></th>
    </tr>
    <tr>
        <th>The Herald-Sun (Durham, North Carolina)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-herald-sun-durham-north-carolina/">link</a></th>
    </tr>
    <tr>
        <th>The Humanist Magazine</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-humanist-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Indian Express</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-indian-express/">link</a></th>
    </tr>
    <tr>
        <th>The Jakarta Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-jakarta-post/">link</a></th>
    </tr>
    <tr>
        <th>The Jerusalem Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-jerusalem-post/">link</a></th>
    </tr>
    <tr>
        <th>The Jordan Times</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-jordan-times/">link</a></th>
    </tr>
    <tr>
        <th>Journal Gazette & Times-Courier</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/journal-gazette-times-courier/">link</a></th>
    </tr>
    <tr>
        <th>TheJournal.ie</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/thejournal-ie/">link</a></th>
    </tr>
    <tr>
        <th>The Knife</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-knife/">link</a></th>
    </tr>
    <tr>
        <th>The Marshall Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-marshall-project/">link</a></th>
    </tr>
    <tr>
        <th>The Meme Policeman</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-meme-policeman/">link</a></th>
    </tr>
    <tr>
        <th>The Middle East in London</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-middle-east-in-london/">link</a></th>
    </tr>
    <tr>
        <th>The Moderated Media</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-moderated-media/">link</a></th>
    </tr>
    <tr>
        <th>The Modesto Bee</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-modesto-bee/">link</a></th>
    </tr>
    <tr>
        <th>The Morning Call</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-morning-call/">link</a></th>
    </tr>
    <tr>
        <th>The Nevada Independent</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-nevada-independent/">link</a></th>
    </tr>
    <tr>
        <th>The News (Mexico City)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-news-mexico-city/">link</a></th>
    </tr>
    <tr>
        <th>The News International</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-news-international/">link</a></th>
    </tr>
    <tr>
        <th>The News Literacy Project</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-literacy-project/">link</a></th>
    </tr>
    <tr>
        <th>The Observatory</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-observatory/">link</a></th>
    </tr>
    <tr>
        <th>The Outlook (Monmouth University)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-outlook-monmouth-university/">link</a></th>
    </tr>
    <tr>
        <th>The Pantagraph</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-pantagraph/">link</a></th>
    </tr>
    <tr>
        <th>The Phnom Penh Post</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-phnom-penh-post/">link</a></th>
    </tr>
    <tr>
        <th>The Post and Courier</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-post-and-courier/">link</a></th>
    </tr>
    <tr>
        <th>The Post-Standard (Syracuse)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-post-standard-syracuse/">link</a></th>
    </tr>
    <tr>
        <th>The Post Star</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-post-star/">link</a></th>
    </tr>
    <tr>
        <th>The Scotsman</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-scotsman/">link</a></th>
    </tr>
    <tr>
        <th>The Sentinel (Pennsylvania)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-sentinel-pennsylvania/">link</a></th>
    </tr>
    <tr>
        <th>The Skimm</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-skimm/">link</a></th>
    </tr>
    <tr>
        <th>The Sociable</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-sociable/">link</a></th>
    </tr>
    <tr>
        <th>The Southern Illinoisan</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-southern-illinoisan/">link</a></th>
    </tr>
    <tr>
        <th>The Star Democrat</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-star-democrat/">link</a></th>
    </tr>
    <tr>
        <th>The Strategy Bridge</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased081.png">leastbiased081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-strategy-bridge/">link</a></th>
    </tr>
    <tr>
        <th>The Swedish Wire</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-swedish-wire/">link</a></th>
    </tr>
    <tr>
        <th>The Times (Illinois)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased061.png">leastbiased061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-times-illinois/">link</a></th>
    </tr>
    <tr>
        <th>Times of India</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/times-of-india/">link</a></th>
    </tr>
    <tr>
        <th>The TruthSetter</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-truthsetter/">link</a></th>
    </tr>
    <tr>
        <th>The Whim</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-whim/">link</a></th>
    </tr>
    <tr>
        <th>TheWrap</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/thewrap/">link</a></th>
    </tr>
    <tr>
        <th>Third Way</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/third-way/">link</a></th>
    </tr>
    <tr>
        <th>ThoughtCo</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/thoughtco/">link</a></th>
    </tr>
    <tr>
        <th>Times-News (Idaho)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/times-news-idaho/">link</a></th>
    </tr>
    <tr>
        <th>Times of San Diego</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/times-san-diego/">link</a></th>
    </tr>
    <tr>
        <th>Today I Found Out</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/today-i-found-out/">link</a></th>
    </tr>
    <tr>
        <th>Transparency International</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/transparency-international/">link</a></th>
    </tr>
    <tr>
        <th>Transpartisan Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/transpartisan-review/">link</a></th>
    </tr>
    <tr>
        <th>Traverse City Record-Eagle</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/traverse-city-record-eagle/">link</a></th>
    </tr>
    <tr>
        <th>Tribune News Service</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tribune-news-service/">link</a></th>
    </tr>
    <tr>
        <th>Truth Be Told</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/truth-be-told/">link</a></th>
    </tr>
    <tr>
        <th>TruthOrFiction.com</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/truthorfiction-com/">link</a></th>
    </tr>
    <tr>
        <th>Turkey and Facts (Dogruluk Payi)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/turkey-and-facts-dogruluk-payi/">link</a></th>
    </tr>
    <tr>
        <th>TVW Washington State</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tvw-washington-state/">link</a></th>
    </tr>
    <tr>
        <th>Undark</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/undark/">link</a></th>
    </tr>
    <tr>
        <th>United Press International (UPI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/united-press-international-upi/">link</a></th>
    </tr>
    <tr>
        <th>United States House of Representatives (House.gov)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/united-states-house-representatives-house-gov/">link</a></th>
    </tr>
    <tr>
        <th>US Government Accountability Office (GAO)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/us-government-accountability-office-gao/">link</a></th>
    </tr>
    <tr>
        <th>USA Facts</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-facts/">link</a></th>
    </tr>
    <tr>
        <th>USA Spending</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-spending/">link</a></th>
    </tr>
    <tr>
        <th>Utah Standard-Examiner</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/utah-standard-examiner/">link</a></th>
    </tr>
    <tr>
        <th>Vera Files</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/vera-files/">link</a></th>
    </tr>
    <tr>
        <th>Viral Thread</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/viral-thread/">link</a></th>
    </tr>
    <tr>
        <th>Vocativ</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vocativ/">link</a></th>
    </tr>
    <tr>
        <th>Voice of America</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/voice-of-america/">link</a></th>
    </tr>
    <tr>
        <th>Voice of San Diego</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/voice-of-san-diego/">link</a></th>
    </tr>
    <tr>
        <th>Vos Iz Neias</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/vos-iz-neias/">link</a></th>
    </tr>
    <tr>
        <th>Vote Smart</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/votesmart/">link</a></th>
    </tr>
    <tr>
        <th>War on the Rocks</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/war-on-the-rocks/">link</a></th>
    </tr>
    <tr>
        <th>Washington Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-journal/">link</a></th>
    </tr>
    <tr>
        <th>Washington’s Top News (WTOP)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washingtons-top-news-wtop/">link</a></th>
    </tr>
    <tr>
        <th>The Waterloo-Cedar Falls Courier</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-waterloo-cedar-falls-courier/">link</a></th>
    </tr>
    <tr>
        <th>We Are The Mighty</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased091.png">leastbiased091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/we-are-the-mighty/">link</a></th>
    </tr>
    <tr>
        <th>WikiNews</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wikinews/">link</a></th>
    </tr>
    <tr>
        <th>Wikipedia</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased051.png">leastbiased051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wikipedia/">link</a></th>
    </tr>
    <tr>
        <th>WikiTribune</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wikitribune/">link</a></th>
    </tr>
    <tr>
        <th>Winona Daily News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/winona-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Winston-Salem Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/winston-salem-journal/">link</a></th>
    </tr>
    <tr>
        <th>WION (World is One News)</th>
        <th>MIXED</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wion-world-one-news/">link</a></th>
    </tr>
    <tr>
        <th>Wisconsin State Journal</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/wisconsin-state-journal/">link</a></th>
    </tr>
    <tr>
        <th>Woodrow Wilson International Center for Scholars</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/woodrow-wilson-international-center-for-scholars/">link</a></th>
    </tr>
    <tr>
        <th>World Economic Forum</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/world-economic-forum/">link</a></th>
    </tr>
    <tr>
        <th>World News</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased071.png">leastbiased071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-news/">link</a></th>
    </tr>
    <tr>
        <th>World Politics Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased101.png">leastbiased101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-politics-review/">link</a></th>
    </tr>
    <tr>
        <th>World Press Review</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased041.png">leastbiased041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-press-review/">link</a></th>
    </tr>
    <tr>
        <th>World Resources Institute (WRI)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/world-resources-institute-wri/">link</a></th>
    </tr>
    <tr>
        <th>WRAL</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased031.png">leastbiased031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wral/">link</a></th>
    </tr>
    <tr>
        <th>ZDF (Zweites Deutsches Fernsehen)</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased011.png">leastbiased011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/zdf-zweites-deutsches-fernsehen/">link</a></th>
    </tr>
    <tr>
        <th>9 News (Australia)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/9-news-australia/">link</a></th>
    </tr>
    <tr>
        <th>71 Republic</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/71-republic/">link</a></th>
    </tr>
    <tr>
        <th>AL.com (Alabama News)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/al-com-alabama-news/">link</a></th>
    </tr>
    <tr>
        <th>Albuquerque Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/albuquerque-journal/">link</a></th>
    </tr>
    <tr>
        <th>American Action Forum</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter04.png">rightcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-action-forum/">link</a></th>
    </tr>
    <tr>
        <th>American Affairs Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-affairs-journal/">link</a></th>
    </tr>
    <tr>
        <th>American Council on Science and Health</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png">rightcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-council-on-science-and-health/">link</a></th>
    </tr>
    <tr>
        <th>American Firearms Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-firearms-institute/">link</a></th>
    </tr>
    <tr>
        <th>American Foreign Policy Council (AFPC)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-foreign-policy-council/">link</a></th>
    </tr>
    <tr>
        <th>American Institute for Economic Research</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-institute-for-economic-research/">link</a></th>
    </tr>
    <tr>
        <th>Americas Quarterly</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/americas-quarterly/">link</a></th>
    </tr>
    <tr>
        <th>Angus Reid Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/angus-reid-institute/">link</a></th>
    </tr>
    <tr>
        <th>Anti-War</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png">rightcenter021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/anti-war/">link</a></th>
    </tr>
    <tr>
        <th>Arab News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/arab-news/">link</a></th>
    </tr>
    <tr>
        <th>Arizona Republic</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/arizona-republic/">link</a></th>
    </tr>
    <tr>
        <th>Arkansas Democrat-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/arkansas-democrat-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Armstrong Economics</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/armstrong-economics/">link</a></th>
    </tr>
    <tr>
        <th>Arutz Sheva (Israel National News)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/arutz-sheva-israel-national-news/">link</a></th>
    </tr>
    <tr>
        <th>Asharq Al-Awsat</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png">rightcenter021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/asharq-al-awsat-2/">link</a></th>
    </tr>
    <tr>
        <th>Billings Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/billings-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Bipartisan Policy Center</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bipartisan-policy-center/">link</a></th>
    </tr>
    <tr>
        <th>Boston Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png">rightcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/boston-herald/">link</a></th>
    </tr>
    <tr>
        <th>Breaking Defense</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/breaking-defense/">link</a></th>
    </tr>
    <tr>
        <th>Breakthrough Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/breakthrough-institute/">link</a></th>
    </tr>
    <tr>
        <th>BusinessLIVE</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/businesslive/">link</a></th>
    </tr>
    <tr>
        <th>Calgary Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/calgary-sun/">link</a></th>
    </tr>
    <tr>
        <th>California Globe</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/california-globe/">link</a></th>
    </tr>
    <tr>
        <th>California Political Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png">rightcenter041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/california-political-review/">link</a></th>
    </tr>
    <tr>
        <th>Campaign for Liberty</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/campaign-for-liberty/">link</a></th>
    </tr>
    <tr>
        <th>Canadian Jewish News (CJN)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/canadian-jewish-news-cjn/">link</a></th>
    </tr>
    <tr>
        <th>Canadian Taxpayers Federation</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/canadian-taxpayers-federation/">link</a></th>
    </tr>
    <tr>
        <th>Cato Institute</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png">rightcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cato-institute/">link</a></th>
    </tr>
    <tr>
        <th>Center for a Stateless Society</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter03.png">rightcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-a-stateless-society/">link</a></th>
    </tr>
    <tr>
        <th>Center for the National Interest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/center-for-the-national-interest/">link</a></th>
    </tr>
    <tr>
        <th>Check Your Fact</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/check-your-fact/">link</a></th>
    </tr>
    <tr>
        <th>Chicago Tribune</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/chicago-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Christianity Today</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/christianity-today/">link</a></th>
    </tr>
    <tr>
        <th>Cincinnati Enquirer</th>
        <th>HIGH</th>
        <th>Least Biased</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/leastbiased021.png">leastbiased021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cincinnati-enquirer/">link</a></th>
    </tr>
    <tr>
        <th>Circa News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/circa-news/">link</a></th>
    </tr>
    <tr>
        <th>Colorado Springs Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/colorado-springs-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Columbia Daily Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/columbia-daily-herald/">link</a></th>
    </tr>
    <tr>
        <th>Columbus Dispatch</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/columbus-dispatch/">link</a></th>
    </tr>
    <tr>
        <th>Competitive Enterprise Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png">rightcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/competitive-enterprise-institute/">link</a></th>
    </tr>
    <tr>
        <th>Council on Foreign Relations</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png">rightcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/council-on-foreign-relations/">link</a></th>
    </tr>
    <tr>
        <th>Daily Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-herald/">link</a></th>
    </tr>
    <tr>
        <th>Daily Press</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-press/">link</a></th>
    </tr>
    <tr>
        <th>Dallas Morning News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dallas-morning-news/">link</a></th>
    </tr>
    <tr>
        <th>Deccan Chronicle</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png">rightcenter041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deccan-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>Deseret News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter03.png">rightcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/deseret-news/">link</a></th>
    </tr>
    <tr>
        <th>Desert Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter12.png">rightcenter12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/desert-sun/">link</a></th>
    </tr>
    <tr>
        <th>Detroit News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/detroit-news/">link</a></th>
    </tr>
    <tr>
        <th>de Volkskrant</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/de-volkskrant/">link</a></th>
    </tr>
    <tr>
        <th>Downsizing the Federal Government</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/downsizing-the-federal-government/">link</a></th>
    </tr>
    <tr>
        <th>Duluth News Tribune</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/duluth-news-tribune/">link</a></th>
    </tr>
    <tr>
        <th>The EC Journal</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-ec-journal/">link</a></th>
    </tr>
    <tr>
        <th>Edmonton Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter03.png">rightcenter03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/edmonton-sun/">link</a></th>
    </tr>
    <tr>
        <th>The Elkhart Truth</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-elkhart-truth/">link</a></th>
    </tr>
    <tr>
        <th>Ethics and Public Policy Center (EPPC)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ethics-public-policy-center-eppc/">link</a></th>
    </tr>
    <tr>
        <th>Faith Family America</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/faith-family-america/">link</a></th>
    </tr>
    <tr>
        <th>Financial Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/financial-post/">link</a></th>
    </tr>
    <tr>
        <th>FitsNews</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fitsnews/">link</a></th>
    </tr>
    <tr>
        <th>Florida Times-Union</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/florida-times-union/">link</a></th>
    </tr>
    <tr>
        <th>Forbes</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png">rightcenter041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/forbes/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Policy Initiative</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/foreign-policy-initiative/">link</a></th>
    </tr>
    <tr>
        <th>Foreign Policy Research Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/foreign-policy-research-institute/">link</a></th>
    </tr>
    <tr>
        <th>Fortnightly Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fortnightly-review/">link</a></th>
    </tr>
    <tr>
        <th>Fortune Magazine</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fortune-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Fort Bend Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fort-bend-herald/">link</a></th>
    </tr>
    <tr>
        <th>Fort Worth Star-Telegram</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/star-telegram/">link</a></th>
    </tr>
    <tr>
        <th>Foundation for Economic Education</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/foundation-for-economic-education/">link</a></th>
    </tr>
    <tr>
        <th>Franklin Center for Government and Public Integrity</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/franklin-center-for-government-and-public-integrity/">link</a></th>
    </tr>
    <tr>
        <th>Fraser Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fraser-institute/">link</a></th>
    </tr>
    <tr>
        <th>Freedom House</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freedom-house/">link</a></th>
    </tr>
    <tr>
        <th>Grand Rapids Press</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/grand-rapids-press/">link</a></th>
    </tr>
    <tr>
        <th>Group of Thirty</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/group-of-thirty/">link</a></th>
    </tr>
    <tr>
        <th>Gulf News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gulf-news/">link</a></th>
    </tr>
    <tr>
        <th>Guns.com</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/guns-com/">link</a></th>
    </tr>
    <tr>
        <th>Herald-Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/herald-sun/">link</a></th>
    </tr>
    <tr>
        <th>Heterodox Academy</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/heterodox-academy/">link</a></th>
    </tr>
    <tr>
        <th>High Point Enterprise</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/high-point-enterprise/">link</a></th>
    </tr>
    <tr>
        <th>The Hindu Business Line</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-hindu-business-line/">link</a></th>
    </tr>
    <tr>
        <th>Honest Reporting</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/honest-reporting/">link</a></th>
    </tr>
    <tr>
        <th>Hoover Institution</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hoover-institution/">link</a></th>
    </tr>
    <tr>
        <th>Human Progress</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter02.png">rightcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/human-progress/">link</a></th>
    </tr>
    <tr>
        <th>In Homeland Security</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/in-homeland-security/">link</a></th>
    </tr>
    <tr>
        <th>InsideSources</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/insidesources/">link</a></th>
    </tr>
    <tr>
        <th>Institute for Humane Studies</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/institute-for-humane-studies/">link</a></th>
    </tr>
    <tr>
        <th>Irish Independent</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/irish-independent/">link</a></th>
    </tr>
    <tr>
        <th>Israel Hayom</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/israel-hayom/">link</a></th>
    </tr>
    <tr>
        <th>ITV News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/itv-news/">link</a></th>
    </tr>
    <tr>
        <th>Japan Today</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/japan-today/">link</a></th>
    </tr>
    <tr>
        <th>Jewish Breaking News</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jewish-breaking-news/">link</a></th>
    </tr>
    <tr>
        <th>Jewish News Syndicate (JNS)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jewish-news-syndicate-jns/">link</a></th>
    </tr>
    <tr>
        <th>Just Facts</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/just-facts/">link</a></th>
    </tr>
    <tr>
        <th>Just Facts Daily</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right111.png">right111.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/just-facts-daily/">link</a></th>
    </tr>
    <tr>
        <th>Korea Herald</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/korean-herald/">link</a></th>
    </tr>
    <tr>
        <th>KUTV Salt Lake City</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/kutv-salt-lake-city/">link</a></th>
    </tr>
    <tr>
        <th>Las Vegas Review-Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/las-vegas-review-journal/">link</a></th>
    </tr>
    <tr>
        <th>Learn Liberty</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/learn-liberty/">link</a></th>
    </tr>
    <tr>
        <th>Lexington Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lexington-institute/">link</a></th>
    </tr>
    <tr>
        <th>Libertarianism.org</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/libertarianism-org/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Viral</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-viral/">link</a></th>
    </tr>
    <tr>
        <th>London Broadcasting Company (LBC)</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/london-broadcasting-company-lbc/">link</a></th>
    </tr>
    <tr>
        <th>London Evening Standard</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/london-evening-standard/">link</a></th>
    </tr>
    <tr>
        <th>London Free Press</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/london-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Los Angeles Daily News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/los-angeles-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Lubbock Avalanche Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lubbock-avalanche-journal/">link</a></th>
    </tr>
    <tr>
        <th>Lynx Media</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lynx-media/">link</a></th>
    </tr>
    <tr>
        <th>Mackinac Center for Public Policy</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mackinac-center-for-public-policy/">link</a></th>
    </tr>
    <tr>
        <th>Manhattan Institute for Policy Research</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/manhattan-institute-for-policy-research/">link</a></th>
    </tr>
    <tr>
        <th>The Manila Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-manila-times/">link</a></th>
    </tr>
    <tr>
        <th>MarketWatch</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/marketwatch/">link</a></th>
    </tr>
    <tr>
        <th>Mercatus Center</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png">rightcenter041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mercatus-center/">link</a></th>
    </tr>
    <tr>
        <th>Military Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/military-times/">link</a></th>
    </tr>
    <tr>
        <th>Mises Daily</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter02.png">rightcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/mises-daily/">link</a></th>
    </tr>
    <tr>
        <th>MyNorthwest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mynorthwest/">link</a></th>
    </tr>
    <tr>
        <th>National Affairs Magazine</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-affairs-magazine/">link</a></th>
    </tr>
    <tr>
        <th>National Interest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-interest/">link</a></th>
    </tr>
    <tr>
        <th>National Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-post/">link</a></th>
    </tr>
    <tr>
        <th>Netherlands Radio and Television Association (NOS)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/netherlands-radio-and-television-association-nos/">link</a></th>
    </tr>
    <tr>
        <th>New York Post</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png">rightcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-york-post/">link</a></th>
    </tr>
    <tr>
        <th>News-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/news-gazette/">link</a></th>
    </tr>
    <tr>
        <th>News Heist</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-heist/">link</a></th>
    </tr>
    <tr>
        <th>Newsline</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/newsline/">link</a></th>
    </tr>
    <tr>
        <th>News Rescue</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/news-rescue/">link</a></th>
    </tr>
    <tr>
        <th>NTD.TV (New Tang Dynasty)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png">rightcenter041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ntd-tv-new-tang-dynasty/">link</a></th>
    </tr>
    <tr>
        <th>Odessa American</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/odessa-american/">link</a></th>
    </tr>
    <tr>
        <th>Oil Price</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/oil-price/">link</a></th>
    </tr>
    <tr>
        <th>Omaha World-Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/omaha-world-herald/">link</a></th>
    </tr>
    <tr>
        <th>Open Doors</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/open-doors/">link</a></th>
    </tr>
    <tr>
        <th>Orange County Register</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/orange-county-register/">link</a></th>
    </tr>
    <tr>
        <th>Oregonian</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/oregonian/">link</a></th>
    </tr>
    <tr>
        <th>Orlando Sentinel</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/orlando-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>Ottawa Citizen</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ottawa-citizen/">link</a></th>
    </tr>
    <tr>
        <th>Ottawa Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ottawa-sun/">link</a></th>
    </tr>
    <tr>
        <th>Pacific Research Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png">rightcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pacific-research-institute/">link</a></th>
    </tr>
    <tr>
        <th>Peninsula Daily News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/peninsula-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Pittsburgh Post-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pittsburgh-post-gazette/">link</a></th>
    </tr>
    <tr>
        <th>Pittsburgh Tribune Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pittsburgh-tribune-review/">link</a></th>
    </tr>
    <tr>
        <th>PolicyEd</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png">rightcenter021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/policyed/">link</a></th>
    </tr>
    <tr>
        <th>Post-Bulletin</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/post-bulletin/">link</a></th>
    </tr>
    <tr>
        <th>PunchingBag Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/punchingbag-post/">link</a></th>
    </tr>
    <tr>
        <th>Quillette</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/quillette/">link</a></th>
    </tr>
    <tr>
        <th>R Street Institute</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/r-street-institute/">link</a></th>
    </tr>
    <tr>
        <th>Rare News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png">rightcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/rare-news/">link</a></th>
    </tr>
    <tr>
        <th>Rasmussen Reports</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/rasmussen-reports/">link</a></th>
    </tr>
    <tr>
        <th>Reagan Battalion</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/reagan-battalion/">link</a></th>
    </tr>
    <tr>
        <th>Real Clear Defense</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/real-clear-defense/">link</a></th>
    </tr>
    <tr>
        <th>Real Clear Investigations</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/real-clear-investigations/">link</a></th>
    </tr>
    <tr>
        <th>Real Clear Policy</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/real-clear-policy/">link</a></th>
    </tr>
    <tr>
        <th>Real Clear Politics</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/real-clear-politics/">link</a></th>
    </tr>
    <tr>
        <th>RealClearReligion</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/realclearreligion/">link</a></th>
    </tr>
    <tr>
        <th>Reason</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter04.png">rightcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/reason/">link</a></th>
    </tr>
    <tr>
        <th>Red River Valley News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-river-valley-news/">link</a></th>
    </tr>
    <tr>
        <th>Regina Leader-Post</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/regina-leader-post/">link</a></th>
    </tr>
    <tr>
        <th>Regulation Magazine</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter02.png">rightcenter02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/regulation-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Remington Research Group</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/remington-research-group/">link</a></th>
    </tr>
    <tr>
        <th>Republic World</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/republic-world/">link</a></th>
    </tr>
    <tr>
        <th>Richmond Times-Dispatch</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/richmond-times-dispatch/">link</a></th>
    </tr>
    <tr>
        <th>Russia Insider</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png">rightcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/russia-insider/">link</a></th>
    </tr>
    <tr>
        <th>Russian News Agency-TASS</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/russian-news-agency-tass/">link</a></th>
    </tr>
    <tr>
        <th>Salem Radio Network News (SRN News)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/salem-radio-network-news-srn-news/">link</a></th>
    </tr>
    <tr>
        <th>Saskatoon StarPhoenix</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/saskatoon-starphoenix/">link</a></th>
    </tr>
    <tr>
        <th>Savannah Morning News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/savannah-morning-news/">link</a></th>
    </tr>
    <tr>
        <th>SOFREP</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/sofrep/">link</a></th>
    </tr>
    <tr>
        <th>South Florida Sun-Sentinel</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/south-florida-sun-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>The Spokesman-Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter12.png">rightcenter12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-spokesman-review/">link</a></th>
    </tr>
    <tr>
        <th>Fort Worth Star-Telegram</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter08.png">rightcenter08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/star-telegram/">link</a></th>
    </tr>
    <tr>
        <th>Statesman Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/statesman-journal/">link</a></th>
    </tr>
    <tr>
        <th>Student Daily News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/student-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Swarajya</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/swarajya/">link</a></th>
    </tr>
    <tr>
        <th>Tallahassee Democrat</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tallahassee-democrat/">link</a></th>
    </tr>
    <tr>
        <th>Tampa Tribune</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tampa-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Tax Foundation</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tax-foundation/">link</a></th>
    </tr>
    <tr>
        <th>Tharawat Magazine</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tharawat-magazine/">link</a></th>
    </tr>
    <tr>
        <th>The Algemeiner Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter04.png">rightcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-algemeiner-journal/">link</a></th>
    </tr>
    <tr>
        <th>The American Conservative</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-american-conservative/">link</a></th>
    </tr>
    <tr>
        <th>The American Interest</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-american-interest/">link</a></th>
    </tr>
    <tr>
        <th>The Augusta Chronicle</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-augusta-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>The Australian</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-australian/">link</a></th>
    </tr>
    <tr>
        <th>The Chronicle Herald</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-chronicle-herald/">link</a></th>
    </tr>
    <tr>
        <th>The Courier-Mail (Australia)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter041.png">rightcenter041.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-courier-mail/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Citizen (Dalton)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/daily-citizen-dalton/">link</a></th>
    </tr>
    <tr>
        <th>The Durango Herald</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-durango-herald/">link</a></th>
    </tr>
    <tr>
        <th>The Epoch Times</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-epoch-times/">link</a></th>
    </tr>
    <tr>
        <th>The Fiscal Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-fiscal-times/">link</a></th>
    </tr>
    <tr>
        <th>The Gazette (Cedar Rapids)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-gazette-cedar-rapids/">link</a></th>
    </tr>
    <tr>
        <th>The Globe and Mail</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-globe-and-mail/">link</a></th>
    </tr>
    <tr>
        <th>The Independent Review</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter12.png">rightcenter12.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-independent-review/">link</a></th>
    </tr>
    <tr>
        <th>The Jack News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-jack-news/">link</a></th>
    </tr>
    <tr>
        <th>The Jamestown Foundation</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-jamestown-foundation/">link</a></th>
    </tr>
    <tr>
        <th>The Japan News</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter10.png">rightcenter10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-japan-news/">link</a></th>
    </tr>
    <tr>
        <th>The Jewish Press</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-jewish-press/">link</a></th>
    </tr>
    <tr>
        <th>The Ledger</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-ledger/">link</a></th>
    </tr>
    <tr>
        <th>The Libertarian Republic</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/rightcenter04.png">rightcenter04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-libertarian-republic/">link</a></th>
    </tr>
    <tr>
        <th>The Nation Pakistan</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-nation-pakistan/">link</a></th>
    </tr>
    <tr>
        <th>The National (UAE)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter09.png">rightcenter09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-national-uae/">link</a></th>
    </tr>
    <tr>
        <th>The New Atlantis</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-new-atlantis/">link</a></th>
    </tr>
    <tr>
        <th>The News Lens</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-news-lens/">link</a></th>
    </tr>
    <tr>
        <th>The Objective Standard</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-objective-standard/">link</a></th>
    </tr>
    <tr>
        <th>The Oklahoman</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-oklahoman/">link</a></th>
    </tr>
    <tr>
        <th>The Press-Enterprise</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-press-enterprise/">link</a></th>
    </tr>
    <tr>
        <th>The Quint</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-quint/">link</a></th>
    </tr>
    <tr>
        <th>The Smoking Gun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-smoking-gun/">link</a></th>
    </tr>
    <tr>
        <th>The Sorrentino</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-sorrentino/">link</a></th>
    </tr>
    <tr>
        <th>The Spectator (UK)</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png">rightcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-spectator-uk/">link</a></th>
    </tr>
    <tr>
        <th>The Straits Times</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-straits-times/">link</a></th>
    </tr>
    <tr>
        <th>The Sumter Item</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-sumter-item/">link</a></th>
    </tr>
    <tr>
        <th>The Tennessean</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-tennessean/">link</a></th>
    </tr>
    <tr>
        <th>The Times Herald (Port Huron)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter091.png">rightcenter091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-times-herald-port-huron/">link</a></th>
    </tr>
    <tr>
        <th>Washington Institute for Near East Policy</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter021.png">rightcenter021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-institute-for-near-east-policy/">link</a></th>
    </tr>
    <tr>
        <th>The West Australian</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter061.png">rightcenter061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-west-australian/">link</a></th>
    </tr>
    <tr>
        <th>The Winchester Star</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter051.png">rightcenter051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-winchester-star/">link</a></th>
    </tr>
    <tr>
        <th>The Times of London</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter07.png">rightcenter07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-times-of-london/">link</a></th>
    </tr>
    <tr>
        <th>Times News (Pennsylvania)</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/times-news-pennsylvania/">link</a></th>
    </tr>
    <tr>
        <th>Times of South Africa (Times Live)</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/times-of-south-africa-times-live/">link</a></th>
    </tr>
    <tr>
        <th>Toledo Blade</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/toledo-blade/">link</a></th>
    </tr>
    <tr>
        <th>Topeka Capital-Journal</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter112.png">rightcenter112.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/topeka-capital-journal/">link</a></th>
    </tr>
    <tr>
        <th>Tulsa World</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tulsa-world/">link</a></th>
    </tr>
    <tr>
        <th>ValueWalk</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter071.png">rightcenter071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/valuewalk/">link</a></th>
    </tr>
    <tr>
        <th>Vancouver Sun</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter101.png">rightcenter101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vancouver-sun/">link</a></th>
    </tr>
    <tr>
        <th>Wall Street Journal</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter011.png">rightcenter011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wall-street-journal/">link</a></th>
    </tr>
    <tr>
        <th>Washington Babylon</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/washington-babylon/">link</a></th>
    </tr>
    <tr>
        <th>Washington Times</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter01.png">rightcenter01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/washington-times/">link</a></th>
    </tr>
    <tr>
        <th>Watchdog.org</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter031.png">rightcenter031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/watchdog-org/">link</a></th>
    </tr>
    <tr>
        <th>Waterbury Republican-American</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter06.png">rightcenter06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/waterbury-republican-american/">link</a></th>
    </tr>
    <tr>
        <th>Wichita Eagle</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter122.png">rightcenter122.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wichita-eagle/">link</a></th>
    </tr>
    <tr>
        <th>WikiLeaks</th>
        <th>MIXED</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/rightcenter05.png">rightcenter05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/wikileaks/">link</a></th>
    </tr>
    <tr>
        <th>Williamsport Sun-Gazette</th>
        <th>HIGH</th>
        <th>Right Centre</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/rightcenter081.png">rightcenter081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/williamsport-sun-gazette/">link</a></th>
    </tr>
    <tr>
        <th>1600 Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/1600-daily/">link</a></th>
    </tr>
    <tr>
        <th>2ndVote</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/2ndvote/">link</a></th>
    </tr>
    <tr>
        <th>Acculturated</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/acculturated/">link</a></th>
    </tr>
    <tr>
        <th>Accuracy in Academia (AIA)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/accuracy-in-academia-aia/">link</a></th>
    </tr>
    <tr>
        <th>Accuracy in Media (AIM)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/accuracy-in-media-aim/">link</a></th>
    </tr>
    <tr>
        <th>Acting Man</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/acting-man/">link</a></th>
    </tr>
    <tr>
        <th>Against Crony Capitialism</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/against-crony-capitialism/">link</a></th>
    </tr>
    <tr>
        <th>Allen B. West</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/allen-b-west/">link</a></th>
    </tr>
    <tr>
        <th>AltNewsMedia.net</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/altnewsmedia-net/">link</a></th>
    </tr>
    <tr>
        <th>America First Action SuperPAC</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/america-first-action-superpac/">link</a></th>
    </tr>
    <tr>
        <th>American Center for Law and Justice (ACLJ)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-center-law-justice-aclj/">link</a></th>
    </tr>
    <tr>
        <th>American Consequences</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-consequences/">link</a></th>
    </tr>
    <tr>
        <th>American Enterprise Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right09.png">right09.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-enterprise-institute/">link</a></th>
    </tr>
    <tr>
        <th>American Greatness</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-greatness/">link</a></th>
    </tr>
    <tr>
        <th>Americans for Prosperity</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/americans-for-prosperity/">link</a></th>
    </tr>
    <tr>
        <th>American Legislative Exchange Council (ALEC)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-legislative-exchange-council-alec/">link</a></th>
    </tr>
    <tr>
        <th>American Liberty Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-liberty-report/">link</a></th>
    </tr>
    <tr>
        <th>American News 24/7</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-news-24-7/">link</a></th>
    </tr>
    <tr>
        <th>American News Hub</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/american-news-hub/">link</a></th>
    </tr>
    <tr>
        <th>American Spectator</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-spectator/">link</a></th>
    </tr>
    <tr>
        <th>American Web Media (AWM)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right111.png">right111.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/american-web-media-awm/">link</a></th>
    </tr>
    <tr>
        <th>Ammoland</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ammoland/">link</a></th>
    </tr>
    <tr>
        <th>Anadolu Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/anadolu-agency/">link</a></th>
    </tr>
    <tr>
        <th>Arizona Daily Independent</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/arizona-daily-independent/">link</a></th>
    </tr>
    <tr>
        <th>Assyrian International News Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/assyrian-international-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Axiom News Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/axiom-news-network/">link</a></th>
    </tr>
    <tr>
        <th>Bearing Arms</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bearing-arms/">link</a></th>
    </tr>
    <tr>
        <th>Being Libertarian</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/being-libertarian/">link</a></th>
    </tr>
    <tr>
        <th>Beliefnet</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/beliefnet/">link</a></th>
    </tr>
    <tr>
        <th>Big Government News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png">right03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/big-government-news/">link</a></th>
    </tr>
    <tr>
        <th>Big League Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/big-league-politics/">link</a></th>
    </tr>
    <tr>
        <th>Bizpac Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/bizpac-review/">link</a></th>
    </tr>
    <tr>
        <th>Blue Lives Matter</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/blue-lives-matter/">link</a></th>
    </tr>
    <tr>
        <th>BrexitCentral</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/brexitcentral/">link</a></th>
    </tr>
    <tr>
        <th>Cambridge Analytica</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/cambridge-analytica/">link</a></th>
    </tr>
    <tr>
        <th>Campaign Life Coalition</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/campaign-life-coalition/">link</a></th>
    </tr>
    <tr>
        <th>Campus Reform</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/campus-reform/">link</a></th>
    </tr>
    <tr>
        <th>Capital Research Center</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/capital-research-center/">link</a></th>
    </tr>
    <tr>
        <th>Center for Freedom and Prosperity</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/center-for-freedom-and-prosperity/">link</a></th>
    </tr>
    <tr>
        <th>Chicks on the Right</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/chicks-on-the-right/">link</a></th>
    </tr>
    <tr>
        <th>Christian News Alerts</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/christian-news-alerts/">link</a></th>
    </tr>
    <tr>
        <th>Christian Post</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/christian-post/">link</a></th>
    </tr>
    <tr>
        <th>Chronicles Magazine (Rockford)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/chronicles-magazine-rockford/">link</a></th>
    </tr>
    <tr>
        <th>Church Militant</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/church-militant/">link</a></th>
    </tr>
    <tr>
        <th>Citizen Free Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/citizen-free-press/">link</a></th>
    </tr>
    <tr>
        <th>Citizens United</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png">right07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/citizens-united/">link</a></th>
    </tr>
    <tr>
        <th>City Journal</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/city-journal/">link</a></th>
    </tr>
    <tr>
        <th>Civitas Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/civitas-institute/">link</a></th>
    </tr>
    <tr>
        <th>Clear Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/clear-politics/">link</a></th>
    </tr>
    <tr>
        <th>Cold Dead Hands</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right04.png">right04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/cold-dead-hands/">link</a></th>
    </tr>
    <tr>
        <th>Commentary Magazine</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/commentary-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Communities Digital News (CDN)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/communities-digital-news/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Base</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-base/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Daily News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-daily-news/">link</a></th>
    </tr>
    <tr>
        <th>Conservatives Here</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservatives-here/">link</a></th>
    </tr>
    <tr>
        <th>Conservative HQ</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-hq/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Institute</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-institute/">link</a></th>
    </tr>
    <tr>
        <th>ConservativeOpinion.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservativeopinion-com/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Outfitters</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright03.png">extremeright03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-outfitters/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/conservative-review/">link</a></th>
    </tr>
    <tr>
        <th>Conservative Today</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/conservative-today/">link</a></th>
    </tr>
    <tr>
        <th>Controversial Times</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/controversial-times/">link</a></th>
    </tr>
    <tr>
        <th>Cowger Nation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/cowger-nation/">link</a></th>
    </tr>
    <tr>
        <th>Crime Prevention Research Center</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png">right03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/crime-prevention-research-center/">link</a></th>
    </tr>
    <tr>
        <th>Crisis Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/crisis-magazine/">link</a></th>
    </tr>
    <tr>
        <th>CSC Mediagroup USA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/csc-mediagroup-usa/">link</a></th>
    </tr>
    <tr>
        <th>Daily Caller</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png">right05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-caller/">link</a></th>
    </tr>
    <tr>
        <th>Daily Express</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png">right07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-express/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Liberator</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-liberator/">link</a></th>
    </tr>
    <tr>
        <th>Daily Telegraph (UK)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-telegraph/">link</a></th>
    </tr>
    <tr>
        <th>Daily Sabah</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png">right08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-sabah/">link</a></th>
    </tr>
    <tr>
        <th>Daily Signal</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-signal/">link</a></th>
    </tr>
    <tr>
        <th>Daily Surge</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/daily-surge/">link</a></th>
    </tr>
    <tr>
        <th>Dangerous</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dangerous/">link</a></th>
    </tr>
    <tr>
        <th>DC Statesman</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/dc-statesman/">link</a></th>
    </tr>
    <tr>
        <th>DC Whispers</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/dc-whispers/">link</a></th>
    </tr>
    <tr>
        <th>Debate Post</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right111.png">right111.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/debate-post/">link</a></th>
    </tr>
    <tr>
        <th>Deplorables Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/deplorables-report/">link</a></th>
    </tr>
    <tr>
        <th>Eagle PAC</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/eagle-pac/">link</a></th>
    </tr>
    <tr>
        <th>EconomicPolicyJournal.com</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/economicpolicyjournal-com/">link</a></th>
    </tr>
    <tr>
        <th>Energy Citizens</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/energy-citizens/">link</a></th>
    </tr>
    <tr>
        <th>Ethics & Religious Liberty Commission (ERLC)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ethics-religious-liberty-commission-erlc/">link</a></th>
    </tr>
    <tr>
        <th>Facts and Logic About the Middle East (FLAME)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/facts-and-logic-about-the-middle-east-flame/">link</a></th>
    </tr>
    <tr>
        <th>FaithWire</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/faithwire/">link</a></th>
    </tr>
    <tr>
        <th>Fake Hate Crimes</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/fake-hate-crimes/">link</a></th>
    </tr>
    <tr>
        <th>Family Security Matters</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png">extremeright05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/family-security-matters/">link</a></th>
    </tr>
    <tr>
        <th>Far Left Watch</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/far-left-watch/">link</a></th>
    </tr>
    <tr>
        <th>Federalist Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/federalist-press/">link</a></th>
    </tr>
    <tr>
        <th>Federalist Society</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/federalist-society/">link</a></th>
    </tr>
    <tr>
        <th>First in Freedom Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/first-freedom-daily/">link</a></th>
    </tr>
    <tr>
        <th>First Things Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/first-things-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Fox News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/fox-news/">link</a></th>
    </tr>
    <tr>
        <th>Freedom Crossroads</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/freedom-crossroads/">link</a></th>
    </tr>
    <tr>
        <th>Freedom Works</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png">right05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/freedom-works/">link</a></th>
    </tr>
    <tr>
        <th>Free Republic</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/free-republic/">link</a></th>
    </tr>
    <tr>
        <th>Free West Media</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/free-west-media/">link</a></th>
    </tr>
    <tr>
        <th>Frontiers of Freedom</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/frontiers-of-freedom/">link</a></th>
    </tr>
    <tr>
        <th>Foundation for Defense of Democracies</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/foundation-defense-democracies/">link</a></th>
    </tr>
    <tr>
        <th>Future in America</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/future-in-america/">link</a></th>
    </tr>
    <tr>
        <th>Gatestone Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gatestone-institute/">link</a></th>
    </tr>
    <tr>
        <th>Get Religion</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/get-religion/">link</a></th>
    </tr>
    <tr>
        <th>GOP.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/gop-com/">link</a></th>
    </tr>
    <tr>
        <th>GOPUSA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/gopusa/">link</a></th>
    </tr>
    <tr>
        <th>Government Accountability Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/government-accountability-institute/">link</a></th>
    </tr>
    <tr>
        <th>Grabien News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/grabien-news/">link</a></th>
    </tr>
    <tr>
        <th>Great American Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/great-american-politics/">link</a></th>
    </tr>
    <tr>
        <th>Guerrilla News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/guerrilla-news/">link</a></th>
    </tr>
    <tr>
        <th>Guido Fawkes</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/guido-fawkes/">link</a></th>
    </tr>
    <tr>
        <th>Heat Street</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/heat-street/">link</a></th>
    </tr>
    <tr>
        <th>Heritage Foundation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/heritage-foundation/">link</a></th>
    </tr>
    <tr>
        <th>HermanCain.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hermancain-com/">link</a></th>
    </tr>
    <tr>
        <th>Hillary Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/hillary-daily/">link</a></th>
    </tr>
    <tr>
        <th>Hot Air</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hot-air/">link</a></th>
    </tr>
    <tr>
        <th>Hudson Institute</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png">right08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/hudson-institute/">link</a></th>
    </tr>
    <tr>
        <th>Human Events</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png">right05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/human-events/">link</a></th>
    </tr>
    <tr>
        <th>Imprimis (Hillsdale College)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/imprimis-hillsdale-college/">link</a></th>
    </tr>
    <tr>
        <th>Independent Journal Review</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png">right05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/independent-journal-review/">link</a></th>
    </tr>
    <tr>
        <th>Independent Sentinel</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/independent-sentinel/">link</a></th>
    </tr>
    <tr>
        <th>Independent Women’s Forum (IWF)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/independent-womens-forum-iwf/">link</a></th>
    </tr>
    <tr>
        <th>Influence Watch</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/influence-watch/">link</a></th>
    </tr>
    <tr>
        <th>Illinois Policy Institute</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png">right101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/illinois-policy-institute/">link</a></th>
    </tr>
    <tr>
        <th>Intellectual Takeout</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/intellectual-takeout/">link</a></th>
    </tr>
    <tr>
        <th>I Bleed Red White and Blue</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/bleed-red-white-blue/">link</a></th>
    </tr>
    <tr>
        <th>iPatriot</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ipatriot/">link</a></th>
    </tr>
    <tr>
        <th>Institute for Family Studies</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/institute-for-family-studies/">link</a></th>
    </tr>
    <tr>
        <th>Investors Business Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/investors-business-daily/">link</a></th>
    </tr>
    <tr>
        <th>Jewish Policy Center</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png">right101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/jewish-policy-center/">link</a></th>
    </tr>
    <tr>
        <th>Jewish World Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/jewish-world-review/">link</a></th>
    </tr>
    <tr>
        <th>Judicial Crisis Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/judicial-crisis-network/">link</a></th>
    </tr>
    <tr>
        <th>Kansas Policy Institute (KPI)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/kansas-policy-institute-kpi/">link</a></th>
    </tr>
    <tr>
        <th>Keep and Bear</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/keep-and-bear/">link</a></th>
    </tr>
    <tr>
        <th>Knox Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://mediabiasfactcheck.files.wordpress.com/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/knox-report/">link</a></th>
    </tr>
    <tr>
        <th>Legal Insurrection</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/legal-insurrection/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Hangout</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png">right07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-hangout/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Headlines</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/liberty-headlines/">link</a></th>
    </tr>
    <tr>
        <th>Liberty Nation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/liberty-nation/">link</a></th>
    </tr>
    <tr>
        <th>Liberty News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/liberty-news/">link</a></th>
    </tr>
    <tr>
        <th>LibertyTalk.FM</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright04.png">extremeright04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/libertytalk-fm/">link</a></th>
    </tr>
    <tr>
        <th>Life and About</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/life-and-about/">link</a></th>
    </tr>
    <tr>
        <th>Life Decisions International</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/life-decisions-international/">link</a></th>
    </tr>
    <tr>
        <th>Life News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/life-news/">link</a></th>
    </tr>
    <tr>
        <th>Life Site News</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/extremeright05.png">extremeright05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/life-site-news/">link</a></th>
    </tr>
    <tr>
        <th>LifeZette</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lifezette/">link</a></th>
    </tr>
    <tr>
        <th>Lone Conservative</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lone-conservative/">link</a></th>
    </tr>
    <tr>
        <th>Lozier Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/lozier-institute/">link</a></th>
    </tr>
    <tr>
        <th>Lyin’ Comey</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/lyin-comey/">link</a></th>
    </tr>
    <tr>
        <th>Louder With Crowder</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/louder-with-crowder/">link</a></th>
    </tr>
    <tr>
        <th>Manchester Union Leader</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right11.png">right11.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/manchester-union-leader/">link</a></th>
    </tr>
    <tr>
        <th>Media Circus</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/media-circus/">link</a></th>
    </tr>
    <tr>
        <th>Media Equalizer</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/media-equalizer/">link</a></th>
    </tr>
    <tr>
        <th>Media Research Center (MRC)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png">right03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/media-research-center-mrc/">link</a></th>
    </tr>
    <tr>
        <th>Media Trackers</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/media-trackers/">link</a></th>
    </tr>
    <tr>
        <th>Mehr News Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mehr-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Mercatornet</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/mercatornet/">link</a></th>
    </tr>
    <tr>
        <th>National Center for Public Policy Research (NCPPR)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/national-center-public-policy-research-ncppr/">link</a></th>
    </tr>
    <tr>
        <th>National Review</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-review/">link</a></th>
    </tr>
    <tr>
        <th>National Rifle Association (NRA)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/national-rifle-association-nra/">link</a></th>
    </tr>
    <tr>
        <th>New Boston Post</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/new-boston-post/">link</a></th>
    </tr>
    <tr>
        <th>Newsbusters</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsbusters/">link</a></th>
    </tr>
    <tr>
        <th>Newsmax</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/newsmax/">link</a></th>
    </tr>
    <tr>
        <th>New Revolution Now</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-revolution-now/">link</a></th>
    </tr>
    <tr>
        <th>New York Observer</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png">right101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/new-york-observer/">link</a></th>
    </tr>
    <tr>
        <th>Next News Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/next-news-network/">link</a></th>
    </tr>
    <tr>
        <th>Not Liberal</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/not-liberal/">link</a></th>
    </tr>
    <tr>
        <th>NTK Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ntk-network/">link</a></th>
    </tr>
    <tr>
        <th>Numbers USA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/numbers-usa/">link</a></th>
    </tr>
    <tr>
        <th>Offended America</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/offended-america/">link</a></th>
    </tr>
    <tr>
        <th>Offgrid Survival</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/offgrid-survival/">link</a></th>
    </tr>
    <tr>
        <th>One America News Network (OAN)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/one-america-news-network/">link</a></th>
    </tr>
    <tr>
        <th>OneNewsNow</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/onenewsnow/">link</a></th>
    </tr>
    <tr>
        <th>Ontario Proud</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ontario-proud/">link</a></th>
    </tr>
    <tr>
        <th>OpsLens</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/opslens/">link</a></th>
    </tr>
    <tr>
        <th>Patriot News Alerts</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriot-news-alerts/">link</a></th>
    </tr>
    <tr>
        <th>Patriot News Daily</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriot-news-daily/">link</a></th>
    </tr>
    <tr>
        <th>PatriotRetort.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/patriotretort-com/">link</a></th>
    </tr>
    <tr>
        <th>PJ Media</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/pj-media/">link</a></th>
    </tr>
    <tr>
        <th>Policy Review</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png">right08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/policy-review/">link</a></th>
    </tr>
    <tr>
        <th>Political Insider</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/political-insider/">link</a></th>
    </tr>
    <tr>
        <th>Politichicks</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/politichicks/">link</a></th>
    </tr>
    <tr>
        <th>PoliticsNote</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/politicsnote/">link</a></th>
    </tr>
    <tr>
        <th>Politifeed</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/politifeed/">link</a></th>
    </tr>
    <tr>
        <th>Politisite</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/politisite/">link</a></th>
    </tr>
    <tr>
        <th>Populist Wire</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/populist-wire/">link</a></th>
    </tr>
    <tr>
        <th>Power Line</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/power-line/">link</a></th>
    </tr>
    <tr>
        <th>Project Veritas</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/project-veritas/">link</a></th>
    </tr>
    <tr>
        <th>Proud Conservatives</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/proud-conservatives/">link</a></th>
    </tr>
    <tr>
        <th>Public Interest Legal Foundation</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/public-interest-legal-foundation/">link</a></th>
    </tr>
    <tr>
        <th>Pluralist</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/pluralist/">link</a></th>
    </tr>
    <tr>
        <th>Quadrant Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/quadrant-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Reader’s Digest</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png">right101.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/readers-digest/">link</a></th>
    </tr>
    <tr>
        <th>Red Alert Politics</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png">right07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-alert-politics/">link</a></th>
    </tr>
    <tr>
        <th>Red Flag News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/red-flag-news/">link</a></th>
    </tr>
    <tr>
        <th>Regated News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/regated-news/">link</a></th>
    </tr>
    <tr>
        <th>RenewedRight.com</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/renewedright-com/">link</a></th>
    </tr>
    <tr>
        <th>Resistance Media</th>
        <th>MIXED</th>
        <th>Extreme Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/extremeright061.png">extremeright061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/resistance-media/">link</a></th>
    </tr>
    <tr>
        <th>Restore American Glory</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/restore-american-glory/">link</a></th>
    </tr>
    <tr>
        <th>Richochet</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/richochet/">link</a></th>
    </tr>
    <tr>
        <th>Ron Paul Liberty Report</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/ron-paul-liberty-report/">link</a></th>
    </tr>
    <tr>
        <th>Save Jersey</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/save-jersey/">link</a></th>
    </tr>
    <tr>
        <th>Secure America Now</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png">right08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/secure-america-now/">link</a></th>
    </tr>
    <tr>
        <th>Sentinel KSMO</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sentinel-ksmo/">link</a></th>
    </tr>
    <tr>
        <th>Silence is Consent</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/silence-is-consent/">link</a></th>
    </tr>
    <tr>
        <th>Sinclair Broadcast Group</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sinclair-broadcast-group/">link</a></th>
    </tr>
    <tr>
        <th>Sonoran News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/sonoran-news/">link</a></th>
    </tr>
    <tr>
        <th>Spiked Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/spiked-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Standpoint Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/standpoint-magazine/">link</a></th>
    </tr>
    <tr>
        <th>Tasnim News Agency</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tasnim-news-agency/">link</a></th>
    </tr>
    <tr>
        <th>Tea Party News (The Point)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tea-party-news-tpnn/">link</a></th>
    </tr>
    <tr>
        <th>Tea Party Patriots</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right101.png">right101.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tea-party-patriots/">link</a></th>
    </tr>
    <tr>
        <th>Tea Party Tribune</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tea-party-tribune/">link</a></th>
    </tr>
    <tr>
        <th>Tehran Times</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/tehran-times/">link</a></th>
    </tr>
    <tr>
        <th>The Advertiser</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-advertiser/">link</a></th>
    </tr>
    <tr>
        <th>The American Cause</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-american-cause/">link</a></th>
    </tr>
    <tr>
        <th>The Blacksphere (Kevin Jackson)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png">right03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-blacksphere-kevin-jackson/">link</a></th>
    </tr>
    <tr>
        <th>The Blaze</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-blaze/">link</a></th>
    </tr>
    <tr>
        <th>The California Republican</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-california-republican/">link</a></th>
    </tr>
    <tr>
        <th>The Citizen Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-citizen-press/">link</a></th>
    </tr>
    <tr>
        <th>The College Fix</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-college-fix/">link</a></th>
    </tr>
    <tr>
        <th>The Conservative Nut</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-conservative-nut/">link</a></th>
    </tr>
    <tr>
        <th>The Conservative Woman</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-conservative-woman/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Defender</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-daily-defender/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Telegraph (Australia)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png">right08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-telegraph-australia/">link</a></th>
    </tr>
    <tr>
        <th>The Daily Wire</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-daily-wire/">link</a></th>
    </tr>
    <tr>
        <th>The DC Chronicle</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-dc-chronicle/">link</a></th>
    </tr>
    <tr>
        <th>The Federalist</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right04.png">right04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-federalist/">link</a></th>
    </tr>
    <tr>
        <th>The Hayride</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-hayride/">link</a></th>
    </tr>
    <tr>
        <th>The Last Refuge (Conservative Treehouse)</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-last-refuge/">link</a></th>
    </tr>
    <tr>
        <th>The Millennial Review</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-millennial-review/">link</a></th>
    </tr>
    <tr>
        <th>The New American</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right07.png">right07.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-new-american/">link</a></th>
    </tr>
    <tr>
        <th>The Newly Press</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-newly-press/">link</a></th>
    </tr>
    <tr>
        <th>The Ohio Star</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-ohio-star/">link</a></th>
    </tr>
    <tr>
        <th>The Patriot Post</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-patriot-post/">link</a></th>
    </tr>
    <tr>
        <th>The Post and Email</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-post-email/">link</a></th>
    </tr>
    <tr>
        <th>The Post Millennial</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-post-millennial/">link</a></th>
    </tr>
    <tr>
        <th>The RANTidote</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-rantidote/">link</a></th>
    </tr>
    <tr>
        <th>The Real Strategy</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-real-strategy/">link</a></th>
    </tr>
    <tr>
        <th>The Rebel</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-rebel/">link</a></th>
    </tr>
    <tr>
        <th>The Resurgent</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-resurgent/">link</a></th>
    </tr>
    <tr>
        <th>The Right Scoop</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right04.png">right04.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-right-scoop/">link</a></th>
    </tr>
    <tr>
        <th>The Ron Paul Institute</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-ron-paul-institute/">link</a></th>
    </tr>
    <tr>
        <th>The Sun</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right05.png">right05.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/the-sun/">link</a></th>
    </tr>
    <tr>
        <th>The Tennessee Star</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-tennessee-star/">link</a></th>
    </tr>
    <tr>
        <th>The Truth About Guns</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right081.png">right081.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/the-truth-about-guns/">link</a></th>
    </tr>
    <tr>
        <th>Toronto Sun</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right08.png">right08.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/toronto-sun/">link</a></th>
    </tr>
    <tr>
        <th>Townhall</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right06.png">right06.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/townhall/">link</a></th>
    </tr>
    <tr>
        <th>Tribunist</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/tribunist/">link</a></th>
    </tr>
    <tr>
        <th>TRT World</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/trt-world/">link</a></th>
    </tr>
    <tr>
        <th>Turning Point USA</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/turning-point-usa/">link</a></th>
    </tr>
    <tr>
        <th>Twitchy</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/twitchy/">link</a></th>
    </tr>
    <tr>
        <th>Unbiased America</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/unbiased-america/">link</a></th>
    </tr>
    <tr>
        <th>Unity News Network</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/unity-news-network/">link</a></th>
    </tr>
    <tr>
        <th>UN Watch</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/un-watch/">link</a></th>
    </tr>
    <tr>
        <th>US Politics Info</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/us-politics-info/">link</a></th>
    </tr>
    <tr>
        <th>USA Politics Today</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/usa-politics-today/">link</a></th>
    </tr>
    <tr>
        <th>USSA News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/ussa-news/">link</a></th>
    </tr>
    <tr>
        <th>Vessel News</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right021.png">right021.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vessel-news/">link</a></th>
    </tr>
    <tr>
        <th>VivaLiberty</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right031.png">right031.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/vivaliberty/">link</a></th>
    </tr>
    <tr>
        <th>Washington Examiner</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right091.png">right091.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/washington-examiner/">link</a></th>
    </tr>
    <tr>
        <th>Washington Free Beacon</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right03.png">right03.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/washington-free-beacon/">link</a></th>
    </tr>
    <tr>
        <th>Weasel Zippers</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right01.png">right01.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/weasel-zippers/">link</a></th>
    </tr>
    <tr>
        <th>Weekly Standard</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/weekly-standard/">link</a></th>
    </tr>
    <tr>
        <th>Western Journal</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right02.png">right02.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/western-journalism/">link</a></th>
    </tr>
    <tr>
        <th>WestMonster</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right041.png">right041.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/westmonster/">link</a></th>
    </tr>
    <tr>
        <th>Whatfinger</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right051.png">right051.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/whatfinger/">link</a></th>
    </tr>
    <tr>
        <th>World Magazine</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right061.png">right061.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-magazine/">link</a></th>
    </tr>
    <tr>
        <th>World Tribune</th>
        <th>QUESTIONABLE</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/world-tribune/">link</a></th>
    </tr>
    <tr>
        <th>YellowHammer News</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i0.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/09/right10.png">right10.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/yellowhammer-news/">link</a></th>
    </tr>
    <tr>
        <th>Young America’s Foundation (YAF)</th>
        <th>HIGH</th>
        <th>Right</th>
        <th><a href=https://i1.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right071.png">right071.png</a></th>
        <th><a href="https://mediabiasfactcheck.com/young-americas-foundation-yaf/">link</a></th>
    </tr>
    <tr>
        <th>Young Conservatives</th>
        <th>MIXED</th>
        <th>Right</th>
        <th><a href=https://i2.wp.com/mediabiasfactcheck.com/wp-content/uploads/2016/12/right011.png">right011.png</a></th>
        <th><a href="http://mediabiasfactcheck.com/young-conservatives/">link</a></th>
    </tr>
    </tbody>
</table>

The data is skewed towards more centre-left sources and lists them as proportionally more factual than centre-right sources, but in isolation these data do not imply mediabiasfactcheck.com has any left-right bias.

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/mediabiasfactcheck.com-bias).

## Future Work

I would like to collect a more fine grained left-right bias from their website, which can be done using the slider on each page. I would then like to compare the values given on mediabiasfactcheck.com with those givern on adfontesmedia.com and chart the difference between their scores for each media outlet.