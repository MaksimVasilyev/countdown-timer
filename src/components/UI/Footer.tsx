import FacebookIcon from "@/icons/FacebookIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import PinterestIcon from "@/icons/PinterestIcon";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center  gap-8 lg:gap-14 w-full h-[168px] lg:[h-188px] bg-[url('/images/pattern-hills.svg')] bg-cover bg-no-repeat pt-24 pb-12 lg:pt-[100px] lg:pb-[141px] text-[#8385A9]">
        <FacebookIcon className="hover:text-soft_red transition duration-300" />
        <PinterestIcon className="hover:text-soft_red transition duration-300" />
        <InstagramIcon  className="hover:text-soft_red transition duration-300"/>
      </div>
    </footer>
  );
};

export default Footer;
