import { CheckBadgeIcon, BoltIcon, RectangleStackIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className="">
            <div className="">
                <HeaderItem title='HOME ' Icon={HomeIcon} />
                <HeaderItem title='TRENDING ' Icon={BoltIcon} />
                <HeaderItem title='VERIFIED ' Icon={CheckBadgeIcon} />
                <HeaderItem title='COLLECTIONS ' Icon={RectangleStackIcon} />
                <HeaderItem title=' SEARCH' Icon={MagnifyingGlassIcon} />
                <HeaderItem title=' ACCOUNT' Icon={UserIcon} />
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} alt="img" />
        </header>
    );
};

export default Header;  
