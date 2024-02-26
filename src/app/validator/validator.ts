import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value || '';

        // Check if the password contains at least one uppercase letter, one digit, and has a minimum length of 8 characters
        const hasUppercase = /[A-Z]/.test(value);
        const hasDigit = /\d/.test(value);
        const hasMinimumLength = value.length >= 8;

        // Return an error if the conditions are not met
        return !hasUppercase || !hasDigit || !hasMinimumLength ? { customPassword: true } : null;
    };
}

export function userNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value || '';

        // Check if the userName contains only alphanumeric characters and has a minimum length of 3 characters
        const isValid = /^[a-zA-Z0-9]+$/.test(value) && value.length >= 3;

        // Return an error if the conditions are not met
        return !isValid ? { userName: true } : null;
    };
}

export function fullNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value || '';

        // Check if the fullName contains only letters and has a minimum length of 2 characters
        const isValid = /^[a-zA-Z\sà-ỹ]+$/.test(value) && value.length >= 2;

        // Return an error if the conditions are not met
        return !isValid ? { fullName: true } : null;
    };
}

export function addressValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value || '';

        // Check if the address has a minimum length of 5 characters
        const isValid = value.length >= 5;

        // Return an error if the conditions are not met
        return !isValid ? { address: true } : null;
    };
}

export function ageValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: number = control.value || 0;

        // Check if the age is a positive number and greater than or equal to 18
        const isValid = value > 0 && value >= 18 && value <= 60;

        // Return an error if the conditions are not met
        return !isValid ? { age: true } : null;
    };
}
