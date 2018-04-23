import {Injectable} from '@angular/core';

@Injectable()
export class VkService {

  private vk: any;

  constructor() {
    if (VK) {
      this.vk = VK;
      this.vk.init({apiId: 6450106});
    }
  }

  getNearEvents() {
    return new Promise(resolve => {
      // for dynamically geodecoding
      // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${environment.googleMapsKey}`)
      //   .then(response => {
      //     return response.json();
      //   }).then(json => {
      //   return json.results.filter(point => {
      //     return point.types[0] === 'street_address';
      //   });
      // }).then(results => {
      //   console.log(results);
      //   return results.reduce((result) => {
      //   });
      // });
      this.vk.Api.call('groups.search', {
        q: ' ',
        type: 'event',
        city_id: 95,
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
