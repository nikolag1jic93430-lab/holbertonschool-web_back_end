export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskInside = true;  // On utilise un nom différent ou on bloque la portée
    const task2Inside = false;
  }

  return [task, task2];
}