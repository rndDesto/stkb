import * as fetch from '../fetch';
import { get, post } from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
}));

describe('src/utils/fetch', () => {
  test('loginUser', async () => {
    post.mockResolvedValueOnce({ data: 'sukses' });
    const result = await fetch.loginUser('tes');
    expect(result).toBe('sukses');

    post.mockRejectedValueOnce({});
    try { await fetch.loginUser('tes'); }
    catch (e) { expect(e.status).toBe('error'); }

    post.mockRejectedValueOnce({ response: {} });
    try { await fetch.loginUser('tes'); }
    catch (e) { expect(e.status).toBe('error'); }

    post.mockRejectedValueOnce({ response: { data: 'gagal' } });
    try { await fetch.loginUser('tes'); }
    catch (e) { expect(e).toBe('gagal'); }
  });
  test('dashboard', async () => {
    get.mockResolvedValueOnce({ data: 'sukses' });
    const result = await fetch.dashboard('tes');
    expect(result).toBe('sukses');
  });
});
