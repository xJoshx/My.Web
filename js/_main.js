var data_pie = [
    {
        value: 95,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "jQuery"
    },
    {
        value: 75,
        color: "#55d6a0",
        highlight: "#58e2a8",
        label: "Polymer"
    },
    {
        value: 50,
        color: "#d4272b",
        highlight: "#f4272c",
        label: "Rails"
    },  
    {
        value: 70,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Foundation"
    },
    {
        value: 50,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "AngularJS"
    },
    {
        value: 50,
        color: "#db7f81",
        highlight: "#f08a8c",
        label: "Laravel"
    },  
    {
        value: 80,
        color: "#333333",
        highlight: "#383838",
        label: "Compass"
    },
    {
        value: 50,
        color: "#333333",
        highlight: "#383838",
        label: "Bourbon/Neat/Bitters/Refills"
    },
    {
        value: 90,
        color: "#333333",
        highlight: "#383838",
        label: "Bower/Npm"
    },
    {
        value: 60,
        color: "#333333",
        highlight: "#383838",
        label: "Grunt"
    },
    {
        value: 60,
        color: "#333333",
        highlight: "#383838",
        label: "RequireJS"
    },
    {
        value: 60,
        color: "#333333",
        highlight: "#383838",
        label: "Yeoman"
    },
]
var options_pie = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

var data_radar = {
    labels: ["HTML5", "SASS", "JS", "PHP", "RUBY", "MYSQL", "PYTHON", "OBJECTIVE-C"],
    datasets: [
        {
            label: "Main technologies that i use",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [80, 86, 92, 81, 50, 78, 63, 84]
        }
    ]
};
var options_radar = {
    //Boolean - Whether to show lines for each scale point
    scaleShowLine : true,

    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut : true,

    //Boolean - Whether to show labels on the scale
    scaleShowLabels : true,

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //String - Colour of the angle line
    angleLineColor : "rgba(0,0,0,.1)",

    //Number - Pixel width of the angle line
    angleLineWidth : 1,

    //String - Point label font declaration
    pointLabelFontFamily : "'Helvetica Neue', 'Arial', sans-serif",

    //String - Point label font weight
    pointLabelFontStyle : "normal",

    //Number - Point label font size in pixels
    pointLabelFontSize : 10,

    //String - Point label font colour
    pointLabelFontColor : "#666",

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

/* Assign the charts */
var _ctx = $(".skills .column-one .chart-one").get(0).getContext("2d");
var _skillsChart = new Chart(_ctx).Radar(data_radar, options_radar);

_ctx = $(".skills .column-two .chart-two").get(0).getContext("2d");
_skillsChart = new Chart(_ctx).Pie(data_pie, options_pie);


/* The tips */

// Create a style for all tag Opentips
Opentip.styles.jobs = {
  showOn: 'mouseover', // this will disable the default <a /> link behaviour.
  target: true, // Takes the <a /> element as target
  tipJoint: "top", // So the tooltip floats above the link
  group: "jobs", // Ensures that only one tag Opentip is visible
  shadowBlur: 10
};


var _logoUpm = new Opentip($("#logo-upm"), "6 months. Investigation group. Artificial vision stuff (Opencv)", {style: "jobs"});
var _logoEntry = new Opentip($("#logo-entry"), "Since July, 2014. Event management Startup. Front-End, Back-End, DB, iOS App...", {style: "jobs"});
