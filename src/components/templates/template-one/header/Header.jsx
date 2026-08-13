import Navbar from "./Navbar";

const HeaderOne = ({ content, slug, page }) => {
    return (
            <>
              <Navbar content={content} slug={slug} page={page} />
            </>
    );
};

export default HeaderOne;
