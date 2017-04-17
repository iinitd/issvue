import axios from 'axios';
import config from '../config'
import * as session from './session';

var api = 'https://api.github.com/repos/';
var token = config.repo.token;

export function getIssue() {
    const url = api + config.repo.user + '/' + config.repo.repo + '/issues' + '?token=' + token;
    if (!session.get('res')) {
        return axios.get(url)
            .then((res) => {
                console.dir('from axios')
                session.set('res', res)
                return res
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
    const url = api + config.repo.user + '/' + config.repo.repo + '/issues/' + id + '/comments' + '?token=' + token;
    if (!session.get('c' + id)) {
        return axios.get(url)
            .then((res) => {
                console.dir('from axios')
                session.set('c' + id, res)
                return res;
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