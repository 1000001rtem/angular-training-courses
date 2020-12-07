import {Component} from '@angular/core';
import {AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  phoneValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    const phone = control.value;
    const pattern = /[0-5]{11}/;
    if (!pattern.test(phone)) {
      return {
        phoneValidate: phone
      };
    }
    return null;
  };

  newValidator = (pattern: RegExp) => {
    return (control: FormControl): ValidationErrors | null => {
      const phone = control.value;
      if (!pattern.test(phone)) {
        return {
          phoneValidateValue: phone,
          phoneValidatePattern: pattern
        };
      }
      return null;
    };
  };

  asyncPhoneValidator: AsyncValidatorFn = (control: FormControl): Observable<ValidationErrors | null> => {
    const phone = control.value;
    const pattern = /[0-5]{11}/;
    if (!pattern.test(phone)) {
      return of({phoneValidate: phone}).pipe(delay(10000));
    }
    return of(null).pipe(delay(10000));
  };

  asyncPhoneValidatorPromise: AsyncValidatorFn = (control: FormControl): Promise<ValidationErrors | null> => {
    const phone = control.value;
    const pattern = /[0-5]{11}/;
    if (!pattern.test(phone)) {
      return Promise.resolve({phoneValidate: phone});
    }
    return Promise.resolve(null);
  };

  myForm: FormGroup = new FormGroup({
      userName: new FormControl('Артём', Validators.required),
      userEmail: new FormControl('av.eremin@i-teco.ru', Validators.email),
      userPhone: new FormControl('8(906) 042-42-42',
        [
          this.phoneValidator
        ]
      ),
      phones: new FormArray([
        new FormControl('8(906) 042-42-42',
          this.phoneValidator),
        new FormControl('8(906) 042-42-42',
          Validators.pattern('[0-9]{11}'))
      ]),
      userAge: new FormControl('31',
        [Validators.min(0), Validators.max(120)]
      ),
    }
  );

  submit = () => {
    console.log(this.myForm);
  };

  addPhone = () => {
    (this.myForm.controls.phones as FormArray).push(new FormControl('',
      null,
      this.asyncPhoneValidatorPromise
      // this.asyncPhoneValidator
      // [
      //   // this.phoneValidator,
      //   // this.newValidator(/[0-9]/),
      //   // Validators.required
      // ]
    ));
  };

}
