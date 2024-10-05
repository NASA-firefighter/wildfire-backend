import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as csvtojson from 'csvtojson'; // Correct import for csvtojson

@Injectable()
export class FiresService {
  async getFireData(): Promise<any> {
    const url =
      'https://firms.modaps.eosdis.nasa.gov/api/area/csv/e2f39e4db008b224206b270ed8bae06f/VIIRS_SNPP_NRT/world/1';

    const response = await axios.get(url, {
      responseType: 'text', // Fetch the CSV as plain text
    });

    const csvData = response.data;

    // Convert the CSV data to JSON
    const jsonData = await csvtojson().fromString(csvData);

    // Return the JSON data
    return jsonData;
  }
}
