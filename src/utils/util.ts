const dateToYYYYMMDD = (dateString: string): string => {
    const date = new Date(dateString);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const YYYYMMDD = `${y}/${("" + m).padStart(2, "0")}/${("" + d).padStart(
        2,
        "0"
    )}`;
    return YYYYMMDD;
};

export { dateToYYYYMMDD };
