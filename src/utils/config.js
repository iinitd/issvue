import axios from 'axios';
import * as session from './session';

export function get(){

    const url = "/static/config.json";

    if (!session.get('conf')) {
        return axios.get(url)
            .then((conf) => {
                console.dir('conf from axios')
                session.set('conf', conf.data)
                global.COURSES = 'xxxxx'
                return conf.data
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        return new Promise(function (resolve, reject) {
            console.dir('conf from ss')
            resolve(session.get('conf'));
        });
    }
}

export function init(){

    const url = "/static/config.json";

    if (!session.get('conf')) {
        return axios.get(url)
            .then((conf) => {
                console.dir('conf from axios')
                session.set('conf', conf.data)
                global.COURSES = 'xxxxx'
                return conf.data
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        return new Promise(function (resolve, reject) {
            console.dir('conf from ss')
            resolve(session.get('conf'));
        });
    }
}