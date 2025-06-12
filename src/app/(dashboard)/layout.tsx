import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidedbar } from "@/modules/dashboard/ui/components/dashboard-sidebar";


interface Props{
    children:React.ReactNode;
}


const Layout = ({children}: Props) => {
    return (
        <SidebarProvider>
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardSidedbar/>
                {children}
            </main>
        </SidebarProvider>
    );
}


export default Layout