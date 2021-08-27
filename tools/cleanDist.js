import { existsSync, lstatSync, readdirSync, rmdirSync, unlinkSync} from 'fs';

export default function(path) {
  if (!existsSync(path)) return;

  readdirSync(path).forEach(file => {
    const curPath = path + "/" + file;
    lstatSync(curPath).isDirectory() ? deleteFolderRecursive(curPath) : unlinkSync(curPath);
  });

  rmdirSync(path);
};
