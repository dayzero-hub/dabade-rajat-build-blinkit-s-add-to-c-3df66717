// A typed DOM query that never returns null. If the element is missing, or is not the
// element type you asked for, it throws an error naming the selector — so a broken page
// says what is wrong instead of "cannot read properties of null".
export function mustQuery<T extends Element>(
  selector: string,
  type: new () => T,
  root: ParentNode = document,
): T {
  const el = root.querySelector(selector);
  if (el === null) {
    throw new Error(`Missing element: ${selector}`);
  }
  if (!(el instanceof type)) {
    throw new Error(`Element ${selector} is not a ${type.name}`);
  }
  return el;
}
