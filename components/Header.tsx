type Props = {
  active: string;
};

export function Header({ active }: Props) {
  const menus = [
    { name: "Docs", href: "/docs", external: false },
    { name: "X(Twitter)", href: "https://twitter.com/0xbuymeacrypto", external: true },
    { name: "Github", href: "https://github.com/aiinkiestism/buy-me-a-crypto", external: true },
  ];

  return (
    <div class="w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold text-white">
          <a href="/" class="hover:text-blue-400 hover:font-bold flex items-center">
            <img src="/bagle-nobg.png" alt="buy me a crypto logo" class="w-12" />
            <p class="my-0 mx-0 ml-2">buy me a crypto</p>
          </a>
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            {menu.external
            ? (
              <a
                href={menu.href}
                target="_blank"
                rel="noopener"
                class={"text-white hover:text-blue-400 hover:font-bold py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            ) : (
              <a
                href={menu.href}
                class={"text-white hover:text-blue-400 hover:font-bold py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            )
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
