const ctx = document.getElementById('financeChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Income', 'Expenses', 'Commitments', 'Savings'],
    datasets: [{
      label: 'RM',
      data: [5000, 2300, 1000, 1700],
      backgroundColor: ['green', 'red', 'Orange' , 'blue']
    }]
  }
});