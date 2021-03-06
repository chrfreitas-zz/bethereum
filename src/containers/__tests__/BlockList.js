import { mapStateToProps, mapDispatchToProps } from '../BlockList';
import { formatBlocks } from '../BlockList.select';

describe('BlockList Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      blocks: {
        values: [],
        isLoading: false,
      },
    };

    const expected = {
      blocks: state.blocks.values,
      isLoading: false,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('returns getBlocks to dispatch action', () => {
    const props = mapDispatchToProps(() => {});
    expect(props.getBlocks).toBeDefined();
  });
});

describe('BlockList Select', () => {
  it("returns object with some props that's necessary for ui", () => {
    const blocks = [
      {
        difficulty: '0x7e2b97c572615',
        extraData: '0x5050594520737061726b706f6f6c2d6574682d636e2d687a33',
        gasLimit: '0x7a20fd',
        gasUsed: '0x554f94',
        hash:
          '0x3995870ea9b9121065831fa8d73315639b9bd0e945c524b9da71596405e6833e',
        logsBloom:
          '0x81011094140a018110c3050e00120904b182500c82832e808610098023a80404440f001564882a300292c4a2399801000210da000e000801090ca1544074c031c08140d0259022203cc271180001c1224202140d3338c2a8000200170840920290059346aa24c206132a410906000800800807060ca40404c400615240903011042550240041c10f424004248480c815028020044c81180103016110981d006d86053a1240221482a69402d268081f1800443400012888000806422308800701048044420885188c14181012203006212b02120002180c0400008218b0422023e91060008d74003c100860400004224000304002498020851416144000149010',
        miner: '0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c',
        mixHash:
          '0xfa9c77c72f952e8887325135a0af312271aaf00a5c2743ccfe6040bac9e9ac8f',
        nonce: '0x1cec9d680a128553',
        number: '0x7d61af',
        parentHash:
          '0x210d6d121ad6545c022956a6f79f302b93825f5fbdb09c5470bb1b080cb65a4f',
        receiptsRoot:
          '0x25d594e527b22b8c65860cf4dd5613bb83edb32b1b8a4d68ddffe0e9b3546f89',
        sha3Uncles:
          '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
        size: '0x5d89',
        stateRoot:
          '0x853f38f5d051b6c445386b2ba496fe66c3ff1aa59925830b416ff96b21ae1917',
        timestamp: '0x5d390ce9',
        totalDifficulty: '0x25d1ac524f877c376f7',
        transactions: [
          '0x9ed56b13f3cb3cab50dd6ff8d5395d1af8213550132037d287adab67e8e84ed1',
        ],
        transactionsRoot:
          '0x362d5f264a2c18800886a309db1e142413bcd8d01cdb550b109ae587fbc51e09',
        uncles: [],
      },
      {
        difficulty: '0x7e2b97c572615',
        extraData: '0x5050594520737061726b706f6f6c2d6574682d636e2d687a33',
        gasLimit: '0x7a20fd',
        gasUsed: '0x554f94',
        hash:
          '0x3995870ea9b9121065831fa8d73315639b9bd0e945c524b9da71596405e6833e',
        logsBloom:
          '0x81011094140a018110c3050e00120904b182500c82832e808610098023a80404440f001564882a300292c4a2399801000210da000e000801090ca1544074c031c08140d0259022203cc271180001c1224202140d3338c2a8000200170840920290059346aa24c206132a410906000800800807060ca40404c400615240903011042550240041c10f424004248480c815028020044c81180103016110981d006d86053a1240221482a69402d268081f1800443400012888000806422308800701048044420885188c14181012203006212b02120002180c0400008218b0422023e91060008d74003c100860400004224000304002498020851416144000149010',
        miner: '0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c',
        mixHash:
          '0xfa9c77c72f952e8887325135a0af312271aaf00a5c2743ccfe6040bac9e9ac8f',
        nonce: '0x1cec9d680a128553',
        number: '0x7d61af',
        parentHash:
          '0x210d6d121ad6545c022956a6f79f302b93825f5fbdb09c5470bb1b080cb65a4f',
        receiptsRoot:
          '0x25d594e527b22b8c65860cf4dd5613bb83edb32b1b8a4d68ddffe0e9b3546f89',
        sha3Uncles:
          '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
        size: '0x5d89',
        stateRoot:
          '0x853f38f5d051b6c445386b2ba496fe66c3ff1aa59925830b416ff96b21ae1917',
        timestamp: '0x5d390ce9',
        totalDifficulty: '0x25d1ac524f877c376f7',
        transactions: [
          '0x9ed56b13f3cb3cab50dd6ff8d5395d1af8213550132037d287adab67e8e84ed1',
        ],
        transactionsRoot:
          '0x362d5f264a2c18800886a309db1e142413bcd8d01cdb550b109ae587fbc51e09',
        uncles: [],
      },
    ];

    const result = formatBlocks(blocks);
    const expected = [
      {
        text:
          '0x3995870ea9b9121065831fa8d73315639b9bd0e945c524b9da71596405e6833e',
        route:
          '/blocks/0x3995870ea9b9121065831fa8d73315639b9bd0e945c524b9da71596405e6833e',
      },
      {
        text:
          '0x3995870ea9b9121065831fa8d73315639b9bd0e945c524b9da71596405e6833e',
        route:
          '/blocks/0x3995870ea9b9121065831fa8d73315639b9bd0e945c524b9da71596405e6833e',
      },
    ];

    expect(result).toEqual(expected);
  });
});
