import { ConcatNamePipe } from './concat-name.pipe';

describe('ConcatNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatNamePipe();
    expect(pipe).toBeTruthy();
  });
});
