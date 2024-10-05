import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as csvtojson from 'csvtojson';

@Injectable()
export class FiresService {
  async getFireData(date: string): Promise<any> {
    const url = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/5d7359a6d0e9d5adc5546281ebcbe071/VIIRS_SNPP_NRT/world/3/${date}`;

    const response = await axios.get(url, {
      responseType: 'text', // Fetch the CSV as plain text
    });

    const csvData = response.data;

    // Convert the CSV data to JSON
    const jsonData = await csvtojson().fromString(csvData);

    // Sort by brightness and select top 100 brightest fires
    const topFireData = jsonData
      .sort((a, b) => parseFloat(b.bright_ti4) - parseFloat(a.bright_ti4))
      .slice(0, 100); // Select top 100

    return topFireData;
  }
}
