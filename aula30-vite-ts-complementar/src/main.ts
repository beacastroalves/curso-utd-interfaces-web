import './themes/global.css';
import { appRef, el } from './utils/dom.util';

appRef.classList = 'flex flex-col gap-2'

const div1Ref = el('div', '', 'flex gap-2');

const inputRef = el(
  'input', null,
  'px-2 text-fuchsia-800 border-fuchsia-500 outline-fuchsia-800 rounded-sm border-2',
  { type: "text", name: "item" },
  div1Ref
) as HTMLInputElement;

const buttonRef = el(
  'button',
  'Adiciona item',
  'px-6 cursor-pointer bg-fuchsia-500 hover:bg-fuchsia-600 rounded-sm text-gray-100',
  {},
  div1Ref
) as HTMLButtonElement;

const ulRef = el('ul', null, 'flex flex-col gap-2 rounded-xs select-none');

const storage = JSON.parse(localStorage.getItem('items'));
let items: { id: number, value: string, checked?: boolean }[] = storage ? storage : [];

const render = () => {
  ulRef.innerHTML = ``;

  items.forEach(item => {
    const liRef = el(
      'li',
      null,
      "flex gap-2 px-2 bg-fuchsia-800 text-gray-100 rounded-sm",
      {},
      ulRef
    );

    const itemId = `item-${item.id}`;

    const checkboxRef = el(
      'input',
      null,
      'cursor-pointer',
      { id: itemId, type: 'checkbox'},
      liRef
    ) as HTMLInputElement;
    checkboxRef.checked = item.checked;

    const labelRef = el(
      'label',
      item.value,
      'py-2 cursor pointer w-full cursor-pointer',
      { for: itemId },
      liRef
    );

    if (item.checked) {
      labelRef.classList.add('line-through');
    } else {
      labelRef.classList.remove('line-through');
    }

    const btnEditRef = el(
      'button',
      'Editar',
      'bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 cursor-pointer px-4',
      {},
      liRef
    );

    const btnDeleteRef = el(
      'button',
      'Deletar',
      'bg-rose-400 hover:bg-rose-600 active:bg-rose-700 cursor-pointer px-4',
      {},
      liRef
    );

    checkboxRef.addEventListener('change', () => {
      if (checkboxRef.checked) {
        const newItem = { ...item, checked: true };
        items = items.filter(i => i !== item);
        items.push(newItem);
      } else {
        item.checked = false;
        items = items.sort((a, b) => Number(a.checked) - Number(b.checked));
      }

      localStorage.setItem('items', JSON.stringify(items));
      render();
    });

    btnEditRef.addEventListener('click', () => {
      items = items.filter(i => i !== item);
      render();

      inputRef.value = item.value;
      inputRef.focus();
    });

    btnDeleteRef.addEventListener('click', () => {
      items = items.filter(i => i !== item);
      localStorage.setItem('items', JSON.stringify(items));
      render();
    });
  });
};


const onSubmit = () => {
  if (!inputRef.value) {
    return
  };

  items.push({ id: items.length + 1, value: inputRef.value });
  localStorage.setItem('items', JSON.stringify(items));
  render();

  inputRef.value = "";
  inputRef.focus();
};

inputRef.addEventListener('keypress', e => {
  if(e.key === "Enter") {
    onSubmit();
  }
});

buttonRef.addEventListener('click', onSubmit);

render();