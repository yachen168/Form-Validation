export default {
    creatAccount: {
        checkAccount: /^[A-z0-9]+@[A-z]+\.com{1}$/, // 英文或數字@英文.com
        checkPassword: /^[\d|A-z]{8,}$/ // 至少 8 個英文或數字
    },
    generalInformation: {
        checkPhoneNumber: /^09[\d]{8}$/, // 09開頭10個數字
        checkAddress: /[\u4e00-\u9fa5]/, // 至少一個中文字
    },
    paymentMethod: {
        checkCardNumber: /^(\d{4}\s){3}\d{4}$/, // 16個數字(4個一組)
        checkBankName: /^[A-z]{2,}$/ // 至少兩個英文字
    }
}