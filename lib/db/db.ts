import fs from 'fs/promises';
import path from 'path';

function getFilePath(resource: string) {
    return path.join(process.cwd(), 'data', `${resource}.json`);
}

async function readDB<T>(resource: string): Promise<T[]> {
    const file = await fs.readFile(getFilePath(resource), 'utf-8');
    return JSON.parse(file);
}

async function writeDB<T>(resource: string, data: T[]): Promise<void> {
    await fs.writeFile(getFilePath(resource), JSON.stringify(data, null, 2));
}

export async function findAll<T>(resource: string): Promise<T[]> {
    return readDB<T>(resource);
}

export async function findOne<T extends Record<string, any>>(
    resource: string,
    query: Partial<T>
): Promise<T | undefined> {
    const data = await readDB<T>(resource);
    return data.find(item =>
        Object.entries(query).every(([key, value]) => item[key] === value)
    );
}

export async function insertOne<T extends { id?: number }>(
    resource: string,
    newItem: T
): Promise<T> {
    const data = await readDB<T>(resource);
    const id = data.length ? Math.max(...data.map((i: any) => i.id ?? 0)) + 1 : 1;
    const itemWithId = { ...newItem, id };
    await writeDB(resource, [...data, itemWithId]);
    return itemWithId;
}

export async function updateOne<T extends { id: number }>(
    resource: string,
    id: number,
    updates: Partial<T>
): Promise<T | null> {
    const data = await readDB<T>(resource);
    const index = data.findIndex((item: any) => item.id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...updates };
    await writeDB(resource, data);
    return data[index];
}

export async function deleteOne<T extends { id: number }>(
    resource: string,
    id: number
): Promise<boolean> {
    const data = await readDB<T>(resource);
    const filtered = data.filter((item: any) => item.id !== id);
    if (filtered.length === data.length) return false;
    await writeDB(resource, filtered);
    return true;
}