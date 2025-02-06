
document.getElementById('navbarToggle').addEventListener('click', function() {
    document.getElementById('offcanvas').classList.toggle('active');
    document.getElementById('navLinks').classList.add('lin');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('offcanvas').classList.remove('active');
});
document.designMode = 'on';