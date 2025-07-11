export const appRef = document.querySelector<HTMLDivElement>('#app');

export const el = (
  tagName: string,
  textContent: string = '',
  classList: string = '',
  attributes: { [qualifiedName: string]: string } = {},
  parent: HTMLElement = appRef
): HTMLElement => {
  const elRef = document.createElement(tagName);

  if (textContent) {
    elRef.textContent = textContent;
  }

  Object.keys(attributes).forEach(key => {
    elRef.setAttribute(key, attributes[key]);
  })

  if (classList) {
    elRef.classList = classList;
  }

  parent.appendChild(elRef);
  return elRef;
};