import banner from "../assets/pythondeskbanner.jpg";
import banner2 from "../assets/pythonmobilebanner.jpg";

export default function Banner() {
  return (
    <div>
      <img src={banner} alt="dbanner" className="hidden sm:block" />
      <img
        src={banner2}
        alt="mbanner"
        className="block sm:hidden w-full h-auto"
      />
    </div>
  );
}
