export function filterData<T extends Record<string, any>>(data: T[], filters: Partial<T>): T[] {
    return data.filter(item =>
        Object.entries(filters).every(([key, value]) => {
            if (value === undefined || value === '') return true;
            if (typeof value === 'string') return item[key]?.toLowerCase().includes(value.toLowerCase());
            return item[key] === value;
        })
    );
}