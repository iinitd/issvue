import axios from 'axios';


var api = 'https://api.github.com/repos/';

export function init(){

    const url = "./static/config.json";

    if (!getSession('conf')) {
        return axios.get(url)
            .then((conf) => {
                console.dir('conf from axios')
                setSession('conf', conf.data)
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
            resolve(getSession('conf'));
        });
    }
}


function setSession(key, val) {
    return sessionStorage.setItem(key, JSON.stringify(val));
}

function getSession(key) {
    return JSON.parse(sessionStorage.getItem(key))
}

export function getIssue() {
    const cfg = global.cfg
    const url = api + cfg.repo.user + '/' + cfg.repo.repo + '/issues' + '?token=' + cfg.repo.token;
    if (!getSession('res')) {
        return axios.get(url)
            .then((res) => {
                console.dir('from axios')
                setSession('res', res.data)
                return res.data
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss')
            resolve(getSession('res'));
        });
    }
}

export function getComs(id) {
    const cfg = global.cfg
    const url = api + cfg.repo.user + '/' + cfg.repo.repo + '/issues/' + id + '/comments' + '?token=' + cfg.repo.token;
    if (!getSession('c' + id)) {
        return axios.get(url)
            .then((res) => {
                console.dir('from axios')
                setSession('c' + id, res.data)
                return res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss')
            resolve(getSession('c' + id));
        });
    }
}