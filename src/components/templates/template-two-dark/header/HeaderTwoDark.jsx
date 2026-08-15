import NavbarTwoDark from "./NavbarTwoDark";

const HeaderTwoDark = ({ page, slug, content, isDemo = false }) => {
  return <NavbarTwoDark page={page} slug={slug} content={content}  isDemo={isDemo}/>;
};

export default HeaderTwoDark;
