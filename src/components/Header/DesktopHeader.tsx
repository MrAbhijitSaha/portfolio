import { DesktopHeaderPropsType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const DesktopHeader = ({ routes }: DesktopHeaderPropsType) => {
  return (
    <div className="flex justify-between items-center ">
      <Link href={"/"}>
        <Image
          src={"/logo/logowhite.png"}
          alt="logo"
          height={28}
          width={28}
          className="h-7 w-7"
        />
      </Link>
      <div className="space-x-4">
        {routes.map((item) => (
          <Link href={item.routes} key={item.id}>
            {item.Name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopHeader;
