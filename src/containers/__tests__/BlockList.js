import { getBlocks } from 'redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../BlockList';

describe('BlockList Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      blocks: {},
    };

    const expected = {
      blocks: state.blocks,
    };

    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('returns function that dispatch actions', () => {
    const expected = {
      getBlocks: () => getBlocks(),
    };

    const props = mapDispatchToProps(() => {});

    expect(props).toEqual(expected);
  });
});
