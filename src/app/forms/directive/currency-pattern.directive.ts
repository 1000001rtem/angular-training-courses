import {Directive, ElementRef, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: 'input[currencyPattern]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CurrencyPatternDirective,
    multi: true
  }]
})
export class CurrencyPatternDirective implements Validator {

  @Input()
  range: number = 0;

  separator = ' ';

  constructor(private elementRef: ElementRef) {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate = (currency: FormControl): ValidationErrors | null => {
    if (!this.range || !currency.value) {
      return null;
    }

    if (!/\d| /.test(currency.value)) {
      return {
        currency: currency.value
      };
    }
    const cleanValue = currency.value.toString().replace(this.separator, '');
    const n = ~~(cleanValue.length / 3);

    const digitsArray = (r: number) => {
      let digits: (RegExp | string)[] = ['1'];
      for (let i = 0; i < r; i++) {
        digits = [...digits, this.separator, '000'];
      }

      return digits.join('');
    };

    if (this.range < n) {
      return {
        currency: currency.value,
        min: 0,
        max: digitsArray(this.range)
      };
    }
    return null;
  };

  // mask = (value: string) => {
  //   const separator = ' ';
  //   const rub = [separator, 'р'];
  //   const cleanValue = value.replace(rub.join(), '').split('.')[0].replace(this.nan, '');
  //
  //   const n = ~~(cleanValue.length / 3);
  //
  //   const maskArray = (k: number) => {
  //     let digits: (RegExp | string)[] = [];
  //     for (let i = 0; i < k; i++) {
  //       digits = [...digits, separator, /\d/, /\d/, /\d/];
  //     }
  //
  //     const mask = cleanValue === '' ? [/\d/, separator, ...rub] :
  //       [...Array(cleanValue.length - 3 * k).fill(/\d/), ...digits, ...rub];
  //     return mask;
  //   };
  //
  //   if (cleanValue.length === 3 * n) {
  //     return maskArray(n - 1);
  //   }
  //
  //   return maskArray(n);
  // };
}
