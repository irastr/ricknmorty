export const fetchData = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            } else {
                throw new Error(response.status)
            }
        } catch (error) {
            reject(error)
        }
    });
};

// export const fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw response.status;
//                 }
//             })
//             .then(data => {
//                 resolve(data);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// };


//Промисификация
// в try{}catch{} второй отловит reject() fetch'а , который выполнится когда он не сможет выполнить сетевой запрос(проблемы с сетью или не существует такого сайта)
// а валидация  if (response.ok) уже проверит не вернулась ли ошибка , типа 404 или 500 и если так - отправит это в reject статус  для создаваемого нами промиса

//Использование:
// try {
//     const json = await fetchData(`${baseUrl}/character/?page=${data.page}`);
//     console.log(data, 'data');
// } catch(err) {
//     console.log('Error ' + err);
// }
