var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9"],
        datasets: [{
            label: "Thống kê sự phát triển của website",
            data: [2, 4, 8, 12],
            backgroundColor: [
                "rgba(45, 46, 48, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              
            ],
            borderColor: [
                "rgba(45, 46, 48, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
               
            ],
            borderWidth: 1,
        }, ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
    },
});