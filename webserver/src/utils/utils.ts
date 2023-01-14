import * as fs from 'fs';

export async function readJSONFile(filePath: string): Promise<any> {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
}