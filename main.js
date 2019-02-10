const dtag = {
  main_title: 'DTAG',
  description: 'JS tag templating',
  name: {
    first: 'Eder',
    last: 'Marques',
  },
};

const elements = Array.prototype.slice.call(document.getElementsByTagName('*'));

elements.filter(element => element.getAttribute('dtag')).forEach(element => {
  const dtvalue = element.getAttribute('dtag');
  eval(`element.innerHTML = dtag.${dtvalue.replace('-', '.')};`);
});