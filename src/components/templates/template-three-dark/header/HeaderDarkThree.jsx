import NavbarDarkThree from "./NavbarDarkThree";

const HeaderDarkThree = ({ page, slug, content, isDemo = false }) => {
  return <NavbarDarkThree page={page} slug={slug} content={content}  isDemo={isDemo}/>;
};

export default HeaderDarkThree;
