<script>
    window.addEventListener('load', function () {

        const colors = ["rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(255, 127, 14)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(255, 127, 14)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)", "rgb(31, 119, 180)"];
        CanvasJS.addColorSet("customColorSet", colors);

        const chart2 = new CanvasJS.Chart("differencesChartContainer", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            colorSet:  "customColorSet",
            title:{
                text: "Difference in Left-Right Scores between Media Bias/Fact Check and Ad Fontes Media"
            },
            axisY: {
                title: "Score Difference"
            },
            axisX:{
                title: "",
                tickLength: 0,
                margin: 0,
                lineThickness: 0,

                valueFormatString: " ", //comment this to show numeric values
                labelFormatter: function ( e ) {
                    return "";
                }
            },
            data: [
                {
                    type: "rangeBar",
                    showInLegend: true,
                    legendMarkerColor: "rgb(255, 127, 14)",
                    legendText: "Media Bias/Fact Check is further left than Ad Fontes Media",
                    toolTipContent: "{label}<br><span style='\"'color: {color};'\"'>Media Bias/Fact Check</span>: {y[0]}<br><span style='\"'color: {color};'\"'>Ad Fontes Media</span>: {y[1]}<br>Difference: {difference}",
                    // toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span>",
                    dataPoints: [
                        { y: [-45, -30], label: "Occupy Democrats", difference: 15 },
                        { y: [-44, -27], label: "Bipartisan Report", difference: 17 },
                        { y: [-37, -34], label: "Palmer Report", difference: 3 },
                        { y: [-37, -34], label: "Wonkette", difference: 3 },
                        { y: [-38, -24], label: "Daily Kos", difference: 14 },
                        { y: [-37, -25], label: "Forward Progressives", difference: 12 },
                        { y: [-37, -24], label: "The Young Turks", difference: 13 },
                        { y: [-31, -28], label: "Jacobin", difference: 3 },
                        { y: [-31, -23], label: "Second Nexus", difference: 8 },
                        { y: [-32, -21], label: "Daily Beast", difference: 11 },
                        { y: [-34, -19], label: "New Republic", difference: 15 },
                        { y: [-31, -20], label: "Slate", difference: 11 },
                        { y: [-31, -19], label: "Democracy Now", difference: 12 },
                        { y: [-31, -19], label: "MSNBC", difference: 12 },
                        { y: [-26, -24], label: "Mother Jones", difference: 2 },
                        { y: [-36, -13], label: "Think Progress", difference: 23 },
                        { y: [-32, -16], label: "Vox", difference: 16 },
                        { y: [-25, -23], label: "Washington Monthly", difference: 2 },
                        { y: [-30, -17], label: "The Nation", difference: 13 },
                        { y: [-30, -13], label: "Talking Points Memo", difference: 17 },
                        { y: [-30, -12], label: "Vanity Fair", difference: 18 },
                        { y: [-20, -18], label: "Mic", difference: 2 },
                        { y: [-30, -6], label: "CNN", difference: 24 },
                        { y: [-19, -15], label: "News and Guts", difference: 4 },
                        { y: [-18, -15], label: "The Atlantic", difference: 3 },
                        { y: [-21, -10], label: "Washington Post", difference: 11 },
                        { y: [-20, -6], label: "The Guardian", difference: 14 },
                        { y: [-18, -5], label: "New York Times", difference: 13 },
                        { y: [-15, -5], label: "Quartz", difference: 10 },
                        { y: [-18, 0], label: "Business Insider", difference: 18 },
                        { y: [-12, -2], label: "Axios", difference: 10 },
                        { y: [-9, -3], label: "BBC", difference: 6 },
                        { y: [-12, 0], label: "USA Today", difference: 12 },
                        { y: [-5, -3], label: "Politico", difference: 2 },
                        { y: [-5, -2], label: "The Skimm", difference: 3 },
                        { y: [-4, 0], label: "Reuters", difference: 4 },
                        { y: [-11, 9], label: "The Hill", difference: 20 },
                        { y: [-5, 6], label: "Christian Science Monitor", difference: 11 },
                        { y: [1, 3], label: "Financial Times", difference: 2 },
                        { y: [1, 4], label: "The Economist", difference: 3 },
                        { y: [4, 9], label: "Foreign Policy", difference: 5 },
                        { y: [18, 3], label: "Forbes", difference: -15 },
                        { y: [37, -15], label: "Daily Signal", difference: -52 },
                        { y: [23, 11], label: "Wall Street Journal", difference: -12 },
                        { y: [19, 18], label: "Reason", difference: -1 },
                        { y: [31, 10], label: "National Enquirer", difference: -21 },
                        { y: [24, 18], label: "New York Post", difference: -6 },
                        { y: [15, 28], label: "The American Conservative", difference: 13 },
                        { y: [24, 20], label: "Washington Times", difference: -4 },
                        { y: [32, 13], label: "Daily Mail", difference: -19 },
                        { y: [28, 18], label: "Washington Examiner", difference: -10 },
                        { y: [32, 20], label: "National Review", difference: -12 },
                        { y: [39, 16], label: "Drudge Report", difference: -23 },
                        { y: [34, 24], label: "Daily Caller", difference: -10 },
                        { y: [32, 26], label: "PJ Media", difference: -6 },
                        { y: [36, 24], label: "Washington Free Beacon", difference: -12 },
                        { y: [35, 27], label: "The Federalist", difference: -8 },
                        { y: [39, 27], label: "The Blaze", difference: -12 },
                        { y: [39, 29], label: "Twitchy", difference: -10 },
                        { y: [41, 34], label: "Breitbart", difference: -7 },
                        { y: [45, 35], label: "The Gateway Pundit", difference: -10 },
                        { y: [47, 35], label: "Conservative Tribune", difference: -12 }
                    ]
                }
            ]
        });
        chart2.render();

    }, false);
</script>

<div id="differencesChartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>