import Sidebar from '@/components/client/Sidebar';

export default function TareasLayout({ children }) {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
}