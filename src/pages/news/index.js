import { Button } from "antd";
import Link from "next/link";
import RootLayout from "../../components/RootLayout";

const NewsPage = () => {
    return (
        <div>
            <h1>News Home Page</h1>
            <Button type="primary">
                <Link href='/'>Back to Home</Link>
            </Button>
        </div>
    );
};

export default NewsPage;

NewsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}