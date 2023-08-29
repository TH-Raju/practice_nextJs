import Image from "next/image";

const Album = () => {
    return (
        <div>
            <h1>This image using img tag</h1>
            <img src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png" alt="" width="100%" />
            <h1>This image using Image component</h1>
            <Image src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png" alt="" width={500} height={500} layout="responsive"></Image>
        </div>
    );
};

export default Album;