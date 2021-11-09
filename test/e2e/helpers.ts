/* eslint import/prefer-default-export: off */
import { ClientFunction, Selector } from 'testcafe';

export const getPageUrl = ClientFunction(() => window.location.href);

export type DataTestId = 
    'login-component-button-register' |
    'register-component-button-next' |
    'register-component-form-betacode' |
    'register-component-form-error-betacode';

export const setDataTestId = (dataTestId: DataTestId) => {
    return dataTestId;
}

export const getSelector = async (dataTestId: DataTestId) => {
    return Selector(`[data-tid="${dataTestId}"]`);
}