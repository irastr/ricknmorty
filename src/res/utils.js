/**
 * @format
 * @flow
 */

import React, {useState, useEffect } from 'react';
import Logger from './Logger'

type Character = {}

export const fetchData = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                Logger.incoming(`${response.status}`, url);
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

/**
 * Custom hook for api calls. Accepts page ang options
 */

export const useFetch = (page: number): [Character[], boolean] => {
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://rickandmortyapi.com/api/';
    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const json = await fetchData(`${baseUrl}/character/?page=${page}`);
                setData([...data, ...json.results]);
                setLoading(false);
            } catch(err) {
                setLoading(false);
                console.log('Error! ' + err);
            }
        };
        makeApiCall()
    }, [page]);
    return [data, loading];
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
