import { toast } from 'react-toastify';

class ValidaCNPJ {
  constructor() {
    this.errors = [];
    this.cnpj = '';
  }

  validaCNPJ = (cnpj) => {
    this.cnpj = String(cnpj);
    this.cnpj = this.cnpj.replace(/[^\d]+/g, '') || '';

    this.#validateDigits();

    if (this.errors.length > 0) {
      this.errors.forEach((error) => {
        toast.error(error);
      });
      this.errors = [];
      return;
    }

    const cnpjWithoutValidatorsDigits = this.cnpj.substring(0, 12);

    const validatorDigit1 = this.#generateDigit(cnpjWithoutValidatorsDigits);
    const validatorDigit2 = this.#generateDigit(
      cnpjWithoutValidatorsDigits + validatorDigit1
    );
    const cnpjValidator =
      cnpjWithoutValidatorsDigits + validatorDigit1 + validatorDigit2;

    if (cnpjValidator !== this.cnpj) {
      toast.error('O CNPJ inserido é inválido.');
    }

    // eslint-disable-next-line consistent-return
    return true;
  };

  // eslint-disable-next-line class-methods-use-this
  #generateDigit(cnpjWithoutValidatorsDigits) {
    let soma = 0;
    let multiplicator = 5;
    if (cnpjWithoutValidatorsDigits.length > 12) {
      multiplicator = 6;
    }

    [...cnpjWithoutValidatorsDigits].forEach((digit) => {
      soma += multiplicator * Number(digit);
      multiplicator -= 1;
      if (multiplicator < 2) {
        multiplicator = 9;
      }
    });

    return soma % 11 < 2 ? '0' : String(11 - (soma % 11));
  }

  #validateDigits() {
    if (!this.cnpj) this.errors.push("O campo 'CNPJ' é obrigatório.");

    if (this.cnpj.length !== 14)
      this.errors.push("O campo 'CNPJ' precisa ter exatamente 14 caracteres.");
  }
}

export default new ValidaCNPJ();
