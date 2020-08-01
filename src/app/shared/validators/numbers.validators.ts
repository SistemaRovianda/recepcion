import { FormControl } from '@angular/forms';

export class CustomValidators {
  constructor() {}

  static textAndNumbers(control: FormControl): { [key: string]: boolean } {
    const regex = /^[A-Z0-9ÑÁÉÍÓÚa-zñáéíóú,.]*((\s)?([A-Z0-9ÑÁÉÍÓÚa-z-ñáéíóú,.])+)*$/g;
    if (!regex.test(control.value)) {
      return {
        invalidCharacters: true,
      };
    }
    return null;
  }

  static text(control: FormControl): { [key: string]: boolean } {
    const regex = /^[A-ZÑÁÉÍÓÚa-zñáéíóú,.]+((\s)?([A-ZÑÁÉÍÓÚa-z-ñáéíóú,.])+)*$/g;

    if (!regex.test(control.value)) {
      return {
        invalidText: true,
      };
    }

    return null;
  }

  static integerForTemperature(
    control: FormControl
  ): { [key: string]: boolean } {
    const regex = /^[-]?(1?[8]|1?[0-9]|[0-4])$/g;

    if (!regex.test(control.value)) {
      return {
        invalidTemp: true,
      };
    }
    return null;
  }

  static integerForWeight(control: FormControl): { [key: string]: boolean } {
    const regex = /^([1-9]{1,5}|[1-9][0-9]{0,4}?.[0-9]{1,2}?)$/g;

    if (!regex.test(control.value)) {
      return {
        invalidWeight: true,
      };
    }

    return null;
  }

  static integerNumber(control: FormControl): { [key: string]: boolean } {
    const regex = /^([1-9]{1,5}|[1-9][0-9]{0,4})$/g;

    if (!regex.test(control.value)) {
      return {
        invalidNumber: true,
      };
    }

    return null;
  }
}
