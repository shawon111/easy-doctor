import Navbar from "./Navbar";

const HeaderOne = ({ content, slug, page, isDemo = false }) => {
    return (
            <>
              <Navbar content={content} slug={slug} page={page}  isDemo={isDemo} />
            </>
    );
};

export default HeaderOne;
