import { renderHook, act } from '@testing-library/react-hooks';

import useToggle from './useToggle';

describe('useToggle', () => {
  it('toggles the value', () => {
    const { result } = renderHook(useToggle);

    expect(result.current.value).toBeFalsy();

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBeTruthy();

    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBeFalsy();
  });

  it('uses the initial value as its default value', () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBeTruthy();
  });

  it('sets the value correctly', () => {
    const { result } = renderHook(useToggle);

    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBeTruthy();

    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBeFalsy();
  });
});
