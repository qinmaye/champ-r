import { promises as fs, constants as fsConstants } from 'fs';
import * as path from 'path';

import appStore from '../src/native/config';

export async function ifIsCNServer(dir: string) {
  const target = path.join(dir, `TCLS`, `Client.exe`);
  let result = false;
  try {
    await fs.access(dir, fsConstants.F_OK);
    await fs.access(target, fsConstants.F_OK);
    result = true;
  } catch (err) {
    console.info(err);
  }

  appStore.set(`appendGameToDir`, result);
  console.log('shouldAppendGameToDir', result);
  return result;
}
