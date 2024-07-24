// File: preventMultipleSelection.js
// Purpose: Preventing selecting multiple chess pieces
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green' && ee.style.backgroundColor !== 'aqua') {
            coloring()
        }
    })
})