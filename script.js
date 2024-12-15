function transferToSelected() {
    const availableList = document.getElementById("available").getElementsByTagName("ul")[0];
    const selectedList = document.getElementById("selected").getElementsByTagName("ul")[0];
    const selectedItems = Array.from(availableList.getElementsByTagName("li")).filter(item => item.style.backgroundColor === 'lightblue');

    selectedItems.forEach(item => {
        selectedList.appendChild(item);
        item.style.backgroundColor = '';
    });
}

function transferToAvailable() {
    const selectedList = document.getElementById("selected").getElementsByTagName("ul")[0];
    const availableList = document.getElementById("available").getElementsByTagName("ul")[0];
    const selectedItems = Array.from(selectedList.getElementsByTagName("li")).filter(item => item.style.backgroundColor === 'lightblue');

    selectedItems.forEach(item => {
        availableList.appendChild(item);
        item.style.backgroundColor = '';
    });
}

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = e.target.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
    }
});
