import { getIn } from 'immutable';
import { Selector, RequestMock, RequestLogger } from 'testcafe';
import i18n from '../../app/i18n/i18n';
import { getSelector } from './helpers';

const getRegisterButton = id => Selector('input').withAttribute('name', id);

const assertNoConsoleErrors = async t => {
  const { error } = await t.getBrowserConsoleMessages();
  await t.expect(error).eql([]);
};


// const envAPI = require('../../app/env_api.json');

// const params = window.location.search.replace('?', '');
// const env = params.split('=')[1];

// const sdkUrl = envAPI.prod;

// const r = `${sdkUrl}/mailbox/addresses/`.replace('/', '\/');
// const serviceRegex = new RegExp(r, 'i');

const registrationMock = RequestMock()
  .onRequestTo({
    url: new RegExp(`https:\/\/apiv1.telios.io\/mailbox\/addresses\/(.*)`, 'i'),
    method: 'GET',
    isAjax: false
  })
  .respond({ data: [] }, 200, {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS, HEAD, PUT, POST',
    'access-control-allow-headers': 'Content-Type'
  });

// const logger = RequestLogger(
//   {
//     url: 'https://apiv1.telios.io/mailbox/addresses/tester@telios.io',
//     method: 'GET',
//     isAjax: false
//   },
//   {
//     logRequestHeaders: true,
//     logRequestBody: true,
//     logResponseHeaders: true,
//     logResponseBody: true
//   }
// );

fixture`Login Screen`
  .page('../../app/login_window/index.html')
  // .requestHooks(registrationMock)
  // .afterEach(assertNoConsoleErrors);

test('Go to registration', async t => {
  await t
    .click(await getSelector('login-component-button-register'))
    .expect((await getSelector('register-component-button-next')).exists).notOk();

  await t
    .typeText(await getSelector('register-component-form-betacode'), 'b');

  await t
    .expect((await getSelector('register-component-form-error-betacode')).textContent).contains('Invalid Beta Access Code.')
    .expect((await getSelector('register-component-button-next')).exists).notOk();

  await t
    .click(await getSelector('register-component-form-betacode'))
    .pressKey('delete')
    .expect((await getSelector('register-component-form-error-betacode')).textContent).contains('Access Code Required to Register')
    .expect((await getSelector('register-component-button-next')).exists).notOk();

  await t
    .typeText(await getSelector('register-component-form-betacode'), 'btester1')
    .expect((await getSelector('register-component-button-next')).exists).ok()
    .click(await getSelector('register-component-button-next'));

});
