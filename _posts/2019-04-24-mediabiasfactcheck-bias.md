---
layout: post
title: Media Bias/Fact Check Bias
subtitle: bias in my bias?
image: /images/title_media-bias.jpg
og_image: /images/og_media-bias.png
comments: true
categories:
- other
include:
- jquery
- canvasjs
- datatables
---

[Media Bias/Fact Check](https://mediabiasfactcheck.com/) seems like a great site to lookup the bias of a media outlet, after a bit of browsing on the site I noticed that they had a few entries that differed a bit to [ad fontes media](https://www.adfontesmedia.com/).

I wrote a web scraper to collect all the media outlets listed on mediabiasfactcheck.com and I have presented those data below. Unfortunately they score media outlets with discrete values rather than on continuous spectra. Their discrete scores for left-right bias are: "Extreme Left", "Left Bias", "Left-Centre Bias", "Least Biased", "Right-Centre Bias", "Right Bias", and "Extreme Right"; while their scores for factual reporting are: "High", "Mixed", and "Questionable". Each source has a continuous slider of the top of each page to show the lef-right bias. I wrote a simple image processing tool that used this image to estimate their left-right bias and gave it a score from [-50, 50] to match that of Ad Fontes Media.    

{% include_relative _fragments/2019-04-24-mediabiasfactcheck-bias/mediabiasfactcheck-chart.md %}

The chart shows the number of media outlets that mediabiasfactcheck.com listed in each of the left-right bias categories and the factual distribution of the outlets. 

The data is skewed towards more centre-left sources. It also favours lists left wing sources as proportionally more factual than their right wing counterparts, e.g. Left-Centre is more factual than Right-Centre and Extreme Left is more factual than Extreme Right. In isolation these data do not imply mediabiasfactcheck.com has any left-right bias.

{% include_relative _fragments/2019-04-24-mediabiasfactcheck-bias/difference-chart.md %}

The above chart shows the left-right score for Media Bias/Fact Check and Ad Fontes Media, the orange Bars are when Media Bias/Fact Check is futher left than Ad Fontes Media, and the blue bars are where Media Bias/Fact Check if further right than Ad Fontes Media. The data is not normalised.

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

{% include_relative _fragments/2019-04-24-mediabiasfactcheck-bias/table.md %}

The source code for this can be found on my [github repo](https://github.com/IgniparousTempest/mediabiasfactcheck.com-bias).