import { expect } from 'chai';
import axios from 'axios';

let url;

beforeEach(() => {
  url = 'http://localhost:3002/calculate';
});

describe('Calculate', () => {
  it('calculate the sum of two values', async () => {
    const response = await axios.get(url);
    expect(response.status).to.equal(200);
    expect(response.data.result).to.equal(10); // Assuming 4 + 6 = 10 is the default sum
  });

  it('calculate the sum of two provided values', async () => {
    const response = await axios.get(url, { params: { num1: 5, num2: 6 } });
    expect(response.status).to.equal(200);
    expect(response.data.result).to.equal(11); // 5 + 6 = 11
  });

  it('should not calculate an incorrect sum of two values', async () => {
    const response = await axios.get(url, { params: { num1: 5, num2: 6 } });
    expect(response.status).to.equal(200);
    expect(response.data.result).to.not.equal(9); // 5 + 6 != 9
  });
});
