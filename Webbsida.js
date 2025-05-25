const searchInput = document.getElementById('searchInput');
const searchList = document.getElementById('searchList');
const listItems = searchList.getElementsByTagName('li');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  for (let i = 0; i < listItems.length; i++) {
    const itemText = listItems[i].textContent.toLowerCase();
    if (itemText.includes(searchTerm)) {
      listItems[i].style.display = 'block';
    } else {
      listItems[i].style.display = 'none';
    }
  }
});
