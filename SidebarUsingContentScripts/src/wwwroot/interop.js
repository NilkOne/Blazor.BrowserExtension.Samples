export function getAuthor() {
  // Extract Author name
  const table = document.querySelector('table.infobox.vevent');
  if (table) {
    const authorRow = Array.from(table.querySelectorAll('tr')).find(row =>
      row.querySelector('th')?.textContent.trim() === 'Original author(s)'
    );

    const author = authorRow?.querySelector('td a')?.textContent.trim();

    if (author) {
      return author;
    } else {
      return 'Author nor found';
    }
  } else {
    return 'Table nor found';
  }
}

export function injectToTable(message) {

  const table = document.querySelector('table.infobox.vevent tbody');
  const newRow = document.createElement('tr');

  // first cell
  const firstCell = document.createElement('th');
  firstCell.textContent = 'Injected';
  firstCell.setAttribute('scope', 'row');
  firstCell.classList.add('infobox-label');

  // 2nd cell
  const secondCell = document.createElement('td');
  secondCell.textContent = message;
  secondCell.classList.add('infobox-data');

  // add cells
  newRow.appendChild(firstCell);
  newRow.appendChild(secondCell);

  // add row
  table.appendChild(newRow);
}