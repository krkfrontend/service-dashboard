! function(e) {
    "use strict";
    var a = function() {};
    a.prototype.createBarChart = function(e, a, r, t, o, i) {
        Morris.Bar({
            element: e,
            data: a,
            xkey: r,
            ykeys: t,
            labels: o,
            gridLineColor: "#eef0f2",
            barSizeRatio: .4,
            resize: !0,
            hideHover: "auto",
            barColors: i
        })
    },a.prototype.createDonutChart = function(e, a, r) {
        Morris.Donut({
            element: e,
            data: a,
            resize: !0,
            colors: r
        })
    }, a.prototype.init = function() {
        this.createBarChart("coordinator-dashboard-bar-chart", [{
            y: "Todays Request Status",
            a: 12,
            b: 25,
            c: 35,
            d: 30,
            e: 15,
            f: 20
        }], "y", ["a", "b", "c", "d", "e", "f"], 
            ["Pending", "On-Progress", "Closed", "New", "Escalated","Shipped"],
             ["#4bbbce", "#5985ee", "#46cd93","#fd7e14","#6f42c1","#e83e8c"]);
        
        this.createDonutChart("coordinator-dashboard-donut-example", [{
            label: "Pending request",
            value: 12
        }, {
            label: "On Progress Requests",
            value: 25
        }, {
            label: "Service Engineer Closed Requests",
            value: 35
        },{
            label: "New Requests",
            value: 30
        },{
            label: "Escalated Requests",
            value: 15
        },
        {
            label: "Shipped Requests",
            value: 20
        }], ["#4bbbce", "#5985ee", "#46cd93","#fd7e14","#6f42c1","#e83e8c"])
    }, e.Dashboard = new a, e.Dashboard.Constructor = a
}(window.jQuery),
function(e) {
    "use strict";
    window.jQuery.Dashboard.init()
}();
