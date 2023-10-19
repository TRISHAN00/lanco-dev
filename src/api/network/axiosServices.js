import axios from "axios";
import baseUrl from './baseUrl'



// Create an empty cache object
const cache = {};


export function get(params, useCache = true, cacheTimeInSeconds = 259200) {
    // Create a unique cache key based on the request URL and parameters
    const cacheKey = JSON.stringify(params);

    // Check if the data is already in the cache and if caching is enabled
    if (useCache && cache[cacheKey] && cache[cacheKey].timestamp) {
        const currentTime = Date.now();
        const timeSinceFetch = (currentTime - cache[cacheKey].timestamp) / 1000; // Convert to seconds

        // Check if the cached data has not expired
        if (timeSinceFetch <= cacheTimeInSeconds) {
            // console.log(cache[cacheKey].data);
            return Promise.resolve(cache[cacheKey].data); // Return cached data
        }
    }

    return axios({
        method: 'get',
        url: `${baseUrl.BASE_URL}${params[0] ? params[0] : ''}`,
        params: params[1] ? params[1] : '',
        headers: params[2] ? params[2] : { 'Content-Type': 'application/json' },
    })
        .then((response) => response.data)
        .then((data) => {
            // Cache the data for future use (only if caching is enabled)
            if (useCache) {
                cache[cacheKey] = {
                    data,
                    timestamp: Date.now(), // Store the timestamp of when the data was fetched
                };
                // console.log(data);
            }
            return data;
        });
}


// export function get(params) {
//     return axios({
//         method: 'get',
//         url: `${baseUrl.BASE_URL}${params[0] ? params[0] : ''}`,
//         params: params[1] ? params[1] : '',
//         headers: params[2] ? params[2] : {'Content-Type': 'application/json'}
//     }).then(response => response.data)
// }

export async function post(params) {
    try {
        const result = await axios({
            method: 'post',
            url: `${baseUrl.BASE_URL}${params[0]}`,
            data: params[1],
            headers: params[2] ? params[2] : {'Content-Type': 'application/json'}
        })
        return result.data;

    } catch (err) {

        throw err;
    }
}

export async function postFile(params) {
    try {
        const result = await axios({
            method: 'post',
            url: `${baseUrl.BASE_URL}${params[0]}`,
            data: params[1],
            headers: {"Content-Type": "multipart/form-data"}
        })

        return result.data;

    } catch (err) {
        throw err;
    }
}
