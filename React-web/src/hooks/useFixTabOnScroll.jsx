import { useEffect, useRef } from "react";

export const useFixTabOnScroll = (
  tabWrapRef,
  { headerSelector = "header" } = {}
) => {
  const placeholderRef = useRef(null);

  useEffect(() => {
    const tabWrap = tabWrapRef.current;
    const header = document.querySelector(headerSelector);

    if (!tabWrap || !header) return;

    const headerHeight = header.offsetHeight;
    const tabOffsetTop =
      tabWrap.getBoundingClientRect().top + window.scrollY;

    // 레이아웃 유지용 placeholder 생성
    const placeholder = document.createElement("div");
    placeholder.style.height = `${tabWrap.offsetHeight}px`;
    placeholder.style.display = "none";

    tabWrap.parentNode?.insertBefore(placeholder, tabWrap);
    placeholderRef.current = placeholder;

    const onScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY + headerHeight >= tabOffsetTop) {
        if (!tabWrap.classList.contains("is-fixed")) {
          tabWrap.classList.add("is-fixed");
          tabWrap.style.top = `${headerHeight}px`;
          placeholder.style.display = "block";
        }
      } else {
        if (tabWrap.classList.contains("is-fixed")) {
          tabWrap.classList.remove("is-fixed");
          tabWrap.style.top = "";
          placeholder.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      placeholder.remove();
      tabWrap.classList.remove("is-fixed");
      tabWrap.style.top = "";
    };
  }, [tabWrapRef, headerSelector]);
};
