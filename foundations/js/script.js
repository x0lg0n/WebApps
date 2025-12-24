document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.textContent = 'JavaScript is connected.';
  document.body.appendChild(el);

  const btn = document.createElement('button');
  btn.textContent = 'Click me';
  document.body.appendChild(btn);
  btn.addEventListener('click', () => {
    el.textContent = 'Button clicked!';
  });
});
