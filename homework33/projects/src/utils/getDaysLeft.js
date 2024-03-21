export function getDaysLeft(deadline) {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDiff = deadlineDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / oneDay);
}
