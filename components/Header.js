import Image from "next/image";

const Header = () => {
    return (
        <header className="">
            <h1>This Is Header</h1>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} alt="img" />
        </header>
    );
};

export default Header;
