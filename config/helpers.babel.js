import path from 'path';
const ROOT = path.resolve(__dirname, '..');

// Determine automagically the root folder and create a path from it
export function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

export function pathConcat(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, args);
}
