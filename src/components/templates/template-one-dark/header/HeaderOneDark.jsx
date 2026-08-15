import NavbarOneDark from "./NavbarOneDark";

const HeaderOneDark = ({ content, page, slug, isDemo = false }) => {
  return <NavbarOneDark content={content} page={page} slug={slug}  isDemo={isDemo}/>;
};

export default HeaderOneDark;
