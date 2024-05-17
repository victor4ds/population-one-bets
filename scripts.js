function showPage(page) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(page).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const bets = [
        { id: 1, title: 'Match 1', description: 'Team A vs Team B' },
        { id: 2, title: 'Match 2', description: 'Team C vs Team D' },
    ];

    const betsList = document.getElementById('bets-list');
    bets.forEach(bet => {
        const li = document.createElement('li');
        li.textContent = `${bet.title} - ${bet.description}`;
        betsList.appendChild(li);
    });
});
