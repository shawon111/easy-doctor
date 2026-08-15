import NavbarTwo from './NavbarTwo';

const HeaderTwo = ({ content, slug, page, isDemo = false }) => {
    return (
        <>
            <NavbarTwo content={content} slug={slug} page={page}  isDemo={isDemo}/>
        </>
    );
};

export default HeaderTwo;
