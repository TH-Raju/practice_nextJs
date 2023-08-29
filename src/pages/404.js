import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push('/')
    }, 5000)
    return (
        <div>
            <img src="https://img.lovepik.com/free-png/20210918/lovepik-404-page-error-png-image_400217866_wh1200.png" alt="error"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default ErrorPage;