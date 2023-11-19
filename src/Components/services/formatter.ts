const IN = new Intl.NumberFormat('ru-RU', {minimumFractionDigits: 0});
export const countNum = (num: number): string => {
    return IN.format(num)
}
export const parseNum = (num: string, d: number = 0): number => {
    const cleanNum = num.replace(/\s/igm, "").replace(",", ".");
    if (d === 0) {
        return parseInt(cleanNum, 10);
    } else {
        return parseFloat(parseFloat(cleanNum).toFixed(d));
    }
}