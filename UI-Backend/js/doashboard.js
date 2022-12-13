



// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];
/* bar chart */
var chBar = document.getElementById("chBar");
if (chBar) {
  new Chart(chBar, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      data: [50, 130, 525, 285, 470, 130, 285, 240, 710, 470, 640, 1110],
      backgroundColor: colors[0]
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{ 
        barPercentage: 1,
        // categoryPercentage: 0.5
      }]

      ,

      yAxes: [{
        ticks: {
          callback: function(value, index, values) {
            return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
          }
        }
      }]
    }

    ,
    tooltips: {
        callbacks: {
            // label: function(tooltipItem, data) {
            //     return " $" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
            //         return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
            //     });
            // }
            label: function (tooltipItem, data) {
                return ' ' + (new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })).format(tooltipItem.value);
            }
           
        }
    }
  }
  });
}
