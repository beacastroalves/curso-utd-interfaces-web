amigosAlan = ['Fall', 'Galagou', 'Laura', 'João', 'Michel', 'Ricardo'];

amigosBia = ['Laura', 'João', 'Michel', 'Ricardo', 'Derick', 'Nathalia', 'Milena'];

const amigosEmComum = amigosAlan.filter(amigo => amigosBia.includes(amigo));

console.log(amigosEmComum);