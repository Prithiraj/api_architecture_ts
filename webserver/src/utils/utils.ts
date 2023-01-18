import * as fs from 'fs';
import random from 'randomstring';

export async function readJSONFile(filePath: string): Promise<any> {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
}


export default function dataKey(length: any) {
  const options: any = {
    length: length||8,
    capitalization: 'lowercase',
  };
  return `${Date.now()}_${random.generate(options)}`;
}
