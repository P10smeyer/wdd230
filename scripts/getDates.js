const options = {year: 'numeric'};
document.getElementById('yearFooter').textContent = new Date().toLocaleDateString('en-US', options);
const dateModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last Modified: ' + dateModified;