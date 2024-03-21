export function getDaysLeft(deadline) {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = Date.now()
    return Math.round((deadline - today) / oneDay)
}