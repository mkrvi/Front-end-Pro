
export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    const randomLetters = Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]);
    return '#' + randomLetters.join('');
}
