import b64ToFile from '../base64ToFile';

describe('src/utils/base64ToFile', () => {
  test('convert base64', () => {
    const sampleBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgE';
    const sampleFileName = 'image.jpg';
    const convertedFile = b64ToFile(sampleBase64, sampleFileName);
    expect(typeof convertedFile).toBe('object');
  });

  test('negative case', () => {
    const convertedFile = b64ToFile();
    expect(convertedFile).toBeFalsy();
  });
});
