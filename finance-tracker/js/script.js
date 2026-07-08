$(document).ready(function () {
  // Load data from JSON and populate the table
  $.getJSON('../pages/data.json', function (data) {
    const transactions = data.recent_transactions;
    populateTable(transactions);
  }).fail(function (jqxhr, textStatus, error) {
    console.error('Failed to load transaction data:', textStatus, error);
    $('.table--container table tbody').html('<tr><td colspan="2">Error loading data</td></tr>');
  });


    // Style progress bars based on data attributes
  $('.progress-bar-fill').each(function () {
    const $fill = $(this);
    const percent = parseFloat($fill.data('percent')) || 0;
    const type = $fill.data('type'); // 'expense' or 'saving'

    // Clamp percent and apply width
    $fill.css('width', `${Math.min(percent, 100)}%`);

    // Remove existing color classes
    $fill.removeClass('green yellow red');

    let color;

    if (type === 'expense') {
      if (percent > 70) {
        color = 'red';
      } else if (percent >= 45) {
        color = 'yellow';
      } else {
        color = 'green';
      }
    } else if (type === 'saving') {
      if (percent > 70) {
        color = 'green';
      } else if (percent >= 45) {
        color = 'yellow';
      } else {
        color = 'red';
      }
    }

    // Apply color class
    $fill.addClass(color);
  });




  // Function to populate the table and total row
  function populateTable(transactions) {
    const $tbody = $('.table--container table tbody');
    const $tfoot = $('.table--container table tfoot');
    let total = 0;

    // Clear existing content
    $tbody.empty();
    $tfoot.empty();

    // Populate table rows
    $.each(transactions, function (index, transaction) {
      const $row = $('<tr></tr>');
      const $itemCell = $('<td></td>').text(transaction.item);
      const $amountCell = $('<td></td>').text(`$${parseFloat(transaction.amount).toFixed(2)}`);

      $row.append($itemCell, $amountCell);
      $tbody.append($row);

      total += parseFloat(transaction.amount);
    });

    // Append total row
    const $totalRow = $('<tr></tr>');
    const $totalLabel = $('<td><strong>Total</strong></td>');
    const $totalValue = $('<td></td>').text(`$${total.toFixed(2)}`);

    $totalRow.append($totalLabel, $totalValue);
    $tfoot.append($totalRow);

    console.log('Total Amount:', total.toFixed(2));
  }


});
