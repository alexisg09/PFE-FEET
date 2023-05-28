import fs from 'fs';
import path from 'path';

export function getAdvicesData() {
    const filePath = path.join(process.cwd(), 'data', 'advices.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const advicesData = JSON.parse(fileData);
    return advicesData;
  }