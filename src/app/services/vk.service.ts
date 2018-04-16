import {Injectable} from '@angular/core';

@Injectable()
export class VkService {

  private vk: any;

  constructor() {
    this.vk = VK;
    this.vk.init({apiId: 6450106});
  }

  getNearEvents() {
    return new Promise(resolve => {
      this.vk.Api.call('groups.search', {
        q: ' ',
        type: 'event',
        future: 1,
        v: 5.74
      }, (res) => {
        const ids = res.response.items.map(item => {
          return item.id;
        });
        this.vk.Api.call('groups.getById', {
          group_ids: ids.join(','),
          fields: 'place,activity,description',
          v: 5.74
        }, (resp) => {
          resolve(resp.response);
        });
      });
    });
  }


}
