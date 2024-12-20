import { type FC, use, useCallback, cache } from "react";
import { useLocation } from "react-router";

// Or use CDN URL
import sodesuCssUrl from "sodesu-comment/dist/sodesu-comment.css?url";
// Or use CDN URL
const sodesuPromise = cache(() =>
  import("sodesu-comment/aio").then((result) => result.default)
)();

const Comments: FC = () => {
  const sodesu = use(sodesuPromise);
  const location = useLocation();
  const divCallbackRef = useCallback(
    (el: HTMLDivElement) => {
      if (!el) return;
      sodesu.init({
        el,
        serverURL: "https://walinejs.comment.lithub.cc",
        path: location.pathname,
      });
      return () => {
        // Clear the comment element when it is unmounted,
        // or use a more complicated expression: "clear the effect caused by the comment component".
        el.innerHTML = "";
      };
    },
    [sodesu, location.pathname]
  );

  return (
    <>
      <link rel="stylesheet" href={sodesuCssUrl} />
      <div ref={divCallbackRef} />
    </>
  );
};

export default Comments;
