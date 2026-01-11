import { MobileHeaderPropsType } from "@/lib/types";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileHeader = ({ routes }: MobileHeaderPropsType) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href={"/"}>
              <Image
                src={"/logo/logowhite.png"}
                alt="logo"
                height={28}
                width={28}
                className="h-7 w-7"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>

        {routes.map((item) => (
          <SheetClose asChild key={item.id}>
            <Link href={item.routes}>{item.Name}</Link>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
