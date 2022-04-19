import { act, renderHook } from "@testing-library/react-hooks";
import useCollections from "../useCollections";
const loadingMock = true;

test("should change loading", () => {
  const { result } = renderHook(() => useCollections());
  act(() => {
    result.current.getNewPage();
  });

  expect((result.loading = loadingMock)).toBe(true);
});
