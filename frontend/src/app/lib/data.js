import {load} from './storage.js'
import { popupE } from "@/app/lib/trigger"

export function getData(setData,endpoint,parameters, token=load('token')) {
    popupE('Processing', 'Please wait...')
    //map parameters to get parameter format
    let params = new URLSearchParams(parameters).toString();
    console.log('Payload :: ', params)
    fetch(`${process.env.NEXT_PUBLIC_AFIDA_BASE}${endpoint}?${params}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
    })
    .then(response => response.json())
    .then(data => {
        console.log(`From ${endpoint}`, data)
        if (data.error) popupE('Error', data.error)
        else setData(data);
        if (data.message) popupE('Success', data.message)
    })
    .catch(err => {
        console.log(err)
        popupE('Error', 'Server Error')
    });
}

export function postData(setData,data,endpoint,token = load('token')) {
    popupE('Processing', 'Please wait...')
    fetch(`${process.env.NEXT_PUBLIC_AFIDA_BASE}${endpoint}`, {
        method: "POST",
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(`From ${endpoint}`, data)
        if (data.error) popupE('Error', data.error)
        if (data.message) popupE('Success', data.message)
        setData(data);
    })
    .catch(err => {
        console.log(err)
        popupE('Error', 'Server Error')
    });
}

export function fetcher([endpoint,parameters, token=load('token')]) {
    let params = new URLSearchParams(parameters).toString();
    console.log(`Payload to ${endpoint} :: `, params)
    return fetch(`${process.env.NEXT_PUBLIC_AFIDA_BASE}${endpoint}?${params}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
    })
    .then(response => response.json())
}