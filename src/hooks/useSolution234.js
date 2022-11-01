import { useEffect, useMemo, useRef } from "react";

const deps_data_map = new Map();

const hash = (obj) => {
  let hash_value = null;
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      hash_value = "";
      obj.forEach((elem) => {
        hash_value += hash(elem);
      });
    } else {
      hash_value = JSON.stringify(obj.valueOf());
    }
  } else if (typeof obj === "function") {
    hash_value = obj.toLocaleString();
  } else {
    hash_value = obj.toString();
  }
  return hash_value;
};

// React[_props.current?.type || "useLaoutEffect"](() => {
//     _onMountEffect();

//     return () => {
//         const scroll_pos_y = window.scrollY;

//         _onUnmountEffect(scroll_pos_y);
//     };
// }, [_onMountEffect, _onUnmountEffect]);

const useSolution = (cb, deps) => {
  const _cb = useRef(cb);
  const _deps = useMemo(() => {
    return hash(deps);
  }, [deps]);

  _cb.current = cb;

  // useEffect(() => {
  //   console.log("mount");

  //   _cb.current();

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  useEffect(() => {
    console.log(_deps);
    console.log("mount");

    _cb.current && _cb.current();

    return () => {
      console.log("unmount");
    };
  }, [_deps]);
};

export default useSolution;
