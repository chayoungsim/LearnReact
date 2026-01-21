import { useDevice } from "../../hooks/useDevice";

import SlidePc from "./SlidePc";
import SlideMo from "./SlideMo";

export const SlideResponsive = () => {
  const { isMobile } = useDevice();
  return (
    <>
      {isMobile ? <SlideMo /> : <SlidePc />}
    </>
  )
}

export default SlideResponsive