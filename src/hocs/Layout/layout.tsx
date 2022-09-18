import { Navigation } from '../../components';

const withLayout =
    <P extends object>(Component: React.FC<P>): React.FC<P> =>
        props => {
            return (
                <>
                    <main className='h-screen w-screen'>
                        <Navigation />
                        <Component {...props} />
                    </main>
                </>
            );
        };

export default withLayout;