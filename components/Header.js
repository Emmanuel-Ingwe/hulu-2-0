import { HomeIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
    return (
        <header className="">
            <div className="">
                <HeaderItem title='HOME ' Icon={HomeIcon} />
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} alt="img" />
        </header>
    );
};

export default Header;  
