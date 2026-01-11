import { HeaderRouteOptionsType } from "@/lib/types";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

type MobileAndDesktopHeaderSwitchProps = {
  routes: HeaderRouteOptionsType[];
};

const MobileAndDesktopHeaderSwitch = ({
  routes,
}: MobileAndDesktopHeaderSwitchProps) => {
  return (
    <>
      <div className="block md:hidden">
        <MobileHeader routes={routes} />
      </div>
      <div className="hidden md:block">
        <DesktopHeader routes={routes} />
      </div>
    </>
  );
};

export default MobileAndDesktopHeaderSwitch;
