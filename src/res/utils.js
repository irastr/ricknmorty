/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import Logger from './Logger'
import queryString from "query-string";
import {LayoutAnimation} from "react-native";


type Character = {}

export const fetchData = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);
            // Logger.outgoing(url); //fix
            if (response.ok) {
                Logger.outgoing(`${response.status}`, url);
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

//ad options for post in fetchData

/**
 * Custom hook for api calls. Accepts url and limit
 */

export const useFilter = (url: number, options, filters): [Character[], boolean] => {
    const baseUrl = 'https://rickandmortyapi.com/api/';
    const [data, setData] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const makeApiCall = async () => {
            try {
                const json = await fetchData(`${baseUrl}/${url}?${queryString.stringify(options)}`);
                // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setData(options.page > 1 ? [...data, ...json.results] : (json.results));
                setLoading(false);
            } catch(err) {
                options.page === 1 && setData([]);
                setLoading(false);
                console.log('Error! ' + err);
            }
        };
        makeApiCall()
    }, [url, options, filters]);
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
