import footerContent from "@/json/menu.json";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="main-footer py-14 pt-24 w-full bg-blue-900">
        <div className="container mx-auto text-white flex justify-between items-start py-10">
          <div className="column-1 w-1/4">
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
          <div className="grid grid-cols-3 w-3/5">
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
      <div className="bottom-footer bg-gray-300 h-14 w-full"></div>
    </footer>
  );
}
