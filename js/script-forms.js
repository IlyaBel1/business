"use strict";

console.log('hello world');


const mainForm = document.forms.mainForm;

// for name input
const mainFormInputName = mainForm.userName;
const mainFormInputNamePlaceholder = mainFormInputName.placeholder;

mainFormInputName.addEventListener('focus', function (e) {
	mainFormInputName.placeholder = '';
});
mainFormInputName.addEventListener('blur', function (e) {
	mainFormInputName.placeholder = mainFormInputNamePlaceholder;
});

// for email input
const mainFormInputMail = mainForm.userMail;
const mainFormInputMailPlaceholder = mainFormInputMail.placeholder;

mainFormInputMail.addEventListener('focus', function (e) {
	mainFormInputMail.placeholder = '';
});
mainFormInputMail.addEventListener('blur', function (e) {
	mainFormInputMail.placeholder = mainFormInputMailPlaceholder;
});

// for tel input
const mainFormInputPhone = mainForm.userPhone;
const mainFormInputPhonePlaceholder = mainFormInputPhone.placeholder;

mainFormInputPhone.addEventListener('focus', function (e) {
	mainFormInputPhone.placeholder = '';
});
mainFormInputPhone.addEventListener('blur', function (e) {
	mainFormInputPhone.placeholder = mainFormInputPhonePlaceholder;
});

//                  
//    SECOND ONE    
//                  

const contactusForm = document.forms.contactusForm;

// for name input
const contactusFormInputName = contactusForm.userName;
const contactusFormInputNamePlaceholder = contactusFormInputName.placeholder;

contactusFormInputName.addEventListener('focus', function (e) {
	contactusFormInputName.placeholder = '';
});
contactusFormInputName.addEventListener('blur', function (e) {
	contactusFormInputName.placeholder = contactusFormInputNamePlaceholder;
});

// for mail input
const contactusFormInputMail = contactusForm.userMail;
const contactusFormInputMailPlaceholder = contactusFormInputMail.placeholder;

contactusFormInputMail.addEventListener('focus', function (e) {
	contactusFormInputMail.placeholder = '';
});
contactusFormInputMail.addEventListener('blur', function (e) {
	contactusFormInputMail.placeholder = contactusFormInputMailPlaceholder;
});









