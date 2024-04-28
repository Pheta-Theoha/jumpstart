import Image from "next/image";
// import image1 from "../../public/image1.jpg"

export default function Contact() {
  return (
    <main>
      <div className="contact-header text-white text-shadow-lg outline-4">
        <h1 className="drop-shadow-[0_3px_3px_rgba(10,10,10,10)] text-6xl pt-40 pl-40">React Out</h1>
      </div>
      <div className="columns-2 pt-10 pb-15 pr-5 pl-10 text-justify">
        <div>
          <div className="pt-5 pb-10">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt hic veritatis debitis quas incidunt fugiat nobis 
              exercitationem soluta repellat minus, saepe eius, ipsam sed error omnis? Quia quidem rem, natus labore impedit, molestias 
              magnam, earum amet officia sed corporis modi quis perspiciatis. Amet perspiciatis, nihil excepturi delectus reprehenderit 
              nisi quisquam saepe laboriosam quidem esse laudantium maiores earum cum eum commodi sequi nostrum perferendis iure sunt tempore, 
              porro sit neque minus! Iusto id repudiandae ducimus nesciunt, deserunt, maiores tempore magni inventore et eum veritatis 
              mollitia asperiores amet sapiente labore excepturi possimus voluptate accusamus sed pariatur corporis nobis itaque illum? Quasi maxime 
              suscipit optio, consequatur corrupti quibusdam sapiente praesentium similique eius doloremque eum. Exercitationem enim consectetur rerum 
              perferendis sapiente maiores, in possimus eius hic voluptates at alias sit assumenda esse quod. Sed iusto praesentium ratione corrupti, 
              facilis commodi officiis voluptatem consectetur sunt, eum atque nam porro amet fuga itaque ipsum pariatur illum?
            </p>
          </div>
          <div className="pl-5 pb-5 rounded-md">
            <Image src="/image1.jpg" width={600} height={600} alt="Picture 1" />
          </div>
        </div>
        <div>
          <div className="pl-5 py-7 rounded-md">
            <Image src="/image2.jpg" width={600} height={600} alt="Picture 1" />
          </div>
          <div>
            <p className="text-lg pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe ex aspernatur tempore veniam facere delectus 
              sequi eius eaque provident. Ipsam earum molestiae id quae qui labore culpa. Est enim pariatur repellendus aperiam id odio, 
              cupiditate reprehenderit, optio, assumenda nam deleniti molestias mollitia natus necessitatibus laboriosam adipisci ipsam 
              aliquid quisquam eum! Accusamus expedita deserunt atque nam, repellat dolorem? Fuga, dolorem tempore nesciunt excepturi ut 
              culpa animi fugit ratione ea nisi sit enim, laudantium natus asperiores, inventore quas. Id, ea rem, eum quibusdam quidem, 
              deserunt expedita quasi dolores labore repellat perspiciatis. Illum officia nulla velit magnam natus aut vero quasi provident.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
