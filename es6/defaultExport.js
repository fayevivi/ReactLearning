// 每個檔案只能有一個預設匯出
export default {
    myName: 'vvvv',
    fn() {
        console.log('i am vvvv')
    }
}

// 具名匯出: 每個檔案可有多個句明匯出
export const myNAme = 'vvanna';

export function fn(){
    console.log('i am vvanna')
}