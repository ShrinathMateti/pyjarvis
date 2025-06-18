import banner from '../assets/pythondeskbanner.jpg';

export default function Banner() {
  return (
    <div>
      <img
        src={banner}
        alt="dbanner"
        className="hidden sm:block"
      />
      <img
        src="/src/assets/pythonmobilebanner.jpg"
        alt="mbanner"
        className="block sm:hidden w-full h-auto"
      />
    </div>
  );
}
