import Sidebar from '@/components/client/Sidebar';

export default function DocumentacionLayout({ children }) {
    return (
        <Sidebar>
            {children}
        </Sidebar>
    );
}