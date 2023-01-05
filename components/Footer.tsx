import footerContent from "@/json/menu.json";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="main-footer px-6 lg:px-0 py-14 pt-16 lg:pt-24 w-full bg-blue-900">
        <div className="container flex-col lg:flex-row mx-auto text-white flex justify-between items-start py-10">
          <div className="column-1 w-full lg:w-1/4">
            <div className="w-32">
              <Logo />
            </div>
            <p className="leading-loose mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              similique molestiae illo quibusdam in saepe animi quidem maiores,
              mollitia facere iusto debitis ipsam praesentium corrupti ut!
              Numquam quam dolores voluptatibus!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-5 lg:grid-cols-3 w-full mt-4 lg:w-3/5">
            {footerContent.footer.map((item) => (
              <div key={item.name}>
                <h5 className="text-xl font-medium">{item.name}</h5>
                <ul key={item.name}>
                  {item.links.map((linkItem) => (
                    <li key={linkItem.name} className="my-2">
                      {linkItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-footer bg-gray-300 h-14 w-full flex items-center">
        <div className="container mx-auto">
          <p className="p-0 m-0 text-center font-bold">
            © 2022, made with ❤️ & <span className="text-2xl mt-4">☕️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
