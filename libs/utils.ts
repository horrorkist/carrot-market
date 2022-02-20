export function cls(...classNames: string[]) {
  return classNames.join(" ");
}

export enum InputKind {
  "text",
  "price",
  "phone",
  "email",
}
