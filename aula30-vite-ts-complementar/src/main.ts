import './themes/global.css';

const appRef = document.querySelector<HTMLDivElement>('#app');

const el = (tagName: string, textContent: string): HTMLElement => {
  const elRef = document.createElement(tagName);
  elRef.textContent = textContent;
  return elRef;
}

let count = 0;

const h2Ref = el('h2', `Count is ${count}`) as HTMLHeadingElement;
const buttonRef = el('button', 'Click me') as HTMLButtonElement;

buttonRef.addEventListener('click', () => {
  count += 1;
  h2Ref.textContent = `Count is ${count}`;
  console.log("cliquei");
});

appRef.appendChild(h2Ref);
appRef.appendChild(buttonRef);