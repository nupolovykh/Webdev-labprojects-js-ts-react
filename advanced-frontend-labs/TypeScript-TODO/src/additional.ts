export function parseDateFromString(dateString: string): Date {
    const dateParts: string[] = dateString.replace('от ', '').split('/');
    const day: number = parseInt(dateParts[0], 10);
    const month: number = parseInt(dateParts[1], 10) - 1;
    const year: number = parseInt(dateParts[2], 10);
    return new Date(year, month, day);
}