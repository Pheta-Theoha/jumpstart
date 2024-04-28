import Link from "next/link";

export const NavBar = () => {
    return(
        <div className="pl-8 pt-2 pb-2 columns-2">
            <div>
                <Link href="/">
                    <span className="text-5xl font-serif mr-10 bg-gradient-to-l from-slate-700 via-white to-slate-700 text-transparent bg-clip-text">JumpStart</span><br/>
                    <span className="text-2xl pl-14 font-mono text-green-400">&lt;Systems&gt;</span>
                </Link>
            </div>
            <div className="text-2xl pt-5 pl-12">
                <Link href="/about" className="mx-3 hover:text-white">About</Link>
                <Link href="/services" className="mx-3 hover:text-white">Services</Link>
                <Link href="/products" className="mx-3 hover:text-white">Products</Link>
                <Link href="/team" className="mx-3  hover:text-white">Team</Link>
                <Link href="/contact" className="mx-3  hover:text-white">Contact</Link>
            </div>
        </div>
    );
}