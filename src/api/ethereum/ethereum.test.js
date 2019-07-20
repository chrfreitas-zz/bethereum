import Ethereum from './ethereum';

describe('Ethereum API', () => {
  it('should get last 5 block in the blockchain', async () => {
    const blocks = await Ethereum.getLastBlocks(5);

    expect(blocks).toHaveLength(5);
  });
});
