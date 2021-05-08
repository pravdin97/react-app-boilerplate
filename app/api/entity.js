import _ from 'lodash';

export default class Entity {
  constructor({baseURL, request}) {
    this.baseURL = baseURL;
    this.request = request;
  }

  get = (params = {}) => {
    return this.request({
      method: 'get',
      url: this.baseURL,
      params,
    }).then((res) => res.data);
  }
  
  getOne = (id) => {
    return this.request({
      method: 'get',
      url: `${this.baseURL}/${id}`,
    }).then((res) => res.data);
  }

  create = (data) => {
    return this.request({
      method: 'post',
      url: this.baseURL,
      data,
    }).then((res) => res.data);
  }

  update = (data) => {
    return this.request({
      method: 'patch',
      url: `${this.baseURL}/${data.id}`,
      data: _.omit(data, 'id'),
    }).then((res) => res.data);
  }

  remove = (id) => {
    return this.request({
      method: 'delete',
      url: `${this.baseURL}/${id}`,
    }).then((res) => res.data);
  }
}
