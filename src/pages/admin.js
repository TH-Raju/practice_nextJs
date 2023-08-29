import DashboardLayout from "../components/DashboardLayout";
import RootLayout from "../components/RootLayout";

const AdminPage = () => {
    return (
        <div>
            <h1>This is Admin Page</h1>
        </div>
    );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}