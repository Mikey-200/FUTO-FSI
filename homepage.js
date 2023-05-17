// Slide animation for the side bar
var aside = document.getElementById('sidebar');
aside.style.transform = 'translateX(-200px)';

function toggleSidebar() {
  aside.classList.toggle('show-sidebar');
}

var navItems = document.getElementById('nav').getElementsByTagName('li');
for (var i = 0; i < navItems.length; i++) {
  navItems[i].onclick = toggleSidebar;
}

// Sticky menu button color change on click
var menuItems = document.querySelectorAll('.sticky-menu ul li a');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function () {
    // Remove active class from all menu items
    for (var j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove('active');
    }
    // Add active class to the clicked menu item
    this.classList.add('active');
  };
}

// Transaction submission
var paymentForm = document.getElementById('paymentForm');
var transactionsList = document.getElementById('transactionsList');

paymentForm.onsubmit = function (event) {
  event.preventDefault();

  var amount = document.getElementById('amount').value;
  var recipient = document.getElementById('recipient').value;

  // Clear form inputs
  paymentForm.reset();

  // Create transaction history item
  var transactionItem = document.createElement('li');
  transactionItem.textContent = 'Paid ' + amount + ' to ' + recipient;

  // Prepend transaction item to the list
  transactionsList.insertBefore(transactionItem, transactionsList.firstChild);
};
