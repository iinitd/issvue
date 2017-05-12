import axios from 'axios';
//import conf from '../config'
import * as session from './session';
import * as config from './config';


var api = 'https://api.github.com/repos/';


export function getIssue() {
    const cfg = global.cfg
    const url = api + cfg.repo.user + '/' + cfg.repo.repo + '/issues' + '?token=' + cfg.repo.token;
    if (!session.get('res')) {
        return axios.get(url)
            .then((res) => {
                console.dir('from axios')
                session.set('res', res.data)
                return res.data
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss')
            resolve(session.get('res'));
        });
    }
}

export function getComs(id) {
    const cfg = global.cfg
    const url = api + cfg.repo.user + '/' + cfg.repo.repo + '/issues/' + id + '/comments' + '?token=' + cfg.repo.token;
    if (!session.get('c' + id)) {
        return axios.get(url)
            .then((res) => {
                console.dir('from axios')
                session.set('c' + id, res.data)
                return res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    else {
        return new Promise(function (resolve, reject) {
            console.dir('from ss')
            resolve(session.get('c' + id));
        });
    }
}