import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Home page</h1>
        </div>
    );
};

export default Dashboard;


Dashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}