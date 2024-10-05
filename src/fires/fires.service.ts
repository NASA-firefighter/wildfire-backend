import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FiresService {
  async getFireData(): Promise<any> {
    const url = 'https://firms.modaps.eosdis.nasa.gov/api/active-fire-data-url'; // NASA FIRMS API URL
    const response = await axios.get(url, {
      params: {
        // You can add parameters like bounding box, date range, etc.
      },
    });

    const mockData = {
      data: [
        {
          latitude: 37.7749,
          longitude: -122.4194,
          brightness: 400,
          confidence: 100,
          date: '2021-07-01',
        },
        {
          latitude: 37.7749,
          longitude: -122.4194,
          brightness: 400,
          confidence: 100,
          date: '2021-07-01',
        },
      ],
    };
    return mockData;
  }
}
