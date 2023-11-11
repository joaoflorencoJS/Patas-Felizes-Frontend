import { toast } from 'react-toastify';

class ValidaCPF {
  constructor() {
    this.errors = [];
    this.cpf = '';
  }

  validaCpf(cpf) {
    this.cpf = String(cpf);
    this.cpf = this.cpf.replace(/[^\d]+/g, '') || '';

    this.#validateDigits();

    if (this.errors.length > 0) {
      this.errors.forEach((error) => {
        toast.error(error);
      });
      this.errors = [];
      return;
    }

    const cpfWithoutValidatorsDigits = this.cpf.substring(0, 9);

    const validatorDigit1 = this.#generateDigit(cpfWithoutValidatorsDigits);
    const validatorDigit2 = this.#generateDigit(
      cpfWithoutValidatorsDigits + validatorDigit1
    );
    const cpfValidator =
      cpfWithoutValidatorsDigits + validatorDigit1 + validatorDigit2;

    if (cpfValidator !== this.cpf) {
      toast.error('O CPF inserido é inválido.');
    }

    // eslint-disable-next-line consistent-return
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  #generateDigit(cpfWithoutValidatorsDigits) {
    let soma = 0;
    let multiplicator = 10;
    if (cpfWithoutValidatorsDigits.length > 9) {
      multiplicator = 11;
    }

    [...cpfWithoutValidatorsDigits].forEach((digit) => {
      soma += multiplicator * Number(digit);
      multiplicator -= 1;
    });

    return soma % 11 < 2 ? '0' : String(11 - (soma % 11));
  }

  #validateDigits() {
    if (!this.cpf) this.errors.push("O campo 'CPF' é obrigatório.");

    if (this.cpf.length !== 11)
      this.errors.push("O campo 'CPF' precisa ter exatamente 11 caracteres.");
  }
}

export default new ValidaCPF();
