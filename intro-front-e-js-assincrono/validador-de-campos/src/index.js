import validator from 'validator';

const validatorInput = document.querySelector('input');
const validatorBtn = document.querySelector('button');
const validatorSelect = document.querySelector('select');
const result = document.querySelector('p');

validatorBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const values = {
    cpf: validator.isTaxID(validatorInput.value, 'pt-BR'),
    hexColor: validator.isHexColor(validatorInput.value),
    email: validator.isEmail(validatorInput.value),
    uuid: validator.isUUID(validatorInput.value, 4),
    url: validator.isURL(validatorInput.value),
  };
  result.innerHTML = `A validação retornou ${values[validatorSelect.value]}`;
});
