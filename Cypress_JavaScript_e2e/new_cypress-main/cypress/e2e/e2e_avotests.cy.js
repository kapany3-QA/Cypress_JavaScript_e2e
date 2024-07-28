import * as authorization_page from "../locators/authorization_page.json";
import * as main_page from "../locators/main_page.json";
import * as store_page from "../locators/store_page.json";
import * as pay_main_page from "../locators/pay_main_page.json";
import * as pay_push_page from "../locators/pay_push_page.json";
// import * as successful_pay_page from "../locators/successful_pay_page.json";
import * as data from "../helpers/default_data.json"

describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('/');                                                  // переходим на сайт https://pokemonbattle.ru/
         cy.get(authorization_page.email).type(data.login);              // вводим логин
         cy.get(authorization_page.password).type(data.password);        // вводим пароль
         cy.get(authorization_page.input_button).click();                // нажимаем кнопку Подтвердить
         cy.get(main_page.shop_button).click();                          // нажимаем кнопку Магазин
         cy.get(store_page.pay_avatar_button).first().click();           // кликаем по кнопке Купить у первого доступного аватара
         cy.get(pay_main_page.card_num).type(data.card_number);          // вводим номер карты
         cy.get(pay_main_page.card_cvc).type(data.card_cvc);             // вводим CVV карты
         cy.get(pay_main_page.card_date).type(data.card_date);           // вводим срок действия карты
         cy.get(pay_main_page.card_name).type(data.card_name);           // вводим имя владельца действия карты
         cy.get(pay_main_page.pay_button).click();                       // нажимаем кнопку Оплатить
         cy.get(pay_push_page.sms_push).type(data.sms_push);             // вводим код подтверждения СМС
         cy.get(pay_push_page.send_button).click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
         cy.get(pay_push_page.home_button).click();                      // возврат на главную
         cy.get(main_page.exit_button).click()                           // разлогин
     });
 });
 