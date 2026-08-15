import NavbarThree from "./NavbarThree";

const HeaderThree = ({ page, slug, content, isDemo = false }) => {
  return <NavbarThree page={page} slug={slug} content={content}  isDemo={isDemo}/>;
};

export default HeaderThree;
