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
                    toolTipContent: "<span style='\"'color: {color};'\"'>{name}</span>: {y} ({percent}%)",
                    dataPoints: [
                        { label: "Extreme Left", y: 42, percent: 95 },
                        { label: "Left Bias", y: 6, percent: 2 },
                        { label: "Left-Centre Bias", y: 3, percent: 1 },
                        { label: "Least Biased", y: 0, percent: 0 },
                        { label: "Right-Centre Bias", y: 4, percent: 2 },
                        { label: "Right Bias", y: 37, percent: 12 },
                        { label: "Extreme Right", y: 359, percent: 99 }
                    ]
                },
                {
                    name: "Mixed",
                    showInLegend: true,
                    legendMarkerType: "square",
                    type: "stackedArea",
                    color: "rgba(241,108,32,0.7)",
                    markerSize: 0,
                    toolTipContent: "<span style='\"'color: {color};'\"'>{name}</span>: {y} ({percent}%)",
                    dataPoints: [
                        { label: "Extreme Left", y: 2, percent: 5 },
                        { label: "Left Bias", y: 123, percent: 38 },
                        { label: "Left-Centre Bias", y: 40, percent: 9 },
                        { label: "Least Biased", y: 17, percent: 4 },
                        { label: "Right-Centre Bias", y: 39, percent: 17 },
                        { label: "Right Bias", y: 223, percent: 74 },
                        { label: "Extreme Right", y: 5, percent: 1 }
                    ]
                },
                {
                    name: "High",
                    showInLegend: true,
                    legendMarkerType: "square",
                    type: "stackedArea",
                    color: "rgba(162,184,108,0.6)",
                    markerSize: 0,
                    toolTipContent: "<span style='\"'color: {color};'\"'>{name}</span>: {y} ({percent}%)",
                    dataPoints: [
                        { label: "Extreme Left", y: 0, percent: 0 },
                        { label: "Left Bias", y: 195, percent: 60 },
                        { label: "Left-Centre Bias", y: 427, percent: 91 },
                        { label: "Least Biased", y: 287, percent: 96 },
                        { label: "Right-Centre Bias", y: 188, percent: 81 },
                        { label: "Right Bias", y: 41, percent: 14 },
                        { label: "Extreme Right", y: 0, percent: 0 }
                    ]
                }]
        });
        chart.render();

    }
</script>

<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>